import {Socket, Server as IOServer, Server} from "socket.io";
import {Connection} from "./utils/connection";
import {ConnectionLoader} from "./utils/connection_rules";


export class TcpConnection implements ConnectionLoader<IOServer> {
    load(server: Server, connection: Connection): void {
        server.on(
            "connection",
            (cli) => {
                connection.onConnection(cli.id);

                cli.on("authenticate", () => {
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