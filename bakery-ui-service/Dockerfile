# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Set environment variable defaults (optional)
ENV API_URL=http://bakery-api:3001/api/menu
ENV BAKERY_NAME="Sweet Bakery"

# Expose the port the app runs on
EXPOSE 3000

# Start the UI
CMD ["node", "index.js"]
