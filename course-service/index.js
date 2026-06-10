const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        service: "Course Service",
        courses: [
            "AWS",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "DevOps"
        ]
    });
});

app.listen(5001, () => {
    console.log("Course Service running on port 5001");
});
