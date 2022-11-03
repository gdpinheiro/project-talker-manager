const fs = require('fs');

module.exports = (req, res) => {
  const talker = JSON.parse(fs.readFileSync('talker.json'));

  const { name, age, talk } = req.body;

  const newTalker = {
    name,
    age,
    id: parseInt(talker.length, 10) + 1,
    talk,
  };

  talker.push(newTalker);

  fs.writeFile('talker.json', JSON.stringify(talker), (err) => {
    if (err) throw err;
  });

  res.status(201).json(newTalker);
};
