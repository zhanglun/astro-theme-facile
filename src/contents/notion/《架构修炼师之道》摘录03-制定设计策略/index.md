---
title: 《架构修炼师之道》摘录03-制定设计策略
categories: 解决方案
status: publish
date: 2021-10-14T18:30:00.000+08:00
tags:
  - 笔记
  - 架构
cover: https://www.notion.so/images/page-cover/woodcuts_10.jpg

---


> 本系列内容来自《架构师修炼之道》。在自己的笔记中以半摘录的方式，用 blockquote 穿插自己的思考和感悟，以加深对内容的理解和消化。

全书整体分为三个部分

- 第一部分介绍软件架构的基础知识和架构师必备的设计思维

- 第二部分讲解架构师需要掌握的核心技能和知识

- 第三部分讨论一系列使用的架构设计方法

前两部分适合从头到尾通读，第三部分用于参考和检索。

第三章的标题是“制定设计策略”，本章将学习如何根据系统风险选择思维模式，并将其作为设计策略的一部分。

架构设计很容易陷入混乱无序的状态。即使是系统充满了不确定性，也必须制订计划。凡事预则立，只有凭借稳固的设计策略，才能应付各种不确定性。有的人认为检验架构需要先将其实现，但是本书中的建议是：设计过程中逐步验证架构的各个部分，同时运用思维模式和TDC循环确定下一步做什么。

## 3.1 找到够用的设计

在理性的世界中，我们可以先完成得定义问题，然后在设计完美的架构解决问题。很可惜，我们生活的不是一个理性的世界。“有限理性”这个词被创造出来，用于描述由时间、资金、技术、知识等限制造成的障碍，这些障碍增加了解决问题的难度。

架构设计的目标不是理性地寻求最佳设计，而是找到一个够用的设计。只要能满足需求、令人满意，就是够用的设计。

可以通过强化以下方法来寻找够用的设计。

- **将解决方案看成实验**。架构师不是无所不知的先知。应该将每个可能的解决方案当成待验证的实验。验证的速度和效率越高，找到合适的组合结构的时间就越短，相关利益方受益越快。

- **设法降低风险**。架构是软件系统的基础。如果架构出错，那一切都完了。架构师必须时刻考虑哪些地方可能会出错，并据此展开设计。根据风险决定接下来设计什么。

- **努力简化问题**。简单的问题通常也有简单的解法。简化问题的方法很多，比如减少利益相关方的数量可以减少冲突的观点。增加或减少约束条件，关注问题的子集，也可以降低问题的复杂度。识别常规问题，使用现成的解决方案，运用集体经验解决。

- **快速迭代学习**。学习得越快就探索得越多，对解决方案也就越有信心。如果有可能失败，越早知道越好。设计周期太长往往是因为目标过于宏远抽象，相比之下，我们更喜欢能产生具体成果得频繁迭代设计。

- **同时考虑问题和解决方案**。问题的边界是由可能的解法勾勒得。为了理解问题，我们必须探索各种解决方案，而为了更好地探索解决方案，我们又必须加深对问题的理解。设计软件架构需要我们同时考虑问题及其解决方案。在架构设计初期试着编写一些代码，就是这种策略的具体运用。

避免“完全理性”的设计不是放弃理性和计划，我们仍然要实现做一些架构设计工作，确定哪一部分架构马上设计，哪些以后考虑。尽早制定出这样的设计策略，既可以让团队明白架构将如何生长，也能培养各方对项目的信心。

### 3.2 决定前期做多少架构设计

所有软甲系统都有架构，都离不开架构。如果前期不设计交媾，那么开发出来的系统可能不符合要求。适当的时间设计架构能降低未来返工的风险。但是前期在架构设计上花的时间太长也会耽误开发，延迟交付。

软件系统的规模和需求各不相同，但每个系统都有一个设计的最佳平衡点——在开发之前用最适合的时间设计架构。

在《Architecting: How Much and When》一书中，作者 Boehm 证明了开发、架构设计、返工是构成项目工期的三个主要部分。返工包括弥补设计缺陷、重写代码、改正错误等。要找到最佳平衡点，必须整体考虑设计成本，以及为了完成系统不可避免的返工。

![](images/ac126cbec0d16f65.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=60155fff8cfd5e7f065f52a97c79509eab4eeb6da946e9d5ab6dac104c70520a&X-Amz-SignedHeaders=host&x-id=GetObject)

