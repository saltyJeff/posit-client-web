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
const GroupStore_1 = require("./GroupStore");
class PostStore {
    constructor() {
        // post view stuff
        this.page = mobx_1.observable.array([]);
        this.hasMore = true;
        this.loading = false;
        this.pageNum = 0;
        this.viewMoreId = -1;
        this.reloadPage = () => __awaiter(this, void 0, void 0, function* () {
            if (!!this.entryReloader) {
                this.entryReloader();
            }
            // autorun so it responds to change in search tokens
            this.entryReloader = mobx_1.autorun(this.loadInitialPage);
        });
        this.loadInitialPage = () => __awaiter(this, void 0, void 0, function* () {
            const searchTokens = GroupStore_1.groupStore.searchTokens;
            const viewMode = GroupStore_1.groupStore.viewMode;
            const searchTerms = viewMode == 'FILE' ? [searchTokens[0]] : searchTokens;
            //TODO: I don't like this line (why split and rejoin man)
            GroupStore_1.groupStore.searchTerms = searchTerms.join(' ');
            console.log('querying: ', searchTerms, GroupStore_1.groupStore.searchOp);
            const currentGroup = GroupStore_1.groupStore.group;
            this.pageNum = 0;
            this.loading = false;
            const postRes = yield WSClient_1.PositClient.sendRpc('getPosts', {
                group: currentGroup.id,
                tags: searchTerms,
                page: 0,
                operation: GroupStore_1.groupStore.searchOp
            });
            if (viewMode == 'FILE') {
                const prefixRes = yield WSClient_1.PositClient.sendRpc('getPrefixes', {
                    group: currentGroup.id,
                    prefix: searchTerms[0]
                });
                this.page = prefixRes.prefixes.concat(postRes.posts);
            }
            else {
                this.page = postRes.posts;
            }
            this.loading = false;
        });
        this.loadMore = () => __awaiter(this, void 0, void 0, function* () {
            const searchTokens = GroupStore_1.groupStore.searchTokens;
            const searchTerms = GroupStore_1.groupStore.searchTerms;
            const pageNum = this.pageNum;
            this.loading = true;
            const postRes = yield WSClient_1.PositClient.sendRpc('getPosts', {
                group: GroupStore_1.groupStore.group.id,
                tags: searchTokens,
                page: pageNum + 1,
                operation: GroupStore_1.groupStore.searchOp
            });
            // make sure in the meantime nothing changed
            if (GroupStore_1.groupStore.searchTerms != searchTerms || GroupStore_1.groupStore.pageNum != pageNum) {
                console.warn('Parameters were changed before page load complete');
                return;
            }
            const hasMore = postRes.posts.length >= WSClient_1.PositClient.PAGE_SIZE; // should never be greater than
            console.log('more posts: ', hasMore);
            const newEntries = this.page.concat(postRes.posts);
            this.page = newEntries;
            this.loading = false;
            this.pageNum = pageNum + 1;
            this.hasMore = hasMore;
        });
        this.postModalVisible = false;
        mobx_1.reaction(() => GroupStore_1.groupStore.group.id, this.reloadPage);
    }
    openPostModal(post, preview) {
        this.modalPost = post;
        this.modalPreview = preview;
        this.postModalVisible = true;
    }
    hideModal() {
        this.postModalVisible = false;
    }
}
__decorate([
    mobx_1.observable
], PostStore.prototype, "page", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "hasMore", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "loading", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "pageNum", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "viewMoreId", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "modalPost", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "modalPreview", void 0);
__decorate([
    mobx_1.observable
], PostStore.prototype, "postModalVisible", void 0);
const storeInst = new PostStore();
window.appStore = storeInst;
exports.postStore = storeInst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdFN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0b3Jlcy9Qb3N0U3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFpRjtBQUVqRix5Q0FBeUM7QUFDekMsNkNBQTBDO0FBQzFDLE1BQU0sU0FBUztJQVNkO1FBUkEsa0JBQWtCO1FBQ04sU0FBSSxHQUFzQixpQkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxZQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2QsWUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLFlBQU8sR0FBRyxDQUFDLENBQUE7UUFDWCxlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFNM0IsZUFBVSxHQUFHLEdBQVMsRUFBRTtZQUN2QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7YUFDcEI7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ25ELENBQUMsQ0FBQSxDQUFBO1FBQ0Qsb0JBQWUsR0FBRyxHQUFTLEVBQUU7WUFDNUIsTUFBTSxZQUFZLEdBQUcsdUJBQVUsQ0FBQyxZQUFZLENBQUE7WUFDNUMsTUFBTSxRQUFRLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUE7WUFDcEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFBO1lBQ3pFLHlEQUF5RDtZQUN6RCx1QkFBVSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSx1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