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

Hello World Node.js Application with Kubernetes
This repository contains the source code and configurations for a simple Hello World Node.js application, which is deployed using Docker and Kubernetes.

Overview
The application is a basic Node.js service that serves a simple "Hello Bharat Kumar" message when accessed. The application is packaged in a Docker container and deployed on Kubernetes using the following components:

Docker: Used to containerize the Node.js application.

Kubernetes: Used to orchestrate and manage the application deployment and service.
Service: Exposes the application via a LoadBalancer type service on port 80.
Components
Dockerfile
The Dockerfile defines how the Node.js application is containerized. It uses the official Node.js Docker image (node:16-alpine) and does the following:

Copies the application source code into the container.
Installs the dependencies.
Exposes port 3000 for the application.
Starts the application using npm start.
Kubernetes Deployment
The Deployment YAML file defines the following:

The deployment name is hello-world-deployment.
The application runs 2 replicas of the container (replicas: 2).
The container runs the image gudurubharatkumar/nodejs-hello-world:latest.
It listens on port 3000 inside the container.
Kubernetes Service
The Service YAML file:

Exposes the application to the outside world using a LoadBalancer on port 80.
Routes traffic to the internal port 3000 of the running containers.
Steps to Deploy
1. Build and Push the Docker Image
First, make sure that the Node.js application is containerized correctly.

Build the Docker Image:

bash
Copy code
docker build -t gudurubharatkumar/nodejs-hello-world:latest .
Push the Docker Image to Docker Hub:

bash
Copy code
docker push gudurubharatkumar/nodejs-hello-world:latest
2. Deploy to Kubernetes
Now, you can deploy the application to your Kubernetes cluster.

Apply the Deployment:

Save the Deployment YAML configuration in a file called hello-world-deployment.yaml and run:

bash
Copy code
kubectl apply -f hello-world-deployment.yaml
Apply the Service:

Save the Service YAML configuration in a file called hello-world-service.yaml and run:

bash
Copy code
kubectl apply -f hello-world-service.yaml
3. Verify the Deployment
Check the Status of the Deployment:

To check the deployment status, use the following command:

bash
Copy code
kubectl get deployments
This will show the number of replicas and their status.

Check the Service's External IP:

Since the service is of type LoadBalancer, Kubernetes will provision an external IP.

Run:

bash
Copy code
kubectl get svc hello-world-service
Once the EXTERNAL-IP is available, you can access the application through the browser or curl:

bash
Copy code
curl http://<external-ip>:80
You should see the response: "Hello Bharat Kumar".

4. Delete Resources (Optional)
If you want to delete the deployed resources:

Delete the Deployment:

bash
Copy code
kubectl delete deployment hello-world-deployment
Delete the Service:

bash
Copy code
kubectl delete svc hello-world-service
Notes
Docker Hub: This project is using Docker Hub for container image storage. Ensure you push the image with your username (gudurubharatkumar).
Kubernetes Cluster: Make sure you have a Kubernetes cluster with kubectl configured to interact with it. If using a cloud provider (AWS, GCP, Azure), ensure you have the necessary permissions to create resources like LoadBalancer services.

### **Next Steps**
1. Set up the project in a GitHub repository.
2. Configure Jenkins and Kubernetes as outlined above.
3. Test the pipeline and deployment.

Let me know if you need further clarification or help with any part! 🚀
