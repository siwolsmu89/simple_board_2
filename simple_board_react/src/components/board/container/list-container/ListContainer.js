import {Component} from "react";
import IconBox from "../../../common/icon-box/IconBox";
import {WRITE_ICON} from "../../../common/icon-box/IconIndex";

export default class ListContainer extends Component {
    render() {
        const {articleList, pagination} = this.props;
        return (
            <div className="simple-board-list">
                <section className="icon-box-wrapper">
                    <IconBox
                        icons={[WRITE_ICON]}
                    />
                </section>
                <section className="list-table-wrapper">
                    {articleList}
                </section>
                <section className="pagination-wrapper">
                    {pagination}
                </section>
            </div>
        );
    }
}