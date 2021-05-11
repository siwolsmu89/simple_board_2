import {Component} from "react";
import {Link} from "react-router-dom";

export default class Icon extends Component {
    render() {
        const { link, icon } = this.props;

        return (
            <Link to={ link }>
                <img
                    src={ icon.src }
                    alt={ icon.alt }
                />
            </Link>
        );
    }
}