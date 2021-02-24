FROM node:8
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD npx sequelize db:migrate
CMD npm start
EXPOSE 3000