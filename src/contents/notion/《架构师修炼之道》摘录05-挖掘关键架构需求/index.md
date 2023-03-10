---
title: 《架构师修炼之道》摘录05-挖掘关键架构需求
categories: 解决方案
status: publish
date: 2022-01-02T13:34:00.000+08:00
tags:
  - 笔记
  - 架构
cover: https://www.notion.so/images/page-cover/nasa_reduced_gravity_walking_simulator.jpg

---


> 本系列内容来自《架构师修炼之道》。在自己的笔记中以半摘录的方式，用 blockquote 穿插自己的思考和感悟，以加深对内容的理解和消化。

全书整体分为三个部分

- 第一部分介绍软件架构的基础知识和架构师必备的设计思维

- 第二部分讲解架构师需要掌握的核心技能和知识

- 第三部分讨论一系列使用的架构设计方法

前两部分适合从头到尾通读，第三部分用于参考和检索。

第五章的标题是“挖掘关键架构”，本章主要阐述什么时关键架构需求（ASR)，如何挖掘关键架构需求。

关键架构需求（architecturally significant requirement, ASR）是显著影响架构中的结构选择的需求。架构师有责任确定对架构有重大影响的需求。ASR 通常分为四类。

**约束** 给定或选定的不可更改的设计决策。

**质量属性** 外部可见特性，表征系统在特定环境下的运行情况。

**影响较大的功能需求** 架构设计需要特别注意的特性和功能。

**其他影响因素** 时间、知识、经验、技术、办公室政治、你的技术特长，以及其他影响决策的东西。

## 5.1 用约束限制设计选择

约束是外界限定的或自己选择的不可更改的设计决策。软件系统都有约束。适当的约束可以简化问题，但是过分的约束则会增加设计难度。约束会影响技术上或业务上的选择。业务约束限制了对人员、流程、成本的选择；技术约束限制了对可用技术的选择。

技术约束|业务约束
---|---
编程语言（必须能在 Java 虚拟机上运行|团队组成与结构（x小组开发z组件）
操作系统或平台（Windows、Linux、Be0）|进度与预算
组件和技术（数据库只能用 DB2)|法律限制

### 5.1.1 明确约束

应该是用简洁的方描述约束及提出方，比如下方的表格。

约束|提出方|类型|背景
---|---|---|---
必须开源|主管|业务约束|开源提升影响力，吸引人才加入团队。
必须使用浏览器|业务方|技术约束|降低交付和维护难度

约束一旦确定，就不能再讨价还价，因此接受约束一定要慎重。“必须这么做，否则项目就会失败”和“尽量这么做，除非有合适的理由” 有着天壤之别。随着系统逐渐成形，设计决策有可能变得越来越像约束。区分自己的设计决策与给定的约束越来越困难。系统不再简洁、敏捷、有延展性。最后，早期的设计决策有可能变成了设计师的枷锁，让修改架构变得极其困难。


架构设计一定要仔细区分自己的决策与外界的约束。这虽然很困难，但你总是有权选择更改束手束脚的设计决策。

## 5.2 定义质量属性

质量属性描述了软件系统的外部可见特性以及我们对系统运行的期望，它在定义了系统执行某些操作时的表现。系统的这些能力有时候称为质量需求。下表中列出了《Softwarte Architecture in Practice》一书描述的常见质量属性。

设计属性|运行属性|感知属性
---|---|---
可修改性|可用性|可管理性
可维护性|可靠性|可支持性
可复用性|性能|简单性
可测试性|可伸缩性|指导性
可构建性或开发时间|安全性|

每个架构设计决策都至少会提升或抑制一个质量属性。大多数设计决策在提升某些质量属性的同时抑制了其他的质量属性！牺牲某个质量属性换取另一个质量属性，架构的结构选择就是这样逐步实现的。


挖掘关键架构需求主要就是为了确定系统的质量属性。质量属性会在整个设计过程中用来指导挑选技术、结构、模式，以及评估设计决策的合理性。

**质量属性是非功能性需求吗？**


软件工程教科书通常会讨论两类需求：**功能需求描述系统行为；非功能性需求描述功能需求之外的其他系统需求，包括质量属性和约束**。

设计软件架构必须区分**功能、约束、质量属性**，因为每种需求背后有不同的驱动力。例如，约束没有谈判余地，而质量属性则可以取舍。

质量属性是非功能性需求，但这样分类有点怪，因为质量属性场景中也隐含了功能部分。质量属性仅在系统运行时才有意义。在质量属性场景中，软件的响应是某些功能的直接结果。

