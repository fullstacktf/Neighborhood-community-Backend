FROM node:14-slim

WORKDIR /ihood/ihood-backend

COPY package*.json .

RUN npm install

COPY . .    

CMD ["npm", "start"]