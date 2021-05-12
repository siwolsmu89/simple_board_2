import {Component} from "react";
import {Link} from "react-router-dom";
import './Icon.css';

export default class Icon extends Component {
    render() {
        const {icon} = this.props;

        return (
            <Link to={icon.link}>
                <img
                    className="icon"
                    src={icon.imgSrc}
                    alt={icon.imgAlt}
                />
            </Link>
        );
    }
}