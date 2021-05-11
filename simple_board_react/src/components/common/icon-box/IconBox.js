import {Component} from "react";
import Icon from "./icon/Icon";

export default class IconBox extends Component {

    render() {
        const { icons } = this.props;
        const iconItems = icons.map(
            ({link, icon}) => (
                <Icon
                    link={link}
                    icon={icon}
                />
            )
        );

        return (
            <div className="icon-box">
                { iconItems }
            </div>
        );
    }
}