import { Injectable } from "@nestjs/common";
import { Connection, ConnectionOptions } from "typeorm";
import AppConfig from "./app.config";
import { DatabaseConfig } from "./types/ConfigType";

@Injectable()
export class OrmConfig{

    connectionOptions : ConnectionOptions
    constructor(private appConfig:AppConfig){}

      get config() :ConnectionOptions{
        return {
            type : this.appConfig.database.type,
            host : this.appConfig.database.host,
            port : this.appConfig.database.port,
            username : this.appConfig.database.username,
            password : this.appConfig.database.password,
            database : this.appConfig.database.database,
            entities: ["dist/**/*.entity.js"],
            synchronize : true
        }
    }
}

