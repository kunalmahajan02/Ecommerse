#node block

FROM node:alpine3.17 as nodework
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY build build
# RUN npm run build

RUN npm install -g serve

# WORKDIR /myapp/build
CMD ["serve",  "-s",  "build/"]
# CMD npm start
# #Nginx block
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=nodework /myapp/build .

# ENTRYPOINT [ "nginx" , "-g","daemon off;" ]


