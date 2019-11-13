// .vuepress/config.js 配置文件
module.exports = {
	// 启用自定义的主题
	// theme: 'yubisaki',
  title: "latinos-bub vuepress博客", // 博客标题
  // dest: "./dist", // 打包后存放的路径，以根目录开始，我这里不需要设置，编辑完md文章后，只需要执行 ./build.sh 脚本即可
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],  // 设置网页的icon图标，将会从public文件夹中找到favicon.ico文件
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],  // 设置移动端兼容
    // ['link', {rel: 'manifest', href: '/manifest.json'}],	// manifest pwa配置
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }], // 由于iphone11.3不支持manifest的图标，所以加上apple-touch-icon图标配置
  ],
  base: "/blog-vuepress/",  // 设置根路径，如果你是推送到username.github.io的仓库，则不需要设置，我这里是因为仓库名叫username.github.io/blog-vuepress
  themeConfig: {
	// 博客背景图片
    background: '/blog-vuepress/commons/1.jpg',
    // github card
    github: 'latinos-bub',
    // 定制文章标题颜色
    accentColor: '#FFB6C1',
    // 每页显示的文章数量
    per_page: 5,
    // 创建文章的时间格式，不设则不显示，可选[yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd HH:mm:ss',
    // 开启标签功能
    tags: true,


    nav: [ // 导航栏设置
      // 没有下拉选项的导航
      {
        text: '主页', // 你想展示的文本信息
        link: '/' // '/' 默认为docs文件夹下面的readme.md文件
      },
      // 有下拉选项的导航
      // {
      //   text: '我的文章',
      //   items: [
      //     {text: 'code', link: '/posts/code/'},  // 注意link的设置，这样写的话就是从docs文件夹中找到note文件夹再找到vue文件夹
      //     {text: 'blog', link: '/posts/blog/'}, // 注意link的设置，如此写就是从docs文件夹中找到note文件夹再找到react文件夹
      //   ]
      // },  // vue 的js配置文件末尾的 ',' 没有限制，可写可不写

      // 修改为不要下拉选项
      {
        text: 'blog随想',  
        link: '/posts/blog/'
      },
      {
        text: '编程技术',
        link: '/posts/code/'
      },
      // 美图欣赏
      {
      	text: '美图欣赏',
      	items: [
      		{text: 'photos', link: '/posts/photos/'},
      	]
      },
    ],
    // 侧边栏设置
    sidebar: {
      // 将会从docs文件夹中找到note文件夹再找到vue文件夹，然后再在里面寻找对应的文件
      '/posts/code/': [
        ['', '专栏介绍'],   // 注意必须要有readme.md文件，这样写，就会找到 docs/note/vue/README.md 文件
        // 单一侧边栏，没有下拉选项
        ['ssm框架-流程.md', 'ssm框架-流程'],  // 必须以数组的形式进行设置，[link,text]，link为文件路径，text为侧边栏文本，这样写，就会从
        // docs/posts/vue 文件夹中找到 test1.md 文件
        // text 是你在左侧显示的名称，实际展示的文件是 ssm框架-流程.md
        ['跨域-spring-boot后端配置.md', '跨域后端配置'],
        ['Java中使用HSSFWorkbook生成excel.md', 'Java中使用HSSFWorkbook生成excel'],
      ],

      // 将会从docs文件夹中找到note文件夹再找到react文件夹中开始寻找对应的文件
      '/posts/blog/': [
        ['', '专栏介绍'], // 寻找 docs/note/react/README.md 文件
        // 有下拉选项的侧边栏
        {
          title: '博客',  // 下拉侧边栏显示的文本
          children: [
            ['/posts/blog/basic/hexo-设置favicon', 'hexo如何设置favicon'],   // 找到 docs/note/react/basic/react如何使用.md 文件
            ['/posts/blog/basic/hexo部署css-js等404以及上传图片', 'hexo部署后404问题解决'],
            ['/posts/blog/basic/vuepress博客上传图片', 'vuepress博客上传图片解决'],
          ]
        },
      ],

      // 新开一个专栏用来存放美图
      '/posts/photos/': [
      	['', '美图专栏'],	// 当切换到 /note/photos/ 时默认展示该md
      	// 这里采用有下拉选项的侧边栏
      	{
      		tilte: '美图',	// 下拉侧边栏显示的文本
      		children: [
      			['/posts/photos/date/20191102美图', '20191102图片墙'],
      			['/posts/photos/date/20191112', '20191112图片墙'],
      		]
      	}
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
    smoothScroll: true,

    serviceWorker: true, // VuePress默认支持PWA配置的，需要在基本配置中开启serviceWorker
  }
};