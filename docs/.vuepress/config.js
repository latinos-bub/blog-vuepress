// .vuepress/config.js 配置文件
module.exports = {
  title: "latinos-bub vuepress博客", // 博客标题
  // dest: "./dist", // 打包后存放的路径，以根目录开始，我这里不需要设置，编辑完md文章后，只需要执行 ./build.sh 脚本即可
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],  // 设置网页的icon图标，将会从public文件夹中找到favicon.ico文件
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]  // 设置移动端兼容

  ],
  base: "/blog-vuepress/",  // 设置根路径，如果你是推送到username.github.io的仓库，则不需要设置，我这里是因为仓库名叫username.github.io/blog-vuepress
  themeConfig: {
    nav: [ // 导航栏设置
      // 没有下拉选项的导航
      {
        text: '主页', // 你想展示的文本信息
        link: '/' // '/' 默认为docs文件夹下面的readme.md文件
      },
      // 有下拉选项的导航
      {
        text: '我的文章',
        items: [
          {text: 'java', link: '/note/java/'},  // 注意link的设置，这样写的话就是从docs文件夹中找到note文件夹再找到vue文件夹
          {text: 'blog', link: '/note/blog/'}, // 注意link的设置，如此写就是从docs文件夹中找到note文件夹再找到react文件夹
        ]
      },  // vue 的js配置文件末尾的 ',' 没有限制，可写可不写
    ],
    // 侧边栏设置
    sidebar: {
      // 将会从docs文件夹中找到note文件夹再找到vue文件夹，然后再在里面寻找对应的文件
      '/note/java/': [
        ['', 'java专栏介绍'],   // 注意必须要有readme.md文件，这样写，就会找到 docs/note/vue/README.md 文件
        // 单一侧边栏，没有下拉选项
        ['ssm框架-流程.md', 'ssm框架-流程'],  // 必须以数组的形式进行设置，[link,text]，link为文件路径，text为侧边栏文本，这样写，就会从
        // docs/note/vue 文件夹中找到 test1.md 文件
        // text 是你在左侧显示的名称，实际展示的文件是 ssm框架-流程.md
        ['跨域-spring-boot后端配置.md', '跨域后端配置'],
      ],

      // 将会从docs文件夹中找到note文件夹再找到react文件夹中开始寻找对应的文件
      '/note/blog/': [
        ['', '博客专栏介绍'], // 寻找 docs/note/react/README.md 文件
        // 有下拉选项的侧边栏
        {
          title: '博客',  // 下拉侧边栏显示的文本
          children: [
            ['/note/blog/basic/hexo-设置favicon', 'hexo如何设置favicon'],   // 找到 docs/note/react/basic/react如何使用.md 文件
            ['/note/blog/basic/hexo部署css-js等404以及上传图片', 'hexo部署后404问题解决'],
            ['/note/blog/basic/vuepress博客上传图片', 'vuepress博客上传图片解决'],
          ]
        },
      ],

      // 首页的侧边栏
      '/': [
        ['', '首页'],   // docs/README.md
        ['岁月', '陪你度过余生']  // docs/咬紧2070.md
      ]
    },
    sidebarDepth: 0,  // 侧边栏显示等级，我一般设置0级

    // logo: '/assets/images/logo.png',
    logo: '/logo.png',
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' },
    // ],
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'https://github.com/latinos-bub/blog-vuepress',
    repoLabel: '查看源码',
    smoothScroll: true
  }
};