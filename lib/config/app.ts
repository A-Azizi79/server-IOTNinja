import * as express from "express";
import * as bodyParser from "body-parser";
import {CommonRoutes} from "../routes/common_routes";

class App {
    public app: express.Application;

    private common_routes: CommonRoutes

    constructor() {
        this.common_routes = new CommonRoutes()
        this.app = express();
        this.config();
        this.setupRoutes();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private setupRoutes(): void {
        this.common_routes.route(this.app);
    }
}

export default new App().app;