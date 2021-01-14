"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const common_routes_1 = require("../routes/common_routes");
class App {
    constructor() {
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.setupRoutes();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    setupRoutes() {
        this.common_routes.route(this.app);
    }
}
exports.default = new App().app;
