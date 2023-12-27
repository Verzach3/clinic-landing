FROM node:18-alpine3.19 as build

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine3.19 as production

WORKDIR /app

COPY package.json ./

RUN yarn install --production

COPY --from=build /app/dist ./dist

CMD ["node", "dist/main"]