const accountService = require('../services/account');

class AccountHandler {
  signin(req, res, next) {
    try {
      const data = accountService.signin(req.body);
      res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  }

  signup(req, res, next) {
    try {
      const data = accountService.signup(req.body);
      res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AccountHandler();
