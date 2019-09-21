import { RPCSuccess, RPCResponse, RPCError, RPCRequest } from 'jsonrpc-codegen/dist/RPC'
import { PositClient as PC, STARTING_ID, MethodNames, SendRPCParam, SendRPCType, ReservedIdEvents, RESERVED_ID_EVENTS, RESERVED_IDS } from 'posit-core'
type MAP = {
	[key: number]: {
		res: (res: any) => void,
		rej: (rej: any) => void
	}
}
export class WSClient implements PC {
	lastId = STARTING_ID
	resMap: MAP = Object.create(null)
	socket: WebSocket
	PAGE_SIZE: number
	login (tokens: string[], serverUrl = ':2468') {
		if(serverUrl.startsWith(':')) {
			serverUrl = serverUrl.substr(1)
		}
		if(!isNaN(parseInt(serverUrl))) {
			serverUrl = window.location.hostname+':'+serverUrl
		}
		const signinUrl = `ws://${serverUrl}`
		tokens = tokens.map(encodeURIComponent)
		this.socket = new WebSocket(signinUrl, tokens)
		console.log(this.socket)
		this.bindWebSocket()
	}
	sendRpc<K extends MethodNames>(methodName: K, params: SendRPCParam<K>, id?: number | undefined): SendRPCType<K> {
		return new Promise((res, rej) => {
			const newId = !!id ? id : this.lastId++
			const rpc = new RPCRequest(methodName, params, newId)
			this.resMap[newId] = {res, rej}
			this.socket.send(JSON.stringify(rpc))
		})	
	}
	setListener<K extends ReservedIdEvents>(eventType: K, listener: (res: RESERVED_ID_EVENTS[K]) => void): void {
		const eventId = RESERVED_IDS.indexOf(eventType)
		if(eventId < 0) {
			throw new Error(`Event ${eventType} is not a reserved event`)
		}
		this.resMap[eventId] = {res: listener, rej: this.onError}
	}
	onError: (err: RPCError['error']) => void;
	bindWebSocket() {
		this.socket.addEventListener('message', (evt) => {
			const response: RPCError & RPCSuccess<any> = JSON.parse(evt.data)
			if(response.id != null) {
				const resMethods = this.resMap[response.id as number]
				if(!resMethods) {
					console.warn(`For some reason there is no handler registered for response id ${response.id}\n${JSON.stringify(response)}`)
					return
				}
				if(response.id >= STARTING_ID) {
					delete this.resMap[response.id as number]
				}
				if(!!response.error) {
					resMethods.rej(response.error)
				}
				else if(!!response.result) {
					resMethods.res(response.result)
				}
			}
			else {
				console.error(JSON.stringify(response))
				this.onError(response.error)
			}
		})
	}
}
export const PositClient = new WSClient()