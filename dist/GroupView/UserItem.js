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
let UserItem = class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.changeRole = () => {
            stores_1.PositClient.sendRpc('editGroup', {
                group: stores_1.groupStore.group.id,
                users: [{
                        email: this.props.user.email,
                        permissions: this.state.newPerm
                    }]
            });
        };
        this.state = {
            newPerm: this.props.user.permissions
        };
    }
    render() {
        return (React.createElement(antd_1.List.Item, null,
            this.props.user.name,
            " (",
            this.props.user.email,
            ")",
            React.createElement(antd_1.Select, { defaultValue: this.props.user.permissions, onChange: (e) => this.setState({ newPerm: e }) },
                React.createElement(antd_1.Select.Option, { value: "REMOVED" }, "Remove"),
                React.createElement(antd_1.Select.Option, { value: "READ" }, "Read"),
                React.createElement(antd_1.Select.Option, { value: "WRITE" }, "Write"),
                React.createElement(antd_1.Select.Option, { value: "ADMIN" }, "Admin")),
            this.props.user.permissions !== this.state.newPerm && React.createElement(antd_1.Button, { onClick: this.changeRole }, "Change")));
    }
};
UserItem = __decorate([
    mobx_react_1.observer
], UserItem);
exports.default = UserItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR3JvdXBWaWV3L1VzZXJJdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QiwyQ0FBcUM7QUFDckMsK0JBQTRDO0FBRTVDLHNDQUFvRDtBQUdwRCxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FJMUM7SUFDRCxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBcUJiLGVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDakIsb0JBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNoQyxLQUFLLEVBQUUsbUJBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQzVCLFdBQVcsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQWU7cUJBQ3hDLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSCxDQUFDLENBQUE7UUE1QkEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO1NBQ3BDLENBQUE7SUFDRixDQUFDO0lBQ0QsTUFBTTtRQUNMLE9BQU8sQ0FDTixvQkFBQyxXQUFJLENBQUMsSUFBSTtZQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7O1lBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSzs7WUFDOUMsb0JBQUMsYUFBTSxJQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO2dCQUM5RixvQkFBQyxhQUFNLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLGFBQXVCO2dCQUNyRCxvQkFBQyxhQUFNLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBQyxNQUFNLFdBQXFCO2dCQUNoRCxvQkFBQyxhQUFNLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBQyxPQUFPLFlBQXNCO2dCQUNsRCxvQkFBQyxhQUFNLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBQyxPQUFPLFlBQXNCLENBQzFDO1lBRVIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLG9CQUFDLGFBQU0sSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsYUFBaUIsQ0FFN0YsQ0FDWixDQUFBO0lBQ0YsQ0FBQztDQVVELENBQUE7QUFwQ29CLFFBQVE7SUFENUIscUJBQVE7R0FDWSxRQUFRLENBb0M1QjtrQkFwQ29CLFFBQVEifQ==