const router = require('express').Router();

const { Movies } = require("../../models");

router.get('/', async (req, res) => {
    try {
        const movies = await Movies.findAll();
        if (!movies) {
            res
                .status(400)
                .json({ message: 'Incorrect userId!' });
            return;
        }

        res
            .status(200)
            .json({ movies: movies });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;