# Use the official Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Set environment variables (optional)
ENV NODE_ENV=production

# Command to run the app
CMD ["npm", "start"]
