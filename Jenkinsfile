pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('docker-username')  // Ensure this matches the correct credential ID in Jenkins
        DOCKER_PASSWORD = credentials('docker-password')  // Ensure this matches the correct credential ID in Jenkins
        IMAGE_NAME = "gudurubharatkumar/nodejs-hello-world" // Replace with your Docker Hub username and image name
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout code from Git repository
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'

                    // Build Docker image
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    sh 'docker push $IMAGE_NAME'
                }
            }
        }
    }

    post {
        always {
            echo "Deployment process completed."
        }
        success {
            echo "Deployment was successful."
        }
        failure {
            echo "Deployment failed."
        }
    }
}
