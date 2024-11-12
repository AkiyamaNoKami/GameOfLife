FROM node:18-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src /app/src

ENV NODE_ENV=production
ENV DATABASE_URL=postgres://gameoflife:gameoflife@db:5432/gameoflife_dev

CMD ["node", "run", "dev"]

EXPOSE 3000