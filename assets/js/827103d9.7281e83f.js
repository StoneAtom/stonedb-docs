"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5682],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),s=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,m=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||o;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67104:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"disk-io-monitor",sidebar_position:7.24},m="Commands for I/O Monitoring",s={unversionedId:"performance-tuning/performance-monitoring-commands/disk-io-monitor",id:"performance-tuning/performance-monitoring-commands/disk-io-monitor",title:"Commands for I/O Monitoring",description:"This topic describes common commands used for I/O monitoring.",source:"@site/../Docs/06-performance-tuning/02-performance-monitoring-commands/disk-io-monitor.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/disk-io-monitor",permalink:"/docs/performance-tuning/performance-monitoring-commands/disk-io-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/06-performance-tuning/02-performance-monitoring-commands/disk-io-monitor.md",tags:[],version:"current",lastUpdatedBy:"hustjieke",lastUpdatedAt:1659496788,formattedLastUpdatedAt:"8/3/2022",sidebarPosition:7.24,frontMatter:{id:"disk-io-monitor",sidebar_position:7.24},sidebar:"autoSidebar",previous:{title:"Command for Memory Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/mem-monitor"},next:{title:"Command for Network Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/network-monitor"}},p={},d=[{value:"iostat",id:"iostat",level:2},{value:"dstat",id:"dstat",level:2}],u={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commands-for-io-monitoring"},"Commands for I/O Monitoring"),(0,o.kt)("p",null,"This topic describes common commands used for I/O monitoring."),(0,o.kt)("h2",{id:"iostat"},"iostat"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"iostat")," command is used to monitor the performance of system I/O devices."),(0,o.kt)("p",null,"Command output example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# iostat -x 1 1\nLinux 3.10.0-957.el7.x86_64 (htap2)     06/13/2022      _x86_64_        (64 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n0.06    0.00    0.03    0.01    0.00   99.90\n\nDevice:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util\nsda               0.00     0.00    0.00    0.00     0.04     0.00    85.75     0.00    0.25    0.25    0.00   0.15   0.00\nsdb               0.06     0.11    7.61    1.10  1849.41    50.81   436.48     0.36   40.93   46.75    0.48   1.56   1.35\ndm-0              0.00     0.00    0.28    0.19     8.25    12.05    87.01     0.00    4.81    7.37    0.94   1.61   0.08\n")),(0,o.kt)("p",null,"Parameter description:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rrqm/s"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of read requests merged per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wrqm/s"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of write requests merged per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"r/s"),(0,o.kt)("td",{parentName:"tr",align:null},"The number (after merges) of read requests completed per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"w/s"),(0,o.kt)("td",{parentName:"tr",align:null},"The number (after merges) of write requests completed per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rkB/s"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of kilobytes read per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wkB/s"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of kilobytes written per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"avgrq-sz"),(0,o.kt)("td",{parentName:"tr",align:null},"The average size of the requests, expressed in sectors (512 bytes).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"avgqu-sz"),(0,o.kt)("td",{parentName:"tr",align:null},"The average queue length of the I/O requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"await"),(0,o.kt)("td",{parentName:"tr",align:null},"The average time for I/O requests to be served.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"r_await"),(0,o.kt)("td",{parentName:"tr",align:null},"The average time for read requests to be served.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"w_await"),(0,o.kt)("td",{parentName:"tr",align:null},"The average time for write requests to be served.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"svctm"),(0,o.kt)("td",{parentName:"tr",align:null},"The average service time for I/O requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"%util"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent on I/O requests.")))),(0,o.kt)("h2",{id:"dstat"},"dstat"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dstat")," command is used to collect performance statistics about CPUs and I/O devices."),(0,o.kt)("p",null,"Command output example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# dstat 1 5\n--total-cpu-usage-- -dsk/total- -net/total- ---paging-- ---system--\nusr sys idl wai stl| read  writ| recv  send|  in   out | int   csw \n0   0  99   0   0|9133B 1260k|   0     0 |   0     5B|1059  1009 \n2   0  98   0   0|   0   212k| 572B 2258B|   0     0 |1099   761 \n2   0  98   0   0|   0     0 | 320B 1456B|   0     0 | 919   674 \n2   0  98   0   0|   0     0 | 256B 1448B|   0     0 | 949   665 \n2   0  98   0   0|   0     0 |1366B 2190B|   0     0 |1031   812\n")),(0,o.kt)("p",null,"Parameter description:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"usr"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running user space processes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sys"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running system processes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"idl"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent idle.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wai"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in wait.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stl"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent on the hypervisor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"read"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of read requests completed per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writ"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of write requests completed per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recv"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of packets received per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"send"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of packets sent per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"in"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of times information is copied into memory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"out"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of times information is moved out of memory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of interruptions occurred per second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"csw"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of context switchover per second.")))))}c.isMDXComponent=!0}}]);