"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
const antd_1 = require("antd");
const AppState_1 = require("../AppState");
let FolderItem = class FolderItem extends React.Component {
    constructor(props) {
        super(props);
        this.changeFolder = () => {
            let newTerms = AppState_1.state.searchTerms;
            const endStar = newTerms.endsWith('/*');
            if (endStar) {
                newTerms = newTerms.substr(0, newTerms.length - 1);
            }
            if (!newTerms.endsWith('/') && newTerms !== '') {
                newTerms += '/';
            }
            newTerms += this.props.folderTag;
            if (endStar) {
                newTerms += '*';
            }
            AppState_1.state.searchTerms = newTerms;
        };
    }
    render() {
        const segments = this.props.folderTag.split('/');
        const folderName = segments[segments.length - 2] + '/';
        return (React.createElement(antd_1.List.Item, null,
            React.createElement(antd_1.Button, { onClick: this.changeFolder }, folderName)));
    }
};
FolderItem = __decorate([
    mobx_react_1.observer
], FolderItem);
exports.default = FolderItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVySXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3N0Vmlldy9Gb2xkZXJJdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QiwyQ0FBcUM7QUFDckMsK0JBQW9DO0FBQ3BDLDBDQUFvQztBQUdwQyxJQUFxQixVQUFVLEdBQS9CLE1BQXFCLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FFeEM7SUFDTCxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBV2IsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxRQUFRLEdBQUcsZ0JBQUssQ0FBQyxXQUFXLENBQUE7WUFDaEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QyxJQUFHLE9BQU8sRUFBRTtnQkFDWCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTthQUNsRDtZQUNELElBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7Z0JBQzlDLFFBQVEsSUFBSSxHQUFHLENBQUE7YUFDZjtZQUNELFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTtZQUNoQyxJQUFHLE9BQU8sRUFBRTtnQkFDWCxRQUFRLElBQUksR0FBRyxDQUFBO2FBQ2Y7WUFDRCxnQkFBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUE7UUFDN0IsQ0FBQyxDQUFBO0lBeEJELENBQUM7SUFDRCxNQUFNO1FBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQTtRQUNwRCxPQUFPLENBQ04sb0JBQUMsV0FBSSxDQUFDLElBQUk7WUFDVCxvQkFBQyxhQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUcsVUFBVSxDQUFVLENBQzlDLENBQ1osQ0FBQTtJQUNGLENBQUM7Q0FnQkQsQ0FBQTtBQTlCb0IsVUFBVTtJQUQ5QixxQkFBUTtHQUNZLFVBQVUsQ0E4QjlCO2tCQTlCb0IsVUFBVSJ9