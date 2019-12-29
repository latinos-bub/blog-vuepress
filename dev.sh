#!/usr/bin/env sh

# 这是将本博客的源代码上传到仓库的脚本
# set -e

# build
# npm run docs:build

# nav into the build out dir
# cd docs/.vuepress/dist

# git
# git init
git lfs install
git lfs track "*.mp4"
git add .
git commit -m "upload project source code to the dev branch"
# git remote add origin git@github.com:latinos-bub/blog-vuepress.git
git push -f origin dev --tags