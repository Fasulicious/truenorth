FROM node:alpine

WORKDIR /
COPY package*.json ./

RUN npm ci --only=prod
COPY ./ ./
CMD npm run start