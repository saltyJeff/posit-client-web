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
const GroupDetailView_1 = require("./GroupDetailView");
const PostView_1 = require("../PostView/PostView");
const stores_1 = require("../stores");
let GroupView = class GroupView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userModalVisible: false
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(antd_1.PageHeader, { title: stores_1.groupStore.group.name, subTitle: stores_1.groupStore.group.id, extra: [
                    React.createElement(antd_1.Button, { key: "detailButton", onClick: (e) => {
                            this.setState({ userModalVisible: true });
                        } }, "Details")
                ] }),
            React.createElement(GroupDetailView_1.default, { visible: this.state.userModalVisible, onCancel: () => this.setState({ userModalVisible: false }), onOk: () => this.setState({ userModalVisible: false }) }),
            React.createElement(PostView_1.default, null)));
    }
};
GroupView = __decorate([
    mobx_react_1.observer
], GroupView);
exports.default = GroupView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dyb3VwVmlldy9Hcm91cFZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDJDQUFxQztBQUNyQywrQkFBMEM7QUFDMUMsdURBQWdEO0FBQ2hELG1EQUE0QztBQUM1QyxzQ0FBdUM7QUFNdkMsSUFBcUIsU0FBUyxHQUE5QixNQUFxQixTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQW9CO0lBQ2hFLFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1osZ0JBQWdCLEVBQUUsS0FBSztTQUN2QixDQUFBO0lBQ0YsQ0FBQztJQUNELE1BQU07UUFDTCxPQUFPLENBQ047WUFDQyxvQkFBQyxpQkFBVSxJQUFDLEtBQUssRUFBRSxtQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLG1CQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDdEUsS0FBSyxFQUFFO29CQUNOLG9CQUFDLGFBQU0sSUFBQyxHQUFHLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFOzRCQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTt3QkFDeEMsQ0FBQyxjQUFrQjtpQkFDbkIsR0FBRztZQUNMLG9CQUFDLHlCQUFlLElBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQ3BDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFDeEQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxHQUNuRDtZQUNGLG9CQUFDLGtCQUFRLE9BQUcsQ0FDUCxDQUNOLENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQTtBQXpCb0IsU0FBUztJQUQ3QixxQkFBUTtHQUNZLFNBQVMsQ0F5QjdCO2tCQXpCb0IsU0FBUyJ9