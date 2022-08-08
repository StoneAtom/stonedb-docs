"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2342],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80137:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"slow-query",sidebar_position:9.8},s="Diagnose Slow SQL Queries",p={unversionedId:"troubleshooting/slow-query",id:"troubleshooting/slow-query",title:"Diagnose Slow SQL Queries",description:"The slog query log is used to record SQL queries whose execution time is longer than the threshold specified by parameter long_query_time. The slow query log can be recorded in a file or in a StoneDB table. It helps identify SQL statements that may affect database performance.",source:"@site/../Docs/08-troubleshooting/slow-query.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/slow-query",permalink:"/docs/troubleshooting/slow-query",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/08-troubleshooting/slow-query.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1659940637,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:9.8,frontMatter:{id:"slow-query",sidebar_position:9.8},sidebar:"autoSidebar",previous:{title:"Failed to Connect to StoneDB",permalink:"/docs/troubleshooting/failed-to-connect"},next:{title:"Diagnose System Resource Bottlenecks",permalink:"/docs/troubleshooting/resource-bottleneck"}},m={},u=[{value:"info",id:"info",level:3},{value:"info",id:"info-1",level:3}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"diagnose-slow-sql-queries"},"Diagnose Slow SQL Queries"),(0,l.kt)("p",null,"The slog query log is used to record SQL queries whose execution time is longer than the threshold specified by parameter ",(0,l.kt)("strong",{parentName:"p"},"long_query_time"),". The slow query log can be recorded in a file or in a StoneDB table. It helps identify SQL statements that may affect database performance. "),(0,l.kt)("p",null,"The following table describes parameters for configuring slow query log."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slow_query_log")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable slog query log.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slow_query_log_file")),(0,l.kt)("td",{parentName:"tr",align:null},"The file that stores slow query log records.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long_query_time")),(0,l.kt)("td",{parentName:"tr",align:null},"The execution time threshold. If the execution time of an SQL query exceeds this threshold, the SQL query will be recorded in the slow query log. info ",(0,l.kt)("strong",{parentName:"td"},"long_query_time")," is used to limit the actual execution time of each SQL query, excluding the lock wait time. Therefore, if an SQL query has long total execution time but its actual execution time does not exceed the this threshold, the SQL query will not be recorded in the slow query log.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"log_queries_not_using_indexes")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to record the queries that do not use indexes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"log_slow_admin_statements")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to record management statements, including ",(0,l.kt)("inlineCode",{parentName:"td"},"ALTER"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"CREATE"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"DROP"),".")))),(0,l.kt)("p",null,"The following table describes the parameters in the slow query log:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The total execution time of an SQL query, including the lock wait time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lock_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The lock wait time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rows_sent"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows sent to the client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rows_examined"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows that have been scanned during the execution. This number is accumulatively counted each time the storage engine is called by the executor to obtain data records. This value is obtained at the server level.")))),(0,l.kt)("h1",{id:"mysqldumpslow"},"mysqldumpslow"),(0,l.kt)("p",null,"mysqldumpslow is used to classify slow query log records. Following are some examples."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check the top 10 SQL statements sorted by average execution time in descending order.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldumpslow -t 10 /var/lib/mysql/mysql-slow.log | more\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check the top 10 SQL statements sorted by the number of returned records in descending order.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldumpslow -s r -t 10 /var/lib/mysql/mysql-slow.log | more\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check the top 10 SQL statements sorted by count in descending order. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysqldumpslow -s c -t 10 /var/lib/mysql/mysql-slow.log | more\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check the top 10 SQL statements that include LEFT JOIN sorted by total execution time in descending order.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mysqldumpslow -s t -t 10 -g "left join" /var/lib/mysql/mysql-slow.log | more\n')),(0,l.kt)("p",null,"The following table describes the relevant parameters."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s"),(0,l.kt)("td",{parentName:"tr",align:null},"The sorting type. The value can be:",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"al"),": Sort by average lock time",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"ar"),": Sort by average number of returned records",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"at"),": Sort by average execution time",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"c"),": Sort by count",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"l"),": Sort by total lock time",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"r"),": Sort by total number of returned records",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"t"),": Sort by total execution time",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"If no value is specified, ",(0,l.kt)("strong",{parentName:"td"},"at")," is used by default."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-t NUM"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a number ",(0,l.kt)("em",{parentName:"td"},"n"),". Only the first ",(0,l.kt)("em",{parentName:"td"},"n")," statements will be returned in the output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-g"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a string. Only statements that contain the string are considered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"The host name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-i"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-l"),(0,l.kt)("td",{parentName:"tr",align:null},"Do not subtrack lock wait time from total execution time.")))),(0,l.kt)("h1",{id:"profiling"},"profiling"),(0,l.kt)("p",null,"The profiling variable can be used to records detailed information about an SQL statement in each state during the whole execution process. The recorded information includes CPU utilization, I/O usage, swap space usage, and the name, source file, and position of each function that is called.",(0,l.kt)("br",null),"The following example shows how to use profiling:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enable profiling for the current thread.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set profiling=on;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Query the statements executed during the course of the current thread.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show profiles;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Query the CPU and I/O overhead of an SQL statement in each state during the execution.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show profile cpu,block io for query query_id;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Check the total overhead of a SQL statement in each state during the execution.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show profile all for query query_id;\n")),(0,l.kt)("p",null,"Output example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"+----------------------+----------+----------+------------+-------------------+---------------------+--------------+---------------+---------------+-------------------+-------------------+-------------------+-------+-----------------------+----------------------+-------------+\n| Status               | Duration | CPU_user | CPU_system | Context_voluntary | Context_involuntary | Block_ops_in | Block_ops_out | Messages_sent | Messages_received | Page_faults_major | Page_faults_minor | Swaps | Source_function       | Source_file          | Source_line |\n+----------------------+----------+----------+------------+-------------------+---------------------+--------------+---------------+---------------+-------------------+-------------------+-------------------+-------+-----------------------+----------------------+-------------+\n| starting             | 0.000363 | 0.000239 |   0.000025 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | NULL                  | NULL                 |        NULL |\n| checking permissions | 0.000055 | 0.000040 |   0.000004 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | check_access          | sql_authorization.cc |         809 |\n| checking permissions | 0.000045 | 0.000000 |   0.000047 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | check_access          | sql_authorization.cc |         809 |\n| Opening tables       | 0.000315 | 0.000000 |   0.000307 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 7 |     0 | open_tables           | sql_base.cc          |        5815 |\n| System lock          | 0.000057 | 0.000000 |   0.000056 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 1 |     0 | mysql_lock_tables     | lock.cc              |         330 |\n| init                 | 0.000047 | 0.000000 |   0.000048 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 0 |     0 | optimize_select       | Engine_execute.cpp   |         330 |\n| optimizing           | 0.000195 | 0.000000 |   0.000203 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 1 |     0 | optimize              | sql_optimizer.cc     |         175 |\n| update multi-index   | 0.000488 | 0.000216 |   0.000272 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 6 |     0 | UpdateMultiIndex      | ParameterizedFilter. |         981 |\n| join                 | 8.127252 | 6.948224 |   1.168786 |               236 |                  18 |            0 |           168 |             0 |                 0 |                 0 |            304466 |     0 | UpdateJoinCondition   | ParameterizedFilter. |         603 |\n| aggregation          | 0.021095 | 0.000957 |   0.000102 |                 3 |                   0 |           72 |             8 |             0 |                 0 |                 0 |                18 |     0 | Aggregate             | AggregationAlgorithm |          26 |\n| query end            | 0.000185 | 0.000092 |   0.000009 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 7 |     0 | mysql_execute_command | sql_parse.cc         |        4972 |\n| closing tables       | 0.000156 | 0.000141 |   0.000015 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                11 |     0 | mysql_execute_command | sql_parse.cc         |        5031 |\n| freeing items        | 0.000152 | 0.000136 |   0.000015 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                 1 |     0 | mysql_parse           | sql_parse.cc         |        5659 |\n| logging slow query   | 0.006152 | 0.000401 |   0.000000 |                 1 |                   0 |            8 |             8 |             0 |                 0 |                 0 |                 6 |     0 | log_slow_do           | log.cc               |        1718 |\n| cleaning up          | 0.000245 | 0.000154 |   0.000000 |                 0 |                   0 |            0 |             0 |             0 |                 0 |                 0 |                13 |     0 | dispatch_command      | sql_parse.cc         |        1935 |\n+----------------------+----------+----------+------------+-------------------+---------------------+--------------+---------------+---------------+-------------------+-------------------+-------------------+-------+-----------------------+----------------------+-------------+\n")),(0,l.kt)("p",null,"The following table describes each status that an SQL statement may pass through:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Status")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"starting"),(0,l.kt)("td",{parentName:"tr",align:null},"Performing lexical analysis and syntax analysis on the SQL statement to generate a parse tree.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checking permissions"),(0,l.kt)("td",{parentName:"tr",align:null},"Checking whether the server has the required privileges to execute the statement.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"opening tables"),(0,l.kt)("td",{parentName:"tr",align:null},"Opening the tables and adding metadata locks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System lock"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifying which type of locks causes the system lock.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optimizing"),(0,l.kt)("td",{parentName:"tr",align:null},"Optimizing the statement to generate an execution plan.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statistics"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"preparing"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sending data"),(0,l.kt)("td",{parentName:"tr",align:null},"Transmitting data between the server and the storage engine.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update"),(0,l.kt)("td",{parentName:"tr",align:null},"If the SQL statement is an INSERT statement, it will be in this state when a row lock occurs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Updating"),(0,l.kt)("td",{parentName:"tr",align:null},"If the SQL statement is a DELETE or UPDATE statement, it will be in this state when a row lock occurs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query end"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitting the SQL statement. If a large transaction occurs, the statement will be in this state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closing tables"),(0,l.kt)("td",{parentName:"tr",align:null},"Flushing the changed table data to disk and closing the used tables or rolling the statement back.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"freeing items"),(0,l.kt)("td",{parentName:"tr",align:null},"Releasing the parse tree.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Creating tmp table"),(0,l.kt)("td",{parentName:"tr",align:null},"Creating a temporary table to save copied data. The temporary table is deleted after use. If the statement enters this state, it normally includes GROUP BY, DINSTICT, or subqueries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Copying to tmp table on disk"),(0,l.kt)("td",{parentName:"tr",align:null},"Copying temporary files from memory to disks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Creating sort index"),(0,l.kt)("td",{parentName:"tr",align:null},"Sorting data. If the statement enters this state, it normally includes ORDER BY.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locked"),(0,l.kt)("td",{parentName:"tr",align:null},"Encountering a congestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Waiting for table metadata lock"),(0,l.kt)("td",{parentName:"tr",align:null},"Waiting for a metadata lock.")))),(0,l.kt)("h3",{id:"info"},"info"),(0,l.kt)("p",null,"If the statement remains in any of the following states for a long time, the SQL statement has performance issues or is waiting for process:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sending data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Creating tmp table")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copying to tmp table on disk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Creating sort index")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"locked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Waiting for table metadata lock"))),(0,l.kt)("h1",{id:"optimizer-trace"},"Optimizer trace"),(0,l.kt)("p",null,"The optimizer trace feature helps you understand the process of generating an execution plan. This feature is controlled by system variable ",(0,l.kt)("strong",{parentName:"p"},"optimizer_trace"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables like 'optimizer_trace';\n+-----------------+--------------------------+\n| Variable_name   | Value                    |\n+-----------------+--------------------------+\n| optimizer_trace | enabled=off,one_line=off |\n+-----------------+--------------------------+\n")),(0,l.kt)("p",null,"Variable ",(0,l.kt)("strong",{parentName:"p"},"enabled")," specifies whether the feature is enabled. ",(0,l.kt)("strong",{parentName:"p"},"enabled=off")," indicates that the optimizer trace feature is disabled by default. To enable the optimizer trace feature, set ",(0,l.kt)("strong",{parentName:"p"},"enabled")," to ",(0,l.kt)("strong",{parentName:"p"},"on"),". Variable ",(0,l.kt)("strong",{parentName:"p"},"one_line")," specifies whether the output is displayed in one line. ",(0,l.kt)("strong",{parentName:"p"},"one_line=off")," indicates that line breaks are used in the output by default."),(0,l.kt)("p",null,"To use the optimizer trace feature, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Configure the cache size for optimizer trace to ensure that traces are not truncated.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set optimizer_trace_max_mem_size = 100*1024;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Enable the optimizer trace feature.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set optimizer_trace='enabled=on';\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Execute an SQL statement.")),(0,l.kt)("h3",{id:"info-1"},"info"),(0,l.kt)("p",null,"If the execution time is too long and you want traces generated during the execution of the SQL statement, you can execute an EXPLAIN statement to explain the statement, instead."),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Check the optimization process of the previous SQL statement in the ",(0,l.kt)("strong",{parentName:"li"},"optimizer_trace")," table.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.optimizer_trace;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Disable the optimizer trace feature.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set optimizer_trace='enabled=off';\n")),(0,l.kt)("p",null,"The output of optimizer trace is generated through three steps, namely:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"join_preparation"),(0,l.kt)("li",{parentName:"ol"},"join_optimization"),(0,l.kt)("li",{parentName:"ol"},"join_execution")),(0,l.kt)("p",null,"In the join_optimization step, the statement is optimized based on cost. For a one-table query, the row_estimation sub-step is important, which analyzes the cost of full table scans and index scans. For a multi-table query, the considered_execution_plans sub-step is important, which analyzes the cost of every possible join order."),(0,l.kt)("p",null,"Key sub-steps in the join_optimization step:"),(0,l.kt)("p",null,'condition_processing: In this sub-step, the optimizer processes the query conditions, such as passing the value of an argument to an equivalent argument and removing unnecessary conditions. For example, the source condition "a=1 and b=a" is converted to "a=1 and b=1".'),(0,l.kt)("p",null,"rows_estimation: estimates the relevant rows for a one-table query."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"table_scan: full table scan statistics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rows: the number of rows estimated to scan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cost: the cost of full table scans")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"potential_range_indexes: the indexes that may be used")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"index": "PRIMARY",   # The primary key index cannot be used.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"usable": false,')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"cause": "not_applicable"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"index": "idx',(0,l.kt)("em",{parentName:"p"},'xxx", # The ',(0,l.kt)("strong",{parentName:"em"},"id"),"`_x_xxx"),"` index may be used.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"usable": true,')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"key_parts": [',(0,l.kt)("br",null),'  "column1",',(0,l.kt)("br",null),'  "column2",',(0,l.kt)("br",null),'  "id"',(0,l.kt)("br",null)," analyzing_range_alternatives: analyzes the cost of each index that may be used.",(0,l.kt)("br",null),'  "index": "idx_xxx",',(0,l.kt)("br",null),'  "ranges": ',"[",(0,l.kt)("br",null),'    "2 <= column1 <= 2 AND 0 <= column2 <= 0"',(0,l.kt)("br",null),"  ]",",")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"index_dives_for_eq_ranges": true,  # Index dives are used.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"rowid_ordered": true,   # Whether the records obtained by using the index are sorted by primary key.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"using_mrr": false, # Whether Multi-Range Read (MRR) is used.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"index_only": false,   # Whether to enable covering indexes.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"rows": xxx, # Whether the index is used to estimate the number of relevant rows.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"cost": xxx,   # The cost of using the index.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'"chosen": true   # Whether the index is used.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"chosen_range_access_summary: the execution plan that is being selected.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"considered_execution_plans: analyzes every possible execution plan. This parameter is often used for JOIN queries.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"attaching_conditions_to_tables: adds other query conditions to the query.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"reconsidering_access_paths_for_index_ordering: whether the execution plan is changed due to sorting."))))}c.isMDXComponent=!0}}]);