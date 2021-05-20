import {Component} from "react";
import './RegisterForm.css';

export default class RegisterForm extends Component {

    checkIdValidation (e) {
        const regExp = /^[a-zA-Z]/;
        const $inputStatus = document.querySelector("#id-input-status");
        $inputStatus.classList.remove("valid");
        $inputStatus.classList.add("invalid");
        let result;

        if (!e.target.value) {
            result = "Please enter ID";
        } else if (!regExp.test(e.target.value)) {
            result = "ID must start with alphabet";
        } else if (e.target.value.length < 4 || e.target.value.length > 15) {
            result = "ID must use 4 ~ 15 words";
        } else {
            result = "OK";
            $inputStatus.classList.remove("invalid");
            $inputStatus.classList.add("valid");
        }

        $inputStatus.textContent = result;
    }

    checkPasswordValidation(e) {
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
        const $inputStatus = document.querySelector("#password-input-status");
        $inputStatus.classList.remove("valid");
        $inputStatus.classList.add("invalid");
        let result;

        if (!e.target.value) {
            result = "Please enter Password";
            document.querySelector("#user-password-check-input").setAttribute("disabled", "disabled");
        } else if (!regExp.test(e.target.value)) {
            result = "Password must contain 1 alphabet, 1 number and 1 special letter";
        } else if (e.target.value.length < 4 || e.target.value.length > 15) {
            result = "Password must use 4 ~ 15 words";
        } else {
            result = "OK";
            $inputStatus.classList.remove("invalid");
            $inputStatus.classList.add("valid");
            document.querySelector("#user-password-check-input").removeAttribute("disabled");
        }

        $inputStatus.textContent = result;
    }

    checkPasswordIsSame(e) {
        const $password = document.querySelector("#user-password-input");
        const $inputStatus = document.querySelector("#password-check-input-status");
        $inputStatus.classList.remove("valid");
        $inputStatus.classList.add("invalid");
        let result;

        if (e.target.value !== $password.value) {
            result = "Check password again";
        } else {
            result = "OK";
            $inputStatus.classList.remove("invalid");
            $inputStatus.classList.add("valid");
        }


        $inputStatus.textContent = result;
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
                const allInputStatus = document.querySelectorAll(".input-status");
                for (const inputStatus of allInputStatus) {
                    if (!inputStatus.classList.contains("valid")) {
                        return false;
                    }
                }

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
                        className="input-status"
                        id="id-input-status"
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
                        className="input-status"
                        id="password-input-status"
                    >
                    </span>
                </div>
                <div className="user-password">
                    <input
                        id="user-password-check-input"
                        type="password"
                        placeholder="PASSWORD CHECK"
                        disabled
                        onChange={this.checkPasswordIsSame}
                    />
                    <span
                        className="input-status"
                        id="password-check-input-status"
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