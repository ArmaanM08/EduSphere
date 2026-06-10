const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        service: "Auth Service",
        status: "Running",
        message: "Welcome to EduSphere Authentication Service"
    });
});

app.listen(5000, () => {
    console.log("Auth Service running on port 5000");
});

