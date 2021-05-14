import {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import GuestContainer from "./container/guest-container/GuestContainer";
import RegisterContainer from "./container/register-container/RegisterContainer";
import UserContainer from "./container/user-container/UserContainer";

class UserApp extends Component {
    render() {
        return (
            <div className="user-app">
                <Route exact path="/user/">
                    <GuestContainer />
                </Route>
                <Route exact path="/user/register">
                    <RegisterContainer />
                </Route>
                <Route exact path="/user/1">
                    <UserContainer />
                </Route>
            </div>
        );
    }
}

function selector(state) {
    return state;
}

export default connect(selector)(UserApp);