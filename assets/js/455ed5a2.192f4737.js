"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9949],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||s;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18814:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={id:"stonedb-crashed",sidebar_position:9.4},c="StoneDB Crashed",u={unversionedId:"troubleshooting/stonedb-crashed",id:"troubleshooting/stonedb-crashed",title:"StoneDB Crashed",description:"This topic describes common causes of StoneDB crashes.",source:"@site/../Docs/08-troubleshooting/stonedb-crashed.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/stonedb-crashed",permalink:"/docs/troubleshooting/stonedb-crashed",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/08-troubleshooting/stonedb-crashed.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1659952101,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:9.4,frontMatter:{id:"stonedb-crashed",sidebar_position:9.4},sidebar:"autoSidebar",previous:{title:"Metadata Lock Waits",permalink:"/docs/troubleshooting/mdl-wait"},next:{title:"Failed to Operate on Data in StoneDB Tables",permalink:"/docs/troubleshooting/failed-to-operate-table"}},d={},l=[],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"stonedb-crashed"},"StoneDB Crashed"),(0,s.kt)("p",null,"This topic describes common causes of StoneDB crashes."),(0,s.kt)("h1",{id:"high-system-workloads"},"High system workloads"),(0,s.kt)("p",null,"System resources may fail to be applied for due to high system workloads. As a result, StoneDB crashes. In this case, address the issue by referring to ",(0,s.kt)("a",{parentName:"p",href:"/docs/troubleshooting/resource-bottleneck"},"Diagnose system resource bottlenecks"),"."),(0,s.kt)("h1",{id:"corrupted-data-pages"},(0,s.kt)("strong",{parentName:"h1"},"Corrupted data pages")),(0,s.kt)("p",null,"When the hardware is faulty or the disk space is exhausted, a data file is easy to be corrupted if data is written to the data file. If a data file is corrupted, StoneDB will crash to keep data consistent."),(0,s.kt)("h1",{id:"bugs"},"Bugs"),(0,s.kt)("p",null,"If StoneDB hits a bug, such as a deadlock, it will crash. To address this issue, collect the system log, error log, and trace log, and enable core dumps to locate the fault."))}f.isMDXComponent=!0}}]);