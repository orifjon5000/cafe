#!/bin/bash

# PRODUCTION
git checkout master
git reset --hard
git pull origin master

npm i yarn -g
yarn global add serve
yarn
# yarn run build
pm2 serve build 4000  --spa --name=Cafe

# DEVELOPMENT
# npm i yarn -g

# pm2 start "yarn run start" --name=Fruit-REACT
