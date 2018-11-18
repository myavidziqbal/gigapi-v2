const jwt = require("jsonwebtoken");
const models = require("../models");

module.exports.isAuthenticated = (req, res, next) => {
  console.log("This is middleware");
  //Check Token
  const token =
    req.body.token ||
    req.query.token ||
    ((req.headers.authorization && req.headers.authorization.split(" ")[1]) ||
      undefined);

  if (token === undefined) {
    return res.send("token not found");
  }

  //decode token

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    //find account
  models.accounts
  .findOne({
    where: {
      id: decode.id
    }
  })
  .then(accounts => {
    if (accounts === null) {
      return res.send("Account not found");
    }

    req.decode = decode;
    next();
  })
  .catch(err => res.send(err));
  } catch (err) {
    res.send("token not valid");
  }

  
};