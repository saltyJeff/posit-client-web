import { RPCError } from 'jsonrpc-codegen/dist/RPC';
import { PositClient as PC, MethodNames, SendRPCParam, SendRPCType, ReservedIdEvents, RESERVED_ID_EVENTS } from 'posit-core';
declare type MAP = {
    [key: number]: {
        res: (res: any) => void;
        rej: (rej: any) => void;
    };
};
export declare class WSClient implements PC {
    lastId: 2;
    resMap: MAP;
    socket: WebSocket;
    PAGE_SIZE: number;
    login(tokens: string[], serverUrl?: string): void;
    sendRpc<K extends MethodNames>(methodName: K, params: SendRPCParam<K>, id?: number | undefined): SendRPCType<K>;
    setListener<K extends ReservedIdEvents>(eventType: K, listener: (res: RESERVED_ID_EVENTS[K]) => void): void;
    onError: (err: RPCError['error']) => void;
    bindWebSocket(): void;
}
export declare const PositClient: WSClient;
export {};
