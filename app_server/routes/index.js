var express = require("express");
var router = express.Router();
var ctrlLocations = require("../controllers/locations");
var ctrlOthers = require("../controllers/others");

/* Locations pages */
router.get("/", ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview);

/* Other pages*/
router.get("/about", ctrlOthers.about);
router.get("/cart", ctrlOthers.cart);
router.get("/prod", ctrlOthers.Prod);

module.exports = router;
