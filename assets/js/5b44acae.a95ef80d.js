"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[225],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},744:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},c="StoneDB Introduction",l={unversionedId:"intro",id:"intro",title:"StoneDB Introduction",description:"StoneDB is an open-source hybrid transaction/analytical processing (HTAP) database designed and developed by StoneAtom based on the MySQL kernel. It is the first database of this type launched in China. StoneDB can be seamlessly switched from MySQL. It features optimal performance, financial-grade high availability, and real-time analytics, offering you a one-stop solution to process online transactional processing (OLTP), online analytical processing (OLAP), and HTAP workloads.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://https://github.com/StoneAtom/stonedb/edit/main/website/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"cieldon",lastUpdatedAt:1654916627,formattedLastUpdatedAt:"6/11/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Please wait for release",permalink:"/docs/download"}},d={},u=[],p={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stonedb-introduction"},"StoneDB Introduction"),(0,a.kt)("p",null,"StoneDB is an open-source hybrid transaction/analytical processing (HTAP) database designed and developed by StoneAtom based on the MySQL kernel. It is the first database of this type launched in China. StoneDB can be seamlessly switched from MySQL. It features optimal performance, financial-grade high availability, and real-time analytics, offering you a one-stop solution to process online transactional processing (OLTP), online analytical processing (OLAP), and HTAP workloads.\nStoneDB is highly compatible with the MySQL 5.6 and 5.7 protocols, the MySQL ecosystem, and common MySQL features and syntaxes. You can use tools and clients in the MySQL ecosystem on StoneDB, such as Navicat, Workbench, mysqldump, and mydumper. In addition, all workloads on StoneDB can be run on MySQL.\nStoneDB is optimized for OLAP applications. StoneDB that runs on a common x86 server can process complex queries on tens of billions of data records, while ensuring high performance. Compared to databases that use common transactional processing engines, StoneDB is at least 10 times faster in processing queries.\nStoneDB uses the knowledge grid technology and a column-oriented storage engine. This storage engine is designed for OLAP applications and provides features such as column-oriented storage, knowledge grid-based filtering, and high data compression ratio. With such storage engine, StoneDB provides application systems with high-performance and cost-effective data query processing.\nStoneDB has the following main features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for queries on large amounts of data: StoneDB deployed on a single server can process queries on tens of billions of data records and return query results in seconds."),(0,a.kt)("li",{parentName:"ul"},"Support for complex queries: StoneDB supports aggregate queries that are created based on any fields."),(0,a.kt)("li",{parentName:"ul"},"Maintenance-free: StoneDB ensures robust stability, requiring no dedicated O&M personnel."),(0,a.kt)("li",{parentName:"ul"},"Minimal storage cost: StoneDB supports a high compression ratio which ranges from 10:1 to 40:1. This greatly reduces the disk space required for storing data."),(0,a.kt)("li",{parentName:"ul"},"Low migration cost: StoneDB is independently deployed, requiring no extra dependencies. You can use the same tools and clients on StoneDB as those you use in the MySQL ecosystem.")))}f.isMDXComponent=!0}}]);