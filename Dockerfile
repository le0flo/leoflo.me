FROM alpine:latest AS builder
WORKDIR /src

RUN apk add --no-cache curl gcc make libc-dev openssl-dev gettext-dev zlib-dev
RUN curl -JO https://git.zx2c4.com/cgit/snapshot/cgit-master.tar.xz
RUN tar xvf cgit-master.tar.xz

WORKDIR /src/cgit-master

RUN make get-git && make NO_LUA=1 NO_REGEX=NeedsStartEnd EXTLIBS="-lintl -lz"

FROM nginx:alpine AS server
WORKDIR /srv

RUN apk add --no-cache fcgiwrap spawn-fcgi

COPY ./src /srv/leoflo.me

COPY ./cgit/cgitrc /etc/cgitrc

COPY --from=builder /src/cgit-master/cgit /srv/cgit/cgit.cgi
COPY --from=builder /src/cgit-master/cgit.js /srv/cgit/assets/cgit.js
COPY --from=builder /src/cgit-master/cgit.css /srv/cgit/assets/cgit.css
COPY --from=builder /src/cgit-master/favicon.ico /srv/cgit/assets/favicon.ico
COPY ./src/assets/icon-180x180.png /srv/cgit/assets/logo.png

COPY --from=builder /src/cgit-master/filters /srv/cgit/filters

RUN mkdir -p /srv/git

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["sh", "-c", "spawn-fcgi -s /run/fcgiwrap.sock -U nginx -G nginx -- /usr/bin/fcgiwrap && nginx -c /etc/nginx/nginx.conf -g 'daemon off;'"]
