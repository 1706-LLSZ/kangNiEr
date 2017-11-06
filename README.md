# kangNiEr  


## 网站试用：PC平台 兼容IE9;  
## 网页内宽：1200px；

### 规范
#### 目录结构
> 统一放置对应文件夹中

<br>
|-------images/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/hnz/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/wlh/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/wq/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/lx/<br>
|--------css/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----reset.css 重置默认样式<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----border-radius.htc IE8兼容圆角<br>
|--------js/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----jquery.min.js<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----jquery.lazyload.min.js<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----swiper.min.js<br>
|--------index.html<br>
|--------about.html<br>

<br>
#### 命名规范
- css文件  如： 文件名  lb-index.css  <br>
                类名 如 .lb-banner  #lb-nav （一定要有后代保护）
  
- js文件   如： 文件名  lb-index.js  <br>
	  错误 window.onload = function(){}  <br>
	  正确 $(function(){ }) || window.addEventListener('load',function(){}) <br>
	  js文件引用统一放置在body结束之前
- image文件
  文件名 如：lb-logo.png<br/>
  所有文件 统一放置到自己姓名简拼的文件夹下<br/> 如   images/lb/ lb-logo.png<br/> 
  
#### 注释
> 必须添加注释并且注释结构清晰

\<!-- #nav 导航开始  --\><br>
\<!-- #nav 导航结束  --\>

## 工具库
- jQuery v1.12.4
- 可使用jquery插件、必须有插件说明 接口必须要有描述
- swiper插件 2.0版本 文档参考2.0 http://2.swiper.com.cn/

## 任务分配
### 前端布局分配
