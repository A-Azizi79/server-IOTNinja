import {ConnectionLoader} from "./utils/connection_rules";
import {Connection} from "./utils/connection";
import {Client, Server} from "mosca"
import * as keys from "./utils/keywords";

export class MqttConnection implements ConnectionLoader<Server> {
    load(server: Server, connection: Connection): void {
        server.on('clientConnected', (packet, client) => {
            connection.onConnection(client.id);
        });

        server.on('published', (packet, client) => {
            switch (packet.topic) {
                case keys.AUTHENTICATION:
                    const isValidCli = connection.authentication(packet.payload.toString());
                    this.kickUserIfNotValid(client, isValidCli);
                    break;
            }
        });

    }

    kickUserIfNotValid(client: Client, isValid: Boolean): void {
        if (!isValid) {
            client.close(() => {

            });
        }
    }

}


