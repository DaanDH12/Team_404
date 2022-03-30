const express = require('express');
const router = express.Router();
const homeRoutes = require('./home');
const userRoutes = require('./users');
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const goalRoutes = require('./goals');
const loggedUser = require('../middleware/authorization')


router.use('/welcome',loggedUser.guest, homeRoutes);


router.use('/users', loggedUser.loggeduser, userRoutes);
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);


router.get('/logout', user.fetch);



//page not found
// router.get("*", (req, res) => {
//     res.send("Not found");
// });



router.post('/logout', user.logout);




module.exports = router;