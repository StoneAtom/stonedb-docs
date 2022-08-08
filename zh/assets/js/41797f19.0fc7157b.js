"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[8261],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(d,".").concat(m)]||p[m]||l[m]||o;return n?a.createElement(b,c(c({ref:t},u),{},{components:n})):a.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53474:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"create-and-manage-table",sidebar_position:5.52},d="\u521b\u5efa\u548c\u7ba1\u7406\u8868",s={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-table",id:"developer-guide/create-and-manage-database-objects/create-and-manage-table",title:"\u521b\u5efa\u548c\u7ba1\u7406\u8868",description:"\u521b\u5efa\u8868\uff0c\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3astudent\u7684\u8868\uff0c\u5305\u62ec\u7f16\u53f7\u3001\u59d3\u540d\u3001\u5e74\u9f84\u3001\u751f\u65e5\u7b49\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-table.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-table",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-table",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-table.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1659952101,formattedLastUpdatedAt:"2022/8/8",sidebarPosition:5.52,frontMatter:{id:"create-and-manage-table",sidebar_position:5.52},sidebar:"autoSidebar",previous:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u5e93",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-database"},next:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u89c6\u56fe",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-view"}},u={},l=[],p={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521b\u5efa\u548c\u7ba1\u7406\u8868"},"\u521b\u5efa\u548c\u7ba1\u7406\u8868"),(0,o.kt)("p",null,"\u521b\u5efa\u8868\uff0c\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3astudent\u7684\u8868\uff0c\u5305\u62ec\u7f16\u53f7\u3001\u59d3\u540d\u3001\u5e74\u9f84\u3001\u751f\u65e5\u7b49\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table student(\n    id int(11) primary key,\n    name varchar(10),\n      age smallint,\n    birthday DATE\n    ) engine=stonedb;\n")),(0,o.kt)("p",null,"\u67e5\u770b\u8868\u7ed3\u6784\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show create table student\\G\n")),(0,o.kt)("p",null,"\u5220\u9664\u8868\uff0c\u4f8b\u5982\uff1a\u8981\u5220\u9664\u8868student\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop table student;\n")))}m.isMDXComponent=!0}}]);