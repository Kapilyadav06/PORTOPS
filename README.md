# PORTOPS
REAL TIME PORTFOLIO AUTOMATION 

-->This project demonstrates a DevOps pipeline for deploying, automating, and monitoring a portfolio website. It leverages Kubernetes, Minikube, Ansible, Splunk, and Nagios to ensure high availability, scalability, and real-time insights.

## Project Overview

Objective: Automate the deployment and monitoring of a containerized portfolio website.

Technologies Used:
Docker: Containerizes the website for consistent deployment.
Kubernetes (Minikube): Orchestrates the application, enabling scaling and self-healing.
Ansible: Manages deployment automation, reducing manual steps.
Splunk: Centralizes log analysis for performance insights and troubleshooting.
Nagios: Monitors system health and sends alerts for potential issues.

## Features
Automated Deployment: Uses Ansible to streamline the deployment process.
Container Orchestration: Managed by Kubernetes, providing scalability and resiliency.
Real-Time Monitoring: Nagios tracks system metrics and application health, providing immediate alerts.
Log Analysis: Splunk centralizes logs, visualizes data, and aids in identifying issues.

## Project Structure
Source Code: Contains HTML, CSS, and JavaScript files for the portfolio website.
Docker Configuration: Defines how the application is containerized.
Kubernetes Deployment Files: Configurations for deploying the containerized app on Minikube.
Ansible Playbook: Automates deployment and configuration tasks.
Monitoring Scripts: Scripts for Nagios to check system and application status.

## Prerequisites
Minikube installed locally for a Kubernetes environment
Docker for containerization
Ansible for deployment automation
Nagios and Splunk (locally installed or cloud accounts)

## Setup Instructions
Clone the Repository: Clone this project’s repository to your local machine.
Build the Docker Image: Build the Docker image for the portfolio website.
Start Minikube: Start Minikube and configure Docker to use Minikube's environment.
Deploy to Kubernetes: Use Kubernetes deployment files to deploy the application.
Run Ansible: Use Ansible to automate deployment steps.

## Configure Monitoring
Nagios: Set up Nagios to monitor CPU, memory, disk space, and pod status.
Splunk: Forward logs to Splunk for analysis and visualization.

## Tools and Responsibilities
Tool	Responsibility
Docker	Containerizes the portfolio website
Kubernetes (Minikube)	Manages containers and deployment
Ansible	Automates deployment and configuration
Splunk	Centralized log collection and analysis
Nagios	Monitors system and application health

## Project Benefits
Automated Deployment: Ansible reduces deployment complexity and enhances consistency.
Efficient Orchestration: Kubernetes ensures the application is resilient, scalable, and self-healing.
Real-Time Monitoring: Nagios proactively monitors system health, enhancing reliability.
Centralized Logging: Splunk aggregates logs, making troubleshooting and performance monitoring easier.
