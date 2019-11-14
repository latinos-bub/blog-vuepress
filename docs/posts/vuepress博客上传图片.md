---
title: vuepress博客上传图片
tags: [博客杂谈]
---


### vuepress 博客上传图片
<!-- more -->

> 首先说明一点：vuepress 的博客绑定的github仓库名没有必须是 username.github.io 这种形式的强要求，千万别被误导了，因为我们都是使用github来同时搭建 hexo 博客 和 vuepress 博客的，因此不可能只有一个仓库(且还必须是 username.github.io 名称 这种错误论断的)。

> 我们 vuepress 用到的所有的图片资源我们都要放在 `blog\docs\.vuepress\public`  pulibc 目录下，之后我们的所有md文件中引用都是 `/1.png` 或者 `/你的仓库名/1.png` 这种格式(后面这种格式是因为你的仓库名不是大部分人设置的 username.github.io 这种名称，随机定义的，你就这样写就行了)，但是注意一点，当你的图片路径如此写的话，在你本地是看不到的，但是没关系，当我们部署到github上时就可以看到了。

如下所示：

<img src="/blog-vuepress/images/20191114/7.png" style="align: center; width: 50%; height: 50%; margin-left: 25%;"/>

引入图片格式如下：

<img src="/blog-vuepress/images/20191114/8.png" style="align: center; width: 50%; height: 50%; margin-left: 25%;"/>

