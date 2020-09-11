#!/bin/bash

url=$1
if [[ $url == http?(s)://*. ]]; then
    content=$(curl -s $url)
    echo $content | jq '.'
else
    echo "Url Invalid"
fi
# content=$(wget $url -q -O -)