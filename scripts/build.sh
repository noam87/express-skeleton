#!/bin/sh

bin=node_modules/.bin

##
# Concatenate javascripts and save them to public javascripts directory.
echo "-> Building public javascripts..."
for FILE in javascripts/script.js

do
  echo " -> building public/$FILE"
  ${bin}/browserify $FILE -o public/$FILE
done

echo "\n\n"
