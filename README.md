# PORTOPS
## REAL TIME PORTFOLIO AUTOMATION 

-->This project demonstrates a DevOps pipeline for deploying, automating, and monitoring a portfolio website. It leverages Kubernetes, Minikube, Ansible, Splunk, and Nagios to ensure high availability, scalability, and real-time insights.

## Project Overview

1. Objective: Automate the deployment and monitoring of a containerized portfolio website.

2. Technologies Used:
-> Docker: Containerizes the website for consistent deployment.
-> Kubernetes (Minikube): Orchestrates the application, enabling scaling and self-healing.
-> Ansible: Manages deployment automation, reducing manual steps.
-> Splunk: Centralizes log analysis for performance insights and troubleshooting.
-> Nagios: Monitors system health and sends alerts for potential issues.

## Features
1. Automated Deployment: Uses Ansible to streamline the deployment process.
2. Container Orchestration: Managed by Kubernetes, providing scalability and resiliency.
3. Real-Time Monitoring: Nagios tracks system metrics and application health, providing immediate alerts.
4. Log Analysis: Splunk centralizes logs, visualizes data, and aids in identifying issues.

## Project Structure
1. Source Code: Contains HTML, CSS, and JavaScript files for the portfolio website.
2. Docker Configuration: Defines how the application is containerized.
3. Kubernetes Deployment Files: Configurations for deploying the containerized app on Minikube.
4. Ansible Playbook: Automates deployment and configuration tasks.
5. Monitoring Scripts: Scripts for Nagios to check system and application status.

## Prerequisites
1. Minikube installed locally for a Kubernetes environment
2. Docker for containerization
3. Ansible for deployment automation
4. Nagios and Splunk (locally installed or cloud accounts)

## Setup Instructions
1. Clone the Repository: Clone this project’s repository to your local machine.
2. Build the Docker Image: Build the Docker image for the portfolio website.
3. Start Minikube: Start Minikube and configure Docker to use Minikube's environment.
4. Deploy to Kubernetes: Use Kubernetes deployment files to deploy the application.
5. Run Ansible: Use Ansible to automate deployment steps.

## Configure Monitoring
1. Nagios: Set up Nagios to monitor CPU, memory, disk space, and pod status.
2. Splunk: Forward logs to Splunk for analysis and visualization.

## Tools and Responsibilities
1. Tool - Responsibility
2. Docker - Containerizes the portfolio website
3. Kubernetes (Minikube)	- Manages containers and deployment
4. Ansible	- Automates deployment and configuration
5. Splunk	- Centralized log collection and analysis
6. Nagios -	Monitors system and application health

## Project Benefits
1. Automated Deployment: Ansible reduces deployment complexity and enhances consistency.
2. Efficient Orchestration: Kubernetes ensures the application is resilient, scalable, and self-healing.
3. Real-Time Monitoring: Nagios proactively monitors system health, enhancing reliability.
4. Centralized Logging: Splunk aggregates logs, making troubleshooting and performance monitoring easier.
