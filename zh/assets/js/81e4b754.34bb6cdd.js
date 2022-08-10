"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[8263],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59638:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"failed-to-start",sidebar_position:9.1},u="StoneDB\u542f\u52a8\u5931\u8d25",c={unversionedId:"troubleshooting/failed-to-start",id:"troubleshooting/failed-to-start",title:"StoneDB\u542f\u52a8\u5931\u8d25",description:"\u5b9e\u4f8b\u542f\u52a8\u5931\u8d25\u7684\u539f\u56e0\u6709\u5f88\u591a\uff0c\u4e3b\u8981\u8fd8\u662f\u4ecemysqld.log\u67e5\u627e\u76f8\u5173\u62a5\u9519\u4fe1\u606f\uff0c\u4ee5\u4e0b\u662f\u5b9e\u4f8b\u542f\u52a8\u5931\u8d25\u7684\u5e38\u89c1\u539f\u56e0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/08-troubleshooting/failed-to-start.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/failed-to-start",permalink:"/zh/docs/troubleshooting/failed-to-start",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/08-troubleshooting/failed-to-start.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1660115193,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:9.1,frontMatter:{id:"failed-to-start",sidebar_position:9.1},sidebar:"autoSidebar",previous:{title:"\u6570\u636e\u8fc1\u79fb\u540c\u6b65\u5de5\u5177-Gravity",permalink:"/zh/docs/data-migration-to-stonedb/use-gravity-to-migrate"},next:{title:"\u6570\u636e\u76ee\u5f55\u5360\u7528\u7a7a\u95f4\u8fc7\u5927",permalink:"/zh/docs/troubleshooting/excessive-large-directory"}},s={},d=[{value:"\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406",id:"\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406",level:2},{value:"\u65e0\u6cd5\u8bbf\u95ee\u8d44\u6e90",id:"\u65e0\u6cd5\u8bbf\u95ee\u8d44\u6e90",level:2},{value:"\u6570\u636e\u9875\u88ab\u635f\u574f",id:"\u6570\u636e\u9875\u88ab\u635f\u574f",level:2}],p={toc:d};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stonedb\u542f\u52a8\u5931\u8d25"},"StoneDB\u542f\u52a8\u5931\u8d25"),(0,a.kt)("p",null,"\u5b9e\u4f8b\u542f\u52a8\u5931\u8d25\u7684\u539f\u56e0\u6709\u5f88\u591a\uff0c\u4e3b\u8981\u8fd8\u662f\u4ecemysqld.log\u67e5\u627e\u76f8\u5173\u62a5\u9519\u4fe1\u606f\uff0c\u4ee5\u4e0b\u662f\u5b9e\u4f8b\u542f\u52a8\u5931\u8d25\u7684\u5e38\u89c1\u539f\u56e0\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406"},"\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406"),(0,a.kt)("p",null,"\u5982\u679c\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406\uff0cmysqld.log\u6709\u660e\u786e\u63d0\u793a\u662f\u54ea\u4e2a\u53c2\u6570\uff0c\u5982\u4e0b\u6240\u793a\u662f\u53c2\u6570datadir\u7684\u8def\u5f84\u8bbe\u7f6e\u4e0d\u6b63\u786e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[ERROR] failed to set datadir to /stonedb/install/dataxxx/\n")),(0,a.kt)("h2",{id:"\u65e0\u6cd5\u8bbf\u95ee\u8d44\u6e90"},"\u65e0\u6cd5\u8bbf\u95ee\u8d44\u6e90"),(0,a.kt)("p",null,"\u65e0\u6cd5\u8bbf\u95ee\u8d44\u6e90\u5305\u62ec\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u76ee\u5f55\u7684\u5c5e\u4e3b\u6216\u8005\u6743\u9650\u9519\u8bef\uff0c\u5bfc\u81f4\u65e0\u6cd5\u8bbf\u95ee\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: unable to create temporary file; errno: 13\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u9875\u88ab\u635f\u574f"},"\u6570\u636e\u9875\u88ab\u635f\u574f"),(0,a.kt)("p",null,"\u5982\u679c\u6570\u636e\u9875\u88ab\u635f\u574f\uff0c\u5b9e\u4f8b\u662f\u65e0\u6cd5\u542f\u52a8\u7684\uff0c\u8fd9\u79cd\u60c5\u51b5\u53ea\u80fd\u901a\u8fc7\u5907\u4efd\u6765\u8fd8\u539f\u3002"))}f.isMDXComponent=!0}}]);