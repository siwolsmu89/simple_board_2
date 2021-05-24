import {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import GuestContainer from "./container/guest-container/GuestContainer";
import RegisterContainer from "./container/register-container/RegisterContainer";
import UserContainer from "./container/user-container/UserContainer";
import {addUser, login} from "../../redux/action/axiosActions";
import RegisterForm from "./register-form/RegisterForm";
import {modalShow} from "../../redux/action/actions";
import LoginForm from "./login-form/LoginForm";

class UserApp extends Component {
    render() {
        const {dispatch} = this.props;

        return (
            <div className="user-app">
                <Route exact path="/user/">
                    <UserContainer />
                </Route>
                <Route exact path="/user/">
                    <GuestContainer
                        loginForm={
                            <LoginForm
                                login={(user) => dispatch(login(user))}
                            />
                        }
                    />
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
    return state;
}

export default connect(selector)(UserApp);