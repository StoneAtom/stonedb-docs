"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5668],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),s=["components"],o={id:"olap-performance-test-method",sidebar_position:7.611},i="StoneDB\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5\uff08OLAP\uff09",p={unversionedId:"performance-tuning/performance-tests/OLAP/olap-performance-test-method",id:"performance-tuning/performance-tests/OLAP/olap-performance-test-method",title:"StoneDB\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5\uff08OLAP\uff09",description:"TPC-H\u662fTPC\u63d0\u4f9b\u7684\u4e00\u4e2abenchmark\uff0c\u7528\u6765\u6a21\u62df\u4e00\u4e2a\u73b0\u5b9e\u4e2d\u7684\u5546\u4e1a\u5e94\u7528\uff0c\u53ef\u4ee5\u751f\u6210\u4e00\u5806\u865a\u6784\u7684\u6570\u636e\uff0c\u4e14\u81ea\u5e26\u4e00\u4e9b\u67e5\u8be2\uff0c\u53ef\u4ee5\u5bfc\u5165\u5230\u5404\u79cd\u6570\u636e\u5e93\u4e2d\u6765\u6a21\u62df\u73b0\u5b9e\u9700\u6c42\uff0c\u68c0\u67e5\u6027\u80fd\u3002TPC-H \u4e3b\u8981\u7528\u4e8e\u8bc4\u6d4b\u6570\u636e\u5e93\u7684\u5206\u6790\u578b\u67e5\u8be2\u80fd\u529b\u3002TPC-H\u67e5\u8be2\u5305\u542b8\u5f20\u6570\u636e\u8868\u300122\u6761\u590d\u6742\u7684SQL\u67e5\u8be2\uff0c\u5927\u591a\u6570\u67e5\u8be2\u5305\u542b\u82e5\u5e72\u8868Join\u3001\u5b50\u67e5\u8be2\u548cGroup by\u805a\u5408\u7b49\uff0c\u5177\u4f53\u4ecb\u7ecd\u53ef\u67e5\u770bTPC-H\u5b98\u7f51\uff1ahttps://www.tpc.org/tpch/",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/06-performance-tests/00-OLAP/olap-performance-test-method.md",sourceDirName:"06-performance-tuning/06-performance-tests/00-OLAP",slug:"/performance-tuning/performance-tests/OLAP/olap-performance-test-method",permalink:"/zh/docs/performance-tuning/performance-tests/OLAP/olap-performance-test-method",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/06-performance-tests/00-OLAP/olap-performance-test-method.md",tags:[],version:"current",lastUpdatedBy:"Ma Jun",lastUpdatedAt:1658397797,formattedLastUpdatedAt:"2022/7/21",sidebarPosition:7.611,frontMatter:{id:"olap-performance-test-method",sidebar_position:7.611},sidebar:"autoSidebar",previous:{title:"\u8bfb\u5199\u5206\u79bb",permalink:"/zh/docs/performance-tuning/architecture-tuning/read_write-splitting"},next:{title:"TCP-H\u6d4b\u8bd5\u62a5\u544a",permalink:"/zh/docs/performance-tuning/performance-tests/OLAP/tcph-test-report"}},c={},d=[{value:"1\u3001\u642d\u5efaStoneDB\u6d4b\u8bd5\u73af\u5883",id:"1\u642d\u5efastonedb\u6d4b\u8bd5\u73af\u5883",level:2},{value:"2\u3001\u7f16\u8bd1\u90e8\u7f72TPCH",id:"2\u7f16\u8bd1\u90e8\u7f72tpch",level:2},{value:"3\u3001\u4f7f\u7528TPCH\u751f\u6210\u6d4b\u8bd5\u6570\u636e100GB",id:"3\u4f7f\u7528tpch\u751f\u6210\u6d4b\u8bd5\u6570\u636e100gb",level:2},{value:"4\u3001\u4fee\u6539dss.ddl\u3001dss.ri \u8868\u7ed3\u6784\u548c\u7d22\u5f15\u521b\u5efa\u8bed\u53e5",id:"4\u4fee\u6539dssddldssri-\u8868\u7ed3\u6784\u548c\u7d22\u5f15\u521b\u5efa\u8bed\u53e5",level:2},{value:"5\u3001\u5bfc\u5165\u8868\u7ed3\u6784\u548c\u8868\u6570\u636e",id:"5\u5bfc\u5165\u8868\u7ed3\u6784\u548c\u8868\u6570\u636e",level:2},{value:"6\u3001\u751f\u6210TPC-H\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5",id:"6\u751f\u6210tpc-h\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5",level:2},{value:"7\u3001\u4fee\u6539\u67e5\u8be2\u8bed\u53e5\uff0c\u6267\u884c\u6d4b\u8bd5",id:"7\u4fee\u6539\u67e5\u8be2\u8bed\u53e5\u6267\u884c\u6d4b\u8bd5",level:2},{value:"\u539f\u59cb\u67e5\u8be2\u8bed\u53e5",id:"\u539f\u59cb\u67e5\u8be2\u8bed\u53e5",level:3},{value:"\u4fee\u6539\u540e\u67e5\u8be2\u8bed\u53e5",id:"\u4fee\u6539\u540e\u67e5\u8be2\u8bed\u53e5",level:3},{value:"8\u3001\u6267\u884cTPCH\u811a\u672c\uff0c\u83b7\u5f97\u6d4b\u8bd5\u7ed3\u679c",id:"8\u6267\u884ctpch\u811a\u672c\u83b7\u5f97\u6d4b\u8bd5\u7ed3\u679c",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stonedb\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5olap"},"StoneDB\u6027\u80fd\u6d4b\u8bd5\u65b9\u6cd5\uff08OLAP\uff09"),(0,r.kt)("h1",{id:"tpch\u4ecb\u7ecd"},"TPCH\u4ecb\u7ecd"),(0,r.kt)("p",null,"TPC-H\u662fTPC\u63d0\u4f9b\u7684\u4e00\u4e2abenchmark\uff0c\u7528\u6765\u6a21\u62df\u4e00\u4e2a\u73b0\u5b9e\u4e2d\u7684\u5546\u4e1a\u5e94\u7528\uff0c\u53ef\u4ee5\u751f\u6210\u4e00\u5806\u865a\u6784\u7684\u6570\u636e\uff0c\u4e14\u81ea\u5e26\u4e00\u4e9b\u67e5\u8be2\uff0c\u53ef\u4ee5\u5bfc\u5165\u5230\u5404\u79cd\u6570\u636e\u5e93\u4e2d\u6765\u6a21\u62df\u73b0\u5b9e\u9700\u6c42\uff0c\u68c0\u67e5\u6027\u80fd\u3002TPC-H \u4e3b\u8981\u7528\u4e8e\u8bc4\u6d4b\u6570\u636e\u5e93\u7684\u5206\u6790\u578b\u67e5\u8be2\u80fd\u529b\u3002TPC-H\u67e5\u8be2\u5305\u542b8\u5f20\u6570\u636e\u8868\u300122\u6761\u590d\u6742\u7684SQL\u67e5\u8be2\uff0c\u5927\u591a\u6570\u67e5\u8be2\u5305\u542b\u82e5\u5e72\u8868Join\u3001\u5b50\u67e5\u8be2\u548cGroup by\u805a\u5408\u7b49\uff0c\u5177\u4f53\u4ecb\u7ecd\u53ef\u67e5\u770bTPC-H\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.tpc.org/tpch/"},"https://www.tpc.org/tpch/")),(0,r.kt)("h1",{id:"\u6d4b\u8bd5\u73af\u5883\u4ecb\u7ecd"},"\u6d4b\u8bd5\u73af\u5883\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u7cfb\u7edf\uff1aCentos 7.9\nCPU\uff1aIntel(R) Xeon(R) CPU E5-2683 v4 @ 2.10GHz   16\u683864\u7ebf\u7a0b\n\u5185\u5b58\uff1a125G\n\u6d4b\u8bd5StoneDB\u7248\u672c\uff1a\u5355\u8282\u70b9\u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/mysqld  Ver 5.6.24-StoneDB for Linux on x86_64 (build-)\nbuild information as follow:\n        Repository address: https://github.com/stoneatom/stonedb.git:stonedb-5.6\n        Branch name: stonedb-5.6\n        Last commit ID: 90583b2\n        Last commit time: Date:   Wed Jul 6 23:31:30 2022 +0800\n        Build time: Date: Thu Jul  7 05:39:39 UTC 2022\n")),(0,r.kt)("h1",{id:"\u6d4b\u8bd5\u65b9\u6848"},"\u6d4b\u8bd5\u65b9\u6848"),(0,r.kt)("h2",{id:"1\u642d\u5efastonedb\u6d4b\u8bd5\u73af\u5883"},"1\u3001\u642d\u5efaStoneDB\u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("p",null,"\u642d\u5efa\u65b9\u6848\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/getting-started/quick-deployment"},"\u5feb\u901f\u90e8\u7f72")),(0,r.kt)("h2",{id:"2\u7f16\u8bd1\u90e8\u7f72tpch"},"2\u3001\u7f16\u8bd1\u90e8\u7f72TPCH"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.tpc.org/tpc_documents_current_versions/current_specifications5.asp"},"https://www.tpc.org/tpc_documents_current_versions/current_specifications5.asp"),"\n\u7531\u4e8e\u4e0b\u8f7d\u9700\u8981\u6ce8\u518c\u767b\u5f55\uff0c\u901a\u8fc7\u53d1\u9001\u4e0b\u8f7d\u94fe\u63a5\u5230\u90ae\u7bb1\u540e\u8fdb\u884c\u4e0b\u8f7d\uff0c\u6240\u4ee5\u8be6\u7ec6\u6b65\u9aa4\u5c31\u4e0d\u591a\u505a\u89e3\u91ca\n\u4e0a\u4f20\u4e0b\u8f7d\u597d\u7684zip\u5305\u5230\u9700\u8981\u6d4b\u8bd5\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u672c\u6d4b\u8bd5\u6587\u6863\u5b58\u653e\u4e8e/data\u76ee\u5f55\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unzip tpc-h-tool.zip\nmv TPC-H_Tools_v3.0.0/ tpc-h/\ncd /data/tpc-h/dbgen/\n# \u5b89\u88c5GCC \u548cMAKE\nyum install gcc make -y\n")),(0,r.kt)("p",null,"\u7531\u4e8eTPCH\u672c\u8eab\u4e0d\u652f\u6301Mysql\uff0c\u9700\u8981\u5728makefile\u4e2d\u4fee\u6539\u90e8\u5206\u914d\u7f6e\uff0c\u53e6\u5916\u9700\u8981\u5728tpch.h\u65b0\u589e\u4e00\u4e2amysql\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp makefile.suite makefile\nvim makefile\n################\n## CHANGE NAME OF ANSI COMPILER HERE\n################\nCC      = gcc\n# Current values for DATABASE are: INFORMIX, DB2, TDAT (Teradata)\n#                                  SQLSERVER, SYBASE, ORACLE, VECTORWISE\n# Current values for MACHINE are:  ATT, DOS, HP, IBM, ICL, MVS,\n#                                  SGI, SUN, U2200, VMS, LINUX, WIN32\n# Current values for WORKLOAD are:  TPCH\nDATABASE= MYSQL\nMACHINE = LINUX\nWORKLOAD = TPCH\n")),(0,r.kt)("p",null,"\u540c\u65f6\u9700\u8981\u4fee\u6539tpcd.h\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\nvim tpcd.h\n\n#ifdef MYSQL\n#define GEN_QUERY_PLAN  ""\n#define START_TRAN      "START TRANSACTION"\n#define END_TRAN        "COMMIT"\n#define SET_OUTPUT      ""\n#define SET_ROWCOUNT    "limit %d;\\n"\n#define SET_DBASE       "use %s;\\n"\n#endif\n\n#\u6267\u884cmake\u547d\u4ee4\nmake\n')),(0,r.kt)("h2",{id:"3\u4f7f\u7528tpch\u751f\u6210\u6d4b\u8bd5\u6570\u636e100gb"},"3\u3001\u4f7f\u7528TPCH\u751f\u6210\u6d4b\u8bd5\u6570\u636e100GB"),(0,r.kt)("p",null,"TPCH\u4f1a\u751f\u62108\u5f20tbl\u540e\u7f00\u7684\u6570\u636e\u6587\u4ef6\uff0c\u751f\u6210\u547d\u4ee4\u53c2\u8003\n-s 1 \u8868\u793a\u751f\u62101G\u7684\u6570\u636e\uff0c\u5982\u679c\u4f60\u4e4b\u524d\u66fe\u7ecf\u5c1d\u8bd5\u8fc7\u751f\u6210\u6570\u636e\uff0c\u6700\u597d\u5148make clean\uff0c\u518d\u91cd\u65b0make\uff0c\u63a5\u7740\u5230\u8fd9\u6b65\u52a0\u4e0a-f\u8986\u76d6\u6389"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./dbgen -s 10\n\n# \u590d\u5236\u6570\u636e\u6587\u4ef6\u5230stonedb\u6587\u4ef6\u5939\u4e0b\uff0c\u65b9\u4fbf\u5bfc\u5165\nmkdir /data/tpc-h/stonedb/\nmv *.tbl /data/tpc-h/stonedb/\n")),(0,r.kt)("p",null,"\u751f\u6210\u4e4b\u540e\u53ef\u4ee5\u7528head\u547d\u4ee4\u68c0\u67e5\u4e00\u4e0btbl\u4eec\uff0c\u4f1a\u770b\u5230\u6bcf\u4e00\u884c\u90fd\u6709\u4e00\u4e9b\u7528\u201c|\u201d\u9694\u5f00\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("h2",{id:"4\u4fee\u6539dssddldssri-\u8868\u7ed3\u6784\u548c\u7d22\u5f15\u521b\u5efa\u8bed\u53e5"},"4\u3001\u4fee\u6539dss.ddl\u3001dss.ri \u8868\u7ed3\u6784\u548c\u7d22\u5f15\u521b\u5efa\u8bed\u53e5"),(0,r.kt)("p",null,"dss.ddl\u4e3a\u5efa\u8868\u8bed\u53e5\uff0cdss.ri\u4e3a\u7d22\u5f15\u548c\u5916\u952e\u7d22\u5f15\u521b\u5efa\u8bed\u53e5\n\u7531\u4e8e\u4e0d\u540c\u5f15\u64ce\u521b\u5efa\u8868\u7ed3\u6784\u8bed\u6cd5\u4e0d\u540c\uff0c\u6240\u4ee5\u9700\u8981\u5bf9\u5efa\u8868\u8bed\u53e5\u548c\u7d22\u5f15\u521b\u5efa\u8bed\u53e5\u8fdb\u884c\u4fee\u6539\uff0c\u5177\u4f53\u4fee\u6539\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6587\u4ef6\n\u590d\u5236\u7ed3\u6784\u7d22\u5f15\u6587\u4ef6\u5230stonedb\u76ee\u5f55\u4e0b\u8fdb\u884c\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@htap2 dbgen]# cp dss.ddl /data/tpc-h/stonedb/dss_stonedb.ddl          #\u7528\u4e8eStonedb\u7684\u8868\u7ed3\u6784\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- sccsid:     @(#)dss.ddl  2.1.8.1\ncreate table nation  ( n_nationkey  integer not null,\n                            n_name       char(25) not null,\n                            n_regionkey  integer not null,\n                            n_comment    varchar(152),primary key (n_nationkey))engine=StoneDB;\n\ncreate table region  ( r_regionkey  integer not null,\n                            r_name       char(25) not null,\n                            r_comment    varchar(152),primary key (r_regionkey))engine=StoneDB;\n\ncreate table part  ( p_partkey     integer not null,\n                          p_name        varchar(55) not null,\n                          p_mfgr        char(25) not null,\n                          p_brand       char(10) not null,\n                          p_type        varchar(25) not null,\n                          p_size        integer not null,\n                          p_container   char(10) not null,\n                          p_retailprice decimal(15,2) not null,\n                          p_comment     varchar(23) not null,primary key (p_partkey) )engine=StoneDB;\n\ncreate table supplier ( s_suppkey     integer not null,\n                             s_name        char(25) not null,\n                             s_address     varchar(40) not null,\n                             s_nationkey   integer not null,\n                             s_phone       char(15) not null,\n                             s_acctbal     decimal(15,2) not null,\n                             s_comment     varchar(101) not null,primary key (s_suppkey))engine=StoneDB;\n\ncreate table partsupp ( ps_partkey     integer not null,\n                             ps_suppkey     integer not null,\n                             ps_availqty    integer not null,\n                             ps_supplycost  decimal(15,2)  not null,\n                             ps_comment     varchar(199) not null,primary key (ps_partkey,ps_suppkey) )engine=StoneDB;\n\ncreate table customer ( c_custkey     integer not null,\n                             c_name        varchar(25) not null,\n                             c_address     varchar(40) not null,\n                             c_nationkey   integer not null,\n                             c_phone       char(15) not null,\n                             c_acctbal     decimal(15,2)   not null,\n                             c_mktsegment  char(10) not null,\n                             c_comment     varchar(117) not null,primary key (c_custkey))engine=StoneDB;\n\ncreate table orders  ( o_orderkey       integer not null,\n                           o_custkey        integer not null,\n                           o_orderstatus    char(1) not null,\n                           o_totalprice     decimal(15,2) not null,\n                           o_orderdate      date not null,\n                           o_orderpriority  char(15) not null,  \n                           o_clerk          char(15) not null, \n                           o_shippriority   integer not null,\n                           o_comment        varchar(79) not null,primary key (o_orderkey))engine=StoneDB;\n\ncreate table lineitem ( l_orderkey    integer not null,\n                             l_partkey     integer not null,\n                             l_suppkey     integer not null,\n                             l_linenumber  integer not null,\n                             l_quantity    decimal(15,2) not null,\n                             l_extendedprice  decimal(15,2) not null,\n                             l_discount    decimal(15,2) not null,\n                             l_tax         decimal(15,2) not null,\n                             l_returnflag  char(1) not null,\n                             l_linestatus  char(1) not null,\n                             l_shipdate    date not null,\n                             l_commitdate  date not null,\n                             l_receiptdate date not null,\n                             l_shipinstruct char(25) not null,\n                             l_shipmode     char(10) not null,\n                             l_comment      varchar(44) not null,primary key (l_orderkey,l_linenumber))engine=StoneDB;\n\n\n")),(0,r.kt)("h2",{id:"5\u5bfc\u5165\u8868\u7ed3\u6784\u548c\u8868\u6570\u636e"},"5\u3001\u5bfc\u5165\u8868\u7ed3\u6784\u548c\u8868\u6570\u636e"),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\u5bfc\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> create database tpch;\nmysql> source /data/tpc-h/stonedb/dss_stonedb.ddl  #\u4e3b\u8981PATH\u8981\u4fee\u6539\u4e3atpch\u5de5\u5177\u5b58\u653e\u5730\u5740\n")),(0,r.kt)("p",null,"\u6570\u636e\u5bfc\u5165\n\u5bfc\u5165\u53ef\u4ee5\u5148\u5bfc\u5165\u8fd9\u4e94\u4e2a\u5e93\uff1apart \u3001region \u3001nation \u3001customer \u3001supplier\n\u53e6\u5916\u4e09\u4e2a\u5e93lineitem\u3001orders\u3001partsupp\u6570\u636e\u91cf\u6bd4\u8f83\u5927\uff0c\u5efa\u8bae\u4f7f\u7528\u811a\u672c\u5207\u5272\u540e\u5bfc\u5165\uff0c\u5207\u5272\u811a\u672c\u53c2\u8003\uff1asplit_file2db.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#StoneDB\u5bfc\u5165\u65b9\u6cd5\uff0c\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/part.tbl' into table part fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/region.tbl' into table region fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/nation.tbl' into table nation fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/customer.tbl' into table customer fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/supplier.tbl' into table supplier fields terminated by '|';\"\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#! /bin/bash\n\nshopt -s expand_aliases\nsource ~/.bash_profile\n#\u83b7\u53d6\u5f53\u524d\u76ee\u5f55\u4e0b.tbl\u6587\u4ef6\uff0c\u5e76\u83b7\u53d6\u5bf9\u5e94\u8868\u540d\nsql_path=/data/tpc-h/stonedb/\n# split_tb=$(ls ${sql_path}/*.ddl)\n#\u9700\u8981\u62c6\u5206\u7684\u6570\u636e\u6587\u4ef6\nsplit_tb=(lineitem orders partsupp)\n# split_tb=(customer nation supplier part region)\n# split_tb=(part nation)\n#\u5207\u5272\u8bbe\u7f6e\n#\u8981\u5206\u5272\u6210\u7684\u6bcf\u4e2a\u5c0f\u6587\u4ef6\u7684\u884c\u6570line\nline=1000000  \n\n#\u6570\u636e\u5e93\u914d\u7f6e\ndb_host=192.168.30.102\ndb_port=3306\ndb_user=ztpch\ndb_pwd=******\ndb=ztpch  \n\n\n\n\n#\u62c6\u5206\u5927SQL\u6587\u4ef6\nfunction split_file()\n{\n    for tb_name in ${split_tb[@]}\n    do\n        echo "$tb_name"\n        #\u83b7\u53d6\u539f\u6587\u4ef6\u603b\u884c\u6570totalline\n        totalline=$(cat $sql_path/$tb_name.tbl | wc -l)\n        # echo totalline=$totalline\n        a=`expr $totalline / $line`\n        b=`expr $totalline % $line` \n        if  [[ $b -eq 0 ]] ;then\n            filenum=$a\n        else\n            filenum=`expr $a + 1`\n        fi\n        # echo filenum=$filenum\n        echo "$tb_name \u5171\u6709 $totalline\u884c\u6570\u636e,\u9700\u8981\u5207\u5272\u4e3a $filenum\u4e2a\u6587\u4ef6"\n\n\n        # \u8fdb\u884c\u6587\u4ef6\u5207\u5272\n        i=1        # \u4fee\u6539\u59042\uff1a38 \u4fee\u6539\u4e3a1\n        while(( i<=$filenum ))\n        do\n                echo "\u5207\u5272\u6587\u4ef6\u540d\uff1a$tb_name.tbl.$i"\n                #\u6bcf\u4e2a\u5c0f\u6587\u4ef6\u8981\u622a\u53d6\u884c\u6570\u5728\u539f\u6587\u4ef6\u8303\u56f4min,max \n                p=`expr $i - 1`\n                min=`expr $p \\* $line + 1`\n                max=`expr $i \\* $line`\n                sed -n "$min,$max"p $sql_path/$tb_name.tbl > $sql_path/$tb_name.tbl.$i\n                #echo "\u672c\u6b21\u64cd\u4f5c\u6ca1\u6709\u8fdb\u884c\u5207\u5272"\n                # \u8bbe\u7f6e\u5207\u5272\u6587\u4ef6\u540d\n                filename=$sql_path/$tb_name.tbl.$i\n                echo "$tb_name.tbl.$i \u5207\u5272\u5b8c\u6210\uff01\u6587\u4ef6\u540d\uff1a$filename"\n                #StoneDB\u5bfc\u5165\u65b9\u6cd5\uff0c\n                mysql -u$db_user -p$db_pwd -h$db_host -P$db_port --local-infile -D$db -e "load data local infile \'$filename\' into table $tb_name fields terminated by \'|\';" $2>1 > /dev/null\n            i=`expr $i + 1`\n        done\n    done\n}\n\nsplit_file\n\n')),(0,r.kt)("h2",{id:"6\u751f\u6210tpc-h\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5"},"6\u3001\u751f\u6210TPC-H\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5"),(0,r.kt)("p",null,"\u590d\u5236qgen\u548cdists.dss\u6587\u4ef6\u5230queries \u6587\u4ef6\u5939\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp /data/tpc-h/dbgen/qgen /data/tpc-h/dbgen/queries\ncp /data/tpc-h/dbgen/dists.dss /data/tpc-h/dbgen/qgen/queries\n# \u590d\u5236\u5230/data/tpc-h/stonedb \u7edf\u4e00\u8def\u5f84\u4e0b\u5b58\u653e\ncp -a /data/tpc-h/dbgen/qgen/queries /data/tpc-h/stonedb/queries\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/bash\n#\u6267\u884cchmod +x tpch_querys.sh\n#./tpch_querys.sh stonedb\ndb_type=$1\nfor i in {1..22}\ndo\n./qgen -d $i -s 100 > $db_type"$i".sql\ndone\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#\u6267\u884c\u67e5\u8be2\u8bed\u53e5\u751f\u6210\u811a\u672c\nmkdir query\n./tpch_querys.sh query\nmv query*.sql /data/tpc-h/stonedb/queries \n")),(0,r.kt)("h2",{id:"7\u4fee\u6539\u67e5\u8be2\u8bed\u53e5\u6267\u884c\u6d4b\u8bd5"},"7\u3001\u4fee\u6539\u67e5\u8be2\u8bed\u53e5\uff0c\u6267\u884c\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u67e5\u8be2\u6d4b\u8bd5\u811a\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# stone\nhost=192.168.30.120\nport=3306\nuser=root\npassword=********\ndatabase=ztpch\n\n\n#\u67e5\u8be2\u8bed\u53e5\u7edd\u5bf9\u8def\u5f84\uff0c\u9700\u8981\u4fee\u6539\u6210\u81ea\u5df1\u7684\u8def\u5f84\nbanchdir=/data/tpc-h/stonedb/queries\ndb_type=stonedb #ck\u3001stone\u3001mysql\nresfile=$banchdir/"TPCH_${db_type}_`date "+%Y%m%d%H%M%S"`"\n\n\necho "start test run at"`date "+%Y-%m-%d %H:%M:%S"`|tee -a ${resfile}.out\necho "\u65e5\u5fd7\u5730\u5740: ${resfile}"\nfor (( i=1; i<=22;i=i+1 ))\n    do\n\n    queryfile=${db_type}${i}".sql"\n\n    echo "run query ${i}"|tee -a ${resfile}.out\n    echo " $database  $banchdir/query$i.sql "  #|tee -a ${resfile}.out\n    start_time=`date "+%s.%N"`\n    #clickhouse\n    #clickhouse-client --port $port --user $user --password $password --host $host -d $database < $banchdir/query$i.sql |tee -a ${resfile}.out\n    #stonedb\u548cmysql\n    mysql -u$user -p$password -h$host -P$port $database -e "source $banchdir/query$i.sql" 2>&1 |tee -a ${resfile}.out\n\n    end_time=`date "+%s.%N"`\n    start_s=${start_time%.*}\n    start_nanos=${start_time#*.}\n    end_s=${end_time%.*}\n    end_nanos=${end_time#*.}\n    if [ "$end_nanos" -lt "$start_nanos" ];then\n            end_s=$(( 10#$end_s -1 ))\n            end_nanos=$(( 10#$end_nanos + 10 ** 9))\n    fi\n    time=$(( 10#$end_s - 10#$start_s )).`printf "%03d\\n" $(( (10#$end_nanos - 10#$start_nanos)/10**6 ))`\n    echo ${queryfile} "the $i run cost "${time}" second start at "`date -d @$start_time "+%Y-%m-%d %H:%M:%S"`" stop at "`date -d @$end_time "+%Y-%m-%d %H:%M:%S"` >> ${resfile}.time\n    # systemctl stop clickhouse-server\n    done\n\n')),(0,r.kt)("h3",{id:"\u539f\u59cb\u67e5\u8be2\u8bed\u53e5"},"\u539f\u59cb\u67e5\u8be2\u8bed\u53e5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q2.sql"},"q2.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q3.sql"},"q3.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q4.sql"},"q4.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q5.sql"},"q5.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q6.sql"},"q6.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q7.sql"},"q7.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q8.sql"},"q8.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q9.sql"},"q9.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q10.sql"},"q10.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q11.sql"},"q11.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q12.sql"},"q12.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q13.sql"},"q13.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q14.sql"},"q14.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q15.sql"},"q15.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q16.sql"},"q16.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q17.sql"},"q17.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q18.sql"},"q18.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q19.sql"},"q19.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q20.sql"},"q20.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q21.sql"},"q21.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q22.sql"},"q22.sql")," ",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q1.sql"},"q1.sql")),(0,r.kt)("h3",{id:"\u4fee\u6539\u540e\u67e5\u8be2\u8bed\u53e5"},"\u4fee\u6539\u540e\u67e5\u8be2\u8bed\u53e5"),(0,r.kt)("p",null,"\uff08\u4e3a\u4e86\u4fdd\u8bc1\u6d4b\u8bd5\u53ef\u91cd\u590d\u6027\uff0c\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u4fee\u6539\u540e\u517c\u5bb9\u8bed\u6cd5\u8fdb\u884c\u6d4b\u8bd5\uff09\n",(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q.zip"},"q.zip")),(0,r.kt)("h2",{id:"8\u6267\u884ctpch\u811a\u672c\u83b7\u5f97\u6d4b\u8bd5\u7ed3\u679c"},"8\u3001\u6267\u884cTPCH\u811a\u672c\uff0c\u83b7\u5f97\u6d4b\u8bd5\u7ed3\u679c"),(0,r.kt)("p",null,"out\u4e3a\u6267\u884c\u7ed3\u679c\u6587\u4ef6\uff0ctime\u4e3a\u6bcf\u6761Query \u6267\u884c\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ll /data/tpc-h/stonedb/queries/stonedb\n-rw-r--r-- 1 root root   15019 Jun  1 00:55 TPCH_stone_20220531233024.out\n-rw-r--r-- 1 root root    2179 Jun  1 00:57 TPCH_stone_20220531233024.time\n")))}m.isMDXComponent=!0}}]);