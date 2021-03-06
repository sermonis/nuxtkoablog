# nuxtkoablog

> 这是一个使用Nuxt,Node,Koa2,Mysql搭建的博客

## 运行
1. 更改`nuxt.config.js`文件，更改env.mysqlConfig和env.jwtSecret
    对应数据库、用户名、密码，token盐
2. 安装
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
  - [x] 笔记-文章增删改
  - [x] 笔记-编辑器页面
  - [x] 笔记-显示模式、编辑模式
  - [x] 笔记可发布到文章展示列表
  - [x] 笔记页面右键，增加删除优化
- [x] 备份功能
  - [x] 发送数据库备份到邮箱（手动）
  - [x] 定义一个邮箱来发送备份
  - [x] 定义一个邮箱来接收备份
  - [x] 导入功能，可导入其他博客系统的日志或者md文件（倒腾各种博客必备）
    - [x] cmd命令行导入普通`.md`文件到数据库
    - [x] cmd导入markdown文件，支持gitblog格式，支持命令行单个markdown文件导入
- [x] 后台配置部分参数
    - [x] 配置保存在数据库中
- [x] 安装升级功能
  - [x] 安装sql文件

## 命令行工具
* 导入具体目录下的markdown文件到数据库，目前只支持windows下的，还没兼容linux的
```
node cmd.js markdown ./folder
node cmd.js markdown ./folder/aa.md
```
* 导出笔记表中数据，导出notecates结构为某目录下的分类目录，notes导出为.md文件
```
node cmd.js note2file ./out
```

## 初衷
* 分享原创文章，收藏转载文章
* 记录笔记，日常学习东西的笔记，搜索方便
* 隐私需求，记录日记在自己的服务器上，实现自动备份数据

### 参考：

* [akoa](https://github.com/alwxkxk/akoa)
* [koa2-note](https://github.com/chenshenhai/koa2-note)
* [justyeh.com](https://github.com/justyeh/justyeh.com)
