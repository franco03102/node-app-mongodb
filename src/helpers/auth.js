const helpers = {};

helpers.isAuthenticated = (req, res, next) => {

    if(req.isAuthenticated()){

        return next();

    }

    req.flash('error_msg', 'Debe iniciar sesión previamente');
    res.redirect('/users/signIn');

}

module.exports = helpers;