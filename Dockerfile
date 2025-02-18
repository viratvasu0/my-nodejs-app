# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application files
COPY . .

# Expose port and start application
EXPOSE 3000
CMD ["node", "index.js"]
