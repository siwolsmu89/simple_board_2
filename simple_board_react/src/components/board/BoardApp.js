import {Component} from "react";
import {connect} from "react-redux";

class BoardApp extends Component {
    render() {
        return (
            <div>
                Board App
            </div>
        );
    }
}

function selector(state) {
    return state;
}

export default connect(selector)(BoardApp);