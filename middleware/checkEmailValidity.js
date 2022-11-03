module.exports = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /([\w].*?@([\w].*\.\w{2,4}))/;
  // Regex retirado de https://regexr.com/3368t
  const checkEmail = emailRegex.test(email);

  if (!email) {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }
  if (!checkEmail) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  next();
};
