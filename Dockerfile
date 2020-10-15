FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
ENV PROCESS_NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR /opt/app

COPY package.json /opt/app
COPY yarn.lock /opt/app

RUN apk add yarn

RUN yarn install --frozen-lockfile

COPY . /opt/app

RUN yarn build
COPY . .
COPY --chown=node:node . .
RUN npx next telemetry disable

USER node

CMD [ "yarn", "start" ]
