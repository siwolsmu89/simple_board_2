import {Component} from "react";
import './ArticleDetailView.css';

export default class ArticleDetailView extends Component {
    convertArticleText(text) {
        if(!text) {
            return;
        }

        const textLines = text.split("\n");
        return textLines.map(
            (line, index) => (
                <span key={index}>
                    {line}
                    <br/>
                </span>
            )
        );
    }

    render() {
        const {detailArticle} = this.props;

        return (
            <div className="article-detail-view">
                <div className="article-detail-title">
                    {detailArticle?.title}
                </div>
                <div className="article-detail-content">
                    {this.convertArticleText(detailArticle?.text)}
                </div>
            </div>
        );
    }
}