---
title: hexo 设置favicon
date: 2019-10-28 17:39:48
tags: hexo
---

### 下载favicon图片

* [阿里巴巴矢量图标库](https://www.iconfont.cn/)
* [easyicon](https://www.easyicon.net/)

<!--more-->

### 设置favicon

> 将下载下来的文件放到根目录下面，然后重新命名为`favicon.png`
>
> 编辑 `_config.yml` 文件，添加如下内容即可:
>
> ```bash
> # set favicon
> favicon: /favicon.png
> ```

### 生成、部署

```bash
hexo generate
hexo deploy
```

