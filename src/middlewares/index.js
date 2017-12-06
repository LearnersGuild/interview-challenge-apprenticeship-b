const ensureLoggedIn = (req, res, next) => {
  if(!req.session.user) {
    return res.redirect('/sign-in')
  }
  req.user = req.session.user
  next()
}

export { ensureLoggedIn }
