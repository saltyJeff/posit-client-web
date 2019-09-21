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
const AppState_1 = require("../AppState");
let CreatePostModal = class CreatePostModal extends React.Component {
    constructor(props) {
        super(props);
        this.onOk = () => {
            if (!this.state.newUrl) {
                this.props.onCancel();
            }
            const tags = this.state.tagList.split(' ').filter((t) => t.length > 0);
            let newUrl = this.state.newUrl;
            this.setState({
                newUrl: '',
                tagList: ''
            });
            if (!newUrl.match(/^(https?:|)/g)) {
                newUrl = '//' + newUrl;
            }
            this.props.onOk(newUrl, tags);
        };
        this.state = {
            newUrl: '',
            tagList: ''
        };
    }
    componentWillReceiveProps() {
        this.setState({ tagList: AppState_1.state.searchTerms.replace('*', '') });
    }
    render() {
        return (React.createElement(antd_1.Modal, { visible: this.props.visible, onCancel: this.props.onCancel, onOk: this.onOk },
            React.createElement(antd_1.Input, { value: this.state.newUrl, onChange: (e) => this.setState({ newUrl: e.target.value }), placeholder: "New post url" }),
            React.createElement(antd_1.Input, { value: this.state.tagList, onChange: (e) => this.setState({ tagList: e.target.value }), placeholder: "New tags" })));
    }
};
CreatePostModal = __decorate([
    mobx_react_1.observer
], CreatePostModal);
exports.default = CreatePostModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlUG9zdE1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1Bvc3RWaWV3L0NyZWF0ZVBvc3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsMkNBQXFDO0FBQ3JDLCtCQUFrRDtBQUNsRCwwQ0FBb0M7QUFNcEMsSUFBcUIsZUFBZSxHQUFwQyxNQUFxQixlQUFnQixTQUFRLEtBQUssQ0FBQyxTQU9qRDtJQUNELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFtQmIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNYLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTthQUNyQjtZQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDdEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDYixNQUFNLEVBQUUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQTtZQUNGLElBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLEdBQUcsSUFBSSxHQUFDLE1BQU0sQ0FBQTthQUNwQjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM5QixDQUFDLENBQUE7UUFoQ0EsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBQ0YsQ0FBQztJQUNELHlCQUF5QjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFDRCxNQUFNO1FBQ0wsT0FBTyxDQUNOLG9CQUFDLFlBQUssSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2Ysb0JBQUMsWUFBSyxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBQyxjQUFjLEdBQUU7WUFDdkgsb0JBQUMsWUFBSyxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBQyxVQUFVLEdBQUUsQ0FDOUcsQ0FDUixDQUFBO0lBQ0YsQ0FBQztDQWdCRCxDQUFBO0FBM0NvQixlQUFlO0lBRG5DLHFCQUFRO0dBQ1ksZUFBZSxDQTJDbkM7a0JBM0NvQixlQUFlIn0=