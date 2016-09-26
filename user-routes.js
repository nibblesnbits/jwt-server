const express = require('express'),
      config  = require('./config'),
      jwt     = require('jsonwebtoken');

const app = module.exports = express.Router();

function createToken(username) {
  return jwt.sign({
    id: 1,
    username: username
  }, 
  config.secret, { 
    expiresIn: 60*60*5 
  });
}

app.post('/sessions/create', function(req, res) {

  if (!(req.body.username && req.body.password)) {
    return res.status(401).json({ message: "You must provide a username and password" });
  }

  return res.status(201).json({
    id_token: createToken(req.body.username)
  });
});
