import { Injectable } from "@nestjs/common";
import { Connection, createConnection } from "typeorm";
import { OrmConfig } from "~/config/orm.config";

@Injectable()
export class DatabaseService{
    private connection;
    constructor(private ormConfig: OrmConfig){
        this.connection = this.startConection()
    }

    private async startConection (): Promise<Connection> {
        return createConnection(this.ormConfig.config)
    }

    public get Connection() : Connection {
        return this.connection;
    }
    
    
}