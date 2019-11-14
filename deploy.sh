#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# nav into the build out dir
cd docs/.vuepress/dist

# git
git init
git add .
git commit -m "发表文章，部署到博客上"
git remote add origin git@github.com:latinos-bub/blog-vuepress.git
git push -f origin master
