(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("虚拟 DOM 结构概念随着 react 的诞生而火起来，之后 vue2.0 也加入了虚拟 DOM 的概念。")]),t._v(" "),a("p",[t._v("阅读 vue 源码的时候，想了解虚拟 dom 结构的实现，发现在 "),a("code",[t._v("src/core/vdom/patch.js")]),t._v(" 的地方。作者说 vue 的虚拟 DOM 的算法是基于 snabbdom 进行改造的。")]),t._v(" "),a("p",[t._v("于是 google 一下，发现 snabbdom 实现的十分优雅，代码更易读。 所以决定先去把 snabbdom 的源码啃了之后，再回过头来啃 vue 虚拟 DOM 这一块的实现。")]),t._v(" "),a("h2",{attrs:{id:"什么是虚拟-dom-结构（virtual-dom）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟-dom-结构（virtual-dom）"}},[t._v("#")]),t._v(" 什么是虚拟 DOM 结构（Virtual DOM）")]),t._v(" "),a("h4",{attrs:{id:"为什么需要-virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-virtual-dom"}},[t._v("#")]),t._v(" 为什么需要 Virtual DOM")]),t._v(" "),a("p",[t._v("在前端刀耕火种的时代，jquery 可谓是一家独大。然而慢慢的人们发现，在我们的代码中布满了一系列操作 DOM 的代码。这些代码难以维护，又容易出错。而且也难以测试。")]),t._v(" "),a("p",[t._v("所以，react 利用了 Virtual DOM 简化 dom 操作，让数据与 dom 之间的关系更直观更简单。")]),t._v(" "),a("h4",{attrs:{id:"实现-virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-virtual-dom"}},[t._v("#")]),t._v(" 实现 Virtual DOM")]),t._v(" "),a("p",[t._v("Virtual DOM 主要包括以下三个方面：")]),t._v(" "),a("ol",[a("li",[t._v("使用 js 数据对象 表示 DOM 结构 -> VNode")]),t._v(" "),a("li",[t._v("比较新旧两棵 虚拟 DOM 树的差异 -> diff")]),t._v(" "),a("li",[t._v("将差异应用到真实的 DOM 树上 -> patch")])]),t._v(" "),a("p",[t._v("下面开始来研究 snabbdom 是如何实现这些方面的")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("p",[t._v("项目路径 ： "),a("a",{attrs:{href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/snabbdom/snabbdom"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("首先看一下整体的目录结构，源码主要是在 "),a("code",[t._v("src")]),t._v(" 里面，其他的目录："),a("code",[t._v("test")]),t._v(" 、"),a("code",[t._v("examples")]),t._v(" 分别是测试用例以及例子。")]),t._v(" "),a("p",[t._v("这里我们先关注源码部分")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("── h.ts   创建vnode的函数\n── helpers\n └── attachto.ts\n── hooks.ts  定义钩子\n── htmldomapi.ts   操作dom的一些工具类\n── is.ts   判断类型\n── modules  模块\n ├── attributes.ts\n ├── class.ts\n ├── dataset.ts\n ├── eventlisteners.ts\n ├── hero.ts\n ├── module.ts\n ├── props.ts\n └── style.ts\n── snabbdom.bundle.ts 入口文件\n── snabbdom.ts  初始化函数\n── thunk.ts  分块\n── tovnode.ts   dom元素转vnode\n── vnode.ts  虚拟节点对象\n")])])]),a("h2",{attrs:{id:"snabbdom-bundle-ts-入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom-bundle-ts-入口文件"}},[t._v("#")]),t._v(" "),a("code",[t._v("snabbdom.bundle.ts")]),t._v(" 入口文件")]),t._v(" "),a("p",[t._v("我们先从入口文件开始看起")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./snabbdom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attributesModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/attributes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for setting attributes on DOM elements")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" classModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// makes it easy to toggle classes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" propsModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/props'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for setting properties on DOM elements")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" styleModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handles styling on elements with support for animations")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" eventListenersModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/eventlisteners'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attaches event listeners")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// helper function for creating vnodes")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化，传入需要更新的模块。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" patch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Init patch function with choosen modules")]),t._v("\n    attributesModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    classModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    propsModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    styleModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eventListenersModule\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldVNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主要导出 snabbdomBundle , 主要包含两个函数，一个是 修补函数 ， 一个是 h 函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" snabbdomBundle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" patch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" any "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" snabbdomBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("我们可以看到，入口文件主要导出两个函数 ，")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("patch")]),t._v("函数 ， 由 "),a("code",[t._v("snabbdom.ts")]),t._v(" 的 "),a("code",[t._v("init")]),t._v(" 方法，根据传入的 "),a("code",[t._v("module")]),t._v(" 来初始化")]),t._v(" "),a("li",[a("code",[t._v("h")]),t._v("函数 ，在 "),a("code",[t._v("h.ts")]),t._v(" 里面实现。")])]),t._v(" "),a("p",[t._v("看起来 "),a("code",[t._v("h")]),t._v("函数比 "),a("code",[t._v("patch")]),t._v(" 要简单一些，我们去看看到底做了些什么。")])])}),[],!1,null,null,null);s.default=e.exports}}]);