const router = require('express').Router();

//Add routes here
const userRoutes = require('./user-routes');   


router.use('/users', userRoutes);

module.exports = router;