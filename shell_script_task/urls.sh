#!/bin/bash

file=$1
while IFS= read -r line
do
    f=$(echo "${line}" | cut -d '/' -f 4)
    ext=".json"
    file=${f}${ext}
    touch $file
    content=$(curl -s $line)
    echo $content | jq '.' > $file
    echo "$file created"
done < "$file"