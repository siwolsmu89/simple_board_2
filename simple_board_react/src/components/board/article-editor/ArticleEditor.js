import {Component} from "react";
import './ArticleEditor.css';

export default class ArticleEditor extends Component {
    render() {
        const {article} = this.props;

        return (
            <div className="article-write">
                <div className="article-title">
                    <input
                        id="title-input"
                        type="text"
                        placeholder="Write Title Here"
                        defaultValue={article?.title}
                    />
                </div>
                <div className="article-content">
                    <textarea
                        id="text-input"
                        spellCheck="false"
                        placeholder="Write Content Here"
                        defaultValue={article?.text}
                    />
                </div>
            </div>
        );
    }
}
