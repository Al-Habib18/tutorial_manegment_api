/** @format */

const router = require("express").Router();
const tutorial_route = require("./tutorial");

router.use("/api/vi/tutorial", tutorial_route);

module.exports = router;
