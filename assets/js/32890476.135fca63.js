"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6032],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"intro",sidebar_position:1.1},d="StoneDB Introduction",c={unversionedId:"about-stonedb/intro",id:"about-stonedb/intro",title:"StoneDB Introduction",description:"StoneDB is an open-source hybrid transaction/analytical processing (HTAP) database designed and developed by StoneAtom based on the MySQL kernel. It is the first database of this type launched in China. StoneDB can be seamlessly switched from MySQL. It provides features such as optimal performance and real-time analytics, offering you a one-stop solution to process online transaction processing (OLTP), online analytical processing (OLAP), and HTAP workloads.",source:"@site/../Docs/00-about-stonedb/intro.md",sourceDirName:"00-about-stonedb",slug:"/about-stonedb/intro",permalink:"/docs/about-stonedb/intro",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/00-about-stonedb/intro.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1660115193,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:1.1,frontMatter:{id:"intro",sidebar_position:1.1},sidebar:"autoSidebar",next:{title:"Architecture",permalink:"/docs/about-stonedb/architecture"}},l={},u=[{value:"Advantages",id:"advantages",level:2},{value:"Integration of MySQL",id:"integration-of-mysql",level:3},{value:"Real-time HTAP",id:"real-time-htap",level:3},{value:"High query performance",id:"high-query-performance",level:3},{value:"Minimal storage cost",id:"minimal-storage-cost",level:3},{value:"Key techniques",id:"key-techniques",level:2},{value:"Column-based storage engine",id:"column-based-storage-engine",level:3},{value:"High-efficiency data compression",id:"high-efficiency-data-compression",level:3},{value:"Knowledge grid",id:"knowledge-grid",level:3},{value:"Push-based vectorized query execution",id:"push-based-vectorized-query-execution",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stonedb-introduction"},"StoneDB Introduction"),(0,r.kt)("p",null,"StoneDB is an open-source hybrid transaction/analytical processing (HTAP) database designed and developed by StoneAtom based on the MySQL kernel. It is the first database of this type launched in China. StoneDB can be seamlessly switched from MySQL. It provides features such as optimal performance and real-time analytics, offering you a one-stop solution to process online transaction processing (OLTP), online analytical processing (OLAP), and HTAP workloads."),(0,r.kt)("p",null,"StoneDB is fully compatible with the MySQL 5.6 and 5.7 protocols, the MySQL ecosystem, and common MySQL features and syntaxes. You can use tools and clients in the MySQL ecosystem on StoneDB, such as Navicat, Workbench, mysqldump, and mydumper. In addition, all workloads on StoneDB can be run on MySQL."),(0,r.kt)("p",null,"StoneDB is optimized for OLAP applications. StoneDB that runs on a common server can process complex queries on tens of billions of data records, while ensuring high performance. Compared to databases that use MySQL Community Edition, StoneDB is at least 10 times faster in processing queries."),(0,r.kt)("p",null,"StoneDB uses the knowledge grid technology and a column-based storage engine. This storage engine is designed for OLAP applications and uses techniques such as column-based storage, knowledge grid-based filtering, and high-efficiency data compression. With such storage engine, StoneDB provides application systems with high-performance and reduces the total cost of ownership (TCO)."),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("h3",{id:"integration-of-mysql"},"Integration of MySQL"),(0,r.kt)("p",null,"StoneDB is an HTAP database built on MySQL. To enhance analytics capabilities, it integrates a self-developed engine also named StoneDB. (In this topic, StoneDB refers to the database, if not otherwise specified.) For this reason, StoneDB is fully compatible with MySQL. You can use standard interfaces, such as Open Database Connectivity (ODBC) and Java Database Connectivity (JDBC) to connect to StoneDB. In addition, you can create local connections to connect to StoneDB. StoneDB supports APIs written in various programming languages, such as C, C++, C#, Java, PHP, and Perl. StoneDB is fully compatible with views and stored procedures that comply with the ANSI SQL-92 standard and the SQL-99 standard. In this way, your application systems that can run on MySQL can directly run on StoneDB, without the need to modify the code. This allows you to seamlessly switch MySQL to StoneDB."),(0,r.kt)("h3",{id:"real-time-htap"},"Real-time HTAP"),(0,r.kt)("p",null,"StoneDB provides two engines: row-based storage engine InnoDB and column-based storage engine StoneDB. StoneDB uses binlogs to replicate data from the row-based storage engine to the column-based storage engine in real time. This ensures strong data consistency between the two storage engines."),(0,r.kt)("h3",{id:"high-query-performance"},"High query performance"),(0,r.kt)("p",null,"When processing complex queries on tens of or even billions of data records, StoneDB reduces the processing time to one tenth or even shorter, compared to MySQL."),(0,r.kt)("h3",{id:"minimal-storage-cost"},"Minimal storage cost"),(0,r.kt)("p",null,"StoneDB supports high compression ratio which can be up to 40:1. This greatly reduces the disk space required for storing data, cutting down the TCO."),(0,r.kt)("h2",{id:"key-techniques"},"Key techniques"),(0,r.kt)("h3",{id:"column-based-storage-engine"},"Column-based storage engine"),(0,r.kt)("p",null,"A column-based storage engine stores data to disks column by column. When you query data, only the required fields are retrieved, which greatly reduces memory bandwidth traffic and disk I/O. In addition, in a column-based storage engine, columns do not need to be indexed, freeing the database from maintaining such indexes."),(0,r.kt)("h3",{id:"high-efficiency-data-compression"},"High-efficiency data compression"),(0,r.kt)("p",null,"In a relational database, values in the same column are of the same data type. More duplicate values stored in a column indicate a higher data compression ratio and a smaller data volume. By virtue of this, less data is retrieved for queries, and thus memory bandwidth traffic and disk I/O are reduced. ",(0,r.kt)("br",null),"StoneDB saves storage space by using column-based storage. The data compression ratio of a column-oriented database is at least 10 times higher than that of a row-oriented database. "),(0,r.kt)("h3",{id:"knowledge-grid"},"Knowledge grid"),(0,r.kt)("p",null,"A knowledge grid can filter data packs based on metadata, and then decompress the data packs to obtain the data that meets the query conditions. This greatly reduces I/O, and improves response speed and network utilization."),(0,r.kt)("h3",{id:"push-based-vectorized-query-execution"},"Push-based vectorized query execution"),(0,r.kt)("p",null,"When processing a query, StoneDB pushes column-based data packs from one operator to another based on the execution plan. Compared to the execution model used by row-oriented databases, push-based execution prevents in-depth calls of stacks and saves resources."))}h.isMDXComponent=!0}}]);