import {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BoardApp from "./components/board/BoardApp";
import UserApp from "./components/user/UserApp";
import Spinner from "./components/common/spinner/Spinner";
import NavigationBar from "./components/common/navigation-bar/NavigationBar";
import './App.css';
import Home from "./components/common/home/Home";
import Modal from "./components/common/modal/Modal";
import {modalHide} from "./redux/action/actions";

class App extends Component {
    render() {
        const { dispatch, spinning, modal } = this.props;

        return (
            <div className="simple-board-app">
                <Spinner
                    spinning={ spinning }
                />
                <Modal
                    isHide={modal.isHide}
                    dialog={modal.dialog}
                    confirmFunction={() => modal.confirmFunction}
                    modalHide={() => dispatch(modalHide())}
                />
                <Router>
                    <Route path="/">
                        <NavigationBar/>
                    </Route>
                    <section className="simple-board-app-body">
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/board">
                            <BoardApp />
                        </Route>
                        <Route path="/user">
                            <UserApp />
                        </Route>
                    </section>
                </Router>
            </div>
        );
    }
}


function selector(state) {
    const { spinning, modal } = state;
    return {
        spinning, modal
    };
}

export default connect(selector)(App);