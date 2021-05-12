import {Component} from "react";
import {Link} from "react-router-dom";

export default class ArticleListItem extends Component {

    render() {
        const {article} = this.props;
        const {no, writer, title, text, views, createdDate, lastUpdatedDate} = article;

        return (
            <tr
                key={no}
                className="board-item"
            >
                <td className="article-no">{no}</td>
                <td className="article-title">
                    <Link
                        to={"/detail/view/" + no}
                    >
                        {title}
                    </Link>
                </td>
                <td className="article-views">{views}</td>
            </tr>
        );
    }
}