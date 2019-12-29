#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# nav into the build out dir
cd docs/.vuepress/dist

# git
git init
git lfs install
git lfs track "*.mp4"
git add .
git commit -m "published articles"
git remote add origin git@github.com:latinos-bub/blog-vuepress.git
git push -f origin master --tags
