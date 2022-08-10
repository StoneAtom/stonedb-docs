"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5339],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88866:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"quick-start",sidebar_position:3.2},l="\u5feb\u901f\u4e0a\u624b",u={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"\u5feb\u901f\u4e0a\u624b",description:"\u672c\u6587\u7684\u76ee\u7684\u662f\u901a\u8fc7\u7b80\u5355\u7684\u6f14\u793a\uff0c\u8ba9\u4f7f\u7528\u8005\u4f53\u9a8cStoneDB\u5728\u5927\u6279\u91cf\u6570\u636e\u63d2\u5165\u3001\u6570\u636e\u538b\u7f29\u6bd4\u548c\u5206\u6790\u67e5\u8be2\u65b9\u9762\u4e0eInnoDB\u76f8\u6bd4\u5177\u6709\u8f83\u9ad8\u7684\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-start.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-start",permalink:"/zh/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-start.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1660115193,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:3.2,frontMatter:{id:"quick-start",sidebar_position:3.2},sidebar:"autoSidebar",previous:{title:"Docker\u5feb\u901f\u90e8\u7f72StoneDB",permalink:"/zh/docs/getting-started/quick-deploy-in-docker"},next:{title:"\u57fa\u672c\u64cd\u4f5c",permalink:"/zh/docs/getting-started/basic-operations"}},c={},d=[{value:"\u7b2c\u4e00\u6b65. \u90e8\u7f72\u8bd5\u7528\u73af\u5883",id:"\u7b2c\u4e00\u6b65-\u90e8\u7f72\u8bd5\u7528\u73af\u5883",level:2},{value:"\u7b2c\u4e8c\u6b65. \u51c6\u5907\u6d4b\u8bd5\u6570\u636e",id:"\u7b2c\u4e8c\u6b65-\u51c6\u5907\u6d4b\u8bd5\u6570\u636e",level:2},{value:"1) \u524d\u63d0\u6761\u4ef6",id:"1-\u524d\u63d0\u6761\u4ef6",level:3},{value:"2\uff09\u521b\u5efa\u6570\u636e\u5e93",id:"2\u521b\u5efa\u6570\u636e\u5e93",level:3},{value:"3) \u521b\u5efa\u8868",id:"3-\u521b\u5efa\u8868",level:3},{value:"4) \u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b",id:"4-\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"\u7b2c\u4e09\u6b65. \u63d2\u5165\u6027\u80fd\u6d4b\u8bd5",id:"\u7b2c\u4e09\u6b65-\u63d2\u5165\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u7b2c\u56db\u6b65. \u6570\u636e\u538b\u7f29\u6d4b\u8bd5",id:"\u7b2c\u56db\u6b65-\u6570\u636e\u538b\u7f29\u6d4b\u8bd5",level:2},{value:"\u7b2c\u4e94\u6b65. \u805a\u5408\u67e5\u8be2\u6d4b\u8bd5",id:"\u7b2c\u4e94\u6b65-\u805a\u5408\u67e5\u8be2\u6d4b\u8bd5",level:2}],f={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,a.kt)("p",null,"\u672c\u6587\u7684\u76ee\u7684\u662f\u901a\u8fc7\u7b80\u5355\u7684\u6f14\u793a\uff0c\u8ba9\u4f7f\u7528\u8005\u4f53\u9a8cStoneDB\u5728\u5927\u6279\u91cf\u6570\u636e\u63d2\u5165\u3001\u6570\u636e\u538b\u7f29\u6bd4\u548c\u5206\u6790\u67e5\u8be2\u65b9\u9762\u4e0eInnoDB\u76f8\u6bd4\u5177\u6709\u8f83\u9ad8\u7684\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u90e8\u7f72\u8bd5\u7528\u73af\u5883"},"\u7b2c\u4e00\u6b65. \u90e8\u7f72\u8bd5\u7528\u73af\u5883"),(0,a.kt)("p",null,"\u5728\u8bd5\u7528 StoneDB \u529f\u80fd\u524d\uff0c\u8bf7\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/getting-started/quick-deployment"},"\u5feb\u901f\u90e8\u7f72"),"\u4e2d\u7684\u6b65\u9aa4\u51c6\u5907 StoneDB \u6d4b\u8bd5\u73af\u5883\u5e76\u542f\u52a8\u5b9e\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u51c6\u5907\u6d4b\u8bd5\u6570\u636e"},"\u7b2c\u4e8c\u6b65. \u51c6\u5907\u6d4b\u8bd5\u6570\u636e"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5c06\u751f\u6210\u4e00\u4e2a\u6d4b\u8bd5\u6570\u636e\u96c6\u7528\u4e8e\u4f53\u9a8c StoneDB \u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"1-\u524d\u63d0\u6761\u4ef6"},"1) \u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u540c\u4e00\u4e2a\u6d4b\u8bd5\u73af\u5883\uff0c\u5206\u522b\u521b\u5efaStoneDB\u548cInnoDB\u5b58\u50a8\u5f15\u64ce\u7684\u8868\uff0c\u5e76\u4e14\u4ee5\u4e0b\u4e09\u4e2a\u53c2\u6570\u4e5f\u662f\u76f8\u540c\u7684\u3002\nautocommit=1\ninnodb_flush_log_at_trx_commit=1\nsync_binlog=0"),(0,a.kt)("h3",{id:"2\u521b\u5efa\u6570\u636e\u5e93"},"2\uff09\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u521b\u5efa\u540d\u4e3atest\u7684\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"create database test DEFAULT CHARACTER SET utf8mb4;\n")),(0,a.kt)("h3",{id:"3-\u521b\u5efa\u8868"},"3) \u521b\u5efa\u8868"),(0,a.kt)("p",null,"\u5728test\u6570\u636e\u5e93\u5185\u521b\u5efa\u540d\u4e3at_user\u7684\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"use test\nCREATE TABLE t_user(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(20) NOT NULL,\n  last_name VARCHAR(20) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,a.kt)("h3",{id:"4-\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b"},"4) \u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b SQL \u8bed\u53e5\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DELIMITER //\n    create PROCEDURE add_user(in num INT)\n    BEGIN\n        DECLARE rowid INT DEFAULT 0;\n        DECLARE firstname VARCHAR(10);\n        DECLARE name1 VARCHAR(10);\n        DECLARE name2 VARCHAR(10);\n        DECLARE lastname VARCHAR(10) DEFAULT '';\n        DECLARE sex CHAR(1);\n        DECLARE score CHAR(2);\n        WHILE rowid < num DO\n        SET firstname = SUBSTRING(md5(rand()),1,4); \n        SET name1 = SUBSTRING(md5(rand()),1,4); \n        SET name2 = SUBSTRING(md5(rand()),1,4); \n        SET sex=FLOOR(0 + (RAND() * 2));\n        SET score= FLOOR(40 + (RAND() *60));\n        SET rowid = rowid + 1;\n        IF ROUND(RAND())=0 THEN \n        SET lastname =name1;\n        END IF;\n        IF ROUND(RAND())=1 THEN\n        SET lastname = CONCAT(name1,name2);\n        END IF;\n        insert INTO t_user(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \n        END WHILE;\n    END //\nDELIMITER ;\n")),(0,a.kt)("p",null,"\u6b64\u5b58\u50a8\u8fc7\u7a0b\u7528\u4e8e\u968f\u673a\u751f\u6210\u4e00\u5f20\u4eba\u5458\u4fe1\u606f\u8868\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u6b65-\u63d2\u5165\u6027\u80fd\u6d4b\u8bd5"},"\u7b2c\u4e09\u6b65. \u63d2\u5165\u6027\u80fd\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0bSQL\u8bed\u53e5\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> call add_user_innodb(10000000);\nQuery OK, 1 row affected (24 min 46.62 sec)\n\n> call add_user(10000000);\nQuery OK, 1 row affected (9 min 21.14 sec)\n")),(0,a.kt)("p",null,"\u7ed3\u679c\u663e\u793a\uff1a\u63d2\u51651\u5343\u4e07\u6570\u636e\u884c\uff0c\u5728StoneDB\u9700\u89819\u5206\u949f21\u79d2\uff0c\u5728InnoDB\u9700\u898124\u5206\u949f46\u79d2\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u56db\u6b65-\u6570\u636e\u538b\u7f29\u6d4b\u8bd5"},"\u7b2c\u56db\u6b65. \u6570\u636e\u538b\u7f29\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0bSQL\u8bed\u53e5\u9a8c\u8bc1\u6570\u636e\u538b\u7f29\u6027\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> select count(*) from t_user_innodb;\n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (1.83 sec)\n\n> select count(*) from t_user;       \n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (0.00 sec)\n\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| table_schema | table_name    | table_rows | data_length | index_length | total_size | engine  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| test         | t_user        |   10000000 | 119.99M     | 0.00M        | 119.99M    | STONEDB |\n| test         | t_user_innodb |    9995867 | 454.91M     | 0.00M        | 454.91M    | InnoDB  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n")),(0,a.kt)("p",null,"\u7ed3\u679c\u663e\u793a\uff1a\u76f8\u540c\u7684\u6570\u636e\u884c\uff0c\u5728StoneDB\u5927\u5c0f\u4e3a120M\uff0c\u5728InnoDB\u5927\u5c0f\u4e3a455M\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e94\u6b65-\u805a\u5408\u67e5\u8be2\u6d4b\u8bd5"},"\u7b2c\u4e94\u6b65. \u805a\u5408\u67e5\u8be2\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u6267\u884c\u805a\u5408\u67e5\u8be2\u6d4b\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> select first_name,count(*) from t_user group by first_name order by 1; \n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n.....\n| fffb       |      142 |\n| fffc       |      140 |\n| fffd       |      156 |\n| fffe       |      140 |\n| ffff       |      132 |\n+------------+----------+\n65536 rows in set (0.98 sec)\n\n> select first_name,count(*) from t_user_innodb group by first_name order by 1;\n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n......\n| fffb       |      178 |\n| fffc       |      161 |\n| fffd       |      170 |\n| fffe       |      156 |\n| ffff       |      139 |\n+------------+----------+\n65536 rows in set (9.00 sec)\n")),(0,a.kt)("p",null,"\u7ed3\u679c\u663e\u793a\uff1a\u6267\u884c\u76f8\u540c\u7684\u805a\u5408\u67e5\u8be2\uff0c\u5728StoneDB\u9700\u89810.98s\uff0c\u5728InnoDB\u9700\u89819s\u3002"))}p.isMDXComponent=!0}}]);