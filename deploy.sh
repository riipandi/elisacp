#!/bin/bash

if [[ ! -f "/usr/bin/minify" ]]; then
    sudo wget -qO- github.com/tdewolff/minify/releases/download/v2.3.4/minify_2.3.4_linux_amd64.tar.gz | sudo tar zxv -C /tmp
    sudo mv /tmp/minify /usr/bin/minify
    sudo chmod +x /usr/bin/minify
fi

hugo && minify -r --match=\.html -o public/ public

#read -p "Commit description: " desc
desc="Change $(date '+%d %B %Y %H:%M:%S')"
git add . && git add -u && git commit -m "$desc"
echo -e "\nPush: $desc" && git push origin master

