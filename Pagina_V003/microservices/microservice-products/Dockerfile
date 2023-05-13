FROM node:alpine As development

WORKDIR /usr/src/app

ADD ./microservice-products/package.json /usr/src/app/package.json
ADD ./microservice-products/tsconfig.json /usr/src/app/tsconfig.json
ADD ./microservice-products/tsconfig.build.json /usr/src/app/tsconfig.build.json
ADD ./microservice-products/src /usr/src/app/src

RUN npm install

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

ADD ./microservice-products/package.json /usr/src/app/package.json
ADD ./microservice-products/tsconfig.json /usr/src/app/tsconfig.json
ADD ./microservice-products/tsconfig.build.json /usr/src/app/tsconfig.build.json
ADD ./microservice-products/src /usr/src/app/src

RUN npm install --only=production

EXPOSE 5002

ENV PORT 5002

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]