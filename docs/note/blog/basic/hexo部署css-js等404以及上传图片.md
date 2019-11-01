---
title: 'hexo部署css,js等404以及上传图片'
date: 2019-10-30 16:34:59
tags: [hexo]
categories: [hexo]
---

### 部署到github上css等404
<!--more-->

这是由于你的css，js等资源请求路径不对引起的

如何解决呢？

只需要在你的 `source/` 目录下面，新建一个空文件，文件名必须为 `.nojekyll`，然后在根目录的配置文件(`_config.yml`) 中添加如下配置即可:

```yml
# set github css&js
include:
  - .nojekyll
```

如图所示:

![](/images/19103001.png)

### 如何上传图片呢

我们只需要在我们的`source`目录下，新建一个 `images` 目录，然后将所有的图片都保存在这里，之后在 `md` 文件中引用即可(例如: `/images/19103002.png`)

![](/images/19103002.png)