最佳平衡点主要由软件规模、需求变更、系统复杂度决定给。作者证明随着架构规划时间的增加，返工量会逐步减少。

在这个例子中，当用于架构设计的时间少于20%时，最终的项目工期随着架构设计时间的增加逐步减少，但边际效益在递减。随着架构设计时间的进一步增加，虽然返工量仍然会减少吗，但整个项目的工期反而变成了。

除此之外，作者还研究了随着系统规模变化，最佳平衡点的变动情况，这些数据可以用来评估你的架构设计时间是否在合理范围内。

这张图中包含了一些重要信息，分析一下其中要点：

- **软件系统越大，前期做架构设计的获益就越大**。大型软件系统（1000w行代码左右）将37%的时间花在架构设计上是一个明智的选择。

- **软件系统越小，前期做架构设计的收益就越小**。1w行代码左右的系统华仔前期架构设计上的时间不应该超过5%。有时候直接重启收益更高。

- **前期架构设计做的不够，要对后期返工做好心理准备**。

- **前期架构设计的投入越多，后期返工就越少**。

用系统规模来估计前期架构设计的工作量很方便，因为规模很容易衡量和预估。也可以使用系统复杂度来决定前期架构设计的工作量。不过这要是情况而定，对于有现成解决方案的系统，即使规模很大也可以不用做太多前期架构规划。

### 3.2.2 示例：架构对总工期的影响

假设我们正在开发一个规模约为十万行代码的系统，预计开发周期100天。按照前面提到的数据，如果我们只用 5%的时间做架构设计，那么项目总工期将延长43%。如果我们在架构设计上投入更多时间，如开发周期的 17%，那么项目总工期只会延长 38%。当然，继续延长架构设计时问并不意味着总工期会一直缩短。假设我们用三分之一的开发周期设计架构，尽管可以减少返工，但是整个项目的工期却延长了约40%，总工期反而变长了。

架构设计时间|返工时间|总工期
---|---|---
5天|38天|143天
17天|21天|138天
33天|7天|140天

Boehm 的研究让我们大致了解了应该花多少时间来设计架构，但是我们还不知道何时开展设计，以及何时运用第二章提到的思维模式。Boehm也做过这方面的研究，他的建议是用风险决定何时关注架构。用正确的方式看待风险，借助它确定设计内容，并且让利益相关方参与设计过程。

## 3.3 用风险做向导

值得开发的软件总是有风险的。在新项目开始时，你感到不安是很自然的。毕竟，如果我们一开始就什么都知道，对要开发的东西没有任何疑问，那还要架构师做什么？


应该充分利用这种不安。风险是很好的指示器，它提醒我们什么东西会构成障碍。凭直觉写下你对系统的担优和顾虑，对它们排序，列出优先级，把风险最高、最麻烦的排在前面。然后，选择合适的思维模式降低风险。


直觉告诉我们从哪里开始，但它不会告诉我们如何前进。直觉告诉我们哪儿不对劲，但是要完成工作，我们不能仅仅依靠直觉。

### 3.3.1 确定条件和后果

描述风险需要两部分：条件和后果。条件是当前的实际情况，后果是由条件引发的、将来可能出现的不良状糠。建议使用一种简单的模板记录风险：条件；后果。只有清楚条件和后果，才能决定如何处理风险。

### 3.3.2 借助风险选择思维模式

软件架构设计是一项降低风险的活动。只要你为系统担心，就表明项目有风险。如果你能用清楚的 “条件；后果，描述风险，就能用它指导自己的设计活动。


下面我列举几个以往项目中的风险，以及团队降低风险的对策。


- **模型训练服务最初是为其他目的开发的；新请求可能会导致其过载。**

	- 思维模式：理解、评估

	- 对策：与开发模型训练服务的团队进行沟通，了解其可伸缩性；做实验测算吞吐量。

- **数据处理将消耗大量的时间和资源；可能无法顺利完成处理任务**

	- 思维模式：探索

	- 对筑：头脑风鬆，探讨提高可華性的方法，研乳任务调度模式，寻找可缩短处理时间的替代设计方案。

