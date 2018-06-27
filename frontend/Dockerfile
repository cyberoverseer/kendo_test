FROM node:9

#Install Angular CLI
RUN yarn global add @angular/cli

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY package.json yarn.lock $APP/
RUN yarn

COPY . $APP/

CMD ng build

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --port 4200