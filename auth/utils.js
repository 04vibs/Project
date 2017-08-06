function ensureLoggedIn(redirPath) {

    return function (req, res, next) {

        if (!req.user) {
            res.redirect(redirPath)
        } else {
            next();
        }

    }

}

module.exports = {
    eli: ensureLoggedIn
}; 
