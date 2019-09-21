"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const antd_1 = require("antd");
const AppState_1 = require("../../AppState");
const Previewer_1 = require("./Previewer");
require("./PostItem.css");
class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleViewMore = () => {
            if (AppState_1.state.viewMorePost == this.props.post.id) {
                AppState_1.state.viewMorePost = -1;
            }
            else {
                AppState_1.state.viewMorePost = this.props.post.id;
            }
        };
        this.cardTitle = () => {
            const postDate = new Date(this.props.post.postDate * 1000);
            return `${AppState_1.state.userFromId(this.props.post.poster).name} - ${postDate.toDateString()} (${this.props.post.id})`;
        };
        this.link = () => {
            return React.createElement("a", { target: '_blank', href: this.props.post.url, className: "postLink" }, this.props.post.url);
        };
        this.renderNonHtml = () => {
            const { url, mime, hasPreview } = this.props.post;
            if (mime.startsWith('video')) {
                return React.createElement("video", { src: url, className: "standaloneMultimedia" });
            }
            if (mime.startsWith('audio')) {
                return React.createElement("audio", { src: url, className: "standaloneMultimedia" });
            }
            if (mime.startsWith('image')) {
                return React.createElement("img", { src: url, className: "standaloneMultimedia" });
            }
            if (mime == 'text/html' || !hasPreview) {
                return React.createElement("div", null,
                    React.createElement("p", null, "No preview found"),
                    React.createElement("p", { className: "idk" }, "?"));
            }
            if (mime == 'application/pdf') {
                return React.createElement("embed", { src: url, type: mime, className: "standaloneMultimedia" });
            }
            return React.createElement("div", null,
                React.createElement("p", null,
                    "MIME ",
                    mime,
                    " type not understood"),
                React.createElement("p", { className: "idk" }, "?"));
        };
        this.reloadPreview = () => {
            if (this.props.post.hasPreview) {
                console.log('reloading preview');
                AppState_1.state.ws.sendRpc('getPreview', {
                    group: AppState_1.state.currentGroup.id,
                    post: this.props.post.id
                })
                    .then((res) => {
                    if (Object.keys(res.result).length > 0) {
                        this.setState({ preview: res.result });
                    }
                    else {
                        this.setState({ preview: undefined });
                    }
                })
                    .catch(console.error);
            }
        };
        this.state = {
            preview: undefined
        };
        this.reloadPreview();
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.post) != JSON.stringify(this.props.post)) {
            console.log('got new props');
            this.setState({ preview: undefined });
            this.reloadPreview();
        }
    }
    //performance enhancement? (doesn't trigger when lambda props are changed)
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.post.id != this.props.post.id ||
            nextProps.post.mime != this.props.post.mime ||
            nextProps.viewMore != this.props.viewMore ||
            nextProps.post.hasPreview != this.props.post.hasPreview ||
            (JSON.stringify(this.state.preview) != JSON.stringify(nextState.preview));
    }
    render() {
        return (React.createElement(antd_1.Card, { actions: [
                React.createElement(antd_1.Button, { onClick: this.handleViewMore }, "View More"),
                React.createElement(antd_1.Button, { onClick: () => AppState_1.state.openPostModal(this.props.post, this.state.preview) }, "Details")
            ], key: this.props.post.id + '', className: "postItem", title: this.link() },
            React.createElement(antd_1.Card.Meta, { description: this.cardTitle() }),
            React.createElement("div", { className: "postBody" },
                !!this.state.preview && React.createElement(Previewer_1.default, { preview: this.state.preview, viewMore: this.props.viewMore }),
                !this.state.preview && this.renderNonHtml())));
    }
}
exports.default = PostItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvUG9zdFZpZXcvUG9zdEl0ZW0vUG9zdEl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLCtCQUEwQztBQUUxQyw2Q0FBc0M7QUFDdEMsMkNBQW9DO0FBQ3BDLDBCQUF1QjtBQU12QixNQUFxQixRQUFTLFNBQVEsS0FBSyxDQUFDLFNBRTFDO0lBQ0QsWUFBWSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQTZDYixtQkFBYyxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFHLGdCQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsZ0JBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDdkI7aUJBQ0k7Z0JBQ0osZ0JBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO2FBQ3ZDO1FBQ0YsQ0FBQyxDQUFBO1FBQ0QsY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEQsT0FBTyxHQUFHLGdCQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUE7UUFDL0csQ0FBQyxDQUFBO1FBQ0QsU0FBSSxHQUFHLEdBQWdCLEVBQUU7WUFDeEIsT0FBTywyQkFBRyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMs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