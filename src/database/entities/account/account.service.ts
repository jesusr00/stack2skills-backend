import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ACCOUNTS_REPOSITORY } from './account.provider';
import Account from './account.entity';
import CreateAccountDto from '~/dtos/create-account.dto';

@Injectable()
class AccountService {
  constructor(
    @Inject(ACCOUNTS_REPOSITORY)
    private repository: Repository<Account>,
  ) {}

  /**
   *
   * @returns All accounts in the database
   */

  findAll(): Promise<Account[]> {
    return this.repository.find();
  }

  findById(id: string) {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
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

  async findByEmail(email: string): Promise<Account | undefined> {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async delete(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async create(newAccount: CreateAccountDto): Promise<Account> {
    const account = this.repository.create(newAccount);
    return this.repository.save(account);
  }
}

export default AccountService;
