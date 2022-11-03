const express = require('express');
const readFile = require('../helper/readFile');
const checkRateValidity = require('../middleware/checkRateValidity');
const checkTalkerAgeValidity = require('../middleware/checkTalkerAgeValidity');
const checkTalkerNameValidity = require('../middleware/checkTalkerNameValidity');
const checkTalkValidity = require('../middleware/checkTalkValidity');
const checkTokenValidity = require('../middleware/checkTokenValidity');
const checkWatchedAtValidity = require('../middleware/checkWatchedAtValidity');
const createTalker = require('../middleware/createTalker');
const deleteTalker = require('../middleware/deleteTalker');
const editTalker = require('../middleware/editTalker');

const router = express.Router();

router.get('/', (_req, res) => {
  const talker = readFile();
  res.status(200).json(talker);
});

router.get('/:id', (req, res) => {
  const talker = readFile();
  const { id } = req.params;
  const talkerById = talker.find((item) => item.id === parseInt(id, 10));

  if (!talkerById) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(talkerById);
});

router.post(
  '/',
  checkTokenValidity,
  checkTalkerNameValidity,
  checkTalkerAgeValidity,
  checkTalkValidity,
  checkWatchedAtValidity,
  checkRateValidity,
  createTalker,
);

router.put(
  '/:id',
  checkTokenValidity,
  checkTalkerNameValidity,
  checkTalkerAgeValidity,
  checkTalkValidity,
  checkWatchedAtValidity,
  checkRateValidity,
  editTalker,
);

router.delete('/:id', checkTokenValidity, deleteTalker);

// router.get('/search', (req, res) => {});

module.exports = router;
