import * as express from "express";
import * as bodyParser from "body-parser";
import {CommonRoutes} from "../routes/common_routes";
import * as devices from "../routes/devices_route";
import * as http from "http";
import {Socket, Server as IOServer} from "socket.io";

class App {
    public app: express.Application;
    public httpServer: http.Server;
    public socketServer: IOServer;
    private router: express.Router;

    private common_routes: CommonRoutes

    constructor() {
        this.common_routes = new CommonRoutes()
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.socketServer = new IOServer(this.httpServer);
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
        this.router.use(devices.baseUrl, devices.router);
        this.common_routes.setup(this.app);
    }
}

export default new App().app;