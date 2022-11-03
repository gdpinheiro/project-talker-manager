module.exports = (err, _req, res, _next) =>
  res.status(err.status || 500).res.json({
    message: err.message,
  });
