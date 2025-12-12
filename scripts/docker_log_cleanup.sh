#!/bin/bash

# Cleanup unused Docker objects
docker system prune -af

# Log execution time
echo "Docker cleanup ran at $(date)" >> /home/ubuntu/devops-capstone/scripts/cleanup.log
