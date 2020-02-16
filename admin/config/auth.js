module.exports = (req, res, next) => {
  // if not authenticated, redirect to login page
  if (!req.isAuthenticated()) {
    req.flash('reminder', 'Hold on, where are you going. Log in first')
    return res.redirect('/admin/users/login')
  }
  next()
}