- **需要大量数据训练给计模型：数据的存储成本高，樓型可能无法盈利。**

	- 思维模式：展示

	- 对策：建立成本估算模型，向利益相关方展示各种设计方案的利弊；通过调整待办列表(backlog）的优先级减小风险的时间窗口。

- **存储的数据可能包含敏感的客户信息；对数据进行隔离的要求超出我们的能力范围。**

	- 思维模式：评估

	- 对策：根据需求对可用的计算平台进行打分。

风险帮助我们决定设计内容；思维模式帮助我们指定降低风险的策略。在面对必须降低的风险时，首先确定可以解决的部分：风险的条件、影响、概率、时间窗口。然后选择一种思维模式。

如果|可以尝试
---|---
要解决的问题还不确定，对于利益相关方和其他系统参与者，还需要更加深入地了解。|理解
解决方案还不确定，需要充分了解可选的方案|探索
利益相关方不完全了解准备实施的方案|展示
在设计决策上举棋不定|评估

### 3.3.3 风险降低之后转为被动设计

架构师应该努力将技术风险降低到架构不再是系统中最大风险源的地步。一旦将架构风险降低到“恰如其分“的地步，就可以考虑将时间花在其他地方了。

此时可以从**主动设计**转为**被动设计**。主动设计是指主动设法降低架构风险。被动设计是指监控系统运行表现，只在必要时采取纠正措施。

被动设计有很多工作可以作，比如进一步修改和完善文档；根据出现的新情况对架构进行微调。还可以通过结对编程和代码评审培训团队成员。

除此之外架构还有可能重新成为最大的风险源。此时需要切回主动设计模式，根据实际情况调整架构。

> 在架构设计之初，通过前文提到的TOC循环，尽可能地考虑周全，将架构设计完备，减少风险的出现，不让架构成为瓶颈。之后再通过一些手段，比如监控、灰度发布等手段验证运行，在遇到新问题时及时纠正，完善架构的设计。

## 3.4 制订设计计划

设计计划指出团队在架构上分配时间的总体策略。要花多少时间做前期分析？预计需求是否会发生变化？何时开始编写代码？良好的设计计划应该提出目标并解释这些细节。

设计计划不一定是正式的时间表，但是要体现出架构师的思路。可以将计划记录在简单的文档中，格式不定，但是内容最好包括一下几个方面：

**结束设计的条件** 是限定前期设计的时间？还是通过设计将风险降低到预期？是在开发之前尽量少的前期设计？还是尽可能完整地做好架构规划？各部分的实施独立展开还是某许部分需要一起开始？这些都没有定数，很大程度取决于团队、利益相关方、项目背景的实际情况。

**必要的设计成果** 在开始之前，告诉大家你准备如何记录架构设计。是画在白板上拍照，还是传统的文档记录？是否有现成模板？设计成果（用例、类图、架构图、设计文档等）保存在哪里？

**时间节点** 给出关键设计工作的时间节点。无论项目大小，至少要给出对架构设计有重大影响的事件的时间节点。比如：需求评审、设计评审、技术评审。此外，还需要给出利益相关方会面的时间节点。在开发工作即将开始时，或者确定初期工作包含的范围时，需要召开相关的同步会议。

**重大风险** 使用的是风险驱动的设计方法，因此应该将重大风险也放在设计计划里。在软件系统的整个生命周期中，应该不断回顾风险列表。

**概念架构设计** 可以先从可行的解决方案里面选择一个。概念架构不用很复杂，你可以画一张草图，只要能表达初步的设计想法就行。

> 明确方案设计的排期。根据实际情况，采用不同的标准。但无论如何，在制定设计计划时，都需要给到一个明确的设计完成时间。同时整个设计过程中的关键时间节点也需要明确。  
>  
>方案设计最终一定会产出一些内容。无论是何种形式，无论以什么载体保存数据，都需要将最后产出的内容存储记录。  
>  
>在方案设计过程中，要时刻关注风险。

## 结语语

本章学习了如何借助风险规划设计活动。风险可以帮助我们决定做多少前期架构设计，以及采用哪种思维模式解决问题。

许多团队开发新系统的第一个风险是理解软件的受益对象。第4章将学习运用理解思维模式，设身处地地理解软件的服务人群。


只有站在利益相关方的角度看待问题，你才能更深入地理解他们的实际需求。理解了利益相关方的实际需求，就能增加解决问题的机会。
