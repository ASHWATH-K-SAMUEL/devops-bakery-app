#!/bin/bash

echo "🚀 Starting Docker..."
sudo systemctl start docker

echo "🐳 Ensuring bakery-network exists..."
docker network inspect bakery-network >/dev/null 2>&1 || \
docker network create bakery-network

echo "🧹 Removing old containers if any..."
docker rm -f bakery-ui bakery-api >/dev/null 2>&1

echo "📦 Starting bakery-api container..."
docker run -d \
  --name bakery-api \
  --network bakery-network \
  -p 3001:3001 \
  bakery-api

echo "🎨 Starting bakery-ui container..."
docker run -d \
  --name bakery-ui \
  --network bakery-network \
  -p 3000:3000 \
  -e API_URL=http://bakery-api:3001/api/menu \
  bakery-ui

echo "✅ All services started successfully!"
echo "UI available at: http://<PUBLIC-IP>:3000"

