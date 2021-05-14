import {Component} from "react";
import {Link} from "react-router-dom";
import './NavigationBar.css';
import {BOARD_ICON, GUEST_USER_ICON, HOME_ICON} from "../icon-box/IconIndex";
import IconBox from "../icon-box/IconBox";

export default class NavigationBar extends Component {
    render() {
        const icons = [HOME_ICON, BOARD_ICON, GUEST_USER_ICON]
        return (
            <div className="navigation-bar">
                <IconBox
                    icons={icons}
                />
            </div>
        );
    }
}