const fs = require('fs');

module.exports = (req, res) => {
  const talker = JSON.parse(fs.readFileSync('talker.json'));
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkerIndex = talker.findIndex((t) => t.id === parseInt(id, 10));
  const newTalker = { name, age, id: parseInt(id, 10), talk };
  console.log(newTalker);
  talker[talkerIndex] = {
    ...talker[talkerIndex],
    name,
    age,
    id: parseInt(id, 10),
    talk,
  };
  fs.writeFile('talker.json', JSON.stringify(talker), (err) => {
    if (err) throw err;
  });
  res.status(200).json(newTalker);
};
