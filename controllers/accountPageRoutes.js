const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async(req, res) => {
    try {
        if (!req.session.user) {
            return res.redirect("/");
        }
        const currentUser = await User.findByPk(
            req.session.user.id)
        const cleanData = currentUser.get({ plain: true });
        console.log(cleanData);
        res.render('account', cleanData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occurred", err });
    }
});

//---------------------------Username-------------------------------------

router.put("/", (req, res) => {
    User.update(req.body, {
            where: {
                id: req.session.user.id
            }
        }).then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});


//---------------------------Email-------------------------------------

router.put("/", (req, res) => {
    User.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});


//---------------------------Password-------------------------------------

router.put("/:id", (req, res) => {
    User.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});



module.exports = router;