---
title: B端表格设计指南
categories:
  - 设计
toc: true
tags: 交互设计
date: 2023-03-10
---

最近在工作中遇到一个的需求：“为了满足MEP的市场化需求，需要支持通过liscence授权的方式实现对MEP的使用控制”。简单讲就是产品经理希望在表格的操作列里新增一个“liscence导入”按钮“：
![p](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/p.png)
需求本身没有问题，但目前的设计存在两个明显的问题：

- 操作列已经容纳了多个按钮，过多的操作项会让用户倍感压力；
- 操作项之间没有明显的轻重之分，而“展示重要的，隐藏不必要的”是设计中的黄金定律。  

在解决问题的过程中，我发现看似简单的表格其实藏着很多值得研究的细节。本篇文章，便是我在整个研究过程中的收获总结，共分为认识表格、数据展示、数据过滤、数据操作四个部分。  

## 认识表格
### 表格用途
表格是数据的载体，作为B端项目最常出镜的组件之一，它常应用于：
- 展示数据：使用表格对大量结构化数据进行有序展示，更利于用户获取信息。
- 对数据进行复杂操作：如排序、搜索、筛选等，使用表格更便于对数据进行操作。
- 对比、归纳、分类数据：使用表格组件，便于用户快速查询数据间的差异与变化、关联和区别。  

### 表格构成
**基本元素（必有）：**  
表头：说明该列的信息类别，可与排序、筛选等操作按钮搭配使用 
单元格：表格的主体，可展示文字、图标、图片、按钮等元素
**拓展元素（非必有）：**  
标题：对数据内容的高度概括  
筛选项：按条件过滤数据，便于快速获取信息  
操作项：附加功能，常见有新增、导入导出、自定义列表、批量操作等  
行列分割线：视觉上对行与行、列与列之间进行分割  
分页器：管理分页数据，视数据量大小决定是否需要
![image2](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image2.png)

### 表格类型
#### 样式
常见的三种样式各有利弊，需要结合实际需求选择，核心要点是：减少视觉干扰，着重信息传达。  
<img src="https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image3.png" alt="image3"  />
无论是斑马线还是网格线，都要避免使用过重的颜色抢走视觉重心，内容才是表格主体，需要重点展示。
<img src="https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image4.png" alt="image4"  />
在鼠标悬停、选中时，表格应该给予用户明显的反馈，常用颜色的轻重来区分不同状态。在使用斑马线的表格中，选中状态的颜色应该与斑马线本身的颜色作区分。
![image5](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image5.png)

#### 变形
根据不同场景需求还衍生出了几种变形表格：
**多选/单选表格**
![image6](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image6.png)
**固定行表格**
表头固定，表格内容支持上下滚动查看。适用于数据量不大，空间有限的情况
**固定列表格**
首列/尾列固定，中间列可左右滑动查看。适用于展示数据类型较多，空间有限的情况
![image7](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image7.png)
**可展开表格**
表格行可展开，以展示更多信息。适用于内容过多或信息优先级较低时，做适当隐藏
**嵌套子表格**
表格行可展开，数据含父子级关系
**树表格**
适用于数据信息有清晰层级关系
![image8](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image8.png)
**组合表格**
数据间含多个包含、并属关系
![image9](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image9.png)

## 数据展示
### 表头
常见的表头有三种：纯文本、分组、多功能
![image10](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image10.png)
表头是对每列内容的高度概括，起到数据解释的作用。因此，表头名称尽量简练准确，在不影响词意传达情况下进行简化，既能节省空间又能减轻用户阅读压力。但在B端业务中，常常会遇到一些晦涩难懂的专业名词，这种情况可以将该字段的详细解释放进气泡组件里，通过鼠标hover触发：
![image11](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image11.png)
**自定义表头**
当数据列过多我们无法确定展示优先级时，我们也可以提供自定义操作，将选择权交给用户，让他们自己去选择展示哪些内容：
![image12](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image12.png)

### 单元格
#### 单元格的内容类型
随着工具类应用的迭代发展，单元格内容不再仅限于文本段，像价格、日期、标签、缩略图等不同数据类型应该有不同的表现形式。
![image13](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image13.png)
很多时候需求描述非常简单，产品经理在写prd时很少会考虑到特别细致，这就要求我们拿到需求后要去思考数据背后的逻辑，从而选择合适的设计方式。以一个实际项目中遇到的需求为例：

> 需求描述：
> ...显示该功能状态：已关闭、已开启...
> ...操作列功能：开启/关闭、详情、删除，其中已关闭的功能显示开启按钮，已开启的功能显示关闭按钮...  

优化思路是将状态和相关操作结合，不影响信息传达和功能需求前提下带来了更高的阅读效率和使用体验。
![image14](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image14.png)
核心思想是无论使用哪种表现形式，都需要结合具体场景，不能纯粹为了视觉效果做改变，任何优化都需要确保功能的可用性、易用性。

#### 单元格文本
##### 文本显示
文本的字号和单元格行高是非常重要的参数，直接影响着阅读体验。常见的行高通常是4的倍数：36、40、48、64、80...
如果数据属性数量不多，偏文本展示为主，用 40、48 的高度即可。如果数据包含缩略图、多行文本，那么建议使用 64 、80 或更大的高度
![image15](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image15.png)

