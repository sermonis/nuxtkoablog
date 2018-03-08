# nuxtkoablog

> 这是一个使用Nuxt,Node,Koa2,Mysql搭建的博客

## 运行

``` bash
# install dependencies
$ npm install # Or yarn install*[see note below]

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## 功能
- [x] 文章列表
  - [x] 文章分类
  - [x] 原创和转载分开
  - [x] 输入markdown格式
  - [ ] 可以转码网络上的html到md格式
- [x] 笔记功能（页面参考leanote）
  - [x] 笔记api
  - [x] 笔记不在前台显示，只在后台显示，后台可查询
  - [x] 笔记-分类增删改
  - [ ] 笔记-文章增删改
  - [ ] 笔记-编辑器页面
  - [ ] 笔记可发布到文章展示列表
- [ ] 备份功能
  - [ ] 定期发送数据库备份到邮箱
  - [ ] 定义一个邮箱来发送备份
  - [ ] 定义一个邮箱来接收备份
  - [ ] 导入功能，可导入其他博客系统的日志或者md文件（倒腾各种博客必备）
- [ ] 安装升级功能
  - [ ] 开始部署时需要输入ip、用户名、密码、数据库名，然后安装sql文件
  - [ ] 一开始定义好升级操作，每次版本升级更新相应内容

PS：一些功能暂时只是为了先使用起来，后续再说优化

## 初衷
* 分享原创文章，收藏转载文章
* 记录笔记，日常学习东西的笔记，搜索方便
* 隐私需求，记录日记在自己的服务器上，实现自动备份数据

参考：
* [akoa](https://github.com/alwxkxk/akoa)
* [koa2-note](https://github.com/chenshenhai/koa2-note)
* [justyeh.com](https://github.com/justyeh/justyeh.com)
