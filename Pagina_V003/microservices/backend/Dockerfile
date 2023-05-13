FROM node:alpine As development

WORKDIR /usr/src/app

ADD ./backend/package.json /usr/src/app/package.json
ADD ./backend/tsconfig.json /usr/src/app/tsconfig.json
ADD ./backend/tsconfig.build.json /usr/src/app/tsconfig.build.json
ADD ./backend/src /usr/src/app/src

RUN npm install

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

ADD ./backend/package.json /usr/src/app/package.json
ADD ./backend/tsconfig.json //usr/src/app/tsconfig.json
ADD ./backend/tsconfig.build.json /usr/src/app/tsconfig.build.json
ADD ./backend/src /usr/src/app/src

RUN npm install --only=production

EXPOSE 5000

ENV PORT 5000

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]