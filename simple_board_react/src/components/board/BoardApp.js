import {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListContainer from "./container/list-container/ListContainer";
import ArticleList from "./article-list/ArticleList";
import Pagination from "./pagination/Pagination";

class BoardApp extends Component {
    render() {
        const {articles, pagination} = this.props;

        return (
            <div className="board-app">
                <Router>
                    <Route exact path="/board/">
                        <ListContainer
                            articleList={
                                <ArticleList
                                    articles={[]}
                                />
                            }
                            pagination={
                                <Pagination
                                    pagination={{currentPage:1, lastPage:6}}
                                    movePage={()=>{}}
                                />
                            }
                        />
                    </Route>
                </Router>
            </div>
        );
    }
}

function selector(state) {
    return state;
}

export default connect(selector)(BoardApp);