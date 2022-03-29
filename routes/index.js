const express = require('express');
const router = express.Router();
const homeRoutes = require('./home');
const userRoutes = require('./users');
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const goalRoutes = require('./goals');


router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);


//page not found
// router.get("*", (req, res) => {
//     res.send("Not found");
// });


module.exports = router;