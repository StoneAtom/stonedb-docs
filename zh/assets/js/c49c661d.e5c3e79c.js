"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2307],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23281:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={id:"slow-query",sidebar_position:9.8},s="\u6162SQL\u8bca\u65ad",c={unversionedId:"troubleshooting/slow-query",id:"troubleshooting/slow-query",title:"\u6162SQL\u8bca\u65ad",description:"\u6162\u67e5\u8be2\u65e5\u5fd7\u7528\u6765\u8bb0\u5f55SQL\u7684\u6267\u884c\u65f6\u95f4\u8d85\u8fc7longquerytime\u7684\u9600\u503c\uff0c\u6162\u67e5\u8be2\u65e5\u5fd7\u652f\u6301\u5c06\u65e5\u5fd7\u5199\u5165\u6587\u4ef6\uff0c\u4e5f\u652f\u6301\u5c06\u65e5\u5fd7\u5199\u5165\u6570\u636e\u5e93\u7684\u8868\u3002\u6162\u67e5\u8be2\u65e5\u5fd7\u80fd\u5e2e\u52a9\u6211\u4eec\u6355\u6349\u5230\u6709\u6027\u80fd\u95ee\u9898\u7684SQL\uff0c\u76f8\u5173\u6162\u67e5\u8be2\u65e5\u5fd7\u53c2\u6570\u5982\u4e0b\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/08-troubleshooting/slow-query.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/slow-query",permalink:"/zh/docs/troubleshooting/slow-query",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/08-troubleshooting/slow-query.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660209943,formattedLastUpdatedAt:"2022/8/11",sidebarPosition:9.8,frontMatter:{id:"slow-query",sidebar_position:9.8},sidebar:"autoSidebar",previous:{title:"\u6570\u636e\u5e93\u8fde\u63a5\u95ee\u9898",permalink:"/zh/docs/troubleshooting/failed-to-connect"},next:{title:"\u7cfb\u7edf\u8d44\u6e90\u74f6\u9888\u8bca\u65ad",permalink:"/zh/docs/troubleshooting/resource-bottleneck"}},p={},u=[{value:"mysqldumpslow",id:"mysqldumpslow",level:2},{value:"profiling",id:"profiling",level:2},{value:"optimizer trace",id:"optimizer-trace",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6162sql\u8bca\u65ad"},"\u6162SQL\u8bca\u65ad"),(0,l.kt)("p",null,"\u6162\u67e5\u8be2\u65e5\u5fd7\u7528\u6765\u8bb0\u5f55SQL\u7684\u6267\u884c\u65f6\u95f4\u8d85\u8fc7long_query_time\u7684\u9600\u503c\uff0c\u6162\u67e5\u8be2\u65e5\u5fd7\u652f\u6301\u5c06\u65e5\u5fd7\u5199\u5165\u6587\u4ef6\uff0c\u4e5f\u652f\u6301\u5c06\u65e5\u5fd7\u5199\u5165\u6570\u636e\u5e93\u7684\u8868\u3002\u6162\u67e5\u8be2\u65e5\u5fd7\u80fd\u5e2e\u52a9\u6211\u4eec\u6355\u6349\u5230\u6709\u6027\u80fd\u95ee\u9898\u7684SQL\uff0c\u76f8\u5173\u6162\u67e5\u8be2\u65e5\u5fd7\u53c2\u6570\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"slow_query_log\uff1a\u6162\u67e5\u8be2\u65e5\u5fd7\u662f\u5426\u5f00\u542f"),(0,l.kt)("p",null,"slow_query_log_file\uff1a\u6162\u67e5\u8be2\u65e5\u5fd7\u8bb0\u5f55\u7684\u6587\u4ef6"),(0,l.kt)("p",null,"long_query_time\uff1aSQL\u5b9e\u9645\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u8be5\u53c2\u6570\u9600\u503c\u5c31\u4f1a\u88ab\u8bb0\u5f55"),(0,l.kt)("p",null,"log_queries_not_using_indexes\uff1a\u672a\u4f7f\u7528\u7d22\u5f15\u5c31\u4f1a\u88ab\u8bb0\u5f55"),(0,l.kt)("p",null,"log_slow_admin_statements\uff1a\u662f\u5426\u8bb0\u5f55\u7ba1\u7406\u8bed\u53e5\uff0c\u5982alter\u3001create\u3001drop"),(0,l.kt)("p",null,"\u6ce8\uff1along_query_time\u8bb0\u5f55\u7684\u662fSQL\u5b9e\u9645\u6267\u884c\u65f6\u95f4\uff0c\u4e0d\u5305\u542b\u9501\u7b49\u5f85\u65f6\u95f4\uff0c\u867d\u7136\u6709\u7684SQL\u6267\u884c\u65f6\u95f4\u5f88\u957f\uff0c\u4f46\u53ef\u80fd\u662f\u7531\u4e8e\u9501\u7b49\u5f85\u5f15\u8d77\u7684\uff0c\u5b9e\u9645\u4e0a\u8fd9\u79cdSQL\u4e0d\u4f1a\u88ab\u8bb0\u5f55\u5230\u6162\u67e5\u8be2\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u6162\u67e5\u8be2\u65e5\u5fd7\u8f93\u51fa\u89e3\u91ca\uff1a"),(0,l.kt)("p",null,"Query_time\uff1aSQL\u603b\u6267\u884c\u65f6\u95f4\uff0c\u5373\u5b9e\u9645\u6267\u884c\u65f6\u95f4 + \u9501\u7b49\u5f85\u65f6\u95f4"),(0,l.kt)("p",null,"Lock_time\uff1a\u9501\u7b49\u5f85\u65f6\u95f4"),(0,l.kt)("p",null,"Rows_sent\uff1a\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u7684\u884c\u6570"),(0,l.kt)("p",null,"Rows_examined\uff1a\u8868\u793a\u6267\u884c\u8fc7\u7a0b\u4e2d\u626b\u63cf\u4e86\u591a\u5c11\u884c\uff0c\u8fd9\u4e2a\u503c\u662f\u5728\u6267\u884c\u5668\u6bcf\u6b21\u8c03\u7528\u5b58\u50a8\u5f15\u64ce\u83b7\u53d6\u6570\u636e\u884c\u7684\u65f6\u5019\u7d2f\u52a0\u7684\uff0c\u662f\u5728Server\u5c42\u7edf\u8ba1\u7684\n\u6ce8\uff1a\u5728\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u6267\u884c\u5668\u8c03\u7528\u4e00\u6b21\uff0c\u5728\u5b58\u50a8\u5f15\u64ce\u5185\u90e8\u5219\u626b\u63cf\u4e86\u591a\u884c\uff0c\u56e0\u6b64\u5b58\u50a8\u5f15\u64ce\u626b\u63cf\u884c\u6570\u548crows_examined\u5e76\u4e0d\u662f\u5b8c\u5168\u76f8\u540c\u7684\u3002"),(0,l.kt)("h2",{id:"mysqldumpslow"},"mysqldumpslow"),(0,l.kt)("p",null,"mysqldumpslow\u5e38\u7528\u4e8e\u5bf9\u6162\u67e5\u8be2\u65e5\u5fd7\u8fdb\u884c\u6c47\u603b\u5206\u7c7b\u3002\n1\uff09\u67e5\u770b\u6162\u67e5\u8be2\u65e5\u5fd7\u4e2dTOP 10\uff08\u4ee5\u5e73\u5747\u6267\u884c\u65f6\u95f4\u964d\u5e8f\u6392\u5217\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldumpslow -t 10 /var/lib/mysql/mysql-slow.log | more\n")),(0,l.kt)("p",null,"2\uff09\u67e5\u770b\u6162\u67e5\u8be2\u65e5\u5fd7\u4e2d\u8fd4\u56de\u603b\u8bb0\u5f55\u6570\u6700\u591a\u7684TOP 10\uff08\u4ee5\u8fd4\u56de\u603b\u8bb0\u5f55\u6570\u964d\u5e8f\u6392\u5217\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldumpslow -s r -t 10 /var/lib/mysql/mysql-slow.log | more\n")),(0,l.kt)("p",null,"3\uff09\u67e5\u770b\u6162\u67e5\u8be2\u65e5\u5fd7\u4e2d\u603b\u6267\u884c\u6b21\u6570\u6700\u591a\u7684TOP 10\uff08\u4ee5\u603b\u6267\u884c\u6b21\u6570\u964d\u5e8f\u6392\u5217\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldumpslow -s c -t 10 /var/lib/mysql/mysql-slow.log | more\n")),(0,l.kt)("p",null,"4\uff09\u67e5\u770b\u6162\u67e5\u8be2\u65e5\u5fd7\u4e2d\u6309\u7167\u603b\u6267\u884c\u65f6\u95f4\u6392\u5e8f\uff0c\u524d10\u6761\u5305\u542bleft join\u7684SQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mysqldumpslow -s t -t 10 -g "left join" /var/lib/mysql/mysql-slow.log | more\n')),(0,l.kt)("p",null,"\u76f8\u5173\u53c2\u6570\u89e3\u91ca\uff1a\n-s\uff1a\u964d\u5e8f\u6392\u5e8f\nal\uff1a\u5e73\u5747\u9501\u5b9a\u65f6\u95f4\u6392\u5e8f\nar\uff1a\u5e73\u5747\u8fd4\u56de\u8bb0\u5f55\u6570\u6392\u5e8f\nat\uff1a\u5e73\u5747\u6267\u884c\u65f6\u95f4\u6392\u5e8f\uff0c\u9ed8\u8ba4\nc\uff1a\u603b\u6267\u884c\u6b21\u6570\u6392\u5e8f\nl\uff1a\u603b\u9501\u5b9a\u65f6\u95f4\u6392\u5e8f\nr\uff1a\u603b\u8fd4\u56de\u8bb0\u5f55\u6570\u6392\u5e8f\nt\uff1a\u603b\u6267\u884c\u65f6\u95f4\u6392\u5e8f\n-t NUM\uff1a\u8fd4\u56detop n\n-g\uff1a\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\n-h\uff1a\u6839\u636e\u4e3b\u673a\u540d\u9009\u62e9\n-i\uff1a\u6839\u636e\u5b9e\u4f8b\u540d\u9009\u62e9\n-l\uff1a\u4e0d\u8981\u4ece\u603b\u65f6\u95f4\u51cf\u53bb\u9501\u5b9a\u65f6\u95f4"),(0,l.kt)("h2",{id:"profiling"},"profiling"),(0,l.kt)("p",null,"profiling\u5206\u6790\u5de5\u5177\u53ef\u4ee5\u83b7\u5f97\u4e00\u6761SQL\u5728\u6574\u4e2a\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u6bcf\u4e00\u6b65\u72b6\u6001\uff0c\u4ee5\u53ca\u6bcf\u4e00\u6b65\u72b6\u6001\u7684\u8d44\u6e90\u6d88\u8017\u60c5\u51b5\uff0c\u5982CPU\u3001IO\u3001Swap\uff0c\u540c\u65f6\u8fd8\u80fd\u83b7\u5f97\u6bcf\u4e00\u6b65\u72b6\u6001\u7684\u51fd\u6570\u8c03\u7528\uff0c\u4ee5\u53ca\u8be5\u51fd\u6570\u6240\u5728\u7684\u6e90\u6587\u4ef6\u548c\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002\n\u7528\u6cd5\u793a\u4f8b\u5982\u4e0b\uff1a\n\u5f00\u542f\u5f53\u524d\u7ebf\u7a0b\u7684profiling\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set profiling=on;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u5f53\u524d\u7ebf\u7a0b\u6267\u884c\u7684\u6240\u6709SQL\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show profiles;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u67d0\u4e2aSQL\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u72b6\u6001\u7684CPU\u3001IO\u6d88\u8017\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show profile cpu,block io for query query_id;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u67d0\u4e2aSQL\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u72b6\u6001\u7684\u6240\u6709\u6d88\u8017\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show profile all for query query_id;\n")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u72b6\u6001\u7684\u6240\u6709\u6d88\u8017\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"+----------------------+----------+----------+------------+-------------------+---------------------+--------------+---------------+---------------+-------------------+-------------------+-------------------+-------+-----------------------+----------------------+-------------+\n| Status               | Duration | CPU_user | CPU_system | Context_voluntary | Context_involuntary | Block_ops_in | Block_ops_out | Messages_sent | Messages_received | Page_faults_major | Page_faults_minor | Swaps | Source_function       | Source_file          | Source_line |\n+----------------------+----------+----------+------------+-------------------+---------------------+--------------+---------------+---------------+-------------------+-------------------+-------------------+-------+-----------------------+----------------------+-------------+\n| starting             | 0.000363 | 0.000239 |   0.000025 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | NULL                  | NULL                 |        NULL |\n| checking permissions | 0.000055 | 0.000040 |   0.000004 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | check_access          | sql_authorization.cc |         809 |\n| checking permissions | 0.000045 | 0.000000 |   0.000047 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | check_access          | sql_authorization.cc |         809 |\n| Opening tables       | 0.000315 | 0.000000 |   0.000307 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 7 |     0 | open_tables           | sql_base.cc          |        5815 |\n| System lock          | 0.000057 | 0.000000 |   0.000056 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 1 |     0 | mysql_lock_tables     | lock.cc              |         330 |\n| init                 | 0.000047 | 0.000000 |   0.000048 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | optimize_select       | Engine_execute.cpp   |         330 |\n| optimizing           | 0.000195 | 0.000000 |   0.000203 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 1 |     0 | optimize              | sql_optimizer.cc     |         175 |\n| update multi-index   | 0.000488 | 0.000216 |   0.000272 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 6 |     0 | UpdateMultiIndex      | ParameterizedFilter. |         981 |\n| join                 | 8.127252 | 6.948224 |   1.168786 |               236 |                  18 |            0 |           168 |             0 |                 0 |                 0 |            304466 |     0 | UpdateJoinCondition   | ParameterizedFilter. |         603 |\n| aggregation          | 0.021095 | 0.000957 |   0.000102 |                 3 |                   0 |           72 |             8 |             0 |                 0 |                 0 |                18 |     0 | Aggregate             | AggregationAlgorithm |          26 |\n| query end            | 0.000185 | 0.000092 |   0.000009 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 7 |     0 | mysql_execute_command | sql_parse.cc         |        4972 |\n| closing tables       | 0.000156 | 0.000141 |   0.000015 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                11 |     0 | mysql_execute_command | sql_parse.cc         |        5031 |\n| freeing items        | 0.000152 | 0.000136 |   0.000015 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 1 |     0 | mysql_parse           | sql_parse.cc         |        5659 |\n| logging slow query   | 0.006152 | 0.000401 |   0.000000 |                 1 |                   0 |            8 |             8 |             0 |                 0 |                 0 |                 6 |     0 | log_slow_do           | log.cc               |        1718 |\n| cleaning up          | 0.000245 | 0.000154 |   0.000000 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                13 |     0 | dispatch_command      | sql_parse.cc         |        1935 |\n+----------------------+----------+----------+------------+-------------------+---------------------+--------------+---------------+---------------+-------------------+-------------------+-------------------+-------+-----------------------+----------------------+-------------+\n")),(0,l.kt)("p",null,"\u4e00\u4e2aSQL\u9700\u8981\u7ecf\u5386\u5982\u4e0b\u7684Status\u8fc7\u7a0b\uff1a\nstarting\uff1a\u8bed\u6cd5\u8bed\u4e49\u89e3\u6790\uff0c\u751f\u6210\u89e3\u6790\u6811\nchecking permissions\uff1a\u6839\u636e\u89e3\u6790\u540e\u7684\u89e3\u6790\u6811\uff0c\u5bf9\u9700\u8981\u8bbf\u95ee\u7684\u8868\u8fdb\u884c\u9274\u6743\nopening tables\uff1a\u6253\u5f00\u8bbf\u95ee\u7684\u8868\nSystem lock\uff1a\u786e\u8ba4\u662f\u7531\u54ea\u79cd\u9501\u5f15\u8d77\u7684\noptimizing/statistics/preparing\uff1a\u8fd93\u4e2a\u72b6\u6001\u5904\u4e8e\u8bed\u53e5\u7684\u7269\u7406\u548c\u903b\u8f91\u4f18\u5316\u9636\u6bb5\uff0c\u4e4b\u540e\u751f\u6210\u6267\u884c\u8ba1\u5212\nSending data\uff1a\u670d\u52a1\u5c42\u4e0e\u5b58\u50a8\u5f15\u64ce\u5c42\u6b63\u5728\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\nUpdate\uff1ainsert\u8bed\u53e5\uff0c\u5982\u679c\u9047\u5230\u884c\u9501\u4f1a\u5904\u4e8e\u8fd9\u4e2a\u72b6\u6001\u4e0b\nUpdating\uff1adelete/update\u8bed\u53e5\uff0c\u5982\u679c\u9047\u5230\u884c\u9501\u4f1a\u5904\u4e8e\u8fd9\u4e2a\u72b6\u6001\u4e0b\nquery end\uff1a\u63d0\u4ea4\u8fc7\u7a0b\uff0c\u5982\u679c\u9047\u5230\u5927\u4e8b\u52a1\u4f1a\u5904\u4e8e\u8fd9\u4e2a\u72b6\u6001\u4e0b\nclosing tables\uff1a\u5173\u95ed\u8868\u7684\u8bbf\u95ee\uff0c\u4e0eopening tables\u5bf9\u5e94\nfreeing items\uff1a\u91ca\u653e\u89e3\u6790\u6811\n\u5982\u679cStatus\u957f\u65f6\u95f4\u5904\u4e8e\u5982\u4e0b\u51e0\u79cd\u72b6\u6001\uff0c\u8bf4\u660eSQL\u5b58\u5728\u6027\u80fd\u95ee\u9898\u6216\u8005\u7b49\u5f85\u3002\nSending data\uff1a\u670d\u52a1\u5c42\u4e0e\u5b58\u50a8\u5f15\u64ce\u5c42\u6b63\u5728\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\nconverting HEAP to MyISAM\uff1a\u67e5\u8be2\u7ed3\u679c\u96c6\u592a\u5927\uff0c\u5185\u5b58\u4e34\u65f6\u8868\u4e0d\u591f\u7528\uff0c\u9700\u8981\u6682\u5b58\u5230\u78c1\u76d8\u4e34\u65f6\u6587\u4ef6\nCreating tmp table\uff1a\u521b\u5efa\u4e34\u65f6\u8868\uff0c\u7136\u540e\u62f7\u8d1d\u6570\u636e\u5230\u4e34\u65f6\u8868\uff0c\u7528\u5b8c\u4e4b\u540e\u5220\u9664\u4e34\u65f6\u8868\uff0c\u901a\u5e38\u662f\u6709group by\u3001distinct\u3001\u5b50\u67e5\u8be2\u64cd\u4f5c\nCopying to tmp table on disk\uff1a\u628a\u5185\u5b58\u4e2d\u7684\u4e34\u65f6\u8868\u62f7\u8d1d\u5230\u78c1\u76d8\nCreating sort index\uff1a\u5728\u505a\u6392\u5e8f\u64cd\u4f5c\uff0c\u901a\u5e38\u662forder by\nlocked\uff1a\u88ab\u963b\u585e\nWaiting for table metadata lock\uff1a\u53d1\u751f\u5143\u6570\u636e\u9501\u7b49\u5f85"),(0,l.kt)("h2",{id:"optimizer-trace"},"optimizer trace"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u4e0d\u4ec5\u60f3\u77e5\u9053SQL\u7684\u6267\u884c\u8ba1\u5212\uff0c\u8fd8\u60f3\u77e5\u9053\u4f18\u5316\u5668\u4e3a\u4ec0\u4e48\u9009\u62e9\u8fd9\u4e2a\u6267\u884c\u8ba1\u5212\u3002optimizer trace\u529f\u80fd\u53ef\u4ee5\u8ba9\u6211\u4eec\u77e5\u9053\u4f18\u5316\u5668\u751f\u6210\u6267\u884c\u8ba1\u5212\u7684\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u529f\u80fd\u662f\u7531\u7cfb\u7edf\u53d8\u91cfoptimizer_trace\u6765\u51b3\u5b9a\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables like 'optimizer_trace';\n+-----------------+--------------------------+\n| Variable_name   | Value                    |\n+-----------------+--------------------------+\n| optimizer_trace | enabled=off,one_line=off |\n+-----------------+--------------------------+\n")),(0,l.kt)("p",null,"enabled=off\u8868\u793aoptimizer trace\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5982\u679c\u8981\u5f00\u542f\uff0c\u9700\u8981\u8bbe\u7f6eenabled=on\uff0c\u800c\u4e14\u4e00\u822c\u53ea\u4f5c\u4e3a\u5f53\u524d\u7ebf\u7a0b\u5f00\u542f\uff1bone_line=off\u8868\u793a\u8f93\u51fa\u683c\u5f0f\uff0c\u9ed8\u8ba4off\u8868\u793a\u6362\u884c\u8f93\u51fa\u3002\n\u4f7f\u7528optimizer trace\u529f\u80fd\u7684\u5b8c\u6574\u6b65\u9aa4\u5982\u4e0b\uff1a\n1\uff09\u8bbe\u7f6eoptimizer_trace\u7f13\u5b58\u5927\u5c0f\uff0c\u76ee\u7684\u662f\u4fdd\u5b58\u5b8c\u6574\u7684trace\uff0c\u4e0d\u8981\u88ab\u622a\u65ad"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set optimizer_trace_max_mem_size = 100*1024;\n")),(0,l.kt)("p",null,"2\uff09\u5f00\u542foptimizer_trace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set optimizer_trace='enabled=on';\n")),(0,l.kt)("p",null,"3\uff09\u6267\u884c\u5177\u4f53\u7684SQL\n\u6ce8\uff1a\u5982\u679cSQL\u6267\u884c\u65f6\u95f4\u5f88\u957f\uff0c\u800c\u53c8\u4e0d\u60f3\u7b49SQL\u6267\u884c\u7ed3\u675f\u624d\u751f\u6210trace\uff0c\u4f7f\u7528explain SQL\u4e5f\u662f\u53ef\u4ee5\u751f\u6210trace\u7684\u3002\n4\uff09\u4eceoptimizer_trace\u8868\u4e2d\u67e5\u770b\u4e0a\u4e00\u4e2aSQL\u7684\u4f18\u5316\u8fc7\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.optimizer_trace;\n")),(0,l.kt)("p",null,"5\uff09\u5173\u95edoptimizer_trace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set optimizer_trace='enabled=off';\n")),(0,l.kt)("p",null,'optimizer trace\u7684\u8f93\u51fa\u52063\u4e2a\u9636\u6bb5\uff0c\u5206\u522b\u662f\uff1a\n1\uff09join_preparation\n2\uff09join_optimization\n3\uff09join_execution\n\u5176\u4e2djoin_optimization\u9636\u6bb5\u662f\u57fa\u4e8e\u6210\u672c\u8ba1\u7b97\u7684\u3002\u5bf9\u4e8e\u5355\u8868\u67e5\u8be2\u6765\u8bf4\uff0c\u4e3b\u8981\u5173\u6ce8\u7684\u662frow_estimation\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5206\u6790\u4e86\u5168\u8868\u626b\u63cf\u6210\u672c\u548c\u5404\u4e2a\u7d22\u5f15\u626b\u63cf\u7684\u6210\u672c\u3002\u5bf9\u4e8e\u591a\u8868\u5173\u8054\u67e5\u8be2\u6765\u8bf4\uff0c\u4e3b\u8981\u5173\u6ce8\u7684\u662fconsidered_execution_plans\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5206\u6790\u4e86\u4e0d\u540c\u8868\u5173\u8054\u987a\u5e8f\u7684\u6210\u672c\u3002\njoin_optimization\u9636\u6bb5\u9700\u8981\u5173\u6ce8\u7684\u90e8\u5206\ncondition_processing\uff1a\u4f18\u5316\u5668\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u505a\u67e5\u8be2\u6761\u4ef6\u5904\u7406\uff0c\u5982\u7b49\u503c\u4f20\u9012\u8f6c\u6362\u3001\u5e38\u91cf\u4f20\u9012\u8f6c\u6362\u3001\u6d88\u9664\u6ca1\u7528\u7684\u6761\u4ef6\u3002\u4f8b\u5982\uff1a\u539f\u59cb\u7684\u67e5\u8be2\u6761\u4ef6\u662f\uff1a"a=1 and b=a"\uff0c\u7ecf\u8fc7\u8f6c\u6362\u540e\u662f\uff1a"a=1 and b=1"\nrows_estimation\uff1a\u5355\u8868\u67e5\u8be2\u7684\u884c\u9884\u4f30\ntable_scan\uff1a\u5168\u8868\u626b\u63cf\u7edf\u8ba1\nrows\uff1a\u5168\u8868\u626b\u63cf\u9884\u4f30\u884c\u6570\ncost\uff1a\u5168\u8868\u626b\u63cf\u7684\u6210\u672c\npotential_range_indexes\uff1a\u53ef\u80fd\u4f7f\u7528\u7684\u7d22\u5f15\n"index": "PRIMARY",   ---\x3e\u8868\u793a\u4e3b\u952e\u7d22\u5f15\u4e0d\u53ef\u7528\n"usable": false,\n"cause": "not_applicable"\n"index": "idx_xxx",   ---\x3e\u8868\u793aidx_xxx\u7d22\u5f15\u53ef\u80fd\u88ab\u4f7f\u7528\n"usable": true,\n"key_parts": [\n"column1",\n"column2",\n"id"\nanalyzing_range_alternatives\uff1a\u5206\u6790\u5404\u79cd\u53ef\u80fd\u4f7f\u7528\u7684\u7d22\u5f15\u7684\u6210\u672c\n"index": "idx_xxx",\n"ranges": ','[\n"2 <= column1 <= 2 AND 0 <= column2 <= 0"\n]',',\n"index_dives_for_eq_ranges": true,   ---\x3e\u4f7f\u7528index dive\n"rowid_ordered": true,   ---\x3e\u4f7f\u7528\u8be5\u7d22\u5f15\u83b7\u53d6\u7684\u8bb0\u5f55\u662f\u5426\u6309\u7167\u4e3b\u952e\u6392\u5e8f\n"using_mrr": false,   ---\x3e\u662f\u5426\u4f7f\u7528mrr\n"index_only": false,   ---\x3e\u662f\u5426\u4f7f\u7528\u7d22\u5f15\u8986\u76d6\n"rows": xxx, ---\x3e\u4f7f\u7528\u8be5\u7d22\u5f15\u9884\u4f30\u884c\u6570\n"cost": xxx,   ---\x3e\u4f7f\u7528\u8be5\u7d22\u5f15\u7684\u6210\u672c\n"chosen": true   ---\x3e\u662f\u5426\u9009\u62e9\u8be5\u7d22\u5f15\nchosen_range_access_summary\uff1a\u6700\u7ec8\u9009\u62e9\u7684\u6267\u884c\u8ba1\u5212\nconsidered_execution_plans\uff1a\u5206\u6790\u5404\u79cd\u53ef\u80fd\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5e38\u7528\u4e8e\u591a\u8868\u5173\u8054\u67e5\u8be2\nattaching_conditions_to_tables\uff1a\u5c1d\u8bd5\u7ed9\u67e5\u8be2\u6dfb\u52a0\u4e00\u4e9b\u5176\u4ed6\u7684\u67e5\u8be2\u6761\u4ef6\nreconsidering_access_paths_for_index_ordering\uff1a\u662f\u5426\u56e0\u6392\u5e8f\u5bfc\u81f4\u6267\u884c\u8ba1\u5212\u6539\u53d8'))}d.isMDXComponent=!0}}]);