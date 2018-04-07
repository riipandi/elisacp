#!/bin/bash

if [[ ! -f "/usr/bin/minify" ]]; then
    sudo wget -qO- github.com/tdewolff/minify/releases/download/v2.3.4/minify_2.3.4_linux_amd64.tar.gz | sudo tar zxv -C /tmp
    sudo mv /tmp/minify /usr/bin/minify
    sudo chmod +x /usr/bin/minify
fi

read -p "Commit description: " desc
git add . && \
git add -u && \
git commit -m "$desc" && \
git push origin master

