# **中文说明文档**
## FIX BOX （修复盒子）
+ 修复盒子是一个网页游戏常用白屏黑屏修复工具  
  附带Ping检测，便于客服引导。  
### 基于
* [Node.js](http://nodejs.cn/)
* [Electron](https://github.com/atom/electron)
* [React](https://github.com/facebook/react)

***

## 运行方式
+ 首先必须安装Nodejs，安装完成后，按照下列方式运行
+ 打开cmd或者power shell 进入代码主目录，输入下列代码。
```code
npm install
npm start
```
***

## 文件目录
* app/ -- 样式目录  
-------- css/  -- css样式表  
-------- img/  -- 图片文件夹  
-------- js/ --reactjs用文件夹  
* i18n/ --语言包
* lib/ --功能目录  
-------- jjg-ping/  -- Ping功能  
-------- ping.exe  -- Ping二进制
-------- do.js  --功能监听+功能文件
* views/  --网页渲染  
-------- disp.js  -- 显示模块渲染  
-------- functions.js  -- 功能渲染  
-------- head.js  -- 页面头渲染  
-------- loading.js  -- 加载页面  
-------- functions.json -- 功能控制  
* LICENSE  --MIT
* index.html  --主页面文件
* app.js  --功能加载js序列文件
* index.js  --页面主加载文件
* main.js  --启动用js文件
* package.json --软件信息文件
* README.md  --英文粗略说明文件（用于GitHub）

***

## 简易开发模板
* 可以做简单的开发  

hellow world 为例  
do.js  

```code
document.getElementById('helloworld').addEventListener('click', helloworld);

function helloworld() {
    del_div();
    add_div('hello world');
}
```  

functions.json  

```code
{
    "key": "5",
    "fname": "hello world",
    "class": "btn btn-primary btn-half",
    "id": "helloworld"
},

```  

**key是唯一值，请注意！**  

完成后，可运行调试。
