import { Connection, Repository } from 'typeorm';
import Account from './account.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const ACCOUNTS_REPOSITORY = 'ACCOUNTS_REPOSITORY';

export const AccountProvider = [
  {
    provide: ACCOUNTS_REPOSITORY,
    useFactory: (connection: Connection): Repository<Account> =>
      connection.getRepository(Account),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
