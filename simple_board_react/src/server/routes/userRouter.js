module.exports = () => {
    const express = require('express');
    const router = express.Router();
    const userMapper = require('./../mapper/userMapper');
    let session;

    router.post('/add', function(req, res) {
        console.log("user add", req.body);
        const getSql = {
            id: 'getUserById',
            type: 'select'
        }
        userMapper(getSql, req.body, (result) => {
            if (result[0]) {
                console.log("exists", result[0].userId);
                res.send({
                    result: "error",
                    dialog: "Registration failed :: same ID exists - " + result[0].userId
                });
                return;
            }
            const addSql = {
                id: 'addNewUser',
                type: 'insert'
            }
            userMapper(addSql, req.body, (result) => {
                res.send({
                    result: "success",
                    dialog: "Registering New User Successfully done with ID - " + result[0].userId
                })
                console.log(result);
            });
        });
    });

    router.post('/login', function(req, res) {
        console.log("user login", req.body);
        session = req.session;
        const getSql = {
            id: 'getUserById',
            type: 'select'
        }
        userMapper(getSql, req.body, (result) => {
            if (result[0] && req.body.password === result[0].password) {
                res.send({
                    result: "success",
                    dialog: "Login Success"
                });
                session.loginId = result[0].loginId;
            } else {
                res.send({
                    result: "error",
                    dialog: "Login failed :: Check your ID or password"
                });
            }
        });
    });

    return router;
}