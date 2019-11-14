# blog-vuepress


>  这是我用 vuepress + github 搭建的一个博客仓库，因为已经使用hexo在github上搭建过博客了，所以这里的博客仓库是 blog-vuepress
> 注意：我这里有两个分支：master dev，其中dev是源代码开发分支，master才是博客的部署分支
> 发表、部署文章请使用 deploy.sh 脚本
> 上传源代码到仓库请使用 dev.sh 脚本



> 
> 
>  执行步骤：
> 
> * 先确定在 dev 分支下，然后写好你的文章
> * 还是在 dev 分支下，执行 ./dev.sh 脚本即可（该脚本会自动将源代码上传到 dev 分支下）
> * 此步还是在 dev 分支下，执行 ./deploy 脚本（注意，该脚本会自动将博客文章部署到 master 分支上）
> * 注意：图片的引用默认都放在 public 文件夹下面，你可以新建每天的自定义文件夹，例如 20191112，然后引入图片时一定要添加前缀: /blog-vuepress/20191112/1.jpg