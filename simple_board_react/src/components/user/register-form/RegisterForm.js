import {Component} from "react";
import './RegisterForm.css';

export default class RegisterForm extends Component {
    render() {
        return (
            <div className="register-form">
                <div className="user-id">
                    <input
                        id="user-id-input"
                        type="text"
                        placeholder="ID"
                    />
                </div>
                <div className="user-password">
                    <input
                        id="user-password-input"
                        type="password"
                        placeholder="PASSWORD"
                    />
                </div>
                <div className="user-password">
                    <input
                        id="user-password-check-input"
                        type="password"
                        placeholder="PASSWORD CHECK"
                    />
                </div>
                <div className="register-form-button">
                    <button>REGISTER</button>
                </div>
            </div>
        );
    }
}