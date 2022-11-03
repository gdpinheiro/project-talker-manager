const fs = require('fs');

module.exports = (req, res) => {
  const talker = JSON.parse(fs.readFileSync('talker.json'));
  const { id } = req.params;
  const talkerIndex = talker.findIndex((t) => t.id === parseInt(id, 10));
  talker.splice(talkerIndex, 1);
  fs.writeFile('talker.json', JSON.stringify(talker), (err) => {
    if (err) throw err;
  });
  res.status(204).end();
};
