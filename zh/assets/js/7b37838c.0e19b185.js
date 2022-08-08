"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[608],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(k,s(s({ref:e},m),{},{components:n})):r.createElement(k,s({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53023:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],o={id:"oltp-performance-test-method",sidebar_position:7.621},i="StoneDB\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5\uff08OLTP\uff09",p={unversionedId:"performance-tuning/performance-tests/OLTP/oltp-performance-test-method",id:"performance-tuning/performance-tests/OLTP/oltp-performance-test-method",title:"StoneDB\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5\uff08OLTP\uff09",description:"SysBench\u5de5\u5177\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/06-performance-tests/01-OLTP/oltp-performance-test-method.md",sourceDirName:"06-performance-tuning/06-performance-tests/01-OLTP",slug:"/performance-tuning/performance-tests/OLTP/oltp-performance-test-method",permalink:"/zh/docs/performance-tuning/performance-tests/OLTP/oltp-performance-test-method",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/06-performance-tests/01-OLTP/oltp-performance-test-method.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1659952101,formattedLastUpdatedAt:"2022/8/8",sidebarPosition:7.621,frontMatter:{id:"oltp-performance-test-method",sidebar_position:7.621},sidebar:"autoSidebar",previous:{title:"TCP-H\u6d4b\u8bd5\u62a5\u544a",permalink:"/zh/docs/performance-tuning/performance-tests/OLAP/tcph-test-report"},next:{title:"MySQL\u589e\u91cf\u6570\u636e\u540c\u6b65\u5de5\u5177-otter",permalink:"/zh/docs/data-migration-to-stonedb/use-outter-to-migrate"}},m={},u=[{value:"SysBench\u5de5\u5177\u4ecb\u7ecd",id:"sysbench\u5de5\u5177\u4ecb\u7ecd",level:2},{value:"\u6d4b\u8bd5\u8bf4\u660e",id:"\u6d4b\u8bd5\u8bf4\u660e",level:2},{value:"\u6d4b\u8bd5\u6307\u6807",id:"\u6d4b\u8bd5\u6307\u6807",level:3},{value:"\u5b89\u88c5\u5de5\u5177-Sysbench",id:"\u5b89\u88c5\u5de5\u5177-sysbench",level:2},{value:"SysBench\u53c2\u6570\u8bf4\u660e",id:"sysbench\u53c2\u6570\u8bf4\u660e",level:2}],d={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stonedb\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5oltp"},"StoneDB\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5\uff08OLTP\uff09"),(0,l.kt)("h2",{id:"sysbench\u5de5\u5177\u4ecb\u7ecd"},"SysBench\u5de5\u5177\u4ecb\u7ecd"),(0,l.kt)("p",null,"SysBench\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u4e14\u652f\u6301\u591a\u7ebf\u7a0b\u7684\u6a21\u5757\u5316\u57fa\u51c6\u6d4b\u8bd5\u5de5\u5177\uff0c\u7528\u4e8e\u8bc4\u4f30\u7cfb\u7edf\u5728\u8fd0\u884c\u9ad8\u8d1f\u8f7d\u7684\u6570\u636e\u5e93\u65f6\u76f8\u5173\u6838\u5fc3\u53c2\u6570\u7684\u6027\u80fd\u8868\u73b0\u3002\u53ef\u7ed5\u8fc7\u590d\u6742\u7684\u6570\u636e\u5e93\u57fa\u51c6\u8bbe\u7f6e\uff0c\u751a\u81f3\u5728\u6ca1\u6709\u5b89\u88c5\u6570\u636e\u5e93\u7684\u524d\u63d0\u4e0b\uff0c\u5feb\u901f\u4e86\u89e3\u6570\u636e\u5e93\u7cfb\u7edf\u7684\u6027\u80fd\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u8bf4\u660e"},"\u6d4b\u8bd5\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `sbtest1` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `k` int(11) NOT NULL DEFAULT '0',\n  `c` char(120) NOT NULL DEFAULT '',\n  `pad` char(60) NOT NULL DEFAULT '',\n  PRIMARY KEY (`id`),\n  KEY `k_1` (`k`)\n) ENGINE=StoneDB AUTO_INCREMENT=800001 DEFAULT CHARSET=utf8\n")),(0,l.kt)("p",null,"SQL\u8bf7\u6c42\u6bd4\u4f8b\uff08\u53ea\u8bfb\u6d4b\u8bd5\u65b9\u6848\u4e0b\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u662f\u8bfb\u64cd\u4f5c\uff0c\u4e0d\u6d89\u53ca\u5199\u64cd\u4f5c\uff09"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SQL\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6267\u884c\u6bd4\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"SQL\u8bed\u53e5\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"point_selects"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT c FROM sbtest%u WHERE id=?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simple_ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT c FROM sbtest%u WHERE id BETWEEN ? AND ?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sum_ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SUM(k) FROM sbtest%u WHERE id BETWEEN ? AND ?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order_ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT c FROM sbtest%u WHERE id BETWEEN ? AND ? ORDER BY c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distinct_ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DISTINCT c FROM sbtest%u WHERE id BETWEEN ? AND ? ORDER BY c")))),(0,l.kt)("p",null,"| index_updates\uff08StoneDB\u65e0\u9700\u4e8c\u7ea7\u7d22\u5f15\uff0c\u6240\u4ee5\u4e0d\u7528\u6dfb\u52a0\u4e8c\u7ea7\u7d22\u5f15\uff0c\u7b49\u540c\u4e8e\nnon_index_updates\uff09 | 1 | UPDATE sbtest%u SET k=k+1 WHERE id=? |\n| non_index_updates | 1 | UPDATE sbtest%u SET c=? WHERE id=? |"),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u6307\u6807"},"\u6d4b\u8bd5\u6307\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u79d2\u6267\u884c\u4e8b\u52a1\u6570TPS\uff08Transactions Per Second\uff09\u6570\u636e\u5e93\u6bcf\u79d2\u6267\u884c\u7684\u4e8b\u52a1\u6570\uff0c\u4ee5COMMIT\u6210\u529f\u6b21\u6570\u4e3a\u51c6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u79d2\u6267\u884c\u8bf7\u6c42\u6570QPS\uff08Queries Per Second\uff09\u6570\u636e\u5e93\u6bcf\u79d2\u6267\u884c\u7684SQL\u6570\uff0c\u5305\u542bINSERT\u3001SELECT\u3001UPDATE\u3001DETELE\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"SysBench\u6807\u51c6OLTP\u8bfb\u5199\u6df7\u5408\u573a\u666f\u4e2d\u4e00\u4e2a\u4e8b\u52a1\u5305\u542b18\u4e2a\u8bfb\u5199SQL\uff08\u7531\u4e8e\u6682\u4e0d\u652f\u6301delete\u64cd\u4f5c\uff0c\u6240\u4ee5\u53bb\u9664\u4e00\u6761deleteSQL\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"SysBench\u6807\u51c6OLTP\u53ea\u8bfb\u573a\u666f\u4e2d\u4e00\u4e2a\u4e8b\u52a1\u5305\u542b14\u4e2a\u8bfbSQL\uff0810\u6761\u4e3b\u952e\u70b9\u67e5\u8be2\u30014\u6761\u8303\u56f4\u67e5\u8be2\uff09"),(0,l.kt)("li",{parentName:"ul"},"SysBench\u6807\u51c6OLTP\u5199\u573a\u666f\u4e2d\u4e00\u4e2a\u4e8b\u52a1\u5305\u542b4\u4e2a\u5199SQL\uff082\u6761UPDATE\u30011\u6761DETELE\uff08\u53bb\u9664\uff09\u30011\u6761INSERT\uff08\u548cdelete\u7ed1\u5b9a\u53bb\u9664\uff09\uff09")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5de5\u5177-sysbench"},"\u5b89\u88c5\u5de5\u5177-Sysbench"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yum install gcc gcc-c++ autoconf automake make libtool bzr mysql-devel git mysql\ngit clone https://github.com/akopytov/sysbench.git\n##\u4eceGit\u4e2d\u4e0b\u8f7dSysBench\ncd sysbench\n##\u6253\u5f00SysBench\u76ee\u5f55\ngit checkout 1.0.18\n##\u5207\u6362\u5230SysBench 1.0.18\u7248\u672c\n./autogen.sh\n##\u8fd0\u884cautogen.sh\n./configure --prefix=$WROKSPACE/sysbench/ --mandir=/usr/share/man\nmake\n##\u7f16\u8bd1\nmake install\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u8bed\u53e5\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd $WROKSPACE/sysbench/\n# \u51c6\u5907\u6570\u636e\nbin/sysbench --db-driver=mysql --mysql-host=xx.xx.xx.xx --mysql-port=3306 --mysql-user=xxx --mysql-password=xxxxxx --mysql-db=sbtest --table_size=800000 --tables=230 --time=600 --mysql_storage_engine=StoneDB --create_secondary=false --test=src/lua/oltp_read_only.lua prepare\n\n# \u8fd0\u884cworkload\nbin/sysbench --db-driver=mysql --mysql-host=xx.xx.xx.xx --mysql-port=3306 --mysql-user=xxx --mysql-password=xxxxxx  --mysql-db=sbtest --table_size=800000 --tables=230 --events=0 --time=600 --mysql_storage_engine=StoneDB  --threads=8 --percentile=95  --range_selects=0 --skip-trx=1 --report-interval=1 --test=src/lua/oltp_read_only.lua run\n\n# \u6e05\u7406\u538b\u6d4b\u6570\u636e\nbin/sysbench --db-driver=mysql --mysql-host=xx.xx.xx.xx --mysql-port=3306 --mysql-user=xxx --mysql-password=xxxxxx  --mysql-db=sbtest --table_size=800000 --tables=230 --events=0 --time=600 --mysql_storage_engine=StoneDB  --threads=8 --percentile=95  --range_selects=0 --skip-trx=1 --report-interval=1 --test=src/lua/oltp_read_only.lua cleanup\n\n")),(0,l.kt)("h2",{id:"sysbench\u53c2\u6570\u8bf4\u660e"},"SysBench\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db-driver"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u9a71\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql-host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u5b9e\u4f8b\u8fde\u63a5\u5730\u5740\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql-port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u5b9e\u4f8b\u8fde\u63a5\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql-user"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u5b9e\u4f8b\u8d26\u53f7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql-password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u5b9e\u4f8b\u8d26\u53f7\u5bf9\u5e94\u7684\u5bc6\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql-db"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u5b9e\u4f8b\u6570\u636e\u5e93\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8868\u5927\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tables"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8868\u6570\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8bf7\u6c42\u6570\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threads"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7ebf\u7a0b\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percentile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u7edf\u8ba1\u7684\u767e\u5206\u6bd4\uff0c\u9ed8\u8ba4\u503c\u4e3a95%\uff0c\u5373\u8bf7\u6c42\u572895%\u7684\u60c5\u51b5\u4e0b\u7684\u6267\u884c\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"report-interval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793aN\u79d2\u8f93\u51fa\u4e00\u6b21\u6d4b\u8bd5\u8fdb\u5ea6\u62a5\u544a\uff0c0\u8868\u793a\u5173\u95ed\u6d4b\u8bd5\u8fdb\u5ea6\u62a5\u544a\u8f93\u51fa\uff0c\u4ec5\u8f93\u51fa\u6700\u7ec8\u7684\u62a5\u544a\u7ed3\u679c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip-trx"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8df3\u8fc7\u4e8b\u52a1\u30021\uff1a\u8df3\u8fc7\uff1b0\uff1a\u4e0d\u8df3\u8fc7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql-socket"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u7684\u5b9e\u4f8b\u53ef\u4ee5\u6307\u5b9asocket\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_secondary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u521b\u5efa\u4e8c\u7ea7\u7d22\u5f15\uff0c\u9ed8\u8ba4true")))))}c.isMDXComponent=!0}}]);