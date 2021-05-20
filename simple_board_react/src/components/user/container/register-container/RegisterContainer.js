import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import {CANCEL_ICON, REFRESH_ICON} from "../../../common/icon-box/IconIndex";

export default class RegisterContainer extends Component {
    render() {
        const {registerForm, modalOpen} = this.props;
        const refreshIcon = {
            ...REFRESH_ICON,
            functions: {
                onClick : function (e) {
                    e.preventDefault();

                    const modal = {
                        dialog: 'Are you sure to refresh all changes?',
                        confirmFunction: function () {
                            const inputs = document.querySelectorAll("input");
                            for (const input of inputs) {
                                input.value = '';
                            }
                            document.querySelector("#user-password-check-input").setAttribute("disabled", "disabled");

                            const inputErrors = document.querySelectorAll(".input-status");
                            for (const inputError of inputErrors) {
                                inputError.textContent = null;
                            }
                        }
                    }
                    modalOpen(modal);
                }
            }
        };

        const icons = [refreshIcon, CANCEL_ICON];

        return (
            <div className="simple-board-container register-container">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={icons}
                    />
                </section>
                <section className="register-form-wrapper">
                    {registerForm}
                </section>
            </div>
        );
    }
}