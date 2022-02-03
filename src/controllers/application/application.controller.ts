import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationEntity, ApplicationService } from '~/database/entities';

@Controller('application')
@ApiTags('Application')
class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @Get()
  GetAll(): Promise<ApplicationEntity[]> {
    return this.applicationService.findAll();
  }
}

export default ApplicationController;
