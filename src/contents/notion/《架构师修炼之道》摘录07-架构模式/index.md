---
title: 《架构师修炼之道》摘录07-架构模式
categories: 解决方案
status: publish
date: 2022-01-15T13:34:00.000+08:00
tags:
  - 笔记
  - 架构
cover: https://www.notion.so/images/page-cover/rijksmuseum_mignons_1660.jpg

---


> 本系列内容来自《架构师修炼之道》。在自己的笔记中以半摘录的方式，用 blockquote 穿插自己的思考和感悟，以加深对内容的理解和消化。

全书整体分为三个部分

- 第一部分介绍软件架构的基础知识和架构师必备的设计思维

- 第二部分讲解架构师需要掌握的核心技能和知识

- 第三部分讨论一系列使用的架构设计方法

前两部分适合从头到尾通读，第三部分用于参考和检索。

第七章的标题是“架构模式”，本章介绍最常见的架构模式，讲解如何让这些通用模式适应具体需求。

## 7.1 什么是架构模式

架构模式是针对特定问题的可复用解决方案，它通过特定的结构组合提升某方面的质量属性。选择合适的架构模式解决问题就不用从零开始设计架构，从而避开诸多麻烦的陷阱。

模式还有一个好处。由于许多模式广为人知，人们的沟通也变得容易。人常说一图抵千言，其实一个模式可以抵千图。此外，各种技术框架和技术平台都采用了流行的模式，用起来非常方便。

接下来介绍常见的架构模式，至于不常见的模式，读者可以自行搜索。

> 设计模式与架构模式有什么区别吗？

> 设计模式是所有设计是必须掌握的。除了编程、软件架构设计、企业架构设计之外，用户体验、测试、数据库，甚至开发流程都有现成的设计模式。设计模式在现在软件开发中有着重要的地位。  
>  
>软件的设计模式可以提高面向对象程序的可复用性和可维护性。架构模式与设计模式有所不同，架构模式定义了各种质量属性场景的解决方案，通常设计软件系统的多个组件。架构模式关注的质量属性与抽象力度都更宽泛。

## 7.2 分层模式

类别|模块
---|---
元素|层：一组功能内聚的模块。
关系|允许使用：那些层可以使用其他层的模块。
使用规则|所有模块必须划分到某一层里。上层允许使用下层，这种关系是单向的。“允许使用”关系可以进行限制，让当前层只能使用直接处在其下方的层。禁止循环依赖。
优势|提升可运维性、可移植性、可复用性、可测试性、设计阶段的可修改性。概念上比较容易实施。分层可以直观地反映在代码上。
劣势|从最上层到最下层，每一层都引入了额外的抽象，增加了复杂度，可能会影响性能。层数繁多和抽象泄露可能会导致开发过程非常痛苦。

下图是分层模式的示例，左侧显示了允许使用的关系，右侧表示元素之剑的关系

![](images/fc47ed9d5df61595.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=ebe97ef6b47974c892cbb41c126a41a805e4971a2f6d18fa682da697d356cd46&X-Amz-SignedHeaders=host&x-id=GetObject)

分层模式有许多变种，但是无论分成多少层，它的元素、关系、使用规则是不变的。

## 7.3 端口适配器模式

端口适配器模式隔离了核心业务逻辑，确保它可以在多种环境下使用，以及在隔离其他（负责提供数据和事件的）组件的状态下进行测试。在运行时，可以将输入源的可拔插适配器注入核心业务逻辑中，以提供对事件和数据的访问。构建和运行时，可以通过切换适配器生成各种系统配置。要求之初多个输入设备，或者输入设备有可能发生变化的系统适合使用这种模式。

类别|模块或组件连接器
---|---
元素|层：包含业务逻辑，但它不清楚使用的数据和事件的来源。
端口：层与适配器之间的接口。借助端口，层可以与具体的适配器分离
适配器：与外部数据源、设备成其他组件进行交互的代码，使得层能够访问
数据和事件。

