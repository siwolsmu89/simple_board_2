import {Component} from "react";
import Icon from "./icon/Icon";
import './IconBox.css';

export default class IconBox extends Component {

    render() {
        const {icons} = this.props;
        const iconItems = icons.map(
            (icon) => (
                <Icon
                    key={icon.imgSrc}
                    icon={icon}
                />
            )
        );

        return (
            <div className="icon-box">
                {iconItems}
            </div>
        );
    }
}