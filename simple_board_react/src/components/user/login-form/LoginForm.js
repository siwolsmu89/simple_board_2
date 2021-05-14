import {Component} from "react";
import './LoginForm.css';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="login-form">
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
                <div className="login-form-button">
                    <button>LOGIN</button>
                </div>
            </div>
        );
    }
}