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
const React = require("react");
const mobx_react_1 = require("mobx-react");
const antd_1 = require("antd");
const FolderItem_1 = require("./FolderItem");
const AppState_1 = require("../AppState");
const react_infinite_scroller_1 = require("react-infinite-scroller");
const PostItem_1 = require("./PostItem/PostItem");
const CreatePostModal_1 = require("./CreatePostModal");
let FileView = class FileView extends React.Component {
    constructor(props) {
        super(props);
        this.createPost = (url, tags) => __awaiter(this, void 0, void 0, function* () {
            yield AppState_1.state.ws.sendRpc('makePost', {
                group: AppState_1.state.currentGroup.id,
                url: url,
                tags: tags.length > 0 ? tags : undefined
            });
            this.setState({ createPostVisible: false });
        });
        this.goUp = () => {
            if (AppState_1.state.searchTerms === '') {
                return;
            }
            const termsSplit = AppState_1.state.searchTerms.split('/');
            termsSplit.splice(termsSplit.length - 2, 2);
            if (termsSplit.length == 0) {
                AppState_1.state.searchTerms = '';
                return;
            }
            const newTerms = termsSplit.join('/') + '/';
            AppState_1.state.searchTerms = newTerms;
        };
        this.listHeader = () => {
            return React.createElement(antd_1.Affix, { offsetTop: 10 },
                React.createElement("div", { className: "listsHeader" },
                    AppState_1.state.viewMode == 'FILE' && React.createElement(antd_1.Button, { type: "primary", onClick: this.goUp, disabled: AppState_1.state.searchTerms == '' }, AppState_1.state.searchTerms === '' ? 'Root' : 'cd ..'),
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement(antd_1.Button, { onClick: () => this.setState({ createPostVisible: true }), type: "primary", className: "makePostButton" }, "Create Post")));
        };
        this.state = {
            createPostVisible: false
        };
    }
    render() {
        let switched = false;
        let firstElem = true;
        const viewMoreId = AppState_1.state.viewMorePost;
        return (React.createElement("div", null,
            React.createElement(react_infinite_scroller_1.default, { initialLoad: false, pageStart: 0, loadMore: AppState_1.state.loadMore, hasMore: !AppState_1.state.loading && AppState_1.state.hasMore, useWindow: true },
                React.createElement(antd_1.List, { locale: { emptyText: React.createElement("p", null, "No Folders") }, header: this.listHeader(), bordered: true, dataSource: AppState_1.state.entries, grid: {
                        sm: 1,
                        lg: 2,
                        xl: 3
                    }, renderItem: item => {
                        const key = typeof item == 'string' ? item : item.id + '';
                        const listElem = React.createElement(antd_1.List.Item, { key: key }, (typeof item == 'string' ?
                            React.createElement(FolderItem_1.default, { folderTag: item }) :
                            React.createElement(PostItem_1.default, { post: item, viewMore: viewMoreId == item.id })));
                        const ret = [];
                        if (firstElem && typeof item == 'string') {
                            firstElem = false;
                            ret.push(React.createElement(antd_1.Divider, { key: "folderDivider" }, "Folders"));
                        }
                        // add a divider between folders and posts
                        if (!switched && typeof item != 'string') {
                            switched = true;
                            ret.push(React.createElement(antd_1.Divider, { key: "filesDivider" }, "Files"));
                        }
                        ret.push(listElem);
                        return ret;
                    }, itemLayout: "vertical" }, AppState_1.state.loading && AppState_1.state.hasMore && (React.createElement("div", { className: "demo-loading-container" },
                    React.createElement(antd_1.Spin, null))))),
            React.createElement(CreatePostModal_1.default, { visible: this.state.createPostVisible, onCancel: () => this.setState({ createPostVisible: false }), onOk: this.createPost })));
    }
};
FileView = __decorate([
    mobx_react_1.observer
], FileView);
exports.default = FileView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUG9zdFZpZXcvRmlsZVZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsMkNBQXFDO0FBQ3JDLCtCQUEwRDtBQUMxRCw2Q0FBc0M7QUFFdEMsMENBQW9DO0FBQ3BDLHFFQUFvRDtBQUVwRCxrREFBMkM7QUFFM0MsdURBQWdEO0FBR2hELElBQXFCLFFBQVEsR0FBN0IsTUFBcUIsUUFBUyxTQUFRLEtBQUssQ0FBQyxTQUUxQztJQUNELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFvRWIsZUFBVSxHQUFHLENBQU8sR0FBVyxFQUFFLElBQWMsRUFBRSxFQUFFO1lBQ2xELE1BQU0sZ0JBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDbEMsS0FBSyxFQUFFLGdCQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzVCLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO2FBQ3hDLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxpQkFBaUIsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzFDLENBQUMsQ0FBQSxDQUFBO1FBQ0QsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNYLElBQUcsZ0JBQUssQ0FBQyxXQUFXLEtBQUssRUFBRSxFQUFFO2dCQUM1QixPQUFNO2FBQ047WUFDRCxNQUFNLFVBQVUsR0FBRyxnQkFBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FB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