import {Component} from "react";
import {connect} from "react-redux";
import BoardApp from "./components/board/BoardApp";
import UserApp from "./components/user/UserApp";
import Spinner from "./components/common/spinner/Spinner";

class App extends Component {
    render() {
        const { spinning } = this.props;

        return (
            <div>
                <Spinner
                    spinning={ spinning }
                />
                <BoardApp />
                <UserApp />
            </div>
        );
    }
}


function selector(state) {
    const { spinning } = state;
    return {
        spinning
    };
}

export default connect(selector)(App);