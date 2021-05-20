import {Component} from "react";
import './RegisterForm.css';

export default class RegisterForm extends Component {

    checkIdValidation (e) {
        const regExp = /^[a-zA-Z]/;
        const $inputError = document.querySelector("#id-input-error");
        $inputError.classList.remove("valid");
        $inputError.classList.add("invalid");
        let result;

        if (!e.target.value) {
            result = "Please enter ID";
        } else if (!regExp.test(e.target.value)) {
            result = "ID must start with alphabet";
        } else if (e.target.value.length < 4 || e.target.value.length > 15) {
            result = "ID must use 4 ~ 15 words";
        } else {
            result = "OK";
            $inputError.classList.remove("invalid");
            $inputError.classList.add("valid");
        }

        $inputError.textContent = result;
    }

    checkPasswordValidation(e) {
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
        const $inputError = document.querySelector("#password-input-error");
        $inputError.classList.remove("valid");
        $inputError.classList.add("invalid");
        let result;

        if (!e.target.value) {
            result = "Please enter Password";
        } else if (!regExp.test(e.target.value)) {
            result = "Password must contain 1 alphabet, 1 number and 1 special letter";
        } else if (e.target.value.length < 4 || e.target.value.length > 15) {
            result = "Password must use 4 ~ 15 words";
        } else {
            result = "OK";
            $inputError.classList.remove("invalid");
            $inputError.classList.add("valid");
        }

        $inputError.textContent = result;
    }

    checkPasswordIsSame(e) {
        const $password = document.querySelector("#user-password-input");
        const $inputError = document.querySelector("#password-check-input-error");
        $inputError.classList.remove("valid");
        $inputError.classList.add("invalid");
        let result;

        if (e.target.value !== $password.value) {
            result = "Check password again";
        } else {
            result = "OK";
            $inputError.classList.remove("invalid");
            $inputError.classList.add("valid");
        }


        $inputError.textContent = result;
    }

    render() {
        const {addUser} = this.props;
        const addNewUser = function () {
            const userId = document.querySelector("#user-id-input").value;
            const password = document.querySelector("#user-password-input").value;
            const passwordCheck = document.querySelector("#user-password-check-input").value;

            if (!userId || !password || password !== passwordCheck) {
                return false;
            } else {
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
                        onKeyUp={this.checkIdValidation}
                    />
                    <span
                        className="input-error"
                        id="id-input-error"
                    >
                    </span>
                </div>
                <div className="user-password">
                    <input
                        id="user-password-input"
                        type="password"
                        placeholder="PASSWORD"
                        onChange={this.checkPasswordValidation}
                    />
                    <span
                        className="input-error"
                        id="password-input-error"
                    >
                    </span>
                </div>
                <div className="user-password">
                    <input
                        id="user-password-check-input"
                        type="password"
                        placeholder="PASSWORD CHECK"
                        onChange={this.checkPasswordIsSame}
                    />
                    <span
                        className="input-error"
                        id="password-check-input-error"
                    >
                    </span>
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