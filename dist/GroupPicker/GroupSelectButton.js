"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const stores_1 = require("../stores");
class GroupSelectButton extends React.Component {
    constructor(props) {
        super(props);
        this.setGroup = () => {
            stores_1.groupStore.setGroup(this.props.group);
        };
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("a", { onClick: this.setGroup, href: '#' + this.props.group.id, className: "groupLink" },
                this.props.group.name,
                " (",
                this.props.group.id,
                ")")));
    }
}
exports.default = GroupSelectButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTZWxlY3RCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR3JvdXBQaWNrZXIvR3JvdXBTZWxlY3RCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLHNDQUF1QztBQU12QyxNQUFxQixpQkFBa0IsU0FBUSxLQUFLLENBQUMsU0FBb0I7SUFDeEUsWUFBWSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQVNiLGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZixtQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQTtJQVZELENBQUM7SUFDRCxNQUFNO1FBQ0wsT0FBTyxDQUNOO1lBQ0MsMkJBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSTs7Z0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFBTSxDQUNqSSxDQUNILENBQUE7SUFDRixDQUFDO0NBSUQ7QUFkRCxvQ0FjQyJ9