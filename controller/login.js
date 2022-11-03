const express = require('express');
const getToken = require('../helper/getToken');
const checkEmailValidity = require('../middleware/checkEmailValidity');
const checkPasswordValidity = require('../middleware/checkPasswordValidity');

const router = express.Router();

router.post('/', checkEmailValidity, checkPasswordValidity, (req, res) => {
  const newToken = getToken();

  res.status(200).json({ token: newToken });
});

module.exports = router;
