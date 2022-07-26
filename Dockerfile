# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:16

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY . .

# Service must listen to $PORT environment variable.
# This default value facilitates local development.
ENV PORT 8080
EXPOSE ${PORT}

# Install production dependencies.
RUN npm ci
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start", "prod"]