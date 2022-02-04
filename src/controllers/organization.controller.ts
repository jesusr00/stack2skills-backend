import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import {
  AccountService,
  OrganizationRoleEntity,
  OrganizationRoleService,
  OrganizationService,
} from '~/database/entities';
import CreateOrganizationDto from '~/dtos/create-organization.dto';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';
import OrganizationDto from '~/dtos/organization.dto';
import Roles from '~/types/roles';

@Controller('organization')
@UseGuards(JwtAuthGuard)
@ApiTags('Organization')
class OrganizationController {
  constructor(
    private organizationServices: OrganizationService,
    private accountService: AccountService,
    private organizationRoleService: OrganizationRoleService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List all organizations' })
  async GetAll(@Req() req: Request) {
    const user: any = req.user;

    const organizations = await this.organizationServices.findAllByAccountId(
      user.id,
    );

    return organizations.map((org) => {
      const result = new OrganizationDto();
      result.id = org.id;
      result.name = org.name;
      result.description = org.description;
      return result;
    });
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get an organization by id' })
  async findById(
    @Req() req: Request,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const user: any = req.user;

    const organization = await this.organizationServices.findById(id, user.id);
    if (organization) return res.json(organization);
    return res.status(HttpStatus.NOT_FOUND);
  }

  @Post()
  @ApiOperation({ summary: 'Create an organization' })
  @ApiResponse({
    status: 201,
    description: 'The organization has been successfully created.',
  })
  async create(@Req() req: Request, @Body() body: CreateOrganizationDto) {
    const user: any = req.user!;
    const newOrganization = await this.organizationServices.create(body);

    var role = new OrganizationRoleEntity();
    role.accountId = user.id;
    role.name = Roles.OrganizationOwner.toUpperCase();
    await this.organizationRoleService.save(role);

    newOrganization.rolesAssociated = [role];
    await this.organizationServices.save(newOrganization);

    return newOrganization;
  }
}

export default OrganizationController;
