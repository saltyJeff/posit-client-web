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
const AppState_1 = require("./AppState");
const LoginPage_1 = require("./LoginPage/LoginPage");
const MainPage_1 = require("./MainPage/MainPage");
let Root = class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "centerWrapper" }, AppState_1.state.loggedIn ?
            React.createElement(MainPage_1.default, null) :
            React.createElement(LoginPage_1.default, null)));
    }
};
Root = __decorate([
    mobx_react_1.observer
], Root);
exports.default = Root;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Sb290LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QiwyQ0FBcUM7QUFDckMseUNBQWtDO0FBQ2xDLHFEQUE2QztBQUM3QyxrREFBMEM7QUFHMUMsSUFBcUIsSUFBSSxHQUF6QixNQUFxQixJQUFLLFNBQVEsS0FBSyxDQUFDLFNBQWlCO0lBQ3hELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDYixDQUFDO0lBQ0QsTUFBTTtRQUNMLE9BQU8sQ0FDTiw2QkFBSyxTQUFTLEVBQUMsZUFBZSxJQUU1QixnQkFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hCLG9CQUFDLGtCQUFRLE9BQUcsQ0FBQyxDQUFDO1lBQ2Qsb0JBQUMsbUJBQVMsT0FBRyxDQUVULENBQ04sQ0FBQTtJQUNGLENBQUM7Q0FDRCxDQUFBO0FBZm9CLElBQUk7SUFEeEIscUJBQVE7R0FDWSxJQUFJLENBZXhCO2tCQWZvQixJQUFJIn0=