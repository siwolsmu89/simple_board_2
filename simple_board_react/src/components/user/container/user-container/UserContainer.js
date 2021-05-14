import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import UserMenu from "../../user-menu/UserMenu";

export default class UserContainer extends Component {
    render() {
        return (
            <div>
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={[]}
                    />
                </section>
                <section className="user-menu-wrapper">
                    <UserMenu />
                </section>
            </div>
        );
    }
}