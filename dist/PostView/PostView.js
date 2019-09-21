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
const SearchBar_1 = require("./SearchBar");
const FileView_1 = require("./FileView");
const EditPostModal_1 = require("./EditPostModal");
let PostView = class PostView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(SearchBar_1.default, null),
            React.createElement(FileView_1.default, null),
            React.createElement(EditPostModal_1.default, null)));
    }
};
PostView = __decorate([
    mobx_react_1.observer
], PostView);
exports.default = PostView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdFZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUG9zdFZpZXcvUG9zdFZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDJDQUFxQztBQUNyQywyQ0FBb0M7QUFFcEMseUNBQWtDO0FBQ2xDLG1EQUE0QztBQUc1QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBaUI7SUFDNUQsWUFBWSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNiLENBQUM7SUFDRCxNQUFNO1FBQ0wsT0FBTyxDQUNOO1lBQ0Msb0JBQUMsbUJBQVMsT0FBRztZQUNiLG9CQUFDLGtCQUFRLE9BQUc7WUFDWixvQkFBQyx1QkFBYSxPQUFHLENBQ1osQ0FDTixDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUE7QUFib0IsUUFBUTtJQUQ1QixxQkFBUTtHQUNZLFFBQVEsQ0FhNUI7a0JBYm9CLFFBQVEifQ==