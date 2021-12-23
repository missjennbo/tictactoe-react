FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY . .
CMD ["npm", "start"]