关系|暴露：指明层可用的端口。
实现：指明约束适配器的端口。
注入：指明层可用的适配器。
使用规则|层通常会暴露端口，但不是必须这么做。没有端口的层有时称为内层。不暴露端口的层有时称为内部层。
适配器可以满足一个或多个端口的约束。
如果要将适配器注入端口，则适配器必须实现该端口所需的接口。
该模式适用于设计时和运行时的交互。无论是展示模块还是组件连接器，务必在模型中保持一致。
优势|提升可测试性、可维护性、可修改性。团队可以分工完成不同的层和适配器
劣势|必须建立机制选择运行时使用的适配器。适配器決定了运行时质量（安全性、
可靠性等)。应谨慎选择第三方适配器

下图是端口适配器模式的示例。在这个例子中，雷达模拟器可以在不改变核心业务逻辑的情况下从适配器切换到真实的雷达系统。此外，日志和通信总线也可以在必要情况下进行切换。

![](images/60f954e879e5c0ce.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=f9acc116018913fa4430b579d41c1bd2191fb7de893daef5a8ed54d3db01ca41&X-Amz-SignedHeaders=host&x-id=GetObject)

## 7.4 管道过滤器模式

管道过滤器模式里的组件称为**过滤器**，负责单一的数据转换或数据操作。数据快速从一个过滤器流转到下一个过滤器。这种数据操作是并发进行的。松耦合的过滤器可以通过各种方式组合和复用，从而创建出新的管道。该模式多运用在数据分析和数据转换领域。Uinx的终端命令可以连接在一起，它运用的就是管道过滤器模式。

类别|模块或组件连接器
---|---
元素|过滤器：读取、转换、记录数据的组件。过滤器可在读取数据的第一时
间开始处理。过滤器必须定义预期输入并输出结果。
管道：连接器，用于将数据从一个过滤器传输到下一个过滤器。管道具
有单一输入和输出，不会改变传输的数据
该模式的一些变种还包括元素源（source）和槽 (sink）。前者仅产生数
据，后者仅接收数据。
关系|接驳：通过管道，连接一个过滤器的输出与另一个过滤器的输入。
使用规则|管道只能连接与其输入输出兼容的过滤器。过滤器完全相互独立。
优势|提升性能、可复用性、可修改性。
劣势|管道过滤器系统不是交互式的，在不修改模式的情况下也不包含用户界面。模式不会明显提升可靠性，但可以通过引入过滤器来处理错误。简单的实现可能会影响性能，因为并发运行多个过滤器是有代价的。

![](images/8e6fedd79b183da2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=5a66cd0c9964f4ec92342d7596edcb8491e1fab7c0893620351f5c46f338e381&X-Amz-SignedHeaders=host&x-id=GetObject)

批处理模式和管道过滤器模式很像，但有一点不同。批处理系统是各阶段逐个、依次操作，而不像管道过滤器系统那样并发操作。批处理系统通常将所有数据写入磁盘，以供下一阶段读取，而不是将数据从一个阶段传输到下一个阶段。

## 7.5 面向服务架构模式

面向服务架构（SOA）用独立的组件提供特定功能的服务。各种服务在运行时整合在一起，决定了系统的行为。这要求服务的使用者必须能够在不清楚服务实现细节的情况下寻找和调用服务。

SOA有很多种实现方式。传统的SOA非常倚重消息总线和SOAP通信。现代SOA则鼓励使用细粒度的微服务，用轻量级的消息协议（如 HTTP)进行连接。

复杂的组织通常使用SOA来设计大型软件系统，由不同的部门管理不同的系统部分。SOA允许各个部门在其专业领域内独立工作（隐藏重要业务信息），同时这些子系统又能供外部访问。

