const router = require('express').Router();
const { Movies, Preference, Match } = require('../models')
//require users

router.get('/', async (req, res) => {
    res.render('homepage', {layout: "main.handlebars"})
});

router.get('/signup', async (req, res) => {
    res.render('signup', {layout: "main.handlebars"})
});

//Movie choice here
router.get('/signupmov', async (req, res) => {
    res.render('moviepreference', {layout: "main.handlebars"})
});

//Image upload here
router.get("/signupimg", async (req, res) => {
    res.render('image-upload', {layout: "main.handlebars"})
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