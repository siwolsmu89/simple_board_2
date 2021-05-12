import {Component} from "react";
import ArticleListItem from "./article-list-item/ArticleListItem";

export default class ArticleList extends Component {

    render() {
        const {articles} = this.props;
        const articleItems = articles.map(
            (article) => (
                <ArticleListItem
                    article={article}
                />
            )
        );

        return (
            <div>
                <table className="list-table">
                <thead>
                <tr className="board-column">
                    <th>No.</th>
                    <th>Title</th>
                    <th>Views</th>
                </tr>
                </thead>
                <tbody>
                    {articleItems}
                </tbody>
            </table>
            </div>
        );
    }
}