##### 空数据
当单元格的数据为空时，要避免直接展示空白格。空白格容易造成困惑甚至误解，用户会搞不清楚到底是没有数据，还是根本没有值。建议：
- 数据不存在（数据库中没有该字段）用“-”占位，
- 没有值（数据库中有该字段）时显示“0”，且小数点后位数、单位，都要与上下单元格保持一致  

![image-20240229113753460](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image-20240229113753460.png)

- 当整个表格无数据或加载失败时，也要给予用户明显的提示，最好告诉用户该怎么解决：  

![image-20240229113818556](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image-20240229113818556.png)
##### 对齐方式
表格对齐方式要考虑用户浏览习惯和信息特征，常见的有左对齐、右对齐、居中对齐，其中：
- 左对齐：最常见的对齐方式，适用于绝大多是文本段，符合用户阅读习惯
- 右对齐：常用于统计数、价格等类型，因这些字符长度较长，通常包含小数点和千分位分隔符，右对齐能更有助于我们识别价格的位数；但不是所有长数字都要右对齐，因为有些数字组合是没有位数价值的，比如手机号、ID、日期等，它们依旧只适合左对齐
- 居中对齐：适用于固定长度的短数据类型  

![image-20240229113853265](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image-20240229113853265.png)

##### 文本截断规则
在“寸土寸金”的表格空间中，常常会遇到单条数据过长的情况，为了不影响整体布局效果，常见的处理方式有以下两种：
1. 规定一个固定长度，字数超过限制则以“...”显示，鼠标hover时，气泡显示完整内容
2. 换行显示，可以让用户直接看到所有信息，适用于行高较大的表格，若文本超过两行则建议使用第一种方法  

![image-20240229113934812](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/image-20240229113934812.png)

## 数据过滤

实际项目中，一个表格可能包含海量数据，如何在其中快速找到目标数据，常见的方法有两种：
1. 筛选：过滤大部分无关信息，得到一个大概的范围
2. 搜索：分为精确搜索、精确搜索，本质上也是一种筛选，但比普通筛选更精准，需要用户有相对明确的目标  

### 筛选
<img src="https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/yuque_mind.jpeg" alt="yuque_mind" style="zoom:50%;" />

#### 上方筛选
平铺展示各个筛选项，用户一目了然，操作简便，能有效提高效率。但当筛选项较多时，平铺又会占据较多的页面空间，反而会让人“眼花缭乱”，不利于快速定位目标数据，此时可以提供“收起/展开”按钮，展示用户使用频率最高的筛选条件，其他的默认收起。
![20](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/20.png)
此外我们也需要和产品、开发确认筛选的执行条件：

1. 选择一项筛选条件后便立即执行效果；
2. 选择完成后，点击按钮再执行；  

![30](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/30.png)
#### 下拉筛选
最常见的筛选方式，空间利用率高，操作相对简单。主要有以下几种类型：
![21](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/21.png)
当选项较多时，建议加上搜索功能帮助用户快速定位目标选项

#### 表头筛选
将筛选条件与表头相结合，条件与内容的关联度最高，减少了一堆筛选条件对用户的干扰
![22](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/22.png)

#### tab标签
以上三种方式主要是对表格内容进行筛选，而tab标签更多是对表格进行筛选。
每一个tab下可能单独有一个表格
![23](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/23.png)

### 搜索
当用户有相对明确的目标时，搜索功能可以帮助用户快速而准确得定位到目标数据，获取相关信息。
由于考虑到用户需要手动输入，很难保证精准搜索，原则上所有搜索均为模糊搜索，同时可以带一个前置标签，缩小搜索范围。
![24](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/24.png)

## 数据操作
<img src="https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/yuque_mind2.jpeg" alt="yuque_mind2" style="zoom:50%;" />

### 单行操作
单行操作位于表格内部，又称行内操作，通常位于尾列。常见的有查看详情、编辑、删除，以及一些业务处理相关的操作。一般不多于三个，当超过时，建议将相对低频操作选项折叠收起，点击"更多"或“...”下拉显示。
![25](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/25.png)
由于权限不同或状态不同，部分操作无法触发时，需要向用户反馈原因：
![26](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/26.png)
在某些场景下，如果操作不重要或者使用频率很低，也可以把操作按钮做隐藏。当用户鼠标hover行时再显示所有操作。这种方法方便用户快速查看信息，但初次使用门槛较高，有一定学习成本。
![27](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/27.png)

### 批量操作
批量操作包括单选、多选、全选，通过复选框允许用户对一行或多行对象执行操作，在选中复选框后激活表上方操作按钮，如删除、通过等，提高操作效率，避免重复操作。批量操作可以位于表格上方、下方或固定住页面底部，具体需要根据业务需求来确定。  
同单行操作一样，批量操作也有显性、隐性两种方式：
![28](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/28.png)
### 全局操作
全局操作无需选中数据内容即可执行，常见有：新增、导入。
当存在多个全局操作时，需要对区分其重要性，主要按钮着重显示：

![29](https://savemyblogpic-1311313070.cos.ap-chengdu.myqcloud.com/blogpicture/29.png)

## 总结
本篇以本人在实际工作中遇到的问题为出发点，整理总结了表格设计中一些基本知识点。在实际工作中，需要设计师结合具体的产品需求和业务场景进行调整。核心原则如下：
1. 简洁为主，效率至上，避免过度设计
2. 展示重要信息，隐藏不必要信息，必要时提供自定义选择给用户
3. 表格最主要的用途是展示信息，任何改动都不得影响信息的有效传达

