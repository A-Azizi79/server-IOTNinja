import {Application} from "express";

export interface RouteHandler {
    setup(app:Application) : void
}