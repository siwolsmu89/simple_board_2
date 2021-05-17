import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import RegisterForm from "../../register-form/RegisterForm";
import {CANCEL_ICON, REFRESH_ICON} from "../../../common/icon-box/IconIndex";

export default class RegisterContainer extends Component {
    render() {
        const icons = [REFRESH_ICON, CANCEL_ICON];

        return (
            <div className="simple-board-container register-container">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={icons}
                    />
                </section>
                <section className="register-form-wrapper">
                    <RegisterForm />
                </section>
            </div>
        );
    }
}