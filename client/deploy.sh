#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
yarn build

echo "Deploying files to server"
rsync -avP build/ mlluciano@lifewest.net:/var/www/lifewest.net/
echo "Deployment complete"
