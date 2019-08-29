const express = require("express");
// The top-level express object has a Router() method that creates a new router object.
const router = express.Router();
const home = require("./home"); // the home we are requiring is the home.js
const adopt = require("./adopt");
const error = require("./error");
const profile = require("./profile");

router.get("/", home.get);
router.get("/adopt", adopt.get);
router.get("/profile", profile.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
