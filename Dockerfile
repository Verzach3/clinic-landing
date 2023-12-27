FROM node:18-alpine3.19 as build

ARG CACHEBUST=1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM socialengine/nginx-spa as production

WORKDIR /app

COPY --from=build /app/dist/ /app/