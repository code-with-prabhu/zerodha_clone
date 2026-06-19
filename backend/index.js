require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;
const mongoose = require('mongoose');
const dashboardRoute = require('./routes/dashboardRoute');
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");


app.use(
  cors({
    origin: process.env.CLIENT_URL, // Vite frontend
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/dashboard", dashboardRoute);
app.use("/api/auth", authRoute);



mongoose.connect(uri)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch((err) => {
    console.error("MongoDB Connection Error");
    console.error(err);
});