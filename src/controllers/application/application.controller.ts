import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import {
  ApplicationEntity,
  ApplicationService,
  FrameworkService,
  OrganizationService,
  ProjectService,
} from '~/database/entities';
import CreateApplicationDto from '~/dtos/create-application.dto';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';

@Controller('application')
@UseGuards(JwtAuthGuard)
@ApiTags('Application')
class ApplicationController {
  constructor(
    private applicationService: ApplicationService,
    private organizationService: OrganizationService,
    private frameworkService: FrameworkService,
    private projectService: ProjectService,
  ) {}

  @Get()
  async GetAll(
    @Query('organization') organization: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user: any = req.user;
    const organizationEntity = await this.organizationService.findById(
      organization,
      user.id,
    );

    if (!organizationEntity) {
      return res.json({
        message: 'Organization not found',
      });
    }

    var allProjects = await this.projectService.findAllByOrganization(
      organization,
    );
    var result = [];
    for (const project of allProjects) {
      const entity = await this.projectService.findById(project.id, [
        'applications',
      ]);
      result.push({
        id: project.id,
        name: project.name,
        applications: entity.applications,
      });
    }

    return res.json(result);
  }

  @Post()
  async Create(
    @Body() body: CreateApplicationDto,
    @Query('organization') organization: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user: any = req.user;
    const organizationEntity = await this.organizationService.findById(
      organization,
      user.id,
    );

    if (!organizationEntity) {
      return res.json({
        message: 'Organization not found',
      });
    }

    const framework = await this.frameworkService.findById(body.framework);
    if (!framework) {
      return res.json({
        message: 'Framework not found',
      });
    }

    const project = await this.projectService.findById(body.project);
    if (!project) {
      return res.json({
        message: 'Project not found',
      });
    }

    if (!project) {
      return res.json({
        message: 'Repository source not found',
      });
    }

    var obj = new ApplicationEntity();
    obj.name = body.name;
    obj.description = body.description;
    obj.repoUrl = body.repoUrl;
    obj.framework = framework;
    obj.project = project;

    const respose = await this.applicationService.create(obj);
    return res.json(respose);
  }
}

export default ApplicationController;
