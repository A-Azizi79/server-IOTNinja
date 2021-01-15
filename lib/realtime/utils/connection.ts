export interface Connection {
    onConnection(id: String): void

    onDisconnect(): void

    authentication(token : String): Boolean
}


