FROM node:14

# Create a work directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install ci --only=production

# Bundle app source
COPY . .

CMD ["node", "index.js"]

