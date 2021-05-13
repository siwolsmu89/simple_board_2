import {GET_ARTICLES} from "../action/actions";

export default function articles(state, action) {
    const {articles} = state;

    switch (action.type) {
        case GET_ARTICLES:
            return action.articles;
        default:
            return articles;
    }
}