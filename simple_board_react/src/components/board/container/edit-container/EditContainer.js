import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import {LIST_ICON, REFRESH_ICON, SAVE_ICON, WRITE_ICON} from "../../../common/icon-box/IconIndex";
import ArticleEditor from "../../article-editor/ArticleEditor";

export default class EditContainer extends Component {
    render() {
        const {} = this.props;
        let refreshIcon = { ...REFRESH_ICON, onClick : function (e) {
                e.preventDefault();
                const inputAll = document.querySelectorAll("input");
                for (const input of inputAll) {
                    input.value = '';
                }
            } };

        const icons = [SAVE_ICON, refreshIcon, LIST_ICON];

        return (
            <div className="simple-board-container edit-container">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={icons}
                    />
                </section>
                <section className="article-editor-wrapper">
                    <ArticleEditor />
                </section>
            </div>
        );
    }
}