const router = require('express').Router();
const { User } = require('../../models');
const uploadController = require("../image-upload");
const upload = require("../../middleware/img.upload");

//Create new user
router.post('/', async (req, res) => {
    console.log(req.body)
    try {

        const dbUserData = await User.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body._name,
            age: req.body.age,
            gender_id: req.body.genderId,
            gender_pref: req.body.genderPref,
            bio: req.body.bio,
            genre: req.body.genre,
            fav_movie: req.body.fav_movie,
            movie_quote: req.body.movie_quote,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = dbUserData;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    console.log(req.params.id);

    try {
        const thisUser = await User.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!thisUser) {
            res
                .status(400)
                .json({ message: 'Incorrect userId!' });
            return;
        }
        req.session.save(() => {
            req.session.user = thisUser;
            res
                .status(200)
                .json({ user: thisUser });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:genderPref/:genre', async (req, res) => {
    console.log(req.params.id);

    try {
        const userGenderPref = req.params.genderPref;
        const userGenre = req.params.genre;
        const filteredUserData = await User.findAll({
            where: {
                gender_id: userGenderPref,
                genre: userGenre
            }
        });
        if (!filteredUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect userId!' });
            return;
        }

        req.session.save(() => {
            req.session.data = filteredUserData;
            res
                .status(200)
                .json({ data: filteredUserData });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/upload", upload.single("file"), (req, res) => {
    console.log(req);
    uploadController.uploadFiles;
});


//Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        console.log(dbUserData);
        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            req.session.user = dbUserData;
            // res.render('dashboard', {dbUserData});
            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// router.get('/update', async (req, res) => {
//     console.log('updategetroute')
//     try {
//         const thisUser = await User.findOne({
//             where: {
//                 id: req.session.user.id,
//             },
//         });
//         if (!thisUser) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect userId!' });
//             return;
//         }
//         res
//             .status(200)
//             .json({ user: thisUser });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

router.put('/update', async (req, res) => {
    console.log('this is the holy grail')
    console.log("**********", req.session, req.body);

    try {
        const userUpdate = await User.update(
            {
                bio: req.body.bio,
            },
            {
                where: {
                    id: req.session.user.id,
                }
            })
        res.status(200).json(userUpdate)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

router.delete('/bye', async (req, res) => {
    console.log('Hey guys, I just lost the game')

    try {
        const userDelete = await User.destroy(
            {
                where: {
                    id: req.session.user.id,
                }
            })
        res.status(200).json(userDelete)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


module.exports = router;
