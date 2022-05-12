// ===============================original source code========================

// const router = require("express").Router();
// const express = require("express");

// router.get("/", (req, res) => {
//   if (!req.session.user) {
//     return res.redirect("/");
//   }
//   res.render("library");
// });

// module.exports = router;

// ===============================route testing block =========================

const router = require("express").Router();
const express = require("express");
const { Image, User } = require("../models");

// ===============================image api request==================
// router.get("/",(req, res) => {
//  if (!req.session.user) {
//      return res.redirect("/");
//    } else {
//      Image.findAll({})
//      .then(dbImage => {
//        res.json(dbImage);
//      })
//    }

//  });

// =========================works on finding a user and one image==============
router.get("/", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  User.findByPk(req.session.user.id, {
    include: [Image],
  }).then((userImage) => {
    const hbsImage = userImage.get({ plain: true });
    console.log("==================");
    console.log(hbsImage);
    hbsImage.loggedIn = req.session.user ? true : false;
    res.render("library", hbsImage);
  });
});

module.exports = router;
