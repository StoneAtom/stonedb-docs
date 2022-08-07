"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1584],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),g=p(a),d=r,c=g["".concat(u,".").concat(d)]||g[d]||s[d]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},84387:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"use-gravity-to-migrate",sidebar_position:8.2},u="\u6570\u636e\u8fc1\u79fb\u540c\u6b65\u5de5\u5177-Gravity",p={unversionedId:"data-migration-to-stonedb/use-gravity-to-migrate",id:"data-migration-to-stonedb/use-gravity-to-migrate",title:"\u6570\u636e\u8fc1\u79fb\u540c\u6b65\u5de5\u5177-Gravity",description:"Gravity \u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/07-data-migration-to-stonedb/use-gravity-to-migrate.md",sourceDirName:"07-data-migration-to-stonedb",slug:"/data-migration-to-stonedb/use-gravity-to-migrate",permalink:"/zh/docs/data-migration-to-stonedb/use-gravity-to-migrate",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/07-data-migration-to-stonedb/use-gravity-to-migrate.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1659874260,formattedLastUpdatedAt:"2022/8/7",sidebarPosition:8.2,frontMatter:{id:"use-gravity-to-migrate",sidebar_position:8.2},sidebar:"autoSidebar",previous:{title:"MySQL\u589e\u91cf\u6570\u636e\u540c\u6b65\u5de5\u5177-otter",permalink:"/zh/docs/data-migration-to-stonedb/use-outter-to-migrate"},next:{title:"StoneDB\u542f\u52a8\u5931\u8d25",permalink:"/zh/docs/troubleshooting/failed-to-start"}},m={},s=[{value:"Gravity \u4ecb\u7ecd",id:"gravity-\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u529f\u80fd\u5217\u8868",id:"\u529f\u80fd\u5217\u8868",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u8be6\u89e3",id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u8be6\u89e3",level:2},{value:"\u90e8\u7f72\u65b9\u6848",id:"\u90e8\u7f72\u65b9\u6848",level:2},{value:"Docker \u90e8\u7f72",id:"docker-\u90e8\u7f72",level:3},{value:"K8S \u90e8\u7f72",id:"k8s-\u90e8\u7f72",level:3},{value:"ECS \u90e8\u7f72",id:"ecs-\u90e8\u7f72",level:3},{value:"\u914d\u7f6e\u540c\u6b65\u4efb\u52a1\u76d1\u63a7",id:"\u914d\u7f6e\u540c\u6b65\u4efb\u52a1\u76d1\u63a7",level:2}],g={toc:s};function d(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},g,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u8fc1\u79fb\u540c\u6b65\u5de5\u5177-gravity"},"\u6570\u636e\u8fc1\u79fb\u540c\u6b65\u5de5\u5177-Gravity"),(0,l.kt)("h2",{id:"gravity-\u4ecb\u7ecd"},"Gravity \u4ecb\u7ecd"),(0,l.kt)("p",null,"GitHub\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moiot/gravity"},"https://github.com/moiot/gravity"),"\nGravity \u662f\u7531\u6469\u62dc\u516c\u53f8\u4f7f\u7528go\u8bed\u8a00\u5f00\u53d1\u7684\u4e00\u6b3e\u6570\u636e\u8fc1\u79fb\u5de5\u5177\uff08\u76ee\u524d GitHub \u4e0a\u66f4\u65b0\u4e0d\u662f\u5f88\u9891\u7e41\uff0c\u4f46\u662f\u8fd8\u6709\u5f00\u53d1\u8005\u5728 GitHub \u4e0a\u56de\u7b54 issues\uff09\uff0c\u63d0\u4f9b\u5168\u91cf\u3001\u589e\u91cf\u6570\u636e\u540c\u6b65\uff0c\u4ee5\u53ca\u5411\u6d88\u606f\u961f\u5217\u53d1\u5e03\u6570\u636e\u66f4\u65b0\uff0c\u652f\u6301 ECS\u3001Docker\u3001K8S \u90e8\u7f72\uff0c\u63a8\u8350\u4f7f\u7528 K8S \u90e8\u7f72\u3002\nDRC \u7684\u8bbe\u8ba1\u76ee\u6807\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u548c\u76ee\u6807\u7684\uff0c\u53ef\u7075\u6d3b\u5b9a\u5236\u7684\u6570\u636e\u590d\u5236\u7ec4\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e Kubernetes \u7684 PaaS \u5e73\u53f0\uff0c\u7b80\u5316\u8fd0\u7ef4\u4efb\u52a1\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7986).Z,width:"1188",height:"700"})),(0,l.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e\u603b\u7ebf\uff1a\u53d1\u9001 MySQL Binlog\uff0cMongoDB Oplog \u7684\u6570\u636e\u53d8\u66f4\u5230 Kafka \u4f9b\u4e0b\u6e38\u6d88\u8d39\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u5411\u6570\u636e\u540c\u6b65\uff1aMySQL --\x3e MySQL \u7684\u5168\u91cf\u3001\u589e\u91cf\u540c\u6b65\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53cc\u5411\u6570\u636e\u540c\u6b65\uff1aMySQL <--\x3e MySQL \u7684\u53cc\u5411\u589e\u91cf\u540c\u6b65\uff0c\u540c\u6b65\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u9632\u6b62\u5faa\u73af\u590d\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e93\u5206\u8868\u5230\u5408\u5e93\u7684\u540c\u6b65\uff1aMySQL \u5206\u5e93\u5206\u8868 --\x3e \u5408\u5e93\u7684\u540c\u6b65\uff0c\u53ef\u4ee5\u6307\u5b9a\u6e90\u8868\u548c\u76ee\u6807\u8868\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u6570\u636e\u53d8\u6362\uff1a\u540c\u6b65\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u652f\u6301\u5bf9\u8fdb\u884c\u6570\u636e\u53d8\u6362\u3002")),(0,l.kt)("h2",{id:"\u529f\u80fd\u5217\u8868"},"\u529f\u80fd\u5217\u8868"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u652f\u6301\u60c5\u51b5")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u6570\u636e\u6e90")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u72b6\u6001")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MySQL Binlog"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MySQL \u5168\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mongo Oplog"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TiDB Binlog"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL WAL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u4e2d")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u8f93\u51fa\u652f\u6301\u60c5\u51b5")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u6570\u636e\u8f93\u51fa")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u72b6\u6001")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MySQL/TiDB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u4e2d")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u53d8\u6362\u652f\u6301\u60c5\u51b5")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u6570\u636e\u53d8\u6362")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u72b6\u6001")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8fc7\u6ee4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u91cd\u547d\u4ee4\u5217"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u5217"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("p",null,"\u67b6\u6784\u4ecb\u7ecd\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moiot/gravity/blob/master/docs/2.0/00-arch.md"},"https://github.com/moiot/gravity/blob/master/docs/2.0/00-arch.md"),"."),(0,l.kt)("h3",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,l.kt)("p",null,"\u6e90\u7aef \u4ec5\u652f\u6301 binlog-format=row\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u8be6\u89e3"},"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u8be6\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# name \u5fc5\u586b \u540d\u8bcd\u968f\u673a\nname = "mysql2mysqlDemo"\n\n# \u5185\u90e8\u7528\u4e8e\u4fdd\u5b58\u4f4d\u70b9\u3001\u5fc3\u8df3\u7b49\u4e8b\u9879\u7684\u5e93\u540d\uff0c\u9ed8\u8ba4\u4e3a _gravity\uff0c\u6e90\u7aef\u4f1a\u81ea\u52a8\u751f\u6210\ninternal-db-name = "_gravity"\n\n#\n# Input \u63d2\u4ef6\u7684\u5b9a\u4e49\uff0c\u6b64\u5904\u5b9a\u4e49\u4f7f\u7528 mysql\n#\n[input]\n#\u540c\u6b65\u7684\u6570\u636e\u5e93\u7c7b\u578b\ntype = "mysql"\n#\u540c\u6b65\u4efb\u52a1\u7c7b\u578b\u3002\u589e\u91cf\uff1astream\uff0c\u5168\u91cf\uff1abatch\uff0c\u5168\u91cf+\u589e\u91cf\uff1areplication\nmode = "replication"\n[input.config.source]\nhost = "192.168.30.183"\nusername = "zz"\npassword = "********"\nport = 3307\n\n#\n# Output \u63d2\u4ef6\u7684\u5b9a\u4e49\uff0c\u6b64\u5904\u4f7f\u7528 mysql\n#\n[output]\ntype = "mysql"\n[output.config.target]\nhost = "192.168.30.101"\nusername = "root"\npassword = "********"\nport = 3306\n\n# \u8def\u7531\u89c4\u5219\u7684\u5b9a\u4e49\n[[output.config.routes]]\nmatch-schema = "zg"\nmatch-table = "test_source_table"\ntarget-schema = "zg"\ntarget-table = "test_target_table\n')),(0,l.kt)("h2",{id:"\u90e8\u7f72\u65b9\u6848"},"\u90e8\u7f72\u65b9\u6848"),(0,l.kt)("h3",{id:"docker-\u90e8\u7f72"},"Docker \u90e8\u7f72"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 8080:8080 -v ${PWD}/config.toml:/etc/gravity/config.toml  --net=host --name=innodb2stone moiot/gravity:latest\n")),(0,l.kt)("h3",{id:"k8s-\u90e8\u7f72"},"K8S \u90e8\u7f72"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://codeload.github.com/moiot/gravity-operator/tar.gz/refs/tags/v0.3.12 -C gravity-operator-0.3.12.tar.gz\ntar -zxvf gravity-operator-0.3.12.tar.gz\n\ncd gravity-operator/charts/gravity-operator\nhelm install --name gravity-operator ./\n")),(0,l.kt)("p",null,"\u968f\u540e\u5728k8s\u7ba1\u7406\u754c\u9762\u67e5\u770b\u662f\u5426\u6b63\u5e38\u542f\u52a8\uff0c\u6b63\u5e38\u542f\u52a8\u540e\u67e5\u770b admin web-server \u7aef\u53e3\uff0c\u767b\u5f55\u4e0a\u53bb\u521b\u5efa\u540c\u6b65\u4efb\u52a1\uff0c\u4f7f\u7528\u6a21\u677f\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u53c2\u6570\u548c\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u8be6\u89e3\u76f8\u4f3c\u3002"),(0,l.kt)("h3",{id:"ecs-\u90e8\u7f72"},"ECS \u90e8\u7f72"),(0,l.kt)("p",null,"\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597d go \u73af\u5883\uff0c\u7f16\u8bd1\u7684\u65f6\u5019\u4e5f\u6bd4\u8f83\u9ebb\u70e6\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528\u8be5\u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/moiot/gravity.git\n\ncd gravity && make\nbin/gravity -config mysql2mysql.toml\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u540c\u6b65\u4efb\u52a1\u76d1\u63a7"},"\u914d\u7f6e\u540c\u6b65\u4efb\u52a1\u76d1\u63a7"),(0,l.kt)("p",null,"\u540c\u6b65\u76d1\u63a7\u6dfb\u52a0\u5230 Prometheus\uff0c\u53c2\u8003\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'- job_name: "gravity_innodb2stone"\nstatic_configs:\n- targets: ["192.168.46.150:8080"]\nlabels:\n          instance: innodb2stone\n')),(0,l.kt)("p",null,"Grafana \u56fe\u8868\u5c55\u793a\u6a21\u677f\u8bf7\u53c2\u8003\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moiot/gravity/tree/master/deploy/grafana"},"https://github.com/moiot/gravity/tree/master/deploy/grafana"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(29752).Z,width:"1125",height:"590"}),"\n",(0,l.kt)("img",{alt:"image.png",src:a(60535).Z,width:"1125",height:"590"})))}d.isMDXComponent=!0},7986:function(t,e,a){e.Z=a.p+"assets/images/Gravity-e92717be2bfa143012153dd9cd112d4d.png"},29752:function(t,e,a){e.Z=a.p+"assets/images/Gravity_detail-dd086d4d488bb8369f957e965c0f289f.png"},60535:function(t,e,a){e.Z=a.p+"assets/images/Gravity_overview-27fb5eb6d609f4d4b11ab86421bb8c78.png"}}]);