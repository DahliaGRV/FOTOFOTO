const router = require("express").Router();
const express = require("express");
const { User } = require("../models");


router.get("/", (req, res) => {
  res.render("home");
});
//signup
router.post("/", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      req.session.user = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      };
      res.json(newUser);
      res.render("homepage");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
