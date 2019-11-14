module.exports = {
  base: '/blog-vuepress/', // 设置根路径，如果你是推送到username.github.io的仓库，则不需要设置，我这里是因为仓库名叫username.github.io/blog-vuepress
  // dest: './dist', // 打包后存放的路径，以根目录开始，我这里不需要设置，编辑完md文章后，只需要执行 ./build.sh 脚本即可
  title: "latinos-bub vuepress博客",
  description:
    '时光荏苒，岁月无情', //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中,还显示在首页的文章列表上面
  head: [
  	// ['link', {rel: 'icon', href: '/favicon.ico'}],  // 设置网页的icon图标，将会从public文件夹中找到favicon.ico文件
   //  ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],  // 设置移动端兼容
   //  // ['link', {rel: 'manifest', href: '/manifest.json'}],	// manifest pwa配置
   //  ['link', { rel: 'apple-touch-icon', href: '/logo.png' }], // 由于iphone11.3不支持manifest的图标，所以加上apple-touch-icon图标配置

    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],

  theme: 'indigo-material',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'latinos-bub',
      description:
        '时光荏苒，岁月无情'
    }
  },
  markdown: {
    lineNumbers: true //是否开启文章代码左边的行号显示
  },
  themeConfig: {
    placeholder: '搜搜看', //搜索框的默认文章
    searchReply: '什么都没搜到，试一下其它搜索词~',
    author: 'latinos-bub', //侧边栏的设置
    email: 'util.you.com@gmail.com',
    pagination: '5', //每一页显示的文章个数
    avatar: '/avatar.jpg', //头像地址
    brand: '/brand.jpg', //头像背景图片地址
    github: 'https://github.com/latinos-bub', //点击github跳转的地址
    vssue: {
      //评论的配置,
      need: false, //是否需要评论
      option: {
        //公共的Vssue配置
        owner: 'latinos-bub', //用户名
        repo: 'blog-vuepress-talk', //仓库名
        locale: 'zh'
      },
      development: {
        //开发环境下的配置
        clientId: '103769ef64fae23f9964',
        clientSecret: '00900497ad2cfe63044801825d3301b78241d7d3'
      },
      production: {
        //生产环境的配置
        clientId: '',
        clientSecret: ''
      }
    },
    menus: {
      //侧边栏的文字
      tags: '标签分类',
      home: '主页',
      all: '时间归档',
      github: 'Github',
      about: '自我介绍'
    }
  }
};
