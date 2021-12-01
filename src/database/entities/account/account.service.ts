import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ACCOUNTS_REPOSITORY } from './account.provider';
import Account from './account.entity';

@Injectable()
class AccountService {
  constructor(
    @Inject(ACCOUNTS_REPOSITORY)
    private repository: Repository<Account>,
  ) {}

  findAll(): Promise<Account[]> {
    return this.repository.find();
  }

  async findOne(): Promise<Account | undefined> {
    throw new Error('Method not implemented.');
  }

  async delete(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async create(): Promise<Account> {
    throw new Error('Method not implemented.');
  }
}

export default AccountService;
