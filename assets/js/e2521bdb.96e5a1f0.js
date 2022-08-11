"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[7459],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"failed-to-operate-table",sidebar_position:9.5},l="Failed to Operate on Data in StoneDB Tables",u={unversionedId:"troubleshooting/failed-to-operate-table",id:"troubleshooting/failed-to-operate-table",title:"Failed to Operate on Data in StoneDB Tables",description:"StoneDB has limits on some DML operations. For example, the following error is returned if a DELETE operation is performed because StoneDB does not support DELETE operations.",source:"@site/../Docs/08-troubleshooting/failed-to-operate-table.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/failed-to-operate-table",permalink:"/docs/troubleshooting/failed-to-operate-table",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/08-troubleshooting/failed-to-operate-table.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660223276,formattedLastUpdatedAt:"8/11/2022",sidebarPosition:9.5,frontMatter:{id:"failed-to-operate-table",sidebar_position:9.5},sidebar:"autoSidebar",previous:{title:"StoneDB Crashed",permalink:"/docs/troubleshooting/stonedb-crashed"},next:{title:"Failed to Start StoneDB in a KVM",permalink:"/docs/troubleshooting/failed-to-start-in-kvm"}},p={},c=[],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failed-to-operate-on-data-in-stonedb-tables"},"Failed to Operate on Data in StoneDB Tables"),(0,a.kt)("p",null,"StoneDB has limits on some DML operations. For example, the following error is returned if a DELETE operation is performed because StoneDB does not support DELETE operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ERROR 1031 (HY000): Table storage engine for 'xxx' doesn't have this option\n")),(0,a.kt)("p",null,"In addition, StoneDB does not support following operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute an REPLACE\u2026 INTO statement."),(0,a.kt)("li",{parentName:"ul"},"Use subqueries in an UPDATE statement. "),(0,a.kt)("li",{parentName:"ul"},"Execute an UPDATE\u2026 JOIN statement to update multiple tables.")),(0,a.kt)("p",null,"If you perform any of them, the system output indicates that the operation is successful. However, if you query relevant data, the data is not updated. You can execute ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW WARNINGS"),", and the following warning information will be displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show warnings;\n+-------+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Level | Code | Message                                                                                                                                                                                                                                                                                                                                                                          |\n+-------+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Note  | 1592 | Unsafe statement written to the binary log using statement format since BINLOG_FORMAT = STATEMENT. Statements writing to a table with an auto-increment column after selecting from another table are unsafe because the order in which rows are retrieved determines what (if any) rows will be written. This order cannot be predicted and may differ on master and the slave. |\n+-------+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("p",null,"StoneDB supports only statement-based binlog. For this reason, the three DML operations are identified as insecure. If StoneDB is deployed in active/standby architecture, these operations may also cause data inconsistency."))}f.isMDXComponent=!0}}]);