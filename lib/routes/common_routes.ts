import {Application, request, response} from "express";

export class CommonRoutes {
    public route(app :Application){
        app.all('*', function (req, res){
            res.status(404).send({
                error : true,
                message : "Url not found!"
            })
        })
    }
}