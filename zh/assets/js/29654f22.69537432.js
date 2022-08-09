"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9306],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return b}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(a),b=r,m=p["".concat(c,".").concat(b)]||p[b]||i[b]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},44508:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return i}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],d={id:"create-and-manage-database",sidebar_position:5.51},c="Create and Manage a Database",l={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-database",id:"developer-guide/create-and-manage-database-objects/create-and-manage-database",title:"Create and Manage a Database",description:"Create a database. For example, execute the following SQL statement to create a database named test_db that uses utf8mb4 as the default character set:",source:"@site/../Docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-database.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-database",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-database",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-database.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660043938,formattedLastUpdatedAt:"2022/8/9",sidebarPosition:5.51,frontMatter:{id:"create-and-manage-database",sidebar_position:5.51},sidebar:"autoSidebar",previous:{title:"Statements for Queries",permalink:"/zh/docs/developer-guide/statements-for-queries"},next:{title:"Create and Manage a Table",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-table"}},u={},i=[],p={toc:i};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-and-manage-a-database"},"Create and Manage a Database"),(0,o.kt)("p",null,"Create a database. For example, execute the following SQL statement to create a database named ",(0,o.kt)("strong",{parentName:"p"},"test_db")," that uses ",(0,o.kt)("strong",{parentName:"p"},"utf8mb4")," as the default character set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create database test_db DEFAULT CHARACTER SET utf8mb4;\n")),(0,o.kt)("p",null,"List databases by executing the following SQL statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show databases;\n")),(0,o.kt)("p",null,"Use a database. For example, execute the following SQL statement to use database ",(0,o.kt)("strong",{parentName:"p"},"test_db"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use test_db;\n")),(0,o.kt)("p",null,"Drop a datable. For example, execute the following SQL statement to drop database ",(0,o.kt)("strong",{parentName:"p"},"test_db"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop database test_db;\n")))}b.isMDXComponent=!0}}]);