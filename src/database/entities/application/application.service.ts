import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { APPLICATIONS_REPOSITORY } from './application.provider';
import Application from './application.entity';
import CreateApplicationDto from '~/dtos/create-application.dto';

@Injectable()
class AccountService {
  constructor(
    @Inject(APPLICATIONS_REPOSITORY)
    private repository: Repository<Application>,
  ) {}

  /**
   *
   * @returns All accounts in the database
   */

  findAll(): Promise<Application[]> {
    return this.repository.find();
  }

  /**
   *
   * @param email Email of the user to search
   * @returns A promise returned by the user or undefined
   */

  async existByEmail(email: string): Promise<boolean> {
    return (
      (
        await this.repository.find({
          where: {
            email: email,
          },
        })
      )?.length > 0
    );
  }

  async findOne(email: string): Promise<Application | undefined> {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async delete(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async create(dto: CreateApplicationDto): Promise<Application> {
    const application = this.repository.create(dto);
    return this.repository.save(application);
  }
}

export default AccountService;
