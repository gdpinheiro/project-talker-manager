module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({
        message: 'Token não encontrado',
      })
      .end();
  }
  if (authorization.length < 16) {
    return res
      .status(401)
      .json({
        message: 'Token inválido',
      })
      .end();
  }
  next();
};
