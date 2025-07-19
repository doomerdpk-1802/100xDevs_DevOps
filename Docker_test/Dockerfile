# Base Image
FROM node:20-alpine 

# Setting the Working Directory
WORKDIR /app

COPY package.json ./package.json

RUN npm install

# Copy all the files to the working directory
COPY . .


# Expose the port 3000
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]