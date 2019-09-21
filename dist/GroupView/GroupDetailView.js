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
const AddUser_1 = require("./AddUser");
const UserItem_1 = require("./UserItem");
const stores_1 = require("../stores");
let UserView = class UserView extends React.Component {
    constructor(props) {
        super(props);
        this.changeName = () => {
            const newName = this.state.newName;
            stores_1.PositClient.sendRpc('editGroup', {
                'group': stores_1.groupStore.group.id,
                'name': newName
            });
        };
        this.state = {
            newName: stores_1.groupStore.group.name
        };
    }
    render() {
        return (React.createElement(antd_1.Modal, { visible: this.props.visible, onCancel: this.props.onCancel, onOk: this.props.onOk, footer: null },
            React.createElement(antd_1.Input, { value: this.state.newName, onChange: (e) => this.setState({ newName: e.target.value }) }),
            this.state.newName !== stores_1.groupStore.group.name && React.createElement(antd_1.Button, { onClick: this.changeName }, "Change Name"),
            React.createElement(antd_1.List, { header: React.createElement("div", null, "Users"), bordered: true, dataSource: stores_1.groupStore.group.users, renderItem: item => (React.createElement(UserItem_1.default, { user: item })) }),
            React.createElement(AddUser_1.default, null)));
    }
};
UserView = __decorate([
    mobx_react_1.observer
], UserView);
exports.default = UserView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEZXRhaWxWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dyb3VwVmlldy9Hcm91cERldGFpbFZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDJDQUFxQztBQUNyQywrQkFBa0Q7QUFDbEQsdUNBQWdDO0FBQ2hDLHlDQUFrQztBQUNsQyxzQ0FBb0Q7QUFHcEQsSUFBcUIsUUFBUSxHQUE3QixNQUFxQixRQUFTLFNBQVEsS0FBSyxDQUFDLFNBTTFDO0lBQ0QsWUFBWSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQTJCYixlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1lBQ2xDLG9CQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsT0FBTyxFQUFFLG1CQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sRUFBRSxPQUFPO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFBO1FBaENBLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWixPQUFPLEVBQUUsbUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtTQUM5QixDQUFBO0lBQ0YsQ0FBQztJQUNELE1BQU07UUFDTCxPQUFPLENBQ04sb0JBQUMsWUFBSyxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3JCLE1BQU0sRUFBRSxJQUFJO1lBQ1osb0JBQUMsWUFBSyxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHO1lBRTdGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLG1CQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxvQkFBQyxhQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLGtCQUFzQjtZQUV2RyxvQkFBQyxXQUFJLElBQ0osTUFBTSxFQUFFLHlDQUFnQixFQUN4QixRQUFRLFFBQ1IsVUFBVSxFQUFFLG1CQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDbEMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDbkIsb0JBQUMsa0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQ3hCLEdBQ0E7WUFDRixvQkFBQyxpQkFBTyxPQUFHLENBQ0osQ0FDUixDQUFBO0lBQ0YsQ0FBQztDQVFELENBQUE7QUExQ29CLFFBQVE7SUFENUIscUJBQVE7R0FDWSxRQUFRLENBMEM1QjtrQkExQ29CLFFBQVEifQ==