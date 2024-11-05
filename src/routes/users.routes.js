const { Router } = require('express');
const router = Router();
const { renderSignUpForm, renderSignInForm, signup , signin, logout } = require('../controllers/users.controller');

router.get('/users/signUp', renderSignUpForm);
router.post('/users/signUp', signup);
router.get('/users/signIn', renderSignInForm);
router.post('/users/signIn', signin);
router.get('/users/logOut', logout);

module.exports = router;