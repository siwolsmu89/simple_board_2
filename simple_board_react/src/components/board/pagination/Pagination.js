import {Component} from "react";

export default class Pagination extends Component {
    setPagination(pagination, movePage) {
        const {currentPage, lastPage} = pagination;
        let pageNumbers = [];
        const paginationSize = 5;

        let pageStart = paginationSize * Math.ceil(currentPage / paginationSize - 1) + 1;

        let pageEnd = pageStart + paginationSize - 1;
        pageEnd = pageEnd > lastPage ? lastPage : pageEnd;

        for (let i = pageStart; i <= pageEnd; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(
            (pageNumber) => (
                <button
                    key={pageNumber}
                    className={`btn-page ${pagination.currentPage === pageNumber ? 'active' : '' }`}
                    onClick={ () => movePage({...pagination, currentPage: pageNumber}) }
                >{pageNumber}</button>
            )
        );
    }

    render() {
        const {pagination, movePage} = this.props;
        const pageList = this.setPagination(pagination, movePage);

        return (
            <div className="pagination">
                <button
                    className={`btn-prev ${pagination.currentPage === 1 ? 'disabled' : '' }`}
                    onClick={ () => {
                        if (pagination.currentPage === 1) {
                            return;
                        }
                        movePage({...pagination, currentPage: pagination.currentPage - 1})
                    } }
                >&laquo;</button>
                {pageList}
                <button
                    className={`btn-next ${pagination.currentPage === pagination.lastPage ? 'disabled' : '' }`}
                    onClick={ () => {
                        if (pagination.currentPage === pagination.lastPage) {
                            return;
                        }
                        movePage({...pagination, currentPage: pagination.currentPage + 1})
                    } }
                >&raquo;</button>
            </div>
        );
    }
}