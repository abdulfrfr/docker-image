FROM node

WORKDIR /new_app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node", "index.js"]