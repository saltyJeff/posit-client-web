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
const mobx_react_1 = require("mobx-react");
const React = require("react");
const GroupSelectButton_1 = require("./GroupSelectButton");
const antd_1 = require("antd");
const CreateGroupModal_1 = require("./CreateGroupModal");
require("./GroupPicker.css");
const stores_1 = require("../stores");
let GroupPicker = class GroupPicker extends React.Component {
    constructor(props) {
        super(props);
        this.changePage = (page) => __awaiter(this, void 0, void 0, function* () {
            stores_1.groupStore.changePage(page);
        });
        this.createGroup = (newName) => __awaiter(this, void 0, void 0, function* () {
            stores_1.PositClient.sendRpc('makeGroup', {
                name: newName
            });
            this.setState({ createGroupVisible: false });
        });
        this.state = {
            createGroupVisible: false
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null,
                "Page: ",
                React.createElement(antd_1.InputNumber, { value: stores_1.groupStore.pageNum, onChange: (e) => {
                        e = e || 0;
                        this.changePage(e);
                    }, min: 0, step: 1 }),
                React.createElement(antd_1.Button, { onClick: () => this.setState({ createGroupVisible: true }) }, "Create Group"),
                React.createElement("p", { style: { display: 'inline-block', marginLeft: 10 } },
                    stores_1.appStore.username,
                    " - ",
                    React.createElement(antd_1.Button, { type: "link", onClick: stores_1.appStore.signout }, "SIGNOUT"))),
            React.createElement("div", { className: "groupWrapper" }, stores_1.groupStore.page.map((v) => {
                return (React.createElement(GroupSelectButton_1.default, { key: v.id + '', group: v }));
            })),
            React.createElement(CreateGroupModal_1.default, { visible: this.state.createGroupVisible, onOk: this.createGroup, onCancel: () => this.setState({ createGroupVisible: false }) })));
    }
};
GroupPicker = __decorate([
    mobx_react_1.observer
], GroupPicker);
exports.default = GroupPicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR3JvdXBQaWNrZXIvR3JvdXBQaWNrZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsK0JBQThCO0FBQzlCLDJEQUFvRDtBQUNwRCwrQkFBMkM7QUFDM0MseURBQWtEO0FBQ2xELDZCQUEwQjtBQUMxQixzQ0FBOEQ7QUFNOUQsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQW9CO0lBQ2xFLFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFtQ2IsZUFBVSxHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7WUFDbkMsbUJBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFBLENBQUE7UUFDRCxnQkFBVyxHQUFHLENBQU8sT0FBZSxFQUFFLEVBQUU7WUFDdkMsb0JBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNoQyxJQUFJLEVBQUUsT0FBTzthQUNiLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQSxDQUFBO1FBMUNBLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWixrQkFBa0IsRUFBRSxLQUFLO1NBQ3pCLENBQUE7SUFDRixDQUFDO0lBQ0QsTUFBTTtRQUNMLE9BQU8sQ0FDTjtZQUNDOztnQkFDTyxvQkFBQyxrQkFBVyxJQUNqQixLQUFLLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLEVBQ3pCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNmLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ25CLENBQUMsRUFDRCxHQUFHLEVBQUUsQ0FBQyxFQUNOLElBQUksRUFBRSxDQUFDLEdBQUc7Z0JBQ1gsb0JBQUMsYUFBTSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUMsbUJBQXVCO2dCQUN2RiwyQkFBRyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUM7b0JBQUcsaUJBQVEsQ0FBQyxRQUFROztvQkFBSSxvQkFBQyxhQUFNLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUUsaUJBQVEsQ0FBQyxPQUFPLGNBQWtCLENBQUksQ0FDekk7WUFDTiw2QkFBSyxTQUFTLEVBQUMsY0FBYyxJQUU1QixtQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDekIsT0FBTyxDQUFDLG9CQUFDLDJCQUFpQixJQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN0RCxDQUFDLENBQUMsQ0FFRztZQUNOLG9CQUFDLDBCQUFnQixJQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDdEMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQ3RCLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFDLENBQUMsR0FDekQsQ0FDRyxDQUNOLENBQUE7SUFDRixDQUFDO0NBVUQsQ0FBQTtBQTlDb0IsV0FBVztJQUQvQixxQkFBUTtHQUNZLFdBQVcsQ0E4Qy9CO2tCQTlDb0IsV0FBVyJ9