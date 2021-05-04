const router = require('express').Router();
//require users

router.get('/', async (req, res) => {
    res.render('homepage', {layout: "main.handlebars"})
});

router.get('/dashboard', async (req, res) => {
    res.render('maindash', {layout: "dashboard.handlebars"})
});

router.get('/profiles', async (req, res) => {
    res.render('viewprofiles', {layout: "dashboard.handlebars"})
});

router.get('/quiz', async (req, res) => {
    res.render('quiz', {layout: "dashboard.handlebars"})
});

router.get('/settings', async (req, res) => {
    res.render('quiz', {layout: "dashboard.handlebars"})
});

module.exports = router;