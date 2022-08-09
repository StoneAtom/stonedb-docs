"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5693],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),k=a,N=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(N,u(u({ref:e},d),{},{components:n})):r.createElement(N,u({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,u=new Array(l);u[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47422:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),u=["components"],i={id:"advanced-functions",sidebar_position:6.44},o="\u9ad8\u7ea7\u51fd\u6570",p={unversionedId:"SQL-reference/functions/advanced-functions",id:"SQL-reference/functions/advanced-functions",title:"\u9ad8\u7ea7\u51fd\u6570",description:"| Function | Description | Example |",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/04-functions/advanced-functions.md",sourceDirName:"05-SQL-reference/04-functions",slug:"/SQL-reference/functions/advanced-functions",permalink:"/zh/docs/SQL-reference/functions/advanced-functions",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/04-functions/advanced-functions.md",tags:[],version:"current",lastUpdatedBy:"kevin",lastUpdatedAt:1660043754,formattedLastUpdatedAt:"2022/8/9",sidebarPosition:6.44,frontMatter:{id:"advanced-functions",sidebar_position:6.44},sidebar:"autoSidebar",previous:{title:"\u6570\u5b66\u51fd\u6570",permalink:"/zh/docs/SQL-reference/functions/mathematical-functions"},next:{title:"\u805a\u5408\u51fd\u6570",permalink:"/zh/docs/SQL-reference/functions/aggregate-functions"}},d={},s=[],m={toc:s};function k(t){var e=t.components,n=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9ad8\u7ea7\u51fd\u6570"},"\u9ad8\u7ea7\u51fd\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Function")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Example")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the binary string equivalent to ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT BIN(28);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->11100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts string ",(0,l.kt)("em",{parentName:"td"},"s")," to a binary string."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT BINARY('STONEDB');",(0,l.kt)("br",null),(0,l.kt)("br",null),"-> STONEDB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CASE expression",(0,l.kt)("br",null),"WHEN condition1 THEN result1",(0,l.kt)("br",null),"WHEN condition2 THEN result2",(0,l.kt)("br",null),"...",(0,l.kt)("br",null),"WHEN conditionN THEN resultN",(0,l.kt)("br",null),"ELSE result",(0,l.kt)("br",null),"END"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CASE")," specifies the start of the function and ",(0,l.kt)("strong",{parentName:"td"},"END")," specifies the end of the function. ",(0,l.kt)("br",null),"If ",(0,l.kt)("em",{parentName:"td"},"condition1")," is met, ",(0,l.kt)("em",{parentName:"td"},"result1")," is returned. If ",(0,l.kt)("em",{parentName:"td"},"condition2")," is met, ",(0,l.kt)("em",{parentName:"td"},"result2")," is returned. If all conditions are not met, ",(0,l.kt)("em",{parentName:"td"},"result")," is returned. ",(0,l.kt)("br",null),"This function stops checking subsequent conditions immediately after a condition is met and returns the corresponding result."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT CASE ",(0,l.kt)("br",null),"WHEN 1>0",(0,l.kt)("br",null),"THEN '1 > 0'",(0,l.kt)("br",null),"WHEN 2>0",(0,l.kt)("br",null),"THEN '2 > 0'",(0,l.kt)("br",null),"ELSE '3 > 0'",(0,l.kt)("br",null),"END;",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1>0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CAST(x AS type)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts the data type of ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT CAST('2022-06-11' AS DATE);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COALESCE(expr1, expr2, ...., expr_n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the first non-null value in the specified list."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT COALESCE(NULL, NULL,'CHINA', NULL, NULL,'STONEDB');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->CHINA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_ID()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the ID of the current connection."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT CONNECTION_ID();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONV(x,f1,f2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts ",(0,l.kt)("em",{parentName:"td"},"x")," from base ",(0,l.kt)("em",{parentName:"td"},"f1")," to",(0,l.kt)("em",{parentName:"td"}," f2"),"."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT CONV(28,10,16);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONVERT(s USING cs)"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes the character set of string ",(0,l.kt)("em",{parentName:"td"},"s")," to character set ",(0,l.kt)("em",{parentName:"td"},"cs"),"."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT CHARSET('ABC');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->utf8 ",(0,l.kt)("br",null),(0,l.kt)("br",null),"SELECT CHARSET(CONVERT('ABC' USING gbk));",(0,l.kt)("br",null),(0,l.kt)("br",null),"->gbk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_USER()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current user."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT CURRENT_USER();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->root@localhost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATABASE()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the name of the current database."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT DATABASE(); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IF(expr,v1,v2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns value ",(0,l.kt)("em",{parentName:"td"},"v1")," if expression ",(0,l.kt)("em",{parentName:"td"},"expr")," is true or value ",(0,l.kt)("em",{parentName:"td"},"v2")," if expression ",(0,l.kt)("em",{parentName:"td"},"expr")," is false."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT IF(1>10,'true','false') ;",(0,l.kt)("br",null),(0,l.kt)("br",null),"->false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IFNULL(v1,v2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns value ",(0,l.kt)("em",{parentName:"td"},"v1")," if value ",(0,l.kt)("em",{parentName:"td"},"v1")," is not ",(0,l.kt)("strong",{parentName:"td"},"null"),". Otherwise, value ",(0,l.kt)("em",{parentName:"td"},"v2")," is returned."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT IFNULL(null,'Hello Word');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->HelloWord")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ISNULL(expression)"),(0,l.kt)("td",{parentName:"tr",align:null},"Checks whether ",(0,l.kt)("em",{parentName:"td"},"expression")," is ",(0,l.kt)("strong",{parentName:"td"},"NULL"),"."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT ISNULL(NULL);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAST_INSERT_ID()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the last AUTO_INCREMENT value."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT LAST_INSERT_ID();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NULLIF(expr1, expr2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Compares two strings ",(0,l.kt)("em",{parentName:"td"},"expr1")," and ",(0,l.kt)("em",{parentName:"td"},"expr2"),".",(0,l.kt)("br",null),"If they are the same, ",(0,l.kt)("strong",{parentName:"td"},"NULL")," is returned. Otherwise, ",(0,l.kt)("em",{parentName:"td"},"expr1")," is returned."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT NULLIF(25,25);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->NULL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SESSION_USER()",(0,l.kt)("br",null),"SYSTEM_USER()",(0,l.kt)("br",null),"USER()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current user."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT SESSION_USER();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->root@localhost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VERSION()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the version number of the database."),(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT VERSION();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->5.6.24-StoneDB-log")))))}k.isMDXComponent=!0}}]);