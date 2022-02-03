import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrganizationService } from '~/database/entities';
import CreateOrganizationDto from '~/dtos/create-organization.dto';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';
import OrganizationDto from '~/dtos/organization.dto';

@Controller('organization')
@UseGuards(JwtAuthGuard)
@ApiTags('Organization')
class OrganizationController {
  constructor(private organizationServices: OrganizationService) {}

  @Get()
  @ApiOperation({ summary: 'List all organizations' })
  async GetAll() {
    const organizations = await this.organizationServices.findAll();
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
  async findById(@Param('id') id: string, @Res() res: Response) {
    const organization = await this.organizationServices.findById(id);
    if (organization) return res.json(organization);
    return res.status(HttpStatus.NOT_FOUND);
  }

  @Post()
  @ApiOperation({ summary: 'Create an organization' })
  @ApiResponse({
    status: 201,
    description: 'The organization has been successfully created.',
  })
  create(@Body() body: CreateOrganizationDto) {
    return this.organizationServices.create(body);
  }
}

export default OrganizationController;
