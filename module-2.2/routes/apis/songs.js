const songsData = require('../../datasets/songsData.json');
const express = require('express');
const router = express.Router();

/* GET songs listing. */
router.get('/', function (req, res) {
    return res.json({
        message: "Songs retrieved successfully",
        data: songsData
    });
});

/* GET song by id */
router.get('/:id', function (req, res) {
    const song = songsData.find((song) => song.id === parseInt(req.params.id));

    if (!song) {
        return res.status(404).json({
            message: "Song not found",
        });
    }

    return res.json({
        message: "Song retrieved successfully",
        data: song
    });
});

module.exports = router;
