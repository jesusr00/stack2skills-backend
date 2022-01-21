import { Connection, Repository } from 'typeorm';
import Organization from './organization.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const ORGANIZATIONS_REPOSITORY = 'ORGANIZATIONS_REPOSITORY';

export const OrganizationProvider = [
  {
    provide: ORGANIZATIONS_REPOSITORY,
    useFactory: (connection: Connection): Repository<Organization> =>
      connection.getRepository(Organization),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
