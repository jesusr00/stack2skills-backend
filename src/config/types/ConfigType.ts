export type ConfigType = {
  app: AppConfig;
  http: HttpConfig;
  auth: AuthConfig;
};

export type AppConfig = {
  /**
   * Environment
   */
  env: 'production' | 'development' | 'staging';
  url: string;
  frontend: string;
};

export type HttpConfig = {
  port: number;
  host: string;
};

export type AuthConfig = {
  google: {
    clientId: string;
    secret: string;
  };
  microsoft: null;
  jwt: {
    secret: string;
    expiresIn: string;
  };
};

export type DatabaseConfig = {
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
};
export default ConfigType;
