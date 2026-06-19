const HoldingsModel = require("../model/HoldingsModel");
const PositionsModel = require("../model/PositionsModel");

const getHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPositions = async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHoldings,
  getPositions,
};