import {Socket, Server} from "socket.io";
import {Connection} from "./utils/connection";
import {ConnectionLoader} from "./utils/connection_rules";
import * as keys from "./utils/keywords"

export class TcpConnection implements ConnectionLoader<Server> {
    load(server: Server, connection: Connection): void {
        server.on(
            "connection",
            (cli) => {
                connection.onConnection(cli.id);

                cli.on(keys.AUTHENTICATION, () => {
                    connection.authentication("");
                    cli.emit("reply",)
                });

                cli.on("disconnect", () => {
                    connection.onDisconnect()
                });
            }
        )
    }
}