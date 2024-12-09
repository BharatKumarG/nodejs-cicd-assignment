# Node.js Hello World Application

## Description
A simple Node.js application that prints "Hello, World!" and includes a CI/CD pipeline for containerization and deployment to Kubernetes.

## Features
1. Automated testing.
2. Docker image creation and push to DockerHub.
3. Kubernetes deployment with a LoadBalancer service.
4. Notifications for pipeline success/failure.

## Prerequisites
- Node.js and npm
- Docker
- Kubernetes cluster
- Jenkins with necessary plugins:
  - Git
  - Pipeline
  - Kubernetes CLI

## Project Structure
nodejs-hello-world/
├── app.js
├── package.json
├── Dockerfile
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── Jenkinsfile
└── README.md

## Steps to Run
1. **Run Locally**:
   ```bash
   npm install
   npm start
Visit http://localhost:3000.

Build Docker Image:

bash
Copy code
docker build -t better-software/nodejs-app:latest .
docker run -p 3000:3000 better-software/nodejs-app:latest
Deploy to Kubernetes:

bash
Copy code
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
Access Application:

Get the LoadBalancer IP:
bash
Copy code
kubectl get service hello-world-service
Access it in a browser.
CI/CD Pipeline
The Jenkins pipeline performs the following:

Clones the code.
Installs dependencies.
Runs tests.
Builds and pushes a Docker image.
Deploys to Kubernetes.
Authors: Guduru Bharat Kumar
License
MIT

yaml
C

### **Next Steps**
1. Set up the project in a GitHub repository.
2. Configure Jenkins and Kubernetes as outlined above.
3. Test the pipeline and deployment.

Let me know if you need further clarification or help with any part! 🚀
