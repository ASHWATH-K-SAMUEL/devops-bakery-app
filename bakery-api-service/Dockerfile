# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all remaining files
COPY . .

# Expose the port your app uses
EXPOSE 3001

# Start the API
CMD ["node", "index.js"]
