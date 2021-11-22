import { Injectable } from "@nestjs/common";
import { Config} from "./config.class";

@Injectable()
export class AppConfig{
    NODE_ENV = process.env.NODE_ENV;
    GOOGLE_SECRET = process.env.GOOGLE_SECRET;
    GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    URL = process.env.URL;
}


    
