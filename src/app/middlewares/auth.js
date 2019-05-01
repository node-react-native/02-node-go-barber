module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user // share data with nunjucks template
    return next()
  }

  return res.redirect('/')
}
