module.exports = (app) => {
    // articleRoute 사용 설정
    const articleRouter = require('./articleRouter');
    app.use('/article', articleRouter());

    const userRouter = require('./userRouter');
    app.use('/user', userRouter());
}