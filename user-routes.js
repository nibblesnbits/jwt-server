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
    expiresInSeconds: 60*60*5 
  });
}

app.post('/sessions/create', function(req, res) {

  if (!(req.body.username && req.body.password)) {
    return res.status(401).json({ message: "You must provide a username and password" });
  }

  if (req.body.password !== "password") {
    return res.status(401).json({ message: "The username or password don't match" });
  }

  return res.status(201).json({
    id_token: createToken(req.body.username)
  });
});
