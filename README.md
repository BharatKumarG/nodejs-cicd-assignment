# Node.js Hello World Application Realtime

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
docker build -t gudurubharatkumar/nodejs-hello-world:latest .
docker run -d -p gudurubharatkumar/nodejs-hello-world:latest

![Screenshot 2024-12-09 213650](https://github.com/user-attachments/assets/8919f13e-ae4b-411e-b850-db751aa02e62)

Push the Docker Image to Docker Hub:
docker push gudurubharatkumar/nodejs-hello-world:latest

![Screenshot 2024-12-09 214558](https://github.com/user-attachments/assets/16cf16ba-3083-491e-9350-8a07d09f4709)


2. Deploy to Kubernetes
Now, you can deploy the application to your Kubernetes cluster.

Apply the Deployment:

Save the Deployment YAML configuration in a file called hello-world-deployment.yaml and run:

kubectl apply -f hello-world-deployment.yaml
Apply the Service:

Save the Service YAML configuration in a file called hello-world-service.yaml and run:

kubectl apply -f hello-world-service.yaml
![Screenshot 2024-12-09 215718](https://github.com/user-attachments/assets/5c1fbcc5-9e0d-40ac-a75a-9e3fb98d7388)


3. Verify the Deployment
Check the Status of the Deployment:

To check the deployment status, use the following command:

kubectl get deployments
This will show the number of replicas and their status.
![Screenshot 2024-12-09 213657](https://github.com/user-attachments/assets/f6f2eb98-f5c4-4323-9be1-09513049598f)

Check the Service's External IP:

Since the service is of type LoadBalancer, Kubernetes will provision an external IP.

Run:

![Screenshot 2024-12-09 213754](https://github.com/user-attachments/assets/66b366a1-a0bb-4336-8aef-6e3c6daa7e24)

kubectl get svc hello-world-service
Once the EXTERNAL-IP is available, you can access the application through the browser or curl:

curl http://<external-ip>:80
You should see the response: "Hello Bharat Kumar".

![Screenshot 2024-12-09 213657](https://github.com/user-attachments/assets/999dbc1b-38e9-48e8-9d2a-b0f10dc7c638)
![Screenshot 2024-12-09 213725](https://github.com/user-attachments/assets/f6c072b8-4d57-4ac8-97cb-8dba3dd1febb)
![Screenshot 2024-12-09 213738](https://github.com/user-attachments/assets/a45f7f88-81aa-4b1f-9380-eb39c5f2bef2)


Let me know if you need further clarification 🚀
