const router = require("express").Router();
const express = require("express");
const { User } = require("../models");

router.get("/",async(req, res) => {
 try{ if (!req.session.user) {
    return res.redirect("/");
  }
  const currentUser = await User.findByPk(
    req.session.user.id)
  const cleanData = currentUser.get({ plain: true });
    console.log(cleanData);
    res.render('homepage', cleanData);
} catch (err){
console.log(err);
res.status(500).json({ msg: "an error occured", err });
}
});

module.exports = router;
