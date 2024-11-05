FROM node:18-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install -g @vue/cli@5.0.8

RUN npm install

CMD ["npm", "run", "serve"]
