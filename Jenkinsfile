pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/ArmaanM08/EduSphere.git'
            }
        }

        stage('Build Auth Service') {
            steps {
                dir('auth-service') {
                    sh 'docker build -t auth-service:latest .'
                }
            }
        }

        stage('Build Course Service') {
            steps {
                dir('course-service') {
                    sh 'docker build -t course-service:latest .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t frontend:latest .'
                }
            }
        }
    }
}

