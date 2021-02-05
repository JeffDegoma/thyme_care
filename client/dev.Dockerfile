FROM node:12-alpine as builder

WORKDIR /usr/local/app

COPY package.*json package-lock.json ./

RUN npm i --production

RUN npm audit fix

COPY . ./

RUN npm run build

# change to custom nginx image
FROM nginx:latest 

COPY --from=builder /usr/local/app/ /usr/local/app
COPY --from=builder /usr/local/app/public /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]