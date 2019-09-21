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
const antd_1 = require("antd");
require("./PostView.css");
let SearchBar = class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createPostVisible: false
        };
    }
    render() {
        return (React.createElement("div", { className: "searchWrapper" },
            React.createElement(antd_1.Input, { placeholder: "enter search terms..", value: AppState_1.state.searchTerms, onChange: (e) => AppState_1.state.searchTerms = e.target.value }),
            React.createElement(antd_1.Select, { defaultValue: AppState_1.state.viewMode, onChange: (e) => AppState_1.state.viewMode = e, className: "searchBarSelect" },
                React.createElement(antd_1.Select.Option, { value: "FILE" }, "File"),
                React.createElement(antd_1.Select.Option, { value: "STREAM" }, "Stream")),
            AppState_1.state.viewMode == 'STREAM' &&
                React.createElement(antd_1.Select, { defaultValue: AppState_1.state.streamModeOperator, onChange: (e) => AppState_1.state.streamModeOperator = e, className: "searchBarSelect" },
                    React.createElement(antd_1.Select.Option, { value: "AND" }, "AND"),
                    React.createElement(antd_1.Select.Option, { value: "OR" }, "OR"))));
    }
};
SearchBar = __decorate([
    mobx_react_1.observer
], SearchBar);
exports.default = SearchBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1Bvc3RWaWV3L1NlYXJjaEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsMkNBQXFDO0FBQ3JDLDBDQUFvQztBQUNwQywrQkFBbUQ7QUFHbkQsMEJBQXVCO0FBR3ZCLElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUUzQztJQUNELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1osaUJBQWlCLEVBQUUsS0FBSztTQUN4QixDQUFBO0lBQ0YsQ0FBQztJQUNELE1BQU07UUFDTCxPQUFPLENBQ04sNkJBQUssU0FBUyxFQUFDLGVBQWU7WUFDN0Isb0JBQUMsWUFBSyxJQUNMLFdBQVcsRUFBQyxzQkFBc0IsRUFDbEMsS0FBSyxFQUFFLGdCQUFLLENBQUMsV0FBVyxFQUN4QixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUNsRDtZQUNGLG9CQUFDLGFBQU0sSUFBQyxZQUFZLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxnQkFBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFDLGlCQUFpQjtnQkFDckcsb0JBQUMsYUFBTSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUMsTUFBTSxXQUFxQjtnQkFDaEQsb0JBQUMsYUFBTSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUMsUUFBUSxhQUF1QixDQUM1QztZQUVSLGdCQUFLLENBQUMsUUFBUSxJQUFJLFFBQVE7Z0JBQzFCLG9CQUFDLGFBQU0sSUFBQyxZQUFZLEVBQUUsZ0JBQUssQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBQyxpQkFBaUI7b0JBQ3pILG9CQUFDLGFBQU0sQ0FBQyxNQUFNLElBQUMsS0FBSyxFQUFDLEtBQUssVUFBb0I7b0JBQzlDLG9CQUFDLGFBQU0sQ0FBQyxNQUFNLElBQUMsS0FBSyxFQUFDLElBQUksU0FBbUIsQ0FDcEMsQ0FFTCxDQUNOLENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQTtBQS9Cb0IsU0FBUztJQUQ3QixxQkFBUTtHQUNZLFNBQVMsQ0ErQjdCO2tCQS9Cb0IsU0FBUyJ9