"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[7357],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),N=d(n),k=r,c=N["".concat(u,".").concat(k)]||N[k]||m[k]||l;return n?a.createElement(c,p(p({ref:e},o),{},{components:n})):a.createElement(c,p({ref:e},o))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=N;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},56211:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],i={id:"data-types",sidebar_position:6.2},u="\u6570\u636e\u7c7b\u578b",d={unversionedId:"SQL-reference/data-types",id:"SQL-reference/data-types",title:"\u6570\u636e\u7c7b\u578b",description:"StoneDB\u652f\u6301\u5982\u4e0b\u7684\u6570\u636e\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/data-types.md",sourceDirName:"05-SQL-reference",slug:"/SQL-reference/data-types",permalink:"/zh/docs/SQL-reference/data-types",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/data-types.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1659874260,formattedLastUpdatedAt:"2022/8/7",sidebarPosition:6.2,frontMatter:{id:"data-types",sidebar_position:6.2},sidebar:"autoSidebar",previous:{title:"\u5b57\u7b26\u96c6",permalink:"/zh/docs/SQL-reference/character-sets"},next:{title:"\u7b97\u672f\u8fd0\u7b97\u7b26",permalink:"/zh/docs/SQL-reference/operators/arithmetic-operators"}},o={},m=[],N={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,"StoneDB\u652f\u6301\u5982\u4e0b\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6210\u5458"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6574\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT\u3001SMALLINT\u3001MEDIUMINT\u3001INT\u3001BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6d6e\u70b9\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT\u3001DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u70b9\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u671f\u65f6\u95f4\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"YEAR\u3001TIME\u3001DATE\u3001DATETIME\u3001TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"CHAR\u3001VARCHAR\u3001TINYTEXT\u3001TEXT\u3001MEDIUMTEXT\u3001LONGTEXT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"BINARY\u3001VARBINARY\u3001TINYBLOB\u3001BLOB\u3001MEDIUMBLOB\u3001LONGBLOB")))),(0,l.kt)("p",null,"\u5728StoneDB\u521b\u5efa\u8868\u65f6\u4e0d\u652f\u6301\u4f7f\u7528\u5173\u952e\u5b57unsigned\u3001zerofill\uff0c\u5404\u6574\u578b\u7684\u53d6\u503c\u8303\u56f4\u5982\u4e0b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u8282"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0f\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-128"),(0,l.kt)("td",{parentName:"tr",align:null},"127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"-32768"),(0,l.kt)("td",{parentName:"tr",align:null},"32767")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"-8388608"),(0,l.kt)("td",{parentName:"tr",align:null},"8388607")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"-2147483647"),(0,l.kt)("td",{parentName:"tr",align:null},"2147483647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"-9223372036854775808"),(0,l.kt)("td",{parentName:"tr",align:null},"9223372036854775807")))),(0,l.kt)("p",null,"DECIMAL\u7cbe\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e18\uff0c\u5426\u5219\u4e0d\u652f\u6301\uff0c\u5982decimal(19)\u5c31\u4f1a\u62a5\u9519\u3002DECIMAL(6, 2)\u8868\u793a\u6574\u6570\u90e8\u5206\u548c\u5c0f\u6570\u90e8\u5206\u6700\u5927\u6709\u6548\u4f4d\u6570\u5206\u522b\u4e3a4\u548c2\uff0c\u6240\u4ee5\u503c\u57df\u4e3a","[-9999.99, 9999.99]","\u3002\n\u4e0d\u540c\u7684\u5b57\u7b26\u96c6\uff0c\u5373\u4f7f\u957f\u5ea6\u76f8\u540c\uff0c\u4f46\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u4e0d\u540c\uff0c\u4ee5\u4e0b\u662f\u4ee5\u5b57\u7b26\u96c6\u4e3alatin1\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5927\u5c0f\u8303\u56f4\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5927\u5c0f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR(M)"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,255]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(M)"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,65535]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,255]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,65535]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,16777215]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LONGTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,4294967295]")))),(0,l.kt)("p",null,"\u65e5\u671f\u7c7b\u578b\u7684\u65e5\u671f\u8303\u56f4\u5982\u4e0b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u65e5\u671f\u683c\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0f\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YEAR"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY"),(0,l.kt)("td",{parentName:"tr",align:null},"1901"),(0,l.kt)("td",{parentName:"tr",align:null},"2155")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"HH:MM:SS"),(0,l.kt)("td",{parentName:"tr",align:null},"-838:59:59"),(0,l.kt)("td",{parentName:"tr",align:null},"838:59:59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD"),(0,l.kt)("td",{parentName:"tr",align:null},"0001-01-01"),(0,l.kt)("td",{parentName:"tr",align:null},"9999-12-31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD HH:MM:SS"),(0,l.kt)("td",{parentName:"tr",align:null},"0001-01-01 00:00:00"),(0,l.kt)("td",{parentName:"tr",align:null},"9999-12-31 23:59:59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD HH:MM:SS"),(0,l.kt)("td",{parentName:"tr",align:null},"1970-01-01 08:00:01"),(0,l.kt)("td",{parentName:"tr",align:null},"2038-01-19 11:14:07")))))}k.isMDXComponent=!0}}]);