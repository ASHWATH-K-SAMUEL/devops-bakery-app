# 🍞 DevOps Capstone Project – Bakery Application
## End-to-End DevOps Pipeline for a Node.js Web Application

---

## 📌 Project Overview

This project demonstrates an **end-to-end DevOps pipeline** for a **Bakery web application** built using Node.js.  
The application is containerized using Docker, deployed on AWS EC2, automated using Jenkins CI/CD, monitored with Prometheus and Grafana, and maintained using shell scripting and cron jobs.

The focus of this project is **DevOps automation and infrastructure**, while the bakery application serves as a real-world example to demonstrate the pipeline.

---

## 🧁 Bakery Application Description

The Bakery application consists of **two services**:

### 1️⃣ Bakery API
- A Node.js (Express) backend service
- Serves bakery menu data (cakes, bread, pastries)
- Exposes REST API endpoint:
/api/menu

### 2️⃣ Bakery UI
- A Node.js frontend using Express and EJS
- Fetches data from the Bakery API
- Displays bakery items and prices in a web interface

---

## 🏗️ Architecture Overview

**Workflow:**

1. Developer pushes Bakery application code to GitHub  
2. Jenkins (running on AWS EC2):
 - Triggers pipeline on code commit
 - Builds Docker images for Bakery API & UI
 - Deploys containers on EC2  
3. Docker runs Bakery API and UI containers  
4. Prometheus + Node Exporter monitor EC2 system metrics  
5. Grafana visualizes monitoring data  
6. Cron job automates Docker cleanup using shell script  

---

## 🛠️ Tech Stack

| Layer | Tools / Technologies |
|---|---|
| Source Control | Git, GitHub |
| CI/CD | Jenkins |
| Application | Node.js (Express, EJS) |
| Containerization | Docker, Docker Hub |
| Infrastructure | AWS EC2 (Ubuntu) |
| Monitoring | Prometheus, Grafana, Node Exporter |
| Automation | Bash, Cron |

---

## 📂 Repository Structure

devops-capstone/
├── Jenkinsfile
├── bakery-api-service/
│ ├── index.js
│ ├── package.json
│ ├── Dockerfile
│ └── data/menu.json
├── bakery-ui-service/
│ ├── index.js
│ ├── package.json
│ ├── Dockerfile
│ └── views/
│ ├── index.ejs
│ └── menu.ejs
├── monitoring/
│ └── prometheus.yml
├── scripts/
│ └── docker_log_cleanup.sh
├── start_project.sh
└── README.md


---

## 🚀 CI/CD Pipeline Explanation

The Jenkins pipeline performs the following stages:

1. **Checkout**  
   - Pulls the latest Bakery application code from GitHub

2. **Build**  
   - Builds Docker images for Bakery API and UI

3. **Deploy**  
   - Runs containers on AWS EC2 using Docker

4. **Monitor**  
   - Prometheus scrapes EC2 metrics via Node Exporter
   - Grafana displays dashboards for system monitoring

---

## 🖥️ Application Access

**Bakery UI**
http://<EC2-PUBLIC-IP>:3000

**Bakery API**
http://<EC2-PUBLIC-IP>:3001/api/menu


---

## 📊 Monitoring Setup

- **Node Exporter**
- Collects EC2 system metrics (CPU, memory, disk, network)

- **Prometheus**
- Scrapes Node Exporter metrics
- Runs on port `9090`

- **Grafana**
- Connected to Prometheus as data source
- Displays Node Exporter dashboards
- Runs on port `3005`

---

## ⚙️ Automation with Shell Script & Cron Job

A shell script is used to clean up unused Docker resources to avoid disk space issues.

### Script Location
scripts/docker_log_cleanup.sh
### Cron Job Configuration
bash
0 2 * * * /home/ubuntu/devops-capstone/scripts/docker_log_cleanup.sh
This cron job runs daily at 2 AM to automatically clean unused Docker images and containers.

📸 Proof of Execution

Screenshots included in the project report:

Jenkins pipeline execution

Docker containers running

Bakery UI and API in browser

Prometheus targets page

Grafana dashboard

AWS EC2 instance

Cron job configuration

✅ Conclusion

This project successfully demonstrates a real-world DevOps workflow for a Bakery web application, covering CI/CD automation, containerized deployment, monitoring, and system automation using industry-standard tools.


