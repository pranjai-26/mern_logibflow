var express = require('express');
var router = express.Router();
const User = require('../models/User');
// const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
    const user = req.body;
    // console.log(req.body);
    User.findOne({"email" : user.email})
    .then(dbUser => {
        // console.log(dbUser);
        if(!dbUser) {
            return res.json({
                message: "User does not exist",
            });
        }
        if(user.password === dbUser.password) {
            return res.json({
                message: "Success",
                user: user,
            });
        }
        else {
            // console.log(dbUser.email, dbUser.password);
            return res.json({
                message: "Incorrect Password",
            })
        }
    })
});

module.exports = router;