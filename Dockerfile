FROM node:alpine

WORKDIR /usr/src/ubuntu-free-culture-showcase-frontend-web

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 5000

RUN npm run build

CMD [ "npm", "start" ]