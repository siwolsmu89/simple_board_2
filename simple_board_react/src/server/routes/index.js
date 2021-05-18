module.exports = (app) => {
    // articleRoute 사용 설정
    const articleRouter = require('./articleRouter');
    const userRouter = require('./userRouter');
    app.use('/article', articleRouter());
    app.use('/user', userRouter());
}