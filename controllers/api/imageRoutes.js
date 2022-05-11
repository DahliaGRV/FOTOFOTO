const express = require("express");
const router = express.Router();

const { Image } = require("../../models");


router.get("/images", (req, res) => {
    User.findAll({})
        .then((dbImages) => {
            console.log(dbImages);
            res.json(dbImages);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.post("/api/images", (req, res) => {
    Image.create({
        where: {
            filename: result.info.secure_url
        }
    })
});
module.exports = Image