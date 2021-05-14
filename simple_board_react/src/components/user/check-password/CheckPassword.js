import {Component} from "react";
import './CheckPassword.css';

export default class CheckPassword extends Component {
    render() {
        return (
            <div className="check-password">
                <div className="user-password">
                    <input
                        id="user-password-input"
                        type="password"
                        placeholder="PASSWORD"
                    />
                </div>
                <div className="check-password-button">
                    <button>SUBMIT</button>
                </div>
            </div>
        );
    }
}