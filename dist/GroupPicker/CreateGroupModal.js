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
let CreateGroupModal = class CreateGroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: ''
        };
    }
    render() {
        return (React.createElement(antd_1.Modal, { visible: this.props.visible, onCancel: this.props.onCancel, onOk: () => this.props.onOk(this.state.newName) },
            React.createElement(antd_1.Input, { value: this.state.newName, onChange: (e) => this.setState({ newName: e.target.value }), placeholder: "New group name" })));
    }
};
CreateGroupModal = __decorate([
    mobx_react_1.observer
], CreateGroupModal);
exports.default = CreateGroupModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlR3JvdXBNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hcm91cFBpY2tlci9DcmVhdGVHcm91cE1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QiwyQ0FBcUM7QUFDckMsK0JBQWtEO0FBTWxELElBQXFCLGdCQUFnQixHQUFyQyxNQUFxQixnQkFBaUIsU0FBUSxLQUFLLENBQUMsU0FNbEQ7SUFDRCxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLE9BQU8sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtJQUNGLENBQUM7SUFDRCxNQUFNO1FBQ0wsT0FBTyxDQUNOLG9CQUFDLFlBQUssSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDN0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQy9DLG9CQUFDLFlBQUssSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxXQUFXLEVBQUMsZ0JBQWdCLEdBQUUsQ0FDcEgsQ0FDUixDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUE7QUF0Qm9CLGdCQUFnQjtJQURwQyxxQkFBUTtHQUNZLGdCQUFnQixDQXNCcEM7a0JBdEJvQixnQkFBZ0IifQ==