import {Component} from "react";
import './RegisterForm.css';

export default class RegisterForm extends Component {
    render() {
        const {addUser} = this.props;
        const addNewUser = function () {
            console.log("addNew");
            const userId = document.querySelector("#user-id-input").value;
            const password = document.querySelector("#user-password-input").value;
            const passwordCheck = document.querySelector("#user-password-check-input").value;

            if (!userId || !password || password !== passwordCheck) {
                return false;
            } else {
                console.log("addNew 22");
                addUser({userId, password});
            }
        }


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
                    <button
                        onClick={() => addNewUser()}
                    >
                        REGISTER
                    </button>
                </div>
            </div>
        );
    }
}