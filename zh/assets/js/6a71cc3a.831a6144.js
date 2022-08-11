"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"create-and-manage-view",sidebar_position:5.53},s="\u521b\u5efa\u548c\u7ba1\u7406\u89c6\u56fe",d={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-view",id:"developer-guide/create-and-manage-database-objects/create-and-manage-view",title:"\u521b\u5efa\u548c\u7ba1\u7406\u89c6\u56fe",description:"\u521b\u5efa\u89c6\u56fe\uff0c\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3av_s\u7684\u89c6\u56fe\uff0c\u53ea\u67e5\u8be2\u5e74\u9f84\u5927\u4e8e18\u5c81\u7684\u8001\u5e08\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-view.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-view",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-view",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-view.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660223276,formattedLastUpdatedAt:"2022/8/11",sidebarPosition:5.53,frontMatter:{id:"create-and-manage-view",sidebar_position:5.53},sidebar:"autoSidebar",previous:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u8868",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-table"},next:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u5b58\u50a8\u8fc7\u7a0b",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure"}},u={},l=[],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521b\u5efa\u548c\u7ba1\u7406\u89c6\u56fe"},"\u521b\u5efa\u548c\u7ba1\u7406\u89c6\u56fe"),(0,o.kt)("p",null,"\u521b\u5efa\u89c6\u56fe\uff0c\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3av_s\u7684\u89c6\u56fe\uff0c\u53ea\u67e5\u8be2\u5e74\u9f84\u5927\u4e8e18\u5c81\u7684\u8001\u5e08\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create view v_s as select name from teachers where age>18;\n")),(0,o.kt)("p",null,"\u67e5\u770b\u521b\u5efa\u89c6\u56fe\u8bed\u53e5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show create view v_s\\G\n")),(0,o.kt)("p",null,"\u5220\u9664\u89c6\u56fe\uff0c\u4f8b\u5982\uff1a\u8981\u5220\u9664\u89c6\u56fev_s\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop view v_s;\n")))}m.isMDXComponent=!0}}]);