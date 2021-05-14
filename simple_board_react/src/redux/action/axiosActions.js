import axios from "axios";
import {
    calculatePaginationAction,
    getArticlesAction,
    movePageAction, startSpinningAction, stopSpinningAction,
    updateArticleViewAction
} from "./actions";

function axiosAction(dispatch, axiosParams, callback) {
    dispatch(startSpinningAction());
    axios(axiosParams).then((response) => {
        callback(response);
        dispatch(stopSpinningAction());
    });
}

// 이런느낌으로 해봅시다 테스트 필요
export function getArticles(pagination) {
    return function (dispatch) {
        const axiosParam = {
            url:'/article/list',
            method:'post',
            dataType:'json',
            data: { pagination }
        };
        const callback = (response) => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(calculatePaginationAction(response.data.totalCount));
        }

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function movePage(pagination) {
    return function (dispatch) {
        dispatch(startSpinningAction());
        axios({
            url:'/article/list',
            method:'post',
            dataType:'json',
            data: { pagination }
        }).then(response => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(movePageAction(pagination));
            dispatch(stopSpinningAction());
        })
    }
}

export function updateArticleView(no) {
    return function(dispatch) {
        axios({
            url: '/article/view',
            method: 'post',
            dataType: 'json',
            data: { no }
        }).then((response) => {
            const updatedArticle = response.data[0];
            console.log(updatedArticle);
            dispatch(updateArticleViewAction(updatedArticle));
        })
    }
}

export function addNewArticle(article, pagination) {
    return function(dispatch) {
        dispatch(startSpinningAction());
        axios({
            url: '/article/add',
            method: 'post',
            dataType: 'json',
            data: article
        }).then(() => {
            dispatch(getArticles(pagination));
        });
    }
}

export function deleteArticle(no, pagination) {
    return function(dispatch) {
        dispatch(startSpinningAction());
        axios({
            url: '/article/delete',
            method: 'post',
            dataType: 'json',
            data: { no }
        }).then(() => {
            dispatch(getArticles(pagination));
        })
    }
}

export function editArticle(article, pagination) {
    return function(dispatch) {
        dispatch(startSpinningAction());
        axios({
            url: '/article/edit',
            method: 'post',
            dataType: 'json',
            data: article
        }).then(() => {
            dispatch(getArticles(pagination));
        });
    }
}