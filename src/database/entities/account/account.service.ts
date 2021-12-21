import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ACCOUNTS_REPOSITORY } from './account.provider';
import Account from './account.entity';
import { AccountDTO } from '~/database/dto/account.dto';

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

  async findOne(email: string): Promise<Account | undefined> {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async delete(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  /**
   *
   * @param newAccount New account details
   * @returns A promise returned by the user
   */
  async create(newAccount: AccountDTO): Promise<Account> {
    return this.repository.create(newAccount);
  }
}

export default AccountService;
