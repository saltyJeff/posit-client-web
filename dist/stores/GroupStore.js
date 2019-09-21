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
class GroupStore {
    constructor() {
        // current group page state
        this.group = {
            id: -1,
            name: '?',
            users: []
        };
        this.pageNum = 0;
        this.page = mobx_1.observable.array([]);
        this.changePage = (page) => __awaiter(this, void 0, void 0, function* () {
            const response = yield WSClient_1.PositClient.sendRpc('getGroups', {
                page: page
            });
            WSClient_1.PositClient.PAGE_SIZE = response.pageSize;
            this.page = response.groups;
            this.pageNum = page;
        });
        // current search bar state
        this.searchTerms = '';
        this.viewMode = 'FILE';
        this.streamModeOperator = 'AND';
    }
    setGroup(group) {
        this.group = group;
        this.searchTerms = '';
    }
    userFromId(id) {
        const user = this.group.users.find((u) => u.id == id);
        if (user == undefined) {
            return {
                'email': '?',
                'id': -1,
                'loginId': 'bleh',
                'name': '?'
            };
        }
        return user;
    }
    get searchOp() {
        return this.viewMode == 'FILE' ? 'OR' : this.streamModeOperator;
    }
    get searchTokens() {
        return this.searchTerms.split(/\s/g);
    }
}
__decorate([
    mobx_1.observable
], GroupStore.prototype, "group", void 0);
__decorate([
    mobx_1.observable
], GroupStore.prototype, "pageNum", void 0);
__decorate([
    mobx_1.observable
], GroupStore.prototype, "page", void 0);
__decorate([
    mobx_1.observable
], GroupStore.prototype, "searchTerms", void 0);
__decorate([
    mobx_1.observable
], GroupStore.prototype, "viewMode", void 0);
__decorate([
    mobx_1.observable
], GroupStore.prototype, "streamModeOperator", void 0);
exports.GroupStore = GroupStore;
const storeInst = new GroupStore();
window.appStore = storeInst;
exports.groupStore = storeInst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZXMvR3JvdXBTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTJDO0FBRTNDLHlDQUF5QztBQUV6QyxNQUFhLFVBQVU7SUFBdkI7UUFDQywyQkFBMkI7UUFDZixVQUFLLEdBQWM7WUFDOUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNOLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEVBQUU7U0FDVCxDQUFBO1FBQ1csWUFBTyxHQUFXLENBQUMsQ0FBQTtRQUNuQixTQUFJLEdBQWdCLGlCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3BELGVBQVUsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO1lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN2RCxJQUFJLEVBQUUsSUFBSTthQUNWLENBQUMsQ0FBQTtZQUNGLHNCQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUE7WUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFBO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLENBQUMsQ0FBQSxDQUFBO1FBaUJELDJCQUEyQjtRQUNmLGdCQUFXLEdBQVcsRUFBRSxDQUFBO1FBQ3hCLGFBQVEsR0FBZSxNQUFNLENBQUE7UUFDN0IsdUJBQWtCLEdBQWlCLEtBQUssQ0FBQTtJQU9yRCxDQUFDO0lBMUJBLFFBQVEsQ0FBQyxLQUFnQjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsVUFBVSxDQUFDLEVBQVU7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3JELElBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUNyQixPQUFPO2dCQUNOLE9BQU8sRUFBRSxHQUFHO2dCQUNaLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ1IsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxHQUFHO2FBQ1gsQ0FBQTtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDWixDQUFDO0lBS0QsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUE7SUFDaEUsQ0FBQztJQUNELElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckMsQ0FBQztDQUNEO0FBekNZO0lBQVgsaUJBQVU7eUNBSVY7QUFDVztJQUFYLGlCQUFVOzJDQUFvQjtBQUNuQjtJQUFYLGlCQUFVO3dDQUF5QztBQTBCeEM7SUFBWCxpQkFBVTsrQ0FBeUI7QUFDeEI7SUFBWCxpQkFBVTs0Q0FBOEI7QUFDN0I7SUFBWCxpQkFBVTtzREFBeUM7QUFwQ3JELGdDQTJDQztBQUNELE1BQU0sU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBRWpDO0FBQUMsTUFBYyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUE7QUFDeEIsUUFBQSxVQUFVLEdBQUcsU0FBUyxDQUFBIn0=