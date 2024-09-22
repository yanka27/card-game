function isAuthenticated(req, res, next) {
//  && req.path !== '/reminder'
    console.log("request session object: ", req.session)
    if (!req.session?.user && req.path !== '/login' && req.path !== '/register') {
        res.redirect('/login');
    } else next();
}

module.exports = isAuthenticated;
