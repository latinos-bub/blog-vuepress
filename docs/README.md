本仓库说明书

### 仓库简介

> 本仓库是我使用 `vuepress` + `github pages` 搭建的一个静态博客站点。
>
> 总共有两个分支( `master` + `dev`)，你们默认看到的这个目录就是我的 `master` 分支，该 `master` 分支是写好、部署博客的目录，所有的内容都是已经构建好的博客；另一个 `dev` 分支是我的博客的源代码目录，需要你切换到 `dev` 分支才可以看得到，在 `dev` 分支下，你就可以尽情地编写你的文章了，也就是说 `dev` 分支是你编辑博客的地方

### 如何使用呢？

> - 首先 `clone` 该仓库：`git clone git@github.com:latinos-bub/blog-vuepress.git`
>
>   或者 `git clone https://github.com/latinos-bub/blog-vuepress.git`
>
> - 克隆下仓库后，**一定**要先切换到 `dev `分支，之后你所有的工作都是在 `dev` 分支下进行
>
> - 当你编辑好你的博客后，你只需要执行命令：`./deploy.sh` 即可自动生成构建的博客文档及`css、js`等，同时将你的代码上传到 `master` 分支去(当然了，这些你目前看不到，你可以去 `github` 上查看，或者本地切换master分支查看)；然后你再执行命令：`./dev.sh` 即可将你的源代码上传到 `dev` 分支下，这样即使你删除掉本地仓库后，你只需要重新 `clone` 即可，随时随地再次编辑
>
> - 【注意：你需要替换掉 两个 `sh` 脚本中的 `github` 地址哦，别忘记了】