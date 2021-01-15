import {ConnectionLoader} from "./utils/connection_rules";
import {Connection} from "./utils/connection";
import {Server} from "mosca"
import * as keys from "./utils/keywords";

export class MqttConnection implements ConnectionLoader<Server> {
    load(server: Server, connection: Connection): void {
        server.on('clientConnected', (packet, client) => {
            connection.onConnection(client.id);
        });

        server.on('published', (packet, client) => {
            switch (packet.topic) {
                case keys.AUTHENTICATION:
                    connection.authentication(packet.payload.toString());
                    break;
            }
        });

    }
}