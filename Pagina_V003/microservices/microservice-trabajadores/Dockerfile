FROM node:alpine As development

WORKDIR /usr/src/app

ADD ./microservice-customer/package.json /usr/src/app/package.json
ADD ./microservice-customer/tsconfig.json /usr/src/app/tsconfig.json
ADD ./microservice-customer/tsconfig.build.json /usr/src/app/tsconfig.build.json
ADD ./microservice-customer/src /usr/src/app/src

RUN npm install

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

ADD ./microservice-customer/package.json /usr/src/app/package.json
ADD ./microservice-customer/tsconfig.json /usr/src/app/tsconfig.json
ADD ./microservice-customer/tsconfig.build.json /usr/src/app/tsconfig.build.json
ADD ./microservice-customer/src /usr/src/app/src

RUN npm install --only=production

EXPOSE 5001

ENV PORT 5001

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]