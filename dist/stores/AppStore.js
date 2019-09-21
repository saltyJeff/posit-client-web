"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const WSClient_1 = require("./WSClient");
const antd_1 = require("antd");
const GroupStore_1 = require("./GroupStore");
const PostStore_1 = require("./PostStore");
class AppStore {
    constructor() {
        this.loggedIn = false;
        this.initialized = false;
        this.pageSize = 10;
        this.onLogin = () => __awaiter(this, void 0, void 0, function* () {
            this.loggedIn = true;
            console.log('logged in');
            yield GroupStore_1.groupStore.changePage(0);
            if (GroupStore_1.groupStore.page.length > 0) {
                GroupStore_1.groupStore.setGroup(GroupStore_1.groupStore.page[0]);
            }
        });
        this.onLogout = () => __awaiter(this, void 0, void 0, function* () {
            this.loggedIn = false;
            console.log('logged out');
        });
        this.onGroupMutate = (groupMutate) => __awaiter(this, void 0, void 0, function* () {
            const newGroupRpc = yield WSClient_1.PositClient.sendRpc('getGroup', {
                id: groupMutate.id
            });
            // handle error when your notification is group delete
            const newGroup = newGroupRpc.group;
            if (!newGroup) {
                console.error('Expected to find a new group but upon inspection none were found. Ignoring');
                return;
            }
            if (groupMutate.id == GroupStore_1.groupStore.group.id) {
                GroupStore_1.groupStore.group = newGroup;
            }
            else {
                const key = Date.now() + '';
                antd_1.notification.info({
                    duration: 0,
                    key: key,
                    message: `${newGroup.name} (${groupMutate.action})`,
                    description: `${groupMutate.user} has ${groupMutate.action} in group ${newGroup.name} with\n${newGroup.users.map((u) => u.name).toString()}`,
                    onClick: () => {
                        GroupStore_1.groupStore.setGroup(newGroup);
                        antd_1.notification.close(key);
                    }
                });
            }
        });
        this.onPostMutate = (postMutate) => __awaiter(this, void 0, void 0, function* () {
            if (postMutate.group == GroupStore_1.groupStore.group.id) {
                const searchTokens = GroupStore_1.groupStore.searchTokens;
                if (!!postMutate.tags) {
                    const tags = postMutate.tags;
                    if (GroupStore_1.groupStore.searchOp == 'AND' && searchTokens.every((t) => tags.includes(t))) {
                        PostStore_1.postStore.reloadPage();
                    }
                    else {
                        if (searchTokens.some((t) => tags.includes(t))) {
                            PostStore_1.postStore.reloadPage();
                        }
                        else if (GroupStore_1.groupStore.viewMode == 'FILE' && searchTokens.some((t) => tags.some((t2) => t2.startsWith(t)))) {
                            PostStore_1.postStore.reloadPage();
                        }
                    }
                }
            }
        });
    }
    login(tokens, url, username) {
        this.username = username || 'idk what your name is';
        try {
            WSClient_1.PositClient.login(tokens, url);
            const socket = WSClient_1.PositClient.socket;
            socket.addEventListener('open', this.onLogin);
            socket.addEventListener('close', this.onLogout);
            WSClient_1.PositClient.setListener(0, this.onGroupMutate);
            WSClient_1.PositClient.setListener(1, this.onPostMutate);
            WSClient_1.PositClient.onError = (err) => {
                antd_1.notification.error({
                    message: 'Unexpected error',
                    description: `An issue has occured. Please report error : (${err.code}):\n${err.message}`,
                    duration: 4
                });
            };
        }
        catch (e) {
            console.error('signin issue: ', e);
            this.loggedIn = false;
        }
    }
    signout() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            WSClient_1.PositClient.socket.close();
            window.location.reload();
        });
    }
}
__decorate([
    mobx_1.observable
], AppStore.prototype, "loggedIn", void 0);
__decorate([
    mobx_1.observable
], AppStore.prototype, "initialized", void 0);
__decorate([
    mobx_1.observable
], AppStore.prototype, "username", void 0);
const storeInst = new AppStore();
window.appStore = storeInst;
exports.appStore = storeInst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RvcmVzL0FwcFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBcUY7QUFDckYseUNBQWtEO0FBRWxELCtCQUFvQztBQUNwQyw2Q0FBMEM7QUFFMUMsMkNBQXdDO0FBR3hDLE1BQU0sUUFBUTtJQUFkO1FBQ2EsYUFBUSxHQUFZLEtBQUssQ0FBQTtRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQTtRQUUvQixhQUFRLEdBQVcsRUFBRSxDQUFBO1FBd0JyQixZQUFPLEdBQUcsR0FBUyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEIsTUFBTSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QixJQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLHVCQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDdkM7UUFDRixDQUFDLENBQUEsQ0FBQTtRQUNELGFBQVEsR0FBRyxHQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUEsQ0FBQTtRQUNELGtCQUFhLEdBQUcsQ0FBTyxXQUFtQyxFQUFFLEVBQUU7WUFDN0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxzQkFBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3pELEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTthQUNsQixDQUFDLENBQUE7WUFDRixzREFBc0Q7WUFDdEQsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQTtZQUNsQyxJQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQTtnQkFDM0YsT0FBTTthQUNOO1lBQ0QsSUFBRyxXQUFXLENBQUMsRUFBRSxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDekMsdUJBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO2FBQzNCO2lCQUNJO2dCQUNKLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxFQUFFLENBQUE7Z0JBQ3pCLG1CQUFZLENBQUMsSUFBSSxDQUFDO29CQUNqQixRQUFRLEVBQUUsQ0FBQztvQkFDWCxHQUFHLEVBQUUsR0FBRztvQkFDUixPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEdBQUc7b0JBQ25ELFdBQVcsRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLFFBQVEsV0FBVyxDQUFDLE1BQU0sYUFBYSxRQUFRLENBQUMsSUFBSSxVQUFVLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQzVJLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ2IsdUJBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7d0JBQzdCLG1CQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUN4QixDQUFDO2lCQUNELENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUFBLENBQUE7UUFDRCxpQkFBWSxHQUFHLENBQU8sVUFBaUMsRUFBRSxFQUFFO1lBQzFELElBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLE1BQU0sWUFBWSxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUFBO2dCQUM1QyxJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO29CQUNyQixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFBO29CQUM1QixJQUFHLHVCQUFVLENBQUMsUUFBUSxJQUFJLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQy9FLHFCQUFTLENBQUMsVUFBVSxFQUFFLENBQUE7cUJBQ3RCO3lCQUNJO3dCQUNKLElBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUM5QyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxDQUFBO3lCQUN0Qjs2QkFDSSxJQUFHLHVCQUFVLENBQUMsUUFBUSxJQUFJLE1BQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDdkcscUJBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTt5QkFDdEI7cUJBQ0Q7aUJBQ0Q7YUFDRDtRQUNGLENBQUMsQ0FBQSxDQUFBO0lBUUYsQ0FBQztJQXhGQSxLQUFLLENBQUMsTUFBZ0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksdUJBQXVCLENBQUE7UUFDbkQsSUFBSTtZQUNILHNCQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM5QixNQUFNLE1BQU0sR0FBRyxzQkFBVyxDQUFDLE1BQU0sQ0FBQTtZQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM3QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUUvQyxzQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQzlDLHNCQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDN0Msc0JBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDN0IsbUJBQVksQ0FBQyxLQUFLLENBQUM7b0JBQ2xCLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSxnREFBZ0QsR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUN6RixRQUFRLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUE7WUFDSCxDQUFDLENBQUE7U0FDRDtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtTQUNyQjtJQUNGLENBQUM7SUEyREQsT0FBTztRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDeEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQixzQkFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNEO0FBNUZZO0lBQVgsaUJBQVU7MENBQTBCO0FBQ3pCO0lBQVgsaUJBQVU7NkNBQW9CO0FBQ25CO0lBQVgsaUJBQVU7MENBQWlCO0FBMkY3QixNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUUvQjtBQUFDLE1BQWMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFBO0FBQ3hCLFFBQUEsUUFBUSxHQUFHLFNBQVMsQ0FBQSJ9