import {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import GuestContainer from "./container/guest-container/GuestContainer";

class UserApp extends Component {
    render() {
        return (
            <div className="user-app">
                <Route exact path="/user/">
                    <GuestContainer />
                </Route>
                <Route exact path="/user/register">

                </Route>
            </div>
        );
    }
}

function selector(state) {
    return state;
}

export default connect(selector)(UserApp);