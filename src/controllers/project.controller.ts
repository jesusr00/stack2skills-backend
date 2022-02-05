import {
  Body,
  Controller,
  Get,
  HttpStatus,
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
  OrganizationService,
  ProjectEntity,
  ProjectService,
} from '~/database/entities';
import CreateProjectDto from '~/dtos/create-project.dto';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';

@Controller('project')
@UseGuards(JwtAuthGuard)
@ApiTags('Project')
class ProjectController {
  constructor(
    private organizationService: OrganizationService,
    private projectService: ProjectService,
  ) {}

  @Get()
  async GetAll(
    @Req() req: Request,
    @Res() res: Response,
    @Query('organization') organization: string,
  ) {
    const user: any = req.user;
    var organizationEntity = await this.organizationService.findById(
      organization,
      user.id,
    );
    if (!organizationEntity) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        message: 'Organization not found',
      });
    }

    var projects = await this.projectService.findAllByOrganization(
      organization,
    );
    return res.json(projects);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.projectService.findById(id);
  }

  @Post()
  async create(
    @Body() body: CreateProjectDto,
    @Query('organization') organization: string,
    @Req() req: Request,
  ) {
    const user: any = req.user;
    const organizationEntity = await this.organizationService.findById(
      organization,
      user.id,
    );

    const newProject = new ProjectEntity();
    newProject.name = body.name;
    newProject.description = body.description;
    newProject.organization = organizationEntity;

    return this.projectService.create(newProject);
  }
}

export default ProjectController;
