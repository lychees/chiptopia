## 什么是 Chiptopia
Chiptopia 项目源于独立之光的纸上游戏工坊，计划支持自定义简单桌上游戏的沙盒，打算首先支持[弹射骑士团](https://github.com/lychees/chiptopia/blob/master/PLAYBOOK.MD)

参考：
- [Tabletop Simulator](http://store.steampowered.com/app/286160/Tabletop_Simulator/)
- [Google Blockly](https://developers.google.com/blockly/)

## 什么是独立之光
独立之光，位于上海古美路1487弄21号。一家游戏行业的非营利机构，专注扶持有才华的开发者。并有光之希望计划、发展支持体系、创新项目孵化实验室等本地化游戏支持项目，长期为游戏开发者服务的组织。

- https://www.zhihu.com/people/hardcoregame/activities
- http://weibo.com/indielight?is_all=1

## 运行方法

Chiptopia 使用 [matter.js](http://brm.io/matter-js/) 作为物理引擎。

You can use Python2 [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html).
~~~~
python -m SimpleHTTPServer 23333
~~~~

Or [http.server](https://docs.python.org/3/library/http.server.html?highlight=http%20server#module-http.server) if you are using Python3.
~~~~
python -m http.server 23333
~~~~

## 什么是纸上游戏工坊

- https://www.bilibili.com/video/av7609464/?from=search&seid=6682407229705020587
- https://www.indienova.com/indie-game-development/indielightxindienova-02/
- http://www.sohu.com/a/165850551_99890953

## 开发计划
- Support Toolbox
	- 选中
 	- 拖拽
 	- 射击
 	- 添加物品
  		- 筹码
  		- 骰子	
  		- 障碍
  		- 卡片
  		- etc
 	- Save 存储游戏状态
 	- Load 载入游戏状态
 	- Import 导入自定义游戏
 	- Export 导出自定义游戏
- Support Multiplayer
	- Web Sokect
- Support AI player
