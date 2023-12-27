FROM node:18-alpine3.19  

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

COPY --from=build /app/dist /app/
