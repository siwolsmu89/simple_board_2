import {Component} from "react";
import {connect} from "react-redux";

class UserApp extends Component {
    render() {
        return (
            <div>
                UserApp
            </div>
        );
    }
}

function selector(state) {
    return state;
}

export default connect(selector)(UserApp);