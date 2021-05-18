import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import {LIST_ICON, REFRESH_ICON, SAVE_ICON} from "../../../common/icon-box/IconIndex";
import ArticleEditor from "../../article-editor/ArticleEditor";

export default class EditContainer extends Component {
    render() {
        const {articles, addArticle, editArticle, modalOpen} = this.props;
        const {no} = this.props.match.params;
        const detailArticle = articles.find( article => article.no === Number(no));

        const refreshIcon = {
            ...REFRESH_ICON,
            functions: {
                onClick : function (e) {
                    e.preventDefault();

                    const modal = {
                        dialog: 'Are you sure to refresh all changes?',
                        confirmFunction: function () {
                            const titleInput = document.querySelector("#title-input");
                            const textInput = document.querySelector("#text-input");

                            if (!titleInput || !textInput) {
                                return;
                            }
                            if (!detailArticle) {
                                titleInput.value = '';
                                textInput.value= '';
                            } else {
                                titleInput.value = detailArticle.title;
                                textInput.value = detailArticle.text;
                            }
                        }
                    }
                    modalOpen(modal);
                }
            }
        };

        const saveIcon = {
            ...SAVE_ICON,
            link: no ? '/board/detail/'+no : '/board',
            functions: {
                onClick: function (e) {
                    const title = document.querySelector("#title-input").value;
                    const text = document.querySelector("#text-input").value;
                    if (!title || !text) {
                        e.preventDefault();
                        const modal = {
                            dialog: 'Title or Text is Empty.',
                            type: 'error'
                        }
                        modalOpen(modal);
                        return;
                    }
                    if (!detailArticle) {
                        addArticle({title, text});
                    } else {
                        editArticle({...detailArticle, title, text});
                    }
                }
            }
        }

        const icons = [saveIcon, refreshIcon, LIST_ICON];

        return (
            <div className="simple-board-container edit-container">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={icons}
                    />
                </section>
                <section className="article-editor-wrapper">
                    <ArticleEditor
                        article={detailArticle}
                    />
                </section>
            </div>
        );
    }
}