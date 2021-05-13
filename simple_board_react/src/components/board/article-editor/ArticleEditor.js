import {Component} from "react";
import './ArticleEditor.css';

export default class ArticleEditor extends Component {
    render() {
        return (
            <div className="article-write">
                <div className="article-title">
                    <input
                        id="title-input"
                        type="text"
                        placeholder="Write Title Here"
                    />
                </div>
                <div className="article-content">
                    <textarea
                        id="text-input"
                        spellCheck="false"
                        placeholder="Write Content Here"
                    />
                </div>
            </div>
        );
    }
}
