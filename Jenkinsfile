pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
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

        stage('Import Images Into K3s') {
            steps {
                sh '''
                docker save auth-service:latest -o auth-service.tar
                sudo k3s ctr images import auth-service.tar

                docker save course-service:latest -o course-service.tar
                sudo k3s ctr images import course-service.tar

                docker save frontend:latest -o frontend.tar
                sudo k3s ctr images import frontend.tar
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8/

                kubectl rollout restart deployment auth-service
                kubectl rollout restart deployment course-service
                kubectl rollout restart deployment frontend
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods'
            }
        }
    }
}

