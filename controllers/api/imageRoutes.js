const express = require("express");
const router = express.Router();

const { Image } = require("../../models");


router.get("/", (req, res) => {
    Image.findAll({})
        .then((dbImages) => {
            console.log(dbImages);
            res.json(dbImages);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

router.post("/", (req, res) => {
    Image.create({
            filename:req.body.secure_url
          })
            .then(newImage => {
                console.log(newImage)
              res.json(newImage);
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({ msg: "an error occured", err });
            });
        });
module.exports = router