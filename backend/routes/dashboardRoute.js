const express = require("express");
const router = express.Router();

const {
  getHoldings,
  getPositions,
} = require("../controllers/dashboardController");

router.get("/allHoldings", getHoldings);
router.get("/allPositions", getPositions);

module.exports = router;