### 5.2.1 用场景描述质量属性

质量属性听起来很抽象（可拓展性、可用性、性能等）。应该赋予这些词汇更具体的含义。解决办法时用质量属性场景来明确地描述质量属性。

![](images/0ac7f92cac3d11fa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=533d08edeea504029dabc2f37637b08ad641a7f53161cbc22edc022f9e8da05e&X-Amz-SignedHeaders=host&x-id=GetObject)

**刺激** 刺激是一个需要系统以某种方式做出响应的事件。刺激启动了一个场景，其类型由质量属性的类型决定。例如，可用性场景的刺激可能是节点变得不可用了，而可修改性场景的刺激可能是一个变更请求。

**来源** 刺激的来源，可以是人或系统，比如用户、系统组件、外部系统。

**软件部件** 系统的某个部分，场景描述中定义了其特征。也可以是整个系统或特定组件。

**响应** 外部可见的活动，在软件部件受刺激后发生。刺激引发响应。

**响应度量** 定义响应成功的标准和条件。响应度量必须是具体、明确、可衡量的。

**环境背景** 描述了场景中系统的操作环境。环境背景一般要明确说明《即使一切正常）。异常环境（如满负载、故障情况》尤其值得注意。

下图展示了美国国家航空航天局 （NASA）喷气推进实验室（JL）火星探测机器人的可移植性场景。

![](images/d6cc18b379ab3c98.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=e5a9a32fb3ee0f3e3f2ffb0f866f4cd0655080eee815060c0a1862fd411d22e4&X-Amz-SignedHeaders=host&x-id=GetObject)

质量属性场景的六个元素并非要逐点详细说明。只要说明刺激、来源、响应、响应度量，大致就够了。异常情况下还应加上对环境背景的说明。

合格的质量属性场景应该表达需求的意图，确保所有人都能理解。如果能做到精确、可衡量，那就更好了。

### 5.2.2 寻找具体可衡量的响应度量

给出响应度量，一开始需要根据你自己的经验来估计可能的数值。将利益相关方设想为站在你面前的稻草人，试着与之对话。“将系统移植到单片机上，需要花九个月时间，可以接受吗？”“六个月呢？” 最终，你会找到与利益相关方达成共识的响应度量。


良好定义的响应度量时可测试的。在项目初期，架物可能只存在于纸面上。但可运行的系统迟早会出现。如果你不知道如何对场景进行测试，那么这个场景实际上就缺少具体、可衡量的响应度量。

## 5.3 对功能需求分类

功能需求通常以用例或用户故事的形式记录，它定义了软件系统的行为，在某些特定情况下会影响架构设计。所有功能需求都对系统的成功至关重要，但并非所有系统功能都对软件架构有重大影响。如果某个功能需求影响架构决策，我们称之为**影响较大的功能需求**。

影响较大的功能需求常被称为**架构杀手**。如果你的架构无法实现这样一个重要的、 高优先级的功能，那么你就不得不放弃这个架构，从头开始设计。确定影响较大的功能需求需要方法、技巧、经验，下面是我的一些做法：

- 先画出概念架构草图，展示你当前对架构的构想。

- 对功能需求进行大致分类，每类需求反映一个相同类型的架构问题。

- 对照概念架构草图，思考每个分类如何实现。如果对于己知的粗粒度需求，实现功能的方式并不明显，那么它就可能对架构有重大影响。

第2步的作用是将大量的功能需求归入少数有代表性的类别，以下是可用的些策略：

- 寻找可以使用相同架构元素实现的功能需求。例如，需要持续运行的功能可以归为一类，而需要用户交互的功能可以归在另一类。

- 寻找看起来有难度的功能需求，它们对架构可能有重大影响。

- 寻找重要的、高优先级的功能需求。


我们来看一个例子。第 1.2.3 节的计算器 App，将两个数字求和是一个重要的功能需求，但对架构几乎没有影响。现在假设我们收到一个新功能：要求用户丢失手机之后，仍然可以查看计算的历史信息。

要查看历史信息？没问题。可以把用户操作保存在本地数据库。手机丢了怎么办？那就需要一个远程的数据库服务器。这又引入了许多新问题：如果用户的手机无法联网怎么办？可用性怎样衡量？可伸缩性呢？远程数据库的托管费用由谁出？数据变化时需要马上进行同步吗？问题越来越多。。。

一个看似简单的功能需求引出了一系列的新问题。在计算器的例子里，我们可以将所有数学运算归为一类。实现查看历史信息的功能需要远程存储，它与其他功能需求不同，因此可以归为另一类。

架构设计应该反映所有影响较大的功能需求，而分类的做法可以避免我们做重复的工作。这样做的目的是让我们对影响设计决策的重大需求引起重视。

## 5.3 找出其他影响架构的因素

除了关键架构需求，还有其他一些因素会直接或间接影响架构。

![](images/cd9c0d565ed2a891.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=9ac43a100ea04f35b6e5e58e06d9eaf6d4b266ea1b660a09baadbc2b2bfcd4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

架构师的能力和经验决定了如何开展架构设计，以及有哪些备选项。你和团队对技术的掌握程度决定了你们的设计方式。如果你们只知道 Ruby on Rails, 那么就很可能会用它来设计架构。如果你手里只有锤子，那你看什么都像钉子。

架构设计似乎总在追求热门技术。新硬件、新软件、新设计范式不断涌现，有些将对软件开发产生深远的影响，有些不过是“旧瓶装新酒。你的架构很可能就采用了最流行的设计，如同最时髦的发型。

### 5.4.1 接受康威定律

团队的组织结构与合作形式会影响架构设计。康威定律描述了团队组织结构与架构之间的关系，该定律 1967 年由 Melvin Conway 提出，后因《人月神话》的引用而广为人知。


```markdown
“任何设计系统的组织………产生的设计必然是该组织沟通结构的写照。
```


同一个组件，三个不同的团队会开发出三种不同的版本。架构中各种元素的边界正是人们沟通边界的技能。康域定律反过来也成立。架构中的通信路径反过来也会影响团队的组织架构。如果你想设计最好的软件，那么你必须准备好重新组织团队。

## 5.5 挖掘关键架构需求

关键架构需求往往是隐藏着的，需要挖掘。它们可能隐藏在用户故事里，可能隐藏在业务经理含蓄的描述里，还可能隐藏在利益相关方的提示里。这些人知道自己想要什么，只是不清楚如何表达出来。


产品待办列表 (backlog）是挖掘关键架构需求的宝藏。几乎每个功能需求都隐含或暗示了某些质量属性。有时用户故事会清楚地描述响应时间、可伸缩性需求，以及处理故障的方式。请将这些信息作为质量属性场景记录下来，以免它们在功能待办列表中丢失。


与利益相关方沟通，询问他们担心什么，了解他们的关心的问题，告诉他们有哪些潜在的风险，有哪些可能会出现的问题。下面列举了一些用于挖掘关键架构需求的方法：

- **GOM 研讨会**，将业务目标、质量属性响应度量与具体数据要求联系起来。

- **利益相关方访谈**，搞清楚质量属性场景和约束，这对技术利益相关方尤其有效。

- **假设清单**，将隐藏需求明晰化、 公开化。

- **微型质量属性研讨会**，快速有效地定义高优先级的质量属性场景，这对任何类型的项目，以及有不同技能和背景的利益相关方都奏效。

- **启动计划书**，启动一个新项目时，将启动计划书（inception deck）作为检查清单。架构设计是其中的主要内容。

> 上述的这几种挖掘关键架构需求的方法，会在后续的章节中介绍。

## 5.6 创建 ASR 工作簿

发现关键架构需求（ASR）后，应该把它们记录在ASR工作簿里。新项目时，ASR 工作簿是一个需要顿繁修改的文档。架构稳定下来后，你就不会再频繁地修改它了，但是会更频繁地参考它。再往后，可执行的测试和源代码可能会取代 ASR 工作簿的部分作用，不过该文档仍是重要的历史记录。


ASR 工作簿为程序员、测试人员，还有架构师提供系统背景信息。**了解关键架构需求的人越多，所需的架构设计监督就越少。**


下图是常用的ASR 工作簿大纲。你在做收集需求的计划时，可以把这个大纲作为检查清单。

![ASR 工作簿大纲](images/8c04915f8831e616.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051952Z&X-Amz-Expires=3600&X-Amz-Signature=8364605c8c7c9289f6c518bf33856a74827b02f40f45c2e2477ee83093d870db&X-Amz-SignedHeaders=host&x-id=GetObject)

> “**了解关键架构需求的人越多，所需的架构设计监督就越少**”这句话深有感触。在架构设计阶段，如果开发人员都能够参与，并且尽可能掌握更多的细节，这可以极大加强在架构落地过程中成员之间的默契。

## 结束语

不同的架构可以实现相同的功能。功能本身不足以帮助我们决定如何设计系统。我们还需要知道关键架构需求，尤其是质量属性。当我们挖掘出关键架构需求时，通过工作簿的方式记录在文档中，为团队其他成员提供更多参考信息。
