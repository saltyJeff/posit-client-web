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
const stores_1 = require("../stores");
let AddUser = class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.addUser = () => {
            stores_1.PositClient.sendRpc('editGroup', {
                group: stores_1.groupStore.group.id,
                users: [{
                        email: this.state.email,
                        permissions: this.state.role
                    }]
            }).then(console.log);
        };
        this.state = {
            email: '',
            role: 'WRITE'
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, "Add a user"),
            React.createElement(antd_1.Input, { type: "email", placeholder: "email", value: this.state.email, onChange: (e) => this.setState({ email: e.target.value }) }),
            React.createElement(antd_1.Select, { defaultValue: this.state.role, onChange: (e) => this.setState({ role: e }) },
                React.createElement(antd_1.Select.Option, { value: "READ" }, "Read"),
                React.createElement(antd_1.Select.Option, { value: "WRITE" }, "Write"),
                React.createElement(antd_1.Select.Option, { value: "ADMIN" }, "Admin")),
            !!this.state.email.length && React.createElement(antd_1.Button, { onClick: this.addUser }, "Add User")));
    }
};
AddUser = __decorate([
    mobx_react_1.observer
], AddUser);
exports.default = AddUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hcm91cFZpZXcvQWRkVXNlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsMkNBQXFDO0FBQ3JDLCtCQUE0QztBQUU1QyxzQ0FBb0Q7QUFPcEQsSUFBcUIsT0FBTyxHQUE1QixNQUFxQixPQUFRLFNBQVEsS0FBSyxDQUFDLFNBQW9CO0lBQzlELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUEwQmIsWUFBTyxHQUFHLEdBQUcsRUFBRTtZQUNkLG9CQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsS0FBSyxFQUFFLG1CQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLEtBQUssRUFBRSxDQUFDO3dCQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7d0JBQ3ZCLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7cUJBQzVCLENBQUM7YUFDRixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUE7UUFqQ0EsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFBO0lBQ0YsQ0FBQztJQUNELE1BQU07UUFDTCxPQUFPLENBQ047WUFDQyw0Q0FBaUI7WUFDakIsb0JBQUMsWUFBSyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQ2xCLFdBQVcsRUFBQyxPQUFPLEVBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsR0FDdEQ7WUFDRixvQkFBQyxhQUFNLElBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFDL0Usb0JBQUMsYUFBTSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUMsTUFBTSxXQUFxQjtnQkFDaEQsb0JBQUMsYUFBTSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUMsT0FBTyxZQUFzQjtnQkFDbEQsb0JBQUMsYUFBTSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUMsT0FBTyxZQUFzQixDQUMxQztZQUVSLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksb0JBQUMsYUFBTSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxlQUFtQixDQUV6RSxDQUNOLENBQUE7SUFDRixDQUFDO0NBVUQsQ0FBQTtBQXJDb0IsT0FBTztJQUQzQixxQkFBUTtHQUNZLE9BQU8sQ0FxQzNCO2tCQXJDb0IsT0FBTyJ9