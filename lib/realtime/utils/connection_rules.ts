import {Connection} from "./connection";

export interface ConnectionLoader<T> {
    load(server: T, connection: Connection): void
}