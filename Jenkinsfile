pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('docker-username')  // Use the correct ID for Docker username
        DOCKER_PASSWORD = credentials('docker-password')  // Use the correct ID for Docker password
        IMAGE_NAME = "your-docker-username/nodejs-basic-app" // Replace with your Docker Hub username and image name
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
                    sh 'docker build -t gudurubharatkumar/myproo .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    sh 'docker push gudurubharatkumar/myproo'
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
