const courses = {

    aws: {
        title: "AWS Cloud Fundamentals",
        description: "Learn the fundamentals of Amazon Web Services and cloud computing concepts.",
        difficulty: "Beginner",
        pricing: "$49",
        duration: "8 Weeks",
        enrolled: "12,450 Students",
        topics: [
            "Cloud Computing Basics",
            "EC2",
            "S3",
            "IAM",
            "VPC",
            "CloudWatch",
            "Load Balancers",
            "AWS Security"
        ]
    },

    docker: {
        title: "Docker Containerization",
        description: "Master containerization and application deployment using Docker.",
        difficulty: "Intermediate",
        pricing: "$39",
        duration: "6 Weeks",
        enrolled: "8,700 Students",
        topics: [
            "Docker Architecture",
            "Images & Containers",
            "Volumes",
            "Networking",
            "Docker Compose",
            "Container Security"
        ]
    },

    kubernetes: {
        title: "Kubernetes Orchestration",
        description: "Learn container orchestration, deployment, scaling and management.",
        difficulty: "Advanced",
        pricing: "$79",
        duration: "10 Weeks",
        enrolled: "6,300 Students",
        topics: [
            "Pods",
            "Deployments",
            "Services",
            "Namespaces",
            "Ingress",
            "Helm",
            "Autoscaling",
            "Monitoring"
        ]
    },

    jenkins: {
        title: "Jenkins CI/CD",
        description: "Build complete Continuous Integration and Continuous Deployment pipelines.",
        difficulty: "Intermediate",
        pricing: "$59",
        duration: "5 Weeks",
        enrolled: "7,900 Students",
        topics: [
            "Pipeline as Code",
            "Git Integration",
            "Build Automation",
            "Testing",
            "Deployment",
            "Notifications"
        ]
    },

    prometheus: {
        title: "Prometheus Monitoring",
        description: "Learn monitoring, alerting and observability in cloud-native environments.",
        difficulty: "Intermediate",
        pricing: "$45",
        duration: "4 Weeks",
        enrolled: "5,100 Students",
        topics: [
            "Metrics Collection",
            "PromQL",
            "Alerting",
            "Node Exporter",
            "Kubernetes Monitoring",
            "Service Discovery"
        ]
    },

    git: {
        title: "Git & GitHub",
        description: "Version control and collaborative software development using Git.",
        difficulty: "Beginner",
        pricing: "$29",
        duration: "3 Weeks",
        enrolled: "15,200 Students",
        topics: [
            "Git Basics",
            "Repositories",
            "Branches",
            "Merge & Rebase",
            "Pull Requests",
            "GitHub Actions"
        ]
    },

    linux: {
        title: "Linux Administration",
        description: "Learn Linux commands, system administration and server management.",
        difficulty: "Beginner",
        pricing: "$35",
        duration: "5 Weeks",
        enrolled: "9,600 Students",
        topics: [
            "Linux Commands",
            "Users & Permissions",
            "File System",
            "Processes",
            "Networking",
            "Shell Scripting"
        ]
    },

    devops: {
        title: "DevOps Best Practices",
        description: "Learn modern DevOps methodologies and industry-standard workflows.",
        difficulty: "Advanced",
        pricing: "$69",
        duration: "8 Weeks",
        enrolled: "11,000 Students",
        topics: [
            "CI/CD",
            "Infrastructure as Code",
            "Containerization",
            "Monitoring",
            "Cloud Computing",
            "Site Reliability Engineering"
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const course = courses[id];

if (course) {

    document.getElementById("title").innerText = course.title;

    document.getElementById("description").innerText =
        course.description;

    document.getElementById("difficulty").innerText =
        course.difficulty;

    document.getElementById("pricing").innerText =
        course.pricing;

    document.getElementById("duration").innerText =
        course.duration;

    document.getElementById("enrolled").innerText =
        course.enrolled;

    const topics = document.getElementById("topics");

    topics.innerHTML = "";

    course.topics.forEach(topic => {

        const li = document.createElement("li");

        li.innerText = topic;

        topics.appendChild(li);

    });

} else {

    document.body.innerHTML = `
        <h1 style="text-align:center;margin-top:50px;">
            Course Not Found
        </h1>
    `;
}

