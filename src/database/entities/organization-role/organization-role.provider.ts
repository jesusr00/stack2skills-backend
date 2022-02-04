import { Connection, Repository } from 'typeorm';
import Organization from './organization-role.entity';
import { DEFAULT_DATABASE_PROVIDER } from '../../database.provider';

export const ORGANIZATIONS_ROLE_REPOSITORY = 'ORGANIZATIONS_ROLE_REPOSITORY';

export const OrganizationProvider = [
  {
    provide: ORGANIZATIONS_ROLE_REPOSITORY,
    useFactory: (connection: Connection): Repository<Organization> =>
      connection.getRepository(Organization),
    inject: [DEFAULT_DATABASE_PROVIDER],
  },
];
