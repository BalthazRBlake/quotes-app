const router = require("express").Router();
const { HomeController } = require("../controllers"); 
// it's possible to import easy because of index.js inside controllers folder

router.get("/", HomeController.index);
router.get("/about", HomeController.about);

module.exports = router;
