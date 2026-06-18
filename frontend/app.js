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

        const courseData = [

    {
        name:"AWS Cloud Fundamentals",
        id:"aws"
    },

    {
        name:"Docker Containerization",
        id:"docker"
    },

    {
        name:"Kubernetes Orchestration",
        id:"kubernetes"
    },

    {
        name:"Jenkins CI/CD",
        id:"jenkins"
    }

];

courseData.forEach(course => {

    const li = document.createElement("li");

    li.innerHTML = `
        <a href="course.html?id=${course.id}">
            ${course.name}
        </a>
    `;

    list.appendChild(li);

});

        list.appendChild(li);

    });
}
