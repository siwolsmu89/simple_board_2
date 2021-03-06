import spinning from "./spinnerReducer";
import articles from "./articleReducer";
import pagination from "./paginationReducer";
import modal from "./modalReducer";
import loginStatus from "./loginReducer";

const initialState = {
    spinning: false,
    modal: {
        isHide: true
    },
    articles: [],
    pagination: {
        currentPage: 1,
        lastPage: 1
    },
    loginStatus: {
        isLogin: false
    }
};

export default function reducer(state=initialState, action) {
    return {
        spinning: spinning(state, action),
        articles: articles(state, action),
        pagination: pagination(state, action),
        modal: modal(state, action),
        loginStatus: loginStatus(state, action)
    };
}