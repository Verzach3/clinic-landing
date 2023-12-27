FROM node:18-alpine3.19 as build

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM socialengine/nginx-spa as production

WORKDIR /app

COPY --from=build /app/dist/ /app/