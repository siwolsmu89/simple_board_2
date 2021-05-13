module.exports = () => {
    const express = require('express');
    const router = express.Router();
    const articleMapper = require('./../mapper/ArticleMapper');

    router.post('/list', function(req, res) {
        const pagination = req.body.pagination;
        let selectResult = {};
        let sqlObj = {
            id: 'getArticleList',
            type: 'select'
        }
        const selectParams = {
            articleStart: (pagination.currentPage - 1) * 10 + 1,
            articleEnd: (pagination.currentPage) * 10
        }
        articleMapper(sqlObj, selectParams, (result) => {
            selectResult.articles = result;
            sqlObj = {
                id: 'getTotalArticleCount',
                type: 'select'
            }
            articleMapper(sqlObj, selectParams, (result) => {
                selectResult.totalCount = result[0].totalCount;
                res.send(selectResult);
            });
        });
    });

    router.post('/view', function(req, res) {
        console.log("article View");
        const updateSql = {
            id: 'updateArticleView',
            type: 'update'
        }
        articleMapper(updateSql, req.body, () => {
            const getSql = {
                id: 'getArticleByNo',
                type: 'select'
            }
            articleMapper(getSql, req.body, (result) => {
                res.send(result);
            });
        });
    });

    router.post('/add', function(req, res) {
        console.log("article add", req.body);
        const addSql = {
            id: 'addNewArticle',
            type: 'insert'
        }
        articleMapper(addSql, req.body, (result) => {
            res.send(result);
            console.log(result);
        });
    });

    router.post('/delete', function(req, res) {
        console.log("article delete", req.body);
        const deleteSql = {
            id: 'deleteArticle',
            type: 'delete'
        }
        articleMapper(deleteSql, req.body, (result) => {
            res.send(result);
        })
    });

    router.post('/edit', function(req, res) {
        console.log("article edit", req.body);
        const updateSql = {
            id: 'editArticle',
            type: 'update'
        }
        articleMapper(updateSql, req.body, (result) => {
            res.send(result);
            console.log(result);
        });
    });

    return router;
}