pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "better-software/nodejs-app:latest"
        KUBECONFIG = credentials('kubeconfig-secret') // Kubernetes kubeconfig
        DOCKER_USER = credentials('docker-username')  // DockerHub username
        DOCKER_PASS = credentials('docker-password')  // DockerHub password
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}
                docker build -t ${DOCKER_IMAGE} .
                docker push ${DOCKER_IMAGE}
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                echo "${KUBECONFIG}" > kubeconfig
                export KUBECONFIG=kubeconfig
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                """
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
