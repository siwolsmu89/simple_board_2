import spinning from "./spinnerReducer";
import articles from "./articleReducer";
import pagination from "./paginationReducer";

const initialState = {
    spinning: false,
    articles: [],
    pagination: {
        currentPage: 1,
        lastPage: 1
    }
};

export default function reducer(state=initialState, action) {
    return {
        spinning: spinning(state, action),
        articles: articles(state, action),
        pagination: pagination(state, action)
    };
}