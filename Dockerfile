FROM node:19.5.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8004
CMD [ "npm", "run", "dev" ]