const router = require('express').Router();
const { User } = require('../../models');
const uploadController = require("../image-upload");
const upload = require("../../middleware/img.upload");

//Create new user
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        
        const dbUserData = await User.create({
            //UPDATE THIS
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.name,
            age: req.body.age,
            gender_id: req.body.genderId,
            gender_pref: req.body.genderPref,
            bio: req.body.bio,
            genre: req.body.genre,
            fav_movie: req.body.fav_movie,
            movie_quote: req.body.movie_quote,
            //Need to add more parameters here based on the models
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/upload", upload.single("file"), uploadController.uploadFiles);


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
                .json({ message: 'Incorrect email or password. Please try again!'});
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!'});
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
  


//get all users
router.get( '/users', async (req, res) => {
    User.findAll().then(users => {
        console.log(users);
        res.json(users);
    }) 
})

module.exports = router;  