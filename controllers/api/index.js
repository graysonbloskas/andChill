const router = require('express').Router();

const userRoutes = require('./user-routes');   
const autocomplete = require('./autocomplete')

router.use('/users', userRoutes);
router.use('/autocomplete', autocomplete);

module.exports = router;