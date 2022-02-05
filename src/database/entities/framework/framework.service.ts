import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FRAMEWORK_REPOSITORY } from './framework.provider';
import Framework from './framework.entity';
import CreateFrameworkDto from '~/dtos/create-framework.dto';

@Injectable()
class FrameworkService {
  constructor(
    @Inject(FRAMEWORK_REPOSITORY)
    private repository: Repository<Framework>,
  ) {}

  async findAll(): Promise<Framework[]> {
    return await this.repository.find();
  }

  findById(id: string): Promise<Framework | undefined> {
    return this.repository.findOne({ where: { id } });
  }

  //async delete(): Promise<boolean> {}

  async create(newRepoDTO: CreateFrameworkDto): Promise<Framework> {
    return await this.repository.save(newRepoDTO);
  }
}

export default FrameworkService;
