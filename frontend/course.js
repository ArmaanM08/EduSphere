const courses = {

    aws: {
        title: "AWS Cloud Fundamentals",
        description: "Learn AWS cloud services and architecture.",
        difficulty: "Beginner",
        pricing: "$49",
        duration: "8 Weeks",
        enrolled: "12450",
        topics: [
            "EC2",
            "S3",
            "IAM",
            "VPC",
            "CloudWatch"
        ]
    },

    docker: {
        title: "Docker Containerization",
        description: "Master Docker containers and deployment.",
        difficulty: "Intermediate",
        pricing: "$39",
        duration: "6 Weeks",
        enrolled: "8700",
        topics: [
            "Images",
            "Containers",
            "Volumes",
            "Networking",
            "Docker Compose"
        ]
    },

    kubernetes: {
        title: "Kubernetes Orchestration",
        description: "Learn container orchestration at scale.",
        difficulty: "Advanced",
        pricing: "$79",
        duration: "10 Weeks",
        enrolled: "6300",
        topics: [
            "Pods",
            "Deployments",
            "Services",
            "Ingress",
            "Helm"
        ]
    },

    jenkins: {
        title: "Jenkins CI/CD",
        description: "Build automated CI/CD pipelines.",
        difficulty: "Intermediate",
        pricing: "$59",
        duration: "5 Weeks",
        enrolled: "7900",
        topics: [
            "Pipeline",
            "Git Integration",
            "Testing",
            "Deployment"
        ]
    }
};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const course = courses[id];

if(course){

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

    course.topics.forEach(topic => {

        const li = document.createElement("li");

        li.innerText = topic;

        topics.appendChild(li);

    });
}

