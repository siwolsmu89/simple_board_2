import {Component} from "react";
import {connect} from "react-redux";
import {Route} from 'react-router-dom';
import ListContainer from "./container/list-container/ListContainer";
import ArticleListTable from "./article-list-table/ArticleListTable";
import Pagination from "./pagination/Pagination";
import {addNewArticle, editArticle, getArticles, movePage, updateArticleView} from "../../redux/action/axiosActions";
import EditContainer from "./container/edit-container/EditContainer";
import DetailContainer from "./container/detail-container/DetailContainer";
import {modalShow} from "../../redux/action/actions";

class BoardApp extends Component {

    componentDidMount() {
        this.props.dispatch(getArticles(this.props.pagination));
    }

    render() {
        const {dispatch, articles, pagination} = this.props;

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
                <Route
                    exact path="/board/edit/:no?"
                    render={(states) =>
                        <EditContainer
                            {...states}
                            articles={articles}
                            addArticle={article => dispatch(addNewArticle(article, pagination))}
                            editArticle={article => dispatch(editArticle(article, pagination))}
                            modalOpen={modal => dispatch(modalShow(modal))}
                        />
                    }
                />
                <Route
                    exact path="/board/detail/:no"
                    render={ (states) =>
                        <DetailContainer
                            {...states}
                            articles={articles}
                            updateViewCount={
                                no => dispatch(updateArticleView(no))
                            }
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