"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const React = require("react");
const mobx_react_1 = require("mobx-react");
const AppState_1 = require("../AppState");
require("./LoginPage.css");
let LoginPage = class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server: ':2468'
        };
        if (!window.onSignIn) {
            ;
            window.onSignIn = (googleUser) => {
                const profile = googleUser.getBasicProfile();
                const token = googleUser.getAuthResponse().id_token;
                //console.log('ID Token: ',token)
                AppState_1.state.login([token], this.state.server, profile.getName());
            };
        }
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "g-signin2", "data-onsuccess": "onSignIn" }),
            React.createElement("p", null, "Select a server (or use the default)"),
            React.createElement(antd_1.Input, { placeholder: "server", defaultValue: ":2468", value: this.state.server, onChange: (e) => this.setState({ server: e.target.value }) }),
            React.createElement("h1", null, "WARNING: DATA IS NOT ENCRYPTED")));
    }
};
LoginPage = __decorate([
    mobx_react_1.observer
], LoginPage);
exports.default = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0xvZ2luUGFnZS9Mb2dpblBhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsK0JBQTBEO0FBRTFELCtCQUE4QjtBQUM5QiwyQ0FBcUM7QUFDckMsMENBQW9DO0FBQ3BDLDJCQUF3QjtBQUd4QixJQUFxQixTQUFTLEdBQTlCLE1BQXFCLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FFM0M7SUFDRCxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLE1BQU0sRUFBRSxPQUFPO1NBQ2YsQ0FBQTtRQUNELElBQUcsQ0FBRSxNQUFjLENBQUMsUUFBUSxFQUFFO1lBQzdCLENBQUM7WUFBQyxNQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQzFDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtnQkFDNUMsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQTtnQkFDbkQsaUNBQWlDO2dCQUNqQyxnQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1lBQzNELENBQUMsQ0FBQTtTQUNEO0lBQ0YsQ0FBQztJQUNELE1BQU07UUFDTCxPQUFPLENBQ047WUFDQyw2QkFBSyxTQUFTLEVBQUMsV0FBVyxvQkFBZ0IsVUFBVSxHQUFPO1lBQzNELHNFQUEyQztZQUMzQyxvQkFBQyxZQUFLLElBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFJO1lBQ3ZJLGlFQUF1QyxDQUNsQyxDQUNOLENBQUM7SUFDSCxDQUFDO0NBQ0QsQ0FBQTtBQTNCb0IsU0FBUztJQUQ3QixxQkFBUTtHQUNZLFNBQVMsQ0EyQjdCO2tCQTNCb0IsU0FBUyJ9