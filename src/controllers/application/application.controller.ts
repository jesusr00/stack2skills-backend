import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationEntity, ApplicationService } from '~/database/entities';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';

@Controller('application')
@UseGuards(JwtAuthGuard)
@ApiTags('Application')
class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @Get()
  GetAll(): Promise<ApplicationEntity[]> {
    return this.applicationService.findAll();
  }
}

export default ApplicationController;
