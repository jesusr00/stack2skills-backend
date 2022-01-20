import { Connection, createConnection } from 'typeorm';
import { AppConfigService } from '~/config';

export const DEFAULT_DATABASE_PROVIDER = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: DEFAULT_DATABASE_PROVIDER,
    inject: [AppConfigService],
    useFactory: async (configService: AppConfigService): Promise<Connection> =>
      await createConnection({
        type: configService.database.type,
        host: configService.database.host,
        username: configService.database.username,
        password: configService.database.password,
        database: configService.database.database,
        synchronize: true /*configService.isDevelopment()*/,
        entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
      }),
  },
];

export default databaseProviders;
