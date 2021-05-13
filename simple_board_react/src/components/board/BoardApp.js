import {Component} from "react";
import {connect} from "react-redux";
import {Route} from 'react-router-dom';
import ListContainer from "./container/list-container/ListContainer";
import ArticleListTable from "./article-list-table/ArticleListTable";
import Pagination from "./pagination/Pagination";
import {getArticles, movePage} from "../../redux/action/axiosActions";
import EditContainer from "./container/edit-container/EditContainer";
import DetailContainer from "./container/detail-container/DetailContainer";
import './BoardApp.css';

class BoardApp extends Component {

    componentDidMount() {
        this.props.dispatch(getArticles(this.props.pagination));
    }

    render() {
        const {dispatch, articles, pagination} = this.props;
        console.log("a",articles);
        console.log("p",pagination);

        return (
            <div className="board-app">
                <Route exact path="/board/">
                    <ListContainer
                        articleList={
                            <ArticleListTable
                                articles={articles}
                            />
                        }
                        pagination={
                            <Pagination
                                pagination={pagination}
                                movePage={
                                    pagination => dispatch(movePage(pagination))
                                }
                            />
                        }
                    />
                </Route>
                <Route exact path="/board/edit">
                    <EditContainer />
                </Route>
                <Route
                    exact path="/board/detail/:no"
                    render={ (states) =>
                        <DetailContainer
                            {...states}
                            articles={articles}
                        />
                    }
                />
            </div>
        );
    }
}

function selector(state) {
    const {articles, pagination} = state;
    return {articles, pagination};
}

export default connect(selector)(BoardApp);