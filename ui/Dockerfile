FROM node:12.18.3-alpine3.9 as build
ENV REACT_APP_EXTERNAL_IP=${ip}
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build
# production environment
FROM nginx:1-alpine
ENV REACT_APP_EXTERNAL_IP=${ip}
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
