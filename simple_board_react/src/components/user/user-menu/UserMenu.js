import {Component} from "react";
import './UserMenu.css';

export default class UserMenu extends Component {
    render() {
        return (
            <div className="user-menu">
                <div className="user-update">
                    <button>UPDATE ACCOUNT</button>
                </div>
                <div className="user-exit">
                    <button>DELETE ACCOUNT</button>
                </div>
            </div>
        );
    }
}