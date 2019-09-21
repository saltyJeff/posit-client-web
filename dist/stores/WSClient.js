"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RPC_1 = require("jsonrpc-codegen/dist/RPC");
const posit_core_1 = require("posit-core");
class WSClient {
    constructor() {
        this.lastId = posit_core_1.STARTING_ID;
        this.resMap = Object.create(null);
    }
    login(tokens, serverUrl = ':2468') {
        if (serverUrl.startsWith(':')) {
            serverUrl = serverUrl.substr(1);
        }
        if (!isNaN(parseInt(serverUrl))) {
            serverUrl = window.location.hostname + ':' + serverUrl;
        }
        const signinUrl = `ws://${serverUrl}`;
        tokens = tokens.map(encodeURIComponent);
        this.socket = new WebSocket(signinUrl, tokens);
        console.log(this.socket);
        this.bindWebSocket();
    }
    sendRpc(methodName, params, id) {
        return new Promise((res, rej) => {
            const newId = !!id ? id : this.lastId++;
            const rpc = new RPC_1.RPCRequest(methodName, params, newId);
            this.resMap[newId] = { res, rej };
            this.socket.send(JSON.stringify(rpc));
        });
    }
    setListener(eventType, listener) {
        const eventId = posit_core_1.RESERVED_IDS.indexOf(eventType);
        if (eventId < 0) {
            throw new Error(`Event ${eventType} is not a reserved event`);
        }
        this.resMap[eventId] = { res: listener, rej: this.onError };
    }
    bindWebSocket() {
        this.socket.addEventListener('message', (evt) => {
            const response = JSON.parse(evt.data);
            if (response.id != null) {
                const resMethods = this.resMap[response.id];
                if (!resMethods) {
                    console.warn(`For some reason there is no handler registered for response id ${response.id}\n${JSON.stringify(response)}`);
                    return;
                }
                if (response.id >= posit_core_1.STARTING_ID) {
                    delete this.resMap[response.id];
                }
                if (!!response.error) {
                    resMethods.rej(response.error);
                }
                else if (!!response.result) {
                    resMethods.res(response.result);
                }
            }
            else {
                console.error(JSON.stringify(response));
                this.onError(response.error);
            }
        });
    }
}
exports.WSClient = WSClient;
exports.PositClient = new WSClient();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV1NDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RvcmVzL1dTQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQXdGO0FBQ3hGLDJDQUF1SjtBQU92SixNQUFhLFFBQVE7SUFBckI7UUFDQyxXQUFNLEdBQUcsd0JBQVcsQ0FBQTtRQUNwQixXQUFNLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQXlEbEMsQ0FBQztJQXREQSxLQUFLLENBQUUsTUFBZ0IsRUFBRSxTQUFTLEdBQUcsT0FBTztRQUMzQyxJQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDL0I7UUFDRCxJQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO1lBQy9CLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBQyxHQUFHLEdBQUMsU0FBUyxDQUFBO1NBQ2xEO1FBQ0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxTQUFTLEVBQUUsQ0FBQTtRQUNyQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBQ0QsT0FBTyxDQUF3QixVQUFhLEVBQUUsTUFBdUIsRUFBRSxFQUF1QjtRQUM3RixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9CLE1BQU0sS0FBSyxHQUFHLENB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