#Configuration to build project nodejs image
FROM node:10.9.0 as node

WORKDIR /app

COPY . .

RUN npm i yarn

RUN yarn global add @angular/cli@latest

RUN ng build
#RUN ng build --configuration=staging

#RUN ng build –prod

RUN ng serve

#Configuration to deploy project using ngnix image