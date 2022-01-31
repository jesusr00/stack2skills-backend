import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { OrganizationService } from '~/database/entities';
import Organization from '~/database/entities/organization/organization.entity';

@Controller('organization')
class OrganizationController {
  constructor(private organizationServices: OrganizationService) {}

  @Get()
  @ApiOperation({ summary: 'List all organizations' })
  GetAll(): Promise<Organization[]> {
    return this.organizationServices.findAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get an organization by id' })
  findById(@Param('id') id: string): Promise<Organization> {
    return this.organizationServices.findbyId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an organization' })
  @ApiResponse({
    status: 201,
    description: 'The organization has been successfully created.',
  })
  create(@Body() body): Promise<Organization> {
    let newRepository = body;
    return this.organizationServices.create(newRepository);
  }
}

export default OrganizationController;
