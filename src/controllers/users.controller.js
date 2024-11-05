const usersCtrl = {};
const User = require('../models/User');
const passport = require('passport');

   

usersCtrl.renderSignUpForm = (req,res) => {

    res.render('users/signUp');

};

usersCtrl.signup = async (req, res) => {

    const errors = [];
    const { user, email, password, confirm_password } = req.body;
    if (password != confirm_password){

        errors.push({text: 'Las contraseñas no coinciden'});

    }
    if (password.length < 4){

        errors.push({text: 'La contraseña debe ser mayor de 4 caracteres'});

    }
    if (errors.length > 0){

        res.render('users/signUp',{

            errors,
            user,
            email

        });

    } else {

       const emailUser = await User.findOne({email: email});

       if(emailUser){

            req.flash('error_msg', 'El correo ya está en uso');
            res.redirect('/users/signUp');

       } else {

            const newUser = new User({user, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'El usuario ha sido registrado satisfactoriamente');
            res.redirect('/users/signIn');

       }

    }

};

usersCtrl.renderSignInForm = (req,res) => {

    res.render('users/signIn');

};

usersCtrl.signin = passport.authenticate('local', {

    failureRedirect: '/users/signin',
    successRedirect: '/books',
    failureFlash: true

});

usersCtrl.logout = (req, res) => {
    
    req.logout( (err) => {

        if (err) { return next(err); }
        req.flash('success_msg', 'Se ha cerrado sesión satisfactoriamente');
        res.redirect('/users/signIn');

    });
}
module.exports = usersCtrl;