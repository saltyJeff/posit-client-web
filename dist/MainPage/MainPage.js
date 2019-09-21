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
const AppState_1 = require("../AppState");
const GroupPicker_1 = require("../GroupPicker/GroupPicker");
const GroupView_1 = require("../GroupView/GroupView");
let MainPage = class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(GroupPicker_1.default, null),
            AppState_1.state.initialized && React.createElement(GroupView_1.default, null)));
    }
};
MainPage = __decorate([
    mobx_react_1.observer
], MainPage);
exports.default = MainPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTWFpblBhZ2UvTWFpblBhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDJDQUFxQztBQUNyQywwQ0FBbUM7QUFDbkMsNERBQXFEO0FBQ3JELHNEQUErQztBQUcvQyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBaUI7SUFDNUQsWUFBWSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNiLENBQUM7SUFDRCxNQUFNO1FBQ0wsT0FBTyxDQUNOO1lBQ0Msb0JBQUMscUJBQVcsT0FBRztZQUVkLGdCQUFLLENBQUMsV0FBVyxJQUFJLG9CQUFDLG1CQUFTLE9BQUcsQ0FFOUIsQ0FDTixDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUE7QUFkb0IsUUFBUTtJQUQ1QixxQkFBUTtHQUNZLFFBQVEsQ0FjNUI7a0JBZG9CLFFBQVEifQ==