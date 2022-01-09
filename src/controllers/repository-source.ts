import { Controller, Get } from "@nestjs/common";
import { RepositorySourceService } from "~/database/entities/repository-source";

@Controller()
class RepositorySourceController {

constructor(private repositorySourceService: RepositorySourceService) {}

    @Get()
    all() {
        return "";
    }
}

export default RepositorySourceController;