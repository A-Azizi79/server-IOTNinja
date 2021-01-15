import {Application, request, response} from "express";
import {RouteHandler} from "./route_handler";

export class CommonRoutes implements RouteHandler {
    public setup(app: Application) {
        app.all('*', function (req, res) {
            res.status(404).send({
                error: true,
                message: "Url not found!"
            })
        })
    }
}