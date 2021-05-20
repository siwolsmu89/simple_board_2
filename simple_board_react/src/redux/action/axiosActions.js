import axios from "axios";
import {
    calculatePaginationAction,
    getArticlesAction, modalShow,
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
        };

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function movePage(pagination) {
    return function (dispatch) {
        const axiosParam = {
            url:'/article/list',
            method:'post',
            dataType:'json',
            data: { pagination }
        };
        const callback = (response) => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(movePageAction(pagination));
        };

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function updateArticleView(no) {
    return function(dispatch) {
        const axiosParam = {
            url: '/article/view',
            method: 'post',
            dataType: 'json',
            data: { no }
        };
        const callback = (response) => {
            const updatedArticle = response.data[0];
            console.log(updatedArticle);
            dispatch(updateArticleViewAction(updatedArticle));
        };

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function addNewArticle(article, pagination) {
    return function(dispatch) {
        const axiosParam = {
            url: '/article/add',
            method: 'post',
            dataType: 'json',
            data: article
        };
        const callback = () => {
            dispatch(getArticles(pagination));
        };

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function deleteArticle(no, pagination) {
    return function(dispatch) {
        const axiosParam = {
            url: '/article/delete',
            method: 'post',
            dataType: 'json',
            data: { no }
        };
        const callback = () => {
            dispatch(getArticles(pagination));
        };

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function editArticle(article, pagination) {
    return function(dispatch) {
        const axiosParam = {
            url: '/article/edit',
            method: 'post',
            dataType: 'json',
            data: article
        };
        const callback = () => {
            dispatch(getArticles(pagination));
        };

        axiosAction(dispatch, axiosParam, callback);
    }
}

export function addUser(user) {
    return function(dispatch) {
        const axiosParam = {
            url: '/user/add',
            method: 'post',
            dataType: 'json',
            data: user
        };
        const callback = (response) => {
            const modal = {
                dialog: response.data.dialog,
                type: response.data.result
            }
            if (response.data.result === 'success') {
                modal.link = "/";
            }
            dispatch(modalShow(modal));
        }

        axiosAction(dispatch, axiosParam, callback);
    }
}