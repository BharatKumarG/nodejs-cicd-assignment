pipeline {
    agent any
    environment {
        DOCKER_USERNAME = credentials('docker-username')  // Use the ID of the credential
        DOCKER_PASSWORD = credentials('docker-password')  // Use the ID of the credential
    }
    stages {
        stage('Build') {
            steps {
                script {
                    // Docker login command using Jenkins credentials
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    // Docker build and push commands
                    sh 'docker build -t your-image-name .'
                    sh 'docker push your-image-name'
                }
            }
        }
    }
    post {
        always {
            echo "Deployment completed"
        }
    }
}
