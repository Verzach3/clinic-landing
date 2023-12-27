FROM node:18-alpine3.19  

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine3.19 as production

WORKDIR /app

COPY --from=build /app/dist/ /app/
