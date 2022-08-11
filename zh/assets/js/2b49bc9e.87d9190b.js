"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5339],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),d=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=d(n.components);return r.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),m=d(t),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return t?r.createElement(f,o(o({ref:e},c),{},{components:t})):r.createElement(f,o({ref:e},c))}));function p(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88866:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"quick-start",sidebar_position:3.2},l="\u5feb\u901f\u4e0a\u624b",d={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"\u5feb\u901f\u4e0a\u624b",description:"\u672c\u6587\u7684\u76ee\u7684\u662f\u901a\u8fc7\u7b80\u5355\u7684\u6f14\u793a\uff0c\u8ba9\u4f7f\u7528\u8005\u4f53\u9a8c StoneDB \u5728\u5927\u6279\u91cf\u6570\u636e\u63d2\u5165\u3001\u6570\u636e\u538b\u7f29\u548c\u5206\u6790\u67e5\u8be2\u65b9\u9762\u4e0e InnoDB \u76f8\u6bd4\uff0c\u5177\u6709\u8f83\u9ad8\u7684\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-start.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-start",permalink:"/zh/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-start.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660223276,formattedLastUpdatedAt:"2022/8/11",sidebarPosition:3.2,frontMatter:{id:"quick-start",sidebar_position:3.2},sidebar:"autoSidebar",previous:{title:"Docker\u5feb\u901f\u90e8\u7f72StoneDB",permalink:"/zh/docs/getting-started/quick-deploy-in-docker"},next:{title:"\u57fa\u672c\u64cd\u4f5c",permalink:"/zh/docs/getting-started/basic-operations"}},c={},u=[{value:"\u7b2c\u4e00\u6b65. \u90e8\u7f72\u8bd5\u7528\u73af\u5883",id:"\u7b2c\u4e00\u6b65-\u90e8\u7f72\u8bd5\u7528\u73af\u5883",level:2},{value:"\u7b2c\u4e8c\u6b65. \u51c6\u5907\u6d4b\u8bd5\u6570\u636e",id:"\u7b2c\u4e8c\u6b65-\u51c6\u5907\u6d4b\u8bd5\u6570\u636e",level:2},{value:"1) \u521b\u5efa\u6570\u636e\u5e93",id:"1-\u521b\u5efa\u6570\u636e\u5e93",level:3},{value:"2) \u521b\u5efa\u8868",id:"2-\u521b\u5efa\u8868",level:3},{value:"3) \u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b",id:"3-\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"\u7b2c\u4e09\u6b65. \u63d2\u5165\u6027\u80fd\u6d4b\u8bd5",id:"\u7b2c\u4e09\u6b65-\u63d2\u5165\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u7b2c\u56db\u6b65. \u6570\u636e\u538b\u7f29\u6d4b\u8bd5",id:"\u7b2c\u56db\u6b65-\u6570\u636e\u538b\u7f29\u6d4b\u8bd5",level:2},{value:"\u7b2c\u4e94\u6b65. \u805a\u5408\u67e5\u8be2\u6d4b\u8bd5",id:"\u7b2c\u4e94\u6b65-\u805a\u5408\u67e5\u8be2\u6d4b\u8bd5",level:2}],m={toc:u};function p(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,i.kt)("p",null,"\u672c\u6587\u7684\u76ee\u7684\u662f\u901a\u8fc7\u7b80\u5355\u7684\u6f14\u793a\uff0c\u8ba9\u4f7f\u7528\u8005\u4f53\u9a8c StoneDB \u5728\u5927\u6279\u91cf\u6570\u636e\u63d2\u5165\u3001\u6570\u636e\u538b\u7f29\u548c\u5206\u6790\u67e5\u8be2\u65b9\u9762\u4e0e InnoDB \u76f8\u6bd4\uff0c\u5177\u6709\u8f83\u9ad8\u7684\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u90e8\u7f72\u8bd5\u7528\u73af\u5883"},"\u7b2c\u4e00\u6b65. \u90e8\u7f72\u8bd5\u7528\u73af\u5883"),(0,i.kt)("p",null,"\u5728\u8bd5\u7528 StoneDB \u524d\uff0c\u8bf7\u6309\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/getting-started/quick-deployment"},"\u5feb\u901f\u90e8\u7f72")," \u4e2d\u7684\u6b65\u9aa4\u51c6\u5907 StoneDB \u6d4b\u8bd5\u73af\u5883\u5e76\u542f\u52a8\u5b9e\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u51c6\u5907\u6d4b\u8bd5\u6570\u636e"},"\u7b2c\u4e8c\u6b65. \u51c6\u5907\u6d4b\u8bd5\u6570\u636e"),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5c06\u751f\u6210\u4e00\u4e2a\u6d4b\u8bd5\u6570\u636e\u96c6\u7528\u4e8e\u4f53\u9a8c StoneDB\u3002"),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u6570\u636e\u5e93"},"1) \u521b\u5efa\u6570\u636e\u5e93"),(0,i.kt)("p",null,"\u521b\u5efa\u540d\u4e3a test \u7684\u6570\u636e\u5e93\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create database test DEFAULT CHARACTER SET utf8mb4;\n")),(0,i.kt)("h3",{id:"2-\u521b\u5efa\u8868"},"2) \u521b\u5efa\u8868"),(0,i.kt)("p",null,"\u5728 test \u6570\u636e\u5e93\u5185\u5206\u522b\u521b\u5efa\u540d\u4e3a t_user\u3001t_user_innodb \u7684\u8868\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"use test\nCREATE TABLE t_user(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(20) NOT NULL,\n  last_name VARCHAR(20) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=stonedb;\n\nCREATE TABLE t_user_innodb(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(20) NOT NULL,\n  last_name VARCHAR(20) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=innodb;\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"StoneDB 5.6 \u7684\u5b58\u50a8\u5f15\u64ce\u540d\u662f stonedb\uff0c5.7 \u7684\u5b58\u50a8\u5f15\u64ce\u540d\u662f tianmu\u3002"))),(0,i.kt)("h3",{id:"3-\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b"},"3) \u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b"),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b SQL \u8bed\u53e5\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DELIMITER //\ncreate PROCEDURE add_user(in num INT)\nBEGIN\nDECLARE rowid INT DEFAULT 0;\nDECLARE firstname VARCHAR(10);\nDECLARE name1 VARCHAR(10);\nDECLARE name2 VARCHAR(10);\nDECLARE lastname VARCHAR(10) DEFAULT '';\nDECLARE sex CHAR(1);\nDECLARE score CHAR(2);\nWHILE rowid < num DO\nSET firstname = SUBSTRING(md5(rand()),1,4); \nSET name1 = SUBSTRING(md5(rand()),1,4); \nSET name2 = SUBSTRING(md5(rand()),1,4); \nSET sex=FLOOR(0 + (RAND() * 2));\nSET score= FLOOR(40 + (RAND() *60));\nSET rowid = rowid + 1;\nIF ROUND(RAND())=0 THEN \nSET lastname =name1;\nEND IF;\nIF ROUND(RAND())=1 THEN\nSET lastname = CONCAT(name1,name2);\nEND IF;\ninsert INTO t_user(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \nEND WHILE;\nEND //\nDELIMITER ;\n\n\nDELIMITER //\ncreate PROCEDURE add_user_innodb(in num INT)\nBEGIN\nDECLARE rowid INT DEFAULT 0;\nDECLARE firstname VARCHAR(10);\nDECLARE name1 VARCHAR(10);\nDECLARE name2 VARCHAR(10);\nDECLARE lastname VARCHAR(10) DEFAULT '';\nDECLARE sex CHAR(1);\nDECLARE score CHAR(2);\nWHILE rowid < num DO\nSET firstname = SUBSTRING(md5(rand()),1,4); \nSET name1 = SUBSTRING(md5(rand()),1,4); \nSET name2 = SUBSTRING(md5(rand()),1,4); \nSET sex=FLOOR(0 + (RAND() * 2));\nSET score= FLOOR(40 + (RAND() *60));\nSET rowid = rowid + 1;\nIF ROUND(RAND())=0 THEN \nSET lastname =name1;\nEND IF;\nIF ROUND(RAND())=1 THEN\nSET lastname = CONCAT(name1,name2);\nEND IF;\ninsert INTO t_user_innodb(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \nEND WHILE;\nEND //\nDELIMITER ;\n")),(0,i.kt)("p",null,"\u6b64\u5b58\u50a8\u8fc7\u7a0b\u7528\u4e8e\u968f\u673a\u751f\u6210\u4e00\u5f20\u4eba\u5458\u4fe1\u606f\u8868\u3002"),(0,i.kt)("h2",{id:"\u7b2c\u4e09\u6b65-\u63d2\u5165\u6027\u80fd\u6d4b\u8bd5"},"\u7b2c\u4e09\u6b65. \u63d2\u5165\u6027\u80fd\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b SQL \u8bed\u53e5\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> call add_user_innodb(10000000);\nQuery OK, 1 row affected (24 min 46.62 sec)\n\nmysql> call add_user(10000000);\nQuery OK, 1 row affected (9 min 21.14 sec)\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u663e\u793a\uff1a\u63d2\u51651\u5343\u4e07\u6570\u636e\u884c\uff0c\u5728 StoneDB \u9700\u89819\u5206\u949f21\u79d2\uff0c\u5728 InnoDB \u9700\u898124\u5206\u949f46\u79d2\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u786c\u4ef6\u914d\u7f6e\u4e0d\u540c\uff0c\u6267\u884c\u65f6\u95f4\u662f\u4f1a\u6709\u5dee\u5f02\uff0c\u8fd9\u91cc\u662f\u540c\u4e00\u4e2a\u73af\u5883\u6267\u884c\u4e24\u4e2a\u5b58\u50a8\u8fc7\u7a0b\uff0c\u5bf9\u6bd4\u5b83\u4eec\u7684\u6267\u884c\u65f6\u95f4\u3002"))),(0,i.kt)("h2",{id:"\u7b2c\u56db\u6b65-\u6570\u636e\u538b\u7f29\u6d4b\u8bd5"},"\u7b2c\u56db\u6b65. \u6570\u636e\u538b\u7f29\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b SQL \u8bed\u53e5\u9a8c\u8bc1\u6570\u636e\u538b\u7f29\u6027\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select count(*) from t_user_innodb;\n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (1.83 sec)\n\nmysql> select count(*) from t_user;       \n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (0.00 sec)\n\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| table_schema | table_name    | table_rows | data_length | index_length | total_size | engine  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| test         | t_user        |   10000000 | 119.99M     | 0.00M        | 119.99M    | STONEDB |\n| test         | t_user_innodb |    9995867 | 454.91M     | 0.00M        | 454.91M    | InnoDB  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u663e\u793a\uff1a\u76f8\u540c\u7684\u6570\u636e\u884c\uff0c\u5728 StoneDB \u5927\u5c0f\u4e3a120MB\uff0c\u5728 InnoDB \u5927\u5c0f\u4e3a455MB\u3002"),(0,i.kt)("h2",{id:"\u7b2c\u4e94\u6b65-\u805a\u5408\u67e5\u8be2\u6d4b\u8bd5"},"\u7b2c\u4e94\u6b65. \u805a\u5408\u67e5\u8be2\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u6267\u884c\u805a\u5408\u67e5\u8be2\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select first_name,count(*) from t_user group by first_name order by 1; \n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n.....\n| fffb       |      142 |\n| fffc       |      140 |\n| fffd       |      156 |\n| fffe       |      140 |\n| ffff       |      132 |\n+------------+----------+\n65536 rows in set (0.98 sec)\n\nmysql> select first_name,count(*) from t_user_innodb group by first_name order by 1;\n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n......\n| fffb       |      178 |\n| fffc       |      161 |\n| fffd       |      170 |\n| fffe       |      156 |\n| ffff       |      139 |\n+------------+----------+\n65536 rows in set (9.00 sec)\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u663e\u793a\uff1a\u6267\u884c\u76f8\u540c\u7684\u805a\u5408\u67e5\u8be2\uff0c\u5728 StoneDB \u9700\u89810.98s\uff0c\u5728 InnoDB \u9700\u89819s\u3002"))}p.isMDXComponent=!0}}]);