import {Component} from "react";
import './LoginForm.css';

export default class LoginForm extends Component {
    render() {
        const {login} = this.props;
        let user = {
            userId: '',
            password: ''
        };

        return (
            <div className="login-form">
                <div className="user-id">
                    <input
                        id="user-id-input"
                        type="text"
                        placeholder="ID"
                        onChange={(e) => {
                            user.userId = e.target.value;
                        }}
                    />
                </div>
                <div className="user-password">
                    <input
                        id="user-password-input"
                        type="password"
                        placeholder="PASSWORD"
                        onChange={(e) => {
                            user.password = e.target.value;
                        }}
                    />
                </div>
                <div className="login-form-button">
                    <button
                        onClick={() => {
                            login(user);
                            document.querySelector("#user-id-input").value = '';
                            document.querySelector("#user-password-input").value = '';
                        }}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        );
    }
}