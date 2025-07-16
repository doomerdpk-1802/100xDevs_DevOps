# Base Image
FROM node:20-alpine 

# Setting the Working Directory
WORKDIR /app

# Copy all the files to the working directory
COPY . .

# Install the dependencies
RUN npm install

# Expose the port 3000
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]