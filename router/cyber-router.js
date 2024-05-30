const express = require("express");
const router = express.Router();
const {addCyberOverview, getCyberOverview}  = require("../controllers/cyberOverView-controller");

router.route("/overview").get(getCyberOverview).post(addCyberOverview);

module.exports = router;