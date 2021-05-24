import {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import GuestContainer from "./container/guest-container/GuestContainer";
import RegisterContainer from "./container/register-container/RegisterContainer";
import UserContainer from "./container/user-container/UserContainer";
import {addUser, checkLogin, login} from "../../redux/action/axiosActions";
import RegisterForm from "./register-form/RegisterForm";
import {modalShow} from "../../redux/action/actions";
import LoginForm from "./login-form/LoginForm";

class UserApp extends Component {

    componentDidMount() {
        this.props.dispatch(checkLogin());
    }

    render() {
        const {dispatch, loginStatus} = this.props;
        console.log(loginStatus);

        let mainComponent;
        if (!loginStatus.isLogin || !loginStatus.loginId) {
            mainComponent = (<GuestContainer
                loginForm={
                    <LoginForm
                        login={(user) => dispatch(login(user))}
                    />
                }
            />);
        } else {
            mainComponent = (<UserContainer />);
        }

        return (
            <div className="user-app">
                <Route exact path="/user/">
                    {mainComponent}
                </Route>
                <Route exact path="/user/register">
                    <RegisterContainer
                        modalOpen={modal => dispatch(modalShow(modal))}
                        registerForm={
                            <RegisterForm
                                addUser={(user)=>dispatch(addUser(user))}
                            />
                        }
                    />
                </Route>
            </div>
        );
    }
}

function selector(state) {
    const {loginStatus} = state;
    return {loginStatus};
}

export default connect(selector)(UserApp);