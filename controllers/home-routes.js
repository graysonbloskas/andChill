const router = require('express').Router();
//require users

router.get('/', async (req, res) => {
    res.render('homepage', {layout: "main.handlebars"})
});

router.get('/dashboard', async (req, res) => {
    res.render('maindash', {layout: "dashboard.handlebars", loggedIn: req.session.loggedIn })
});

router.get('/profiles', async (req, res) => {
    res.render('viewprofiles', {layout: "dashboard.handlebars", loggedIn: req.session.loggedIn })
});

router.get('/quiz', async (req, res) => {
    res.render('quiz', {layout: "dashboard.handlebars", loggedIn: req.session.loggedIn })
});

router.get('/settings', async (req, res) => {
    res.render('quiz', {layout: "dashboard.handlebars", loggedIn: req.session.loggedIn })
});

module.exports = router;