const Router = require('express').Router;
const accountHandler = require('../handlers/account');

const accountRouter = new Router();

accountRouter.post('account/signup', accountHandler.signup);
accountRouter.post('account/signin', accountHandler.signin);

module.exports = accountRouter;
