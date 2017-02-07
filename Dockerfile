FROM node:6.9.5-slim

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

RUN npm install --production

# Bundle app source
COPY . /usr/src/app

# Expose app port
EXPOSE 3000

# Default command
CMD [ "npm", "start" ]
