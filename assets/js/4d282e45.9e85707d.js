"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[718],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"troubleshoot-faq",sidebar_position:10.3},l="Troubleshoot FAQ",c={unversionedId:"FAQ/troubleshoot-faq",id:"FAQ/troubleshoot-faq",title:"Troubleshoot FAQ",description:"What do I do if my database instance crashed?",source:"@site/../Docs/09-FAQ/troubleshoot-faq.md",sourceDirName:"09-FAQ",slug:"/FAQ/troubleshoot-faq",permalink:"/docs/FAQ/troubleshoot-faq",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/09-FAQ/troubleshoot-faq.md",tags:[],version:"current",lastUpdatedBy:"hustjieke",lastUpdatedAt:1659496788,formattedLastUpdatedAt:"8/3/2022",sidebarPosition:10.3,frontMatter:{id:"troubleshoot-faq",sidebar_position:10.3},sidebar:"autoSidebar",previous:{title:"StoneDB FAQ",permalink:"/docs/FAQ/stonedb-faq"},next:{title:"Release Notes",permalink:"/docs/release-notes"}},u={},d=[{value:"<strong>What do I do if my database instance crashed?</strong>",id:"what-do-i-do-if-my-database-instance-crashed",level:2},{value:"<strong>What do I do if my database instance is suspended?</strong>",id:"what-do-i-do-if-my-database-instance-is-suspended",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshoot-faq"},"Troubleshoot FAQ"),(0,r.kt)("h2",{id:"what-do-i-do-if-my-database-instance-crashed"},(0,r.kt)("strong",{parentName:"h2"},"What do I do if my database instance crashed?")),(0,r.kt)("p",null,"Common causes of database instance crashes include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High system workloads"),(0,r.kt)("li",{parentName:"ul"},"Hardware failures"),(0,r.kt)("li",{parentName:"ul"},"Corrupted data pages"),(0,r.kt)("li",{parentName:"ul"},"Bugs")),(0,r.kt)("p",null,"Method to locate the cause:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Collect and analyze the following logs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OS log, saved in",(0,r.kt)("strong",{parentName:"li"}," /var/log/messages")," by default"),(0,r.kt)("li",{parentName:"ul"},"Error log of StoneDB, saved in ",(0,r.kt)("strong",{parentName:"li"},"/stonedb/install/log/mysqld.log")," by default"),(0,r.kt)("li",{parentName:"ul"},"Trace log of StoneDB, saved in ",(0,r.kt)("strong",{parentName:"li"},"/stonedb/install/log/trace.log")," by default"))),(0,r.kt)("li",{parentName:"ol"},"If the cause cannot be located after the OS log, error log, and trace log are analyzed, enable core dumps. In this way, if the database instance crashes again, you can use GDB to analyze the generated core dumpfile.")),(0,r.kt)("h2",{id:"what-do-i-do-if-my-database-instance-is-suspended"},(0,r.kt)("strong",{parentName:"h2"},"What do I do if my database instance is suspended?")),(0,r.kt)("p",null,"Common causes of database instance suspensions include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High system workloads"),(0,r.kt)("li",{parentName:"ul"},"Maximum number of connections reached"),(0,r.kt)("li",{parentName:"ul"},"Disk capacity exhaustion"),(0,r.kt)("li",{parentName:"ul"},"Metadata lock waits"),(0,r.kt)("li",{parentName:"ul"},"Bugs")),(0,r.kt)("p",null,"Method to locate the cause:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check whether the number of connections reaches the threshold.")),(0,r.kt)("p",null,"If the number of connections reaches the threshold specified by parameter ",(0,r.kt)("strong",{parentName:"p"},"max_connections"),", no new connections to the database instance can be created."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Check whether the disk capacity is exhausted.")),(0,r.kt)("p",null,"If the disk capacity is exhausted, the binlog generated by the metadata locks cannot be written to disks."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Check whether lock waits exist.")),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST"),' statement. If the output contains lots of "Waiting for table metadata lock" messages, locate and terminate the thread that causes the congestion.'),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Collect the stack information of the mysqld process.")),(0,r.kt)("p",null,"If the process is in the zombie state, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pstack")," command for several times in a day to track the stack information of the process. If the position of the stack does not change, pay attention to the position, which is the potential cause of the problem."),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"pstack")," command is run to capture the stack information of the process, a SIGSTOP signal is triggered. The signal functions like the ",(0,r.kt)("inlineCode",{parentName:"p"},"kill -19")," command. In fact, running the ",(0,r.kt)("inlineCode",{parentName:"p"},"pstack")," command invokes a GDB command. Then, GDB initiates a SIGSTOP signal to terminate the process. Exercise with caution when running the ",(0,r.kt)("inlineCode",{parentName:"p"},"pstack")," command in the production environment, because this operation may interrupt the running of applications for a little while."),(0,r.kt)("p",null,"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pstack mysqld_pid >> mysqld_pid.log")," command to output the stack information of all threads."))}m.isMDXComponent=!0}}]);