from node

add ./ /app

workdir /app

run yarn

entrypoint /app/bin/hubot
