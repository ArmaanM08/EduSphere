function loadCourses() {

    const courseData = [

        {
            name: "AWS Cloud Fundamentals",
            id: "aws"
        },

        {
            name: "Docker Containerization",
            id: "docker"
        },

        {
            name: "Jenkins CI/CD",
            id: "jenkins"
        },

        {
            name: "Kubernetes Orchestration",
            id: "kubernetes"
        },

        {
            name: "Prometheus Monitoring",
            id: "prometheus"
        },

        {
            name: "Git & GitHub",
            id: "git"
        },

        {
            name: "Linux Administration",
            id: "linux"
        },

        {
            name: "DevOps Best Practices",
            id: "devops"
        }

    ];

    const list = document.getElementById("courseList");

    list.innerHTML = "";

    courseData.forEach(course => {

        const li = document.createElement("li");

        li.innerHTML = `
            <a href="course.html?id=${course.id}">
                ${course.name}
            </a>
        `;

        list.appendChild(li);

    });
}

