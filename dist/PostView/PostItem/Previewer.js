"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Previewer extends React.Component {
    constructor(props) {
        super(props);
        this.renderTitle = () => {
            const prev = this.props.preview;
            if (!!prev.author && !!prev.logo) {
                return React.createElement("p", { className: "secondTitle" },
                    prev.author,
                    " - ",
                    React.createElement("img", { src: prev.logo }));
            }
            else if (!!prev.author) {
                return React.createElement("p", { className: "secondTitle" }, prev.author);
            }
            else if (!!prev.logo) {
                return React.createElement("p", { className: "secondTitle" },
                    React.createElement("img", { src: prev.logo }));
            }
            return React.createElement(React.Fragment, null);
        };
        this.renderPreview = () => {
            const prev = this.props.preview;
            if (!!prev.frame && this.props.viewMore) {
                return React.createElement("iframe", { src: prev.frame, allowFullScreen: true, className: !prev.author && !prev.logo ? "standaloneMultimedia" : "multimedia" });
            }
            if (!!prev.video) {
                return React.createElement("video", { src: prev.video, className: "multimedia" });
            }
            if (!!prev.audio) {
                return React.createElement("audio", { src: prev.audio, className: "multimedia" });
            }
            if (!!prev.image) {
                return React.createElement("img", { src: prev.image, className: "multimedia" });
            }
            return React.createElement("p", null, "No preview available");
        };
    }
    render() {
        const preview = this.props.preview;
        return (React.createElement("div", { style: { overflowY: this.props.viewMore ? 'auto' : 'hidden', width: '100%', height: '100%' } },
            !!preview.title && React.createElement("h3", null, preview.title),
            this.renderPreview(),
            this.renderTitle(),
            this.props.viewMore && !!preview.description && React.createElement("pre", { style: { whiteSpace: 'pre-wrap' } },
                React.createElement("p", null, preview.description))));
    }
}
exports.default = Previewer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1Bvc3RWaWV3L1Bvc3RJdGVtL1ByZXZpZXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFTOUIsTUFBcUIsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUFvQjtJQUNoRSxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBYWIsZ0JBQVcsR0FBRyxHQUFnQixFQUFFO1lBQy9CLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1lBQy9CLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hDLE9BQU8sMkJBQUcsU0FBUyxFQUFDLGFBQWE7b0JBQUUsSUFBSSxDQUFDLE1BQU07O29CQUFJLDZCQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUksQ0FBQTthQUM1RTtpQkFDSSxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN0QixPQUFPLDJCQUFHLFNBQVMsRUFBQyxhQUFhLElBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBSyxDQUFBO2FBQ25EO2lCQUNJLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BCLE9BQU8sMkJBQUcsU0FBUyxFQUFDLGFBQWE7b0JBQUMsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBSSxDQUFBO2FBQzVEO1lBQ0QsT0FBTyx5Q0FBSyxDQUFBO1FBQ2IsQ0FBQyxDQUFBO1FBQ0Qsa0JBQWEsR0FBRyxHQUFnQixFQUFFO1lBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1lBQy9CLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZDLE9BQU8sZ0NBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ2YsZUFBZSxRQUNmLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUNyRSxDQUFBO2FBQ1Q7WUFDRCxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixPQUFPLCtCQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxZQUFZLEdBQVMsQ0FBQTthQUM5RDtZQUNELElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sK0JBQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLFlBQVksR0FBUyxDQUFBO2FBQzlEO1lBQ0QsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsT0FBTyw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUMsWUFBWSxHQUFPLENBQUE7YUFDMUQ7WUFDRCxPQUFPLHNEQUEyQixDQUFBO1FBQ25DLENBQUMsQ0FBQTtJQTVDRCxDQUFDO0lBQ0QsTUFBTTtRQUNMLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQ2xDLE9BQU8sQ0FDTiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztZQUM3RixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxnQ0FBSyxPQUFPLENBQUMsS0FBSyxDQUFNO1lBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSw2QkFBSyxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDO2dCQUFFLCtCQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUssQ0FBTSxDQUNwSCxDQUNOLENBQUE7SUFDRixDQUFDO0NBa0NEO0FBaERELDRCQWdEQyJ9