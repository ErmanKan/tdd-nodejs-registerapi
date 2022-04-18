const express = require('express');
const router = express.Router();
const UserService = require('./UserService');

router.post('/api/1.0/users', async (req, res) => {
  await UserService.save(req.body);
  return res.send({
    message: 'User created',
  });
  //const user = Object.assign({}, req.body, { password: hash });

  //const user = {
  //username: req.body.username,
  //email: req.body.email,
  //password: hash,
  //};
});

module.exports = router;
