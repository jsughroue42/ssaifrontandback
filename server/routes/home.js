const express = require('express');
const router = express.Router();


app.get("/api/home", (req, res) => {
    res.json({ message: "Like this video", people: ["Harry", "Jack", "Barry"] });
});

module.exports = router;