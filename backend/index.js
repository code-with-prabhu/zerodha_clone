require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;
const mongoose = require('mongoose');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});





mongoose.connect(uri)
.then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(port, () => {
        console.log(`✅ Server running on port ${port}`);
    });
})
.catch((err) => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
});