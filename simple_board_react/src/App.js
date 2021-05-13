import {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
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
                <Router>
                    <Route path="/">
                        <Link to="/board">
                            [Board]
                        </Link>
                        <Link to="/user">
                            [User]
                        </Link>
                    </Route>
                    <Route exact path="/">
                        <div>
                            HOME
                        </div>
                    </Route>
                    <Route path="/board">
                       <BoardApp />
                    </Route>
                    <Route path="/user">
                       <UserApp />
                    </Route>
                </Router>
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