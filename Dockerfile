FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./src /usr/share/nginx/html

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
