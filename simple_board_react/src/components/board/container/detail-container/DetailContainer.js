import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import {EDIT_ICON, LIST_ICON} from "../../../common/icon-box/IconIndex";
import ArticleDetailView from "../../article-detail-view/ArticleDetailView";

export default class DetailContainer extends Component {

    componentDidMount() {
        const {updateViewCount} = this.props;
        const {no} = this.props.match.params;

        updateViewCount(Number(no));
    }

    render() {
        const {articles} = this.props;
        const {no} = this.props.match.params;
        const detailArticle = articles.find( article => article.no === Number(no));
        const icons = [EDIT_ICON, LIST_ICON];

        return (
            <div className="simple-board-container detail-container">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={icons}
                    />
                </section>
                <section className="article-detail-wrapper">
                    <ArticleDetailView
                        detailArticle={detailArticle}
                    />
                </section>
            </div>
        );
    }
}