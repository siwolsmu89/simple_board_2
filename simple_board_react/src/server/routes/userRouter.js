module.exports = () => {
    const express = require('express');
    const router = express.Router();
    const userMapper = require('./../mapper/userMapper');

    router.post('/add', function(req, res) {
        console.log("user add", req.body);
        const addSql = {
            id: 'addNewUser',
            type: 'insert'
        }
        userMapper(addSql, req.body, (result) => {
            res.send(result);
            console.log(result);
        });
    });

    return router;
}