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
const AppState_1 = require("../AppState");
let EditPostModal = class EditPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.onOk = () => __awaiter(this, void 0, void 0, function* () {
            const post = AppState_1.state.modalPost;
            const preview = AppState_1.state.modalPreview;
            const tags = this.state.tagList.split(' ').filter((t) => t.length > 0);
            if (tags.toString() == post.tags.toString()) {
                this.hide();
                return;
            }
            console.log(tags, this.state.tagList);
            yield AppState_1.state.ws.sendRpc('editTags', {
                group: AppState_1.state.currentGroup.id,
                tags: tags,
                post: post.id,
                operation: 'set'
            });
            this.hide();
        });
        this.onDelete = () => __awaiter(this, void 0, void 0, function* () {
            yield AppState_1.state.ws.sendRpc('deletePost', {
                group: AppState_1.state.currentGroup.id,
                post: AppState_1.state.modalPost.id,
            });
            this.hide();
        });
        this.hide = () => {
            AppState_1.state.postModalVisible = false;
        };
        this.state = {
            tagList: '',
            lastPostId: -1
        };
    }
    componentDidUpdate() {
        if (!!AppState_1.state.modalPost && this.state.lastPostId != AppState_1.state.modalPost.id) {
            const expectedTagList = AppState_1.state.modalPost.tags.join(' ');
            this.setState({ tagList: expectedTagList, lastPostId: AppState_1.state.modalPost.id });
        }
    }
    render() {
        const post = AppState_1.state.modalPost;
        if (!post) {
            return React.createElement(React.Fragment, null);
        }
        const user = AppState_1.state.userFromId(post.poster);
        const preview = AppState_1.state.modalPreview;
        return (React.createElement(antd_1.Modal, { visible: AppState_1.state.postModalVisible, onCancel: this.hide, onOk: this.onOk },
            React.createElement("h1", null, "Post Details:"),
            React.createElement("p", null,
                "Poster: ",
                user.name),
            React.createElement("p", null,
                "Poster Email: ",
                user.email),
            React.createElement("p", null,
                "ID: ",
                post.id),
            React.createElement("p", null,
                "Link: ",
                React.createElement("a", { href: post.url, target: "_blank" }, post.url)),
            React.createElement("p", null,
                "MIME type: ",
                post.mime),
            React.createElement("p", null,
                "Has Preview: ",
                post.hasPreview ? 'true' : 'false'),
            React.createElement("p", null, "Tags:"),
            React.createElement(antd_1.Input, { value: this.state.tagList, onChange: (e) => this.setState({ tagList: e.target.value }), placeholder: "Tags" }),
            !!preview &&
                React.createElement("div", null,
                    React.createElement("h2", null, "Preview Details:"),
                    React.createElement("pre", null, JSON.stringify(preview, null, 2))),
            React.createElement(antd_1.Button, { type: "danger", onClick: this.onDelete }, "Delete Post")));
    }
};
EditPostModal = __decorate([
    mobx_react_1.observer
], EditPostModal);
exports.default = EditPostModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdFBvc3RNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3N0Vmlldy9FZGl0UG9zdE1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDJDQUFxQztBQUNyQywrQkFBa0Q7QUFDbEQsMENBQW9DO0FBSXBDLElBQXFCLGFBQWEsR0FBbEMsTUFBcUIsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUcvQztJQUNELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUEyQ2IsU0FBSSxHQUFHLEdBQVMsRUFBRTtZQUNqQixNQUFNLElBQUksR0FBRyxnQkFBSyxDQUFDLFNBQVMsQ0FBQTtZQUM1QixNQUFNLE9BQU8sR0FBRyxnQkFBSyxDQUFDLFlBQVksQ0FBQTtZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3RFLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDWCxPQUFNO2FBQ047WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXJDLE1BQU0sZ0JBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDbEMsS0FBSyxFQUFFLGdCQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDYixTQUFT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