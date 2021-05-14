import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import LoginForm from "../../login-form/LoginForm";
import {REGISTER_ICON} from "../../../common/icon-box/IconIndex";

export default class GuestContainer extends Component {
    render() {
        const icons = [REGISTER_ICON];

        return (
            <div className="simple-board-container guest-container">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={icons}
                    />
                </section>
                <section className="login-form-wrapper">
                    <LoginForm />
                </section>
            </div>
        );
    }
}