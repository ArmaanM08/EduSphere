function loadCourses() {

    const courses = [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "DevOps"
    ];

    const list = document.getElementById("courseList");

    list.innerHTML = "";

    courses.forEach(course => {

        const li = document.createElement("li");

        li.textContent = course;

        list.appendChild(li);

    });
}

