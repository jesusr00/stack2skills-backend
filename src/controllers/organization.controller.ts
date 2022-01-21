import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrganizationService } from "~/database/entities";
import Organization from "~/database/entities/organization/organization.entity";

@Controller('organization')
class OrganizationController{

constructor(private organizationServices: OrganizationService) {}

    @Get()
    GetAll() : Promise<Organization[]> {
        return this.organizationServices.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: string): Promise<Organization>{
        return this.organizationServices.findbyId(id);
    }

    @Post()
    create(@Body() body) : Promise<Organization>{
        let newRepository = body;
        return this.organizationServices.create(newRepository);
    }
}

export default OrganizationController;