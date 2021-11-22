export type ConfigType = {
  app: AppConfig;
  http: HttpConfig;
  auth: AuthConfig;
};

export type AppConfig = {
  /**
   * Environment
   */
  NODE_ENV: 'production' | 'development' | 'staging';
  url: string;
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
};

export default ConfigType;