类别|组件连接器
---|---
元素|服务：可独立部署的单元，通过定义好的接口提供服务功能。
服务注册表：列出所有可用的服务，以便服务可查找其他可用服务。
消息系统：取决于具体的系统设计，如 SOAP、REST、gRPC、异步消息。
关系|根据 SOA 系统的约束而变化。如果使用 Netfl ix 的“智能端点和哑管道”方法，则关系是“调用”。如果使用异步消息，则关系是“发布”和“订阅”
使用规则|服务不必知道所使用的其他服务的实现细节。服务必须通过外部组件发现其他服务，要么是服务注册表，要么是异步消息传递的消息总线。
优势|提升互用性、可复用性、可伸縮性。模式成熟，有许多子模式。
劣势|SOA 系统是分布式系统，带有分布式计算的所有复杂性。SOA 系统组成部分多，集成复杂。其他模式可以在设计时轻松处理的属性，在 SOA 系统
运行时很可能出问题。例如，如果不知道快照(snapshot）中正在运行的服务，就没法知道 SOA 系统的版本。该模式也抑制了可用性、可靠性、性能。

下图是SOA模式的示例，它显示了SOA的单一视图。SOA很复杂，涉及许多架构组件。

![](images/7ea47918880bd15b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=dcf1e6bc101632973bb3703c66afb93503a05ca890c1303101a32e2d0bf56380&X-Amz-SignedHeaders=host&x-id=GetObject)

## 7.6 发布订阅模式

在发布订阅模式中，生产者（producer）和消费者（consumer）在彼此不知情的情况下独立存在。大量的消费者订阅各种生产者发布的时间。生产者和消费者通过事件总线间接通信，事件总线负责将发布的时间与感兴趣的订阅者（subscriber）连接起来。事件总线技术的选择极大地影响系统属性。如果有多个独立组件要访问相同信息，就可以选用发布订阅模式。

类别|组件连接器
---|---
元素|发布者：发布时间的组件。发布的具体时间应在设计文档中描述。
订阅者：订阅事件的组件
事件总线：负责登记组件订阅和传递发布的事件。事件总线提升的属性由具体技术及其配置决定。
关系|发布：组件将事件发不到事件总线。
订阅：组件登记订阅事件。
使用规则|所有通信都通过事件总线进行。因此，所有组件必须连接到总线。某个组件可能既是发布者又是订阅者。
优势|提升可拓展性、可复用性、可测试性。根据事件总线的选择及其配置方式，还可以提升可用性、可靠性、可伸缩性。
劣势|考虑到组件通信的独立性和异步性，发布订阅系统的性能很难判断。事件总线的选择决定了发布订阅系统的成败。选择事件总线前应做好功课。

![](images/fba73088c74d11e4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=74429ac6d7dda6db041d2215d60053341672d82577b3f2a1a6511aef71ef6f30&X-Amz-SignedHeaders=host&x-id=GetObject)

## 7.7 共享数据模式

在共享数据模式中，多个组件通过共用的数据库访问数据。没有哪个组件单独对数据或数据存储负责。该模式特别适合有大量数据、多组件的系统。在共享数据系统里，数据和数据源是交互的主要媒介。该模式与基于时间的系统有所不同，后者的组件通过过程调用或消息调用进行通信。

类别|组件连接器
---|---
元素|数据库：保存访问器(accessor）共享的数据。数据存储的选择及其约束决定了能实现的质量属性。
数据访问器组件：以某种方式使用数据的组件。
关系|读取：数据访问器组件可以从共享数据库中读取数据。某些读取关系可能需要特定协议或对可读取的数据量、类型进行限制。
写入：数据访问器组件将数据与入共享数据库。写入关系可以采用事务形式进行限流和保护，或者用其他方式进行约束。
使用规则|只有数据访问器可以与共享的数据库进行交互。
优势|通过数据一致性、安全和隐私提升可靠性。如果数据库充分优化、数据访
问器划分良好，也可以提升可伸缩性和可用性。
劣势|共享数据库可能导致单点故障，从而影响可用性和性能。如果数据库发生变更，可维护性也会受影响，因为所有数据访问器也需要做相应变更。这种模式易于实施，也容易被滥用。共享数据可以解决许多问题，但在具体情况下，其他架构模式可能更适合。

![](images/2feaec275e371d06.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=b274ae1d0261f3324c6cf932bda9488a1005e78eaa07260b947c59368289c00f&X-Amz-SignedHeaders=host&x-id=GetObject)

共享数据模式可以与其他模式完美融合。许多大型信息系统的架构都用到了该模式。

## 7.8 多层模式

在多层模式中，系统运行时的结构被组织成逻辑组。这些逻辑组可以被分配到特定的物理组件，如服务器、云平台。多层模式（multi-tier pattern）在概念上与分层模式（layers pattern）相似。layer 是模块结构，处理设计时元素（design time element）；而 tier 是组件连接器结构或分配结构，处理运行时元素（runtime element）。

如果系统的组件将在不同的平台或硬件上运行，那么就可以考虑使用不同的层（tier）。

类别|组件连接器或分配
---|---
元素|层(tier)：运行时组件的逻辑组。有许多方式进行分层，如功能职责、计算平台、团队职责、沟通机制、安全需求、数据访问。
关系|属于：将组件归到某一层。
通信：层或其内部组件与其他层的交互。
该关系可以通过设计定义协议和通信约束。
允许通信．表明哪些层可以与其他层中的组件通信。
分配到：将层映射到物理计算平台。
使用规则|一个组件可能只属于某一层。层内的组件仅允许与同层的其他组件通信。增加层通信的约束条件，可以让情况更清楚，并提升可维护性。常见的方法是仅允许相邻层之间的通信。
优势|提升安全性、性能、可用性、可维护性、可修改性。
有利于分析成本和部署。
劣势|作为运行时构造，在大型系统中实施可能会有难度。
太多的层可能会抑制系统性能和可维护性。

下图是多层模式的示例。在这个例子中，应用层的组件分配到客户的服务器。中间层的组件分配到通用平台，但具有不同的功能职责。数据层的组件托管在不同的云平台上，可能只包含数据库。

![](images/75e0a8bec798a810.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221218T051951Z&X-Amz-Expires=3600&X-Amz-Signature=d7b7eb6bb92d1e9f4e87f6820986abeeae1bbaefc8aa6a5a39d1dd053b7491f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## 7.9 能力中心模式

在能力中心模式中，有一个专家团队负责定义模式、建立最佳范例、开发支持工具，并为子架构提供培训。能力中心（COC)本身不会构建和交付系统模块，而是帮助其他团队在日常开发工作中取得进步。CoC 团队可以围绕技术、用例、模式、高风险领域进行组织。


组建 CoC 将使开发团队更容易在架构中实施我们想要的模式和技术。CoC 是一个支持组，其首要目标是加快开发速度并提高系统的整体质量。下面的表格展示了能力中心模式的主要特点。


类别|分配
---|---
元素|CoC团队：开发人员和架构师小组。
责任区域：架构的子集，可以使模式、技术、用例。
关系|负责：联系CoC团队及其责任区域。
使用规则|通过一位CoC成员只负责一种技术或用例。
优势|提升专家的可复用性和可伸缩性，从而提升多方面的质量属性，如安全性、可伸缩性、性能、可靠性、可维护性等。
劣势|CoC让一些专家形成了知识上的”孤岛“，且容易因人员流动而出现知识流失。能力不足的CoC成员会引发问题，影响开发速度。

下表则是能力中心模式的示例，它展示了有数百位开发人员的公司如何组织CoC团队。

CoC团队|责任区域
---|---
任务调度比例|开发任务调度用例的框架，创建工具以便团队能够在集群里实例化该框架。
性能|就负载与性能测试与团队进行磋商，提供测试和搜集数据的工具，搜集和组织数据集及其他测试资产
数据库技术|与团队磋商选择适于用例的数据库，维护数据库配置工具，创建并分发培训材料。
核心平台|维护通用容器管理系统，提供Docker镜像，为日常任务（如日志收集和状况检查）创建工具。

## 7.10 开源贡献模式

在开源贡献模式中，开发团队虽然负责开发架构组件，但同时也允许其他人为开发做贡献。团队负责从质量和概念完整性的角度审核其他人提交的组件和更新。该模式只允许在架构上有少量的集中控制。当有来自多个开发团队的专家参与项目，或对某些组件存在共同依赖时，可以使用该模式。


要想成功运用这种模式，团队必须清楚要对哪些组件负责，并且明白这些组件要达到什么样的要求和标准。只给负责团队（所有者）提供写权限，可以进一步强化因队对组件的责任。其他贡献者则可以随时提交变更以供审核。事先编写风格指南，注重可测试性，限制技术和开发平台的选择，可以让开发人员更容易做出贡献。下表展示了开源贡献模式的主要特点。

类别|分配
---|---
元素|团队：提交或审核组件变更的小组。
库：包含软件组件的版本控制存储库。
关系|拥有：团队负责审查变更并维护库的完整性。
所有者有时称为库的仁慈独裁者。
可能贡献：表示可能向库提交变更的团队。
使用规则|库同城只有一个所有者，但这不是严格的规则。
团队可以对多个库做贡献。
优势|提升可复用性、可维护性、开发速度。
劣势|此模式与组件划分策略密切相关。在多数情况下，共享的学习曲线极其陡峭，这种模式就不太现实。也许需要与其他开放式管理方式配合才能取得成功。

开源共享模式可以与提升可复用性的其他模式配合使用。开源的做法可以创造出许多意想不到的复用机会。

## 7.11 大泥球模式

与其说大泥球是一种模式，不如说它是一种开发现象。大泥球模式没有明确的元素或关系，它也不能提升任何质量属性（其主要特点是杂乱无章）。大泥球模式会降低系统的可维护性和可拓展性。模块结构和组件连接器结构都可能变成”大泥球“。甚至有些微服务系统也能变成分布式的”大泥球“。

大泥球模式唯一的优势是在短期内提高开发速度（以牺牲设计的完整性为代价）。毫无章法的开发和缺乏架构知识是导致“大泥球”出现的主要原因。

有时为了尽快交付系统，我们不得不采用大泥球模式。这样做会留下技术债务，如果不能尽快淘汰系统或及时偿还技术债务，这种方法就有风险。

## 7.12 发现新架构模式

模式源于经验。有些模式广泛适用于各种系统和团队，有些却只适用于个别场合。虽然发明全新的架构模式并不容易，但新模式一直在涌现。


架构师发现新模式的途径与昆虫学家发现新物种的途径大致相同。多花时间，留心观祭。如果你发现了新模式，可以试着把它记下来，根据现有模式对它归类。如果你发现的模式已经存在，你可以发博客或论文，对现有知识进行补充，为集体智慧做贡献。如果你发现子新模式，请把它添加到团队的模式目录里。


发现模式主要有两种方法：以问题为中心，或以解决方案为中心。以问题为中心的方法是从常见的问题入手。如果你反复看到同样的问题出现，你可以试着开发一个通用的解决方案。研究现有的解决方案，找出其中的相同之处与不同之处。根据你的分析，尝试描述新解决方案的模式。


以解决方案为中心的方法则是从反复使用的解决方案入手。也许其他开发人员还没有意识到这一点。描述你观察到的解决方案模式，分析它能解决哪些常见的问题，试着把它定义清楚。


模式定义完成后，把它分享出去。你可以去找那些熟悉类似问题或类似解决方案的人，请他们提意见。模式的最终检验还要看实际实施情况，然后根据实践中的反馈意见进行改进。

## 结束语

本章主要介绍了将近十种常见的架构模式，内容比较多，需要好好消化。
