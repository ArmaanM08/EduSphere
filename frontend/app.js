function loadCourses() {

    const courses = [
        "AWS Cloud Fundamentals",
        "Docker Containerization",
        "Jenkins CI/CD",
        "Kubernetes Orchestration",
        "Prometheus Monitoring",
        "Git & GitHub",
        "Linux Administration",
        "DevOps Best Practices"
    ];

    const list = document.getElementById("courseList");

    list.innerHTML = "";

    courses.forEach(course => {

        const li = document.createElement("li");

        li.textContent = course;

        list.appendChild(li);

    });
}

