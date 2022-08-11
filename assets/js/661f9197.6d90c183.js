"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1528],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(d,".").concat(u)]||m[u]||l[u]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"quick-start",sidebar_position:3.3},d="Quick Start",c={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"Quick Start",description:"This topic presents some examples to show you that the StoneDB has superior performance than InnoDB on processing bulk insert of data, compressing data, and executing analytical queries.",source:"@site/../Docs/02-getting-started/quick-start.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-start",permalink:"/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/02-getting-started/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660209943,formattedLastUpdatedAt:"8/11/2022",sidebarPosition:3.3,frontMatter:{id:"quick-start",sidebar_position:3.3},sidebar:"autoSidebar",previous:{title:"Quick Deployment in a Docker Container",permalink:"/docs/getting-started/quick-deploy-in-docker"},next:{title:"Basic Operations",permalink:"/docs/getting-started/basic-operations"}},p={},l=[{value:"<strong>Step 1. Deploy a test environment</strong>",id:"step-1-deploy-a-test-environment",level:2},{value:"<strong>Step 2. Prepare test data</strong>",id:"step-2-prepare-test-data",level:2},{value:"<strong>1. Create a database</strong>",id:"1-create-a-database",level:3},{value:"<strong>2. Create a table</strong>",id:"2-create-a-table",level:3},{value:"3. <strong>Create a stored procedure</strong>",id:"3-create-a-stored-procedure",level:3},{value:"<strong>Step 3. Test insert performance</strong>",id:"step-3-test-insert-performance",level:2},{value:"<strong>Step 4. Test data compression efficiency</strong>",id:"step-4-test-data-compression-efficiency",level:2},{value:"<strong>Step 5. Test performance on processing aggregate queries</strong>",id:"step-5-test-performance-on-processing-aggregate-queries",level:2}],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quick-start"},"Quick Start"),(0,s.kt)("p",null,"This topic presents some examples to show you that the StoneDB has superior performance than InnoDB on processing bulk insert of data, compressing data, and executing analytical queries."),(0,s.kt)("h2",{id:"step-1-deploy-a-test-environment"},(0,s.kt)("strong",{parentName:"h2"},"Step 1. Deploy a test environment")),(0,s.kt)("p",null,"Before using StoneDB, prepare your test environment according to instructions provided in ",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-deployment"},"Quick Deployment")," and start StoneDB."),(0,s.kt)("h2",{id:"step-2-prepare-test-data"},(0,s.kt)("strong",{parentName:"h2"},"Step 2. Prepare test data")),(0,s.kt)("p",null,"Perform the following steps to generate test data."),(0,s.kt)("h3",{id:"1-create-a-database"},(0,s.kt)("strong",{parentName:"h3"},"1. Create a database")),(0,s.kt)("p",null,"Create a database named ",(0,s.kt)("strong",{parentName:"p"},"test"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create database test DEFAULT CHARACTER SET utf8mb4;\n")),(0,s.kt)("h3",{id:"2-create-a-table"},(0,s.kt)("strong",{parentName:"h3"},"2. Create a table")),(0,s.kt)("p",null,"In database ",(0,s.kt)("strong",{parentName:"p"},"test"),", create two tables respectively named ",(0,s.kt)("strong",{parentName:"p"},"t_user "),"and",(0,s.kt)("strong",{parentName:"p"}," t_user_innodb"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"use test\nCREATE TABLE t_user(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(20) NOT NULL,\n  last_name VARCHAR(20) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=stonedb;\n\nCREATE TABLE t_user_innodb(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(20) NOT NULL,\n  last_name VARCHAR(20) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=innodb;\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The row-based storage engine is named StoneDB in StoneDB-5.6, and is renamed to Tianmu in StoneDB-5.7 to distinguish from the database StoneDB."))),(0,s.kt)("h3",{id:"3-create-a-stored-procedure"},"3. ",(0,s.kt)("strong",{parentName:"h3"},"Create a stored procedure")),(0,s.kt)("p",null,"Create a stored procedure that is used to generate a table containing randomly generated names of persons."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DELIMITER //\ncreate PROCEDURE add_user(in num INT)\nBEGIN\nDECLARE rowid INT DEFAULT 0;\nDECLARE firstname VARCHAR(10);\nDECLARE name1 VARCHAR(10);\nDECLARE name2 VARCHAR(10);\nDECLARE lastname VARCHAR(10) DEFAULT '';\nDECLARE sex CHAR(1);\nDECLARE score CHAR(2);\nWHILE rowid < num DO\nSET firstname = SUBSTRING(md5(rand()),1,4); \nSET name1 = SUBSTRING(md5(rand()),1,4); \nSET name2 = SUBSTRING(md5(rand()),1,4); \nSET sex=FLOOR(0 + (RAND() * 2));\nSET score= FLOOR(40 + (RAND() *60));\nSET rowid = rowid + 1;\nIF ROUND(RAND())=0 THEN \nSET lastname =name1;\nEND IF;\nIF ROUND(RAND())=1 THEN\nSET lastname = CONCAT(name1,name2);\nEND IF;\ninsert INTO t_user(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \nEND WHILE;\nEND //\nDELIMITER ;\n\n\nDELIMITER //\ncreate PROCEDURE add_user_innodb(in num INT)\nBEGIN\nDECLARE rowid INT DEFAULT 0;\nDECLARE firstname VARCHAR(10);\nDECLARE name1 VARCHAR(10);\nDECLARE name2 VARCHAR(10);\nDECLARE lastname VARCHAR(10) DEFAULT '';\nDECLARE sex CHAR(1);\nDECLARE score CHAR(2);\nWHILE rowid < num DO\nSET firstname = SUBSTRING(md5(rand()),1,4); \nSET name1 = SUBSTRING(md5(rand()),1,4); \nSET name2 = SUBSTRING(md5(rand()),1,4); \nSET sex=FLOOR(0 + (RAND() * 2));\nSET score= FLOOR(40 + (RAND() *60));\nSET rowid = rowid + 1;\nIF ROUND(RAND())=0 THEN \nSET lastname =name1;\nEND IF;\nIF ROUND(RAND())=1 THEN\nSET lastname = CONCAT(name1,name2);\nEND IF;\ninsert INTO t_user_innodb(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \nEND WHILE;\nEND //\nDELIMITER ;\n")),(0,s.kt)("h2",{id:"step-3-test-insert-performance"},(0,s.kt)("strong",{parentName:"h2"},"Step 3. Test insert performance")),(0,s.kt)("p",null,"Call the stored procedure to insert 10,000,000 rows of data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> call add_user_innodb(10000000);\nQuery OK, 1 row affected (24 min 46.62 sec)\n\nmysql> call add_user(10000000);\nQuery OK, 1 row affected (9 min 21.14 sec)\n")),(0,s.kt)("p",null,"According to the returned result, StoneDB takes 9 minutes and 21 seconds, while InnoDB takes 24 minutes and 46 seconds."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The execution time is different for different hardware configurations. Here, two stored procedures are executed in the same environment and their execution times are compared. "))),(0,s.kt)("h2",{id:"step-4-test-data-compression-efficiency"},(0,s.kt)("strong",{parentName:"h2"},"Step 4. Test data compression efficiency")),(0,s.kt)("p",null,"Compress the inserted data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select count(*) from t_user_innodb;\n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (1.83 sec)\n\nmysql> select count(*) from t_user;       \n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (0.00 sec)\n\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| table_schema | table_name    | table_rows | data_length | index_length | total_size | engine  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| test         | t_user        |   10000000 | 119.99M     | 0.00M        | 119.99M    | STONEDB |\n| test         | t_user_innodb |    9995867 | 454.91M     | 0.00M        | 454.91M    | InnoDB  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n")),(0,s.kt)("p",null,"According to the returned result, the data size after compression in StoneDB is 120 MB while that in InnoDB is 455 MB."),(0,s.kt)("h2",{id:"step-5-test-performance-on-processing-aggregate-queries"},(0,s.kt)("strong",{parentName:"h2"},"Step 5. Test performance on processing aggregate queries")),(0,s.kt)("p",null,"Execute an aggregate query."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select first_name,count(*) from t_user group by first_name order by 1; \n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n.....\n| fffb       |      142 |\n| fffc       |      140 |\n| fffd       |      156 |\n| fffe       |      140 |\n| ffff       |      132 |\n+------------+----------+\n65536 rows in set (0.98 sec)\n\nmysql> select first_name,count(*) from t_user_innodb group by first_name order by 1;\n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n......\n| fffb       |      178 |\n| fffc       |      161 |\n| fffd       |      170 |\n| fffe       |      156 |\n| ffff       |      139 |\n+------------+----------+\n65536 rows in set (9.00 sec)\n")),(0,s.kt)("p",null,"According to the returned result, StoneDB takes 0.98 seconds while InnoDB takes 9 seconds."))}u.isMDXComponent=!0}}]);