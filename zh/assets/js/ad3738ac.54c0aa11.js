"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[336],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1903:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"configuration-parameters",sidebar_position:5.62},l="\u8bbe\u7f6e\u53c2\u6570",u={unversionedId:"developer-guide/appendix/configuration-parameters",id:"developer-guide/appendix/configuration-parameters",title:"\u8bbe\u7f6e\u53c2\u6570",description:"StoneDB\u7684\u6240\u6709\u53c2\u6570\u9ed8\u8ba4\u5b58\u653e\u5728/stonedb/install/stonedb.cnf\uff0c\u8fd9\u4e2a\u53c2\u6570\u6587\u4ef6\u4e5f\u53ef\u4ee5\u5305\u542b\u5176\u4ed6\u5b58\u50a8\u5f15\u64ce\u7684\u53c2\u6570\u3002StoneDB\u7684\u53c2\u6570\u548c\u5176\u4ed6\u5b58\u50a8\u5f15\u64ce\u7684\u53c2\u6570\u5728\u4fee\u6539\u4e0a\u662f\u6709\u533a\u522b\u7684\uff0cStoneDB\u7684\u53c2\u6570\u53ea\u80fd\u9759\u6001\u4fee\u6539\uff0c\u5373\u53ea\u80fd\u7f16\u8f91\u53c2\u6570\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u542fStoneDB\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/05-appendix/configuration-parameters.md",sourceDirName:"04-developer-guide/05-appendix",slug:"/developer-guide/appendix/configuration-parameters",permalink:"/zh/docs/developer-guide/appendix/configuration-parameters",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/05-appendix/configuration-parameters.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1660115193,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:5.62,frontMatter:{id:"configuration-parameters",sidebar_position:5.62},sidebar:"autoSidebar",previous:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u5b58\u50a8\u8fc7\u7a0b",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure"},next:{title:"\u9519\u8bef\u7801",permalink:"/zh/docs/developer-guide/appendix/error-codes"}},c={},d=[{value:"\u6307\u5b9a\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b",id:"\u6307\u5b9a\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b",level:2},{value:"\u6307\u5b9ainsert buffer\u5927\u5c0f",id:"\u6307\u5b9ainsert-buffer\u5927\u5c0f",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8bbe\u7f6e\u53c2\u6570"},"\u8bbe\u7f6e\u53c2\u6570"),(0,i.kt)("p",null,"StoneDB\u7684\u6240\u6709\u53c2\u6570\u9ed8\u8ba4\u5b58\u653e\u5728/stonedb/install/stonedb.cnf\uff0c\u8fd9\u4e2a\u53c2\u6570\u6587\u4ef6\u4e5f\u53ef\u4ee5\u5305\u542b\u5176\u4ed6\u5b58\u50a8\u5f15\u64ce\u7684\u53c2\u6570\u3002StoneDB\u7684\u53c2\u6570\u548c\u5176\u4ed6\u5b58\u50a8\u5f15\u64ce\u7684\u53c2\u6570\u5728\u4fee\u6539\u4e0a\u662f\u6709\u533a\u522b\u7684\uff0cStoneDB\u7684\u53c2\u6570\u53ea\u80fd\u9759\u6001\u4fee\u6539\uff0c\u5373\u53ea\u80fd\u7f16\u8f91\u53c2\u6570\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u542fStoneDB\u3002\n\u7528\u6237\u53ef\u6839\u636e\u81ea\u5df1\u7684\u73af\u5883\u8981\u6c42\u8fdb\u884c\u8bbe\u7f6e\u53c2\u6570\uff0c\u4ee5\u4e0b\u662f\u8bbe\u7f6e\u53c2\u6570\u7684\u6f14\u793a\u3002"),(0,i.kt)("h2",{id:"\u6307\u5b9a\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b"},"\u6307\u5b9a\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b"),(0,i.kt)("p",null,"\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b\u7531\u53c2\u6570default_storage_engine\u51b3\u5b9a\uff0c\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u5728\u4f1a\u8bdd\u7ea7\u548c\u5168\u5c40\u52a8\u6001\u4fee\u6539\uff0c\u4f46\u5982\u679c\u6570\u636e\u5e93\u5b9e\u4f8b\u91cd\u542f\uff0c\u53c2\u6570\u4f1a\u5931\u6548\uff0c\u5373\u53c2\u6570\u53d8\u4e3a\u539f\u6765\u7684\u503c\u3002\u5982\u679c\u60f3\u53c2\u6570\u6c38\u4e45\u751f\u6548\uff0c\u9700\u8981\u7f16\u8f91\u53c2\u6570\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u542fStoneDB\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 926\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'default_storage_engine';\n+------------------------+--------+\n| Variable_name          | Value  |\n+------------------------+--------+\n| default_storage_engine | MyISAM |\n+------------------------+--------+\n1 row in set (0.00 sec)\n\nmysql> set global default_storage_engine=StoneDB;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> exit\nBye\n# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 927\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'default_storage_engine';\n+------------------------+---------+\n| Variable_name          | Value   |\n+------------------------+---------+\n| default_storage_engine | STONEDB |\n+------------------------+---------+\n1 row in set (0.00 sec)\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u53ef\u77e5\uff0c\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce\u4e3aMyISAM\uff0c\u5728\u5168\u5c40\u7ea7\u4fee\u6539\u540e\uff0c\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce\u4e3aSTONEDB\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> shutdown;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> exit\nBye\n# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'default_storage_engine';\n+------------------------+--------+\n| Variable_name          | Value  |\n+------------------------+--------+\n| default_storage_engine | MyISAM |\n+------------------------+--------+\n1 row in set (0.00 sec)\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u53ef\u77e5\uff0c\u6570\u636e\u5e93\u5b9e\u4f8b\u91cd\u542f\u540e\uff0c\u53c2\u6570default_storage_engine\u53d8\u56deMyISAM\uff0c\u5982\u679c\u60f3\u53c2\u6570\u6c38\u4e45\u751f\u6548\uff0c\u9700\u8981\u7f16\u8f91\u53c2\u6570\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u542fStoneDB\u3002\u4ee5\u4e0b\u662f\u6f14\u793a\u4ecb\u7ecd\u9759\u6001\u4fee\u6539\u53c2\u6570\u3002"),(0,i.kt)("h2",{id:"\u6307\u5b9ainsert-buffer\u5927\u5c0f"},"\u6307\u5b9ainsert buffer\u5927\u5c0f"),(0,i.kt)("p",null,"StoneDB\u7684\u53c2\u6570\u53ea\u652f\u6301\u9759\u6001\u4fee\u6539\uff0c\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u9700\u8981\u91cd\u542fStoneDB\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables like 'stonedb_insert_buffer_size';\n+----------------------------+-------+\n| Variable_name              | Value |\n+----------------------------+-------+\n| stonedb_insert_buffer_size | 512   |\n+----------------------------+-------+\n1 row in set (0.00 sec)\n\n# vi /stonedb/install/stonedb.cnf\nstonedb_insert_buffer_size = 1024\n\nmysql> shutdown;\nQuery OK, 0 rows affected (0.00 sec)\n\n# /stonedb/install//bin/mysqld_safe --datadir=/stonedb/install/data/ --user=mysql &\n\n# mysql -uroot -p -P3308\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show variables like 'stonedb_insert_buffer_size';\n+----------------------------+-------+\n| Variable_name              | Value |\n+----------------------------+-------+\n| stonedb_insert_buffer_size | 1024  |\n+----------------------------+-------+\n1 row in set (0.00 sec)\n\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u53ef\u77e5\uff0c\u53c2\u6570stonedb_insert_buffer_size\u5df2\u7ecf\u4fee\u6539\u4e3a1024MB\u3002"))}m.isMDXComponent=!0}}]);