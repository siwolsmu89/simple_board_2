import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import {DELETE_ICON, EDIT_ICON, LIST_ICON} from "../../../common/icon-box/IconIndex";
import ArticleDetailView from "../../article-detail-view/ArticleDetailView";

export default class DetailContainer extends Component {
    componentDidMount() {
        const {updateViewCount} = this.props;
        const {no} = this.props.match.params;

        if (no) {
            updateViewCount(Number(no));
        }
    }

    render() {
        const {articles} = this.props;
        const {no} = this.props.match.params;
        const detailArticle = articles.find( article => article.no === Number(no));

        const editIcon = {
            ...EDIT_ICON,
            link:'/board/edit/'+no
        };

        const deleteIcon = {
            ...DELETE_ICON,
            functions: {
                onClick: function() {
                    alert("delete!");
                }
            }
        };
        const icons = [deleteIcon,editIcon, LIST_ICON];

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