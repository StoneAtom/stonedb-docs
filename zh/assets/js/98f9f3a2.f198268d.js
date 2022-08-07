"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[8405],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),m=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87577:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"disk-io-monitor",sidebar_position:7.24},s="\u78c1\u76d8IO\u76d1\u63a7",m={unversionedId:"performance-tuning/performance-monitoring-commands/disk-io-monitor",id:"performance-tuning/performance-monitoring-commands/disk-io-monitor",title:"\u78c1\u76d8IO\u76d1\u63a7",description:"iostat",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/disk-io-monitor.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/disk-io-monitor",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/disk-io-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/disk-io-monitor.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1659874260,formattedLastUpdatedAt:"2022/8/7",sidebarPosition:7.24,frontMatter:{id:"disk-io-monitor",sidebar_position:7.24},sidebar:"autoSidebar",previous:{title:"\u5185\u5b58\u76d1\u63a7",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/mem-monitor"},next:{title:"\u7f51\u7edc\u76d1\u63a7",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/network-monitor"}},p={},u=[{value:"iostat",id:"iostat",level:2},{value:"dstat",id:"dstat",level:2}],c={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u78c1\u76d8io\u76d1\u63a7"},"\u78c1\u76d8IO\u76d1\u63a7"),(0,i.kt)("h2",{id:"iostat"},"iostat"),(0,i.kt)("p",null,"iostat\u547d\u4ee4\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# iostat -x 1 1\nLinux 3.10.0-957.el7.x86_64 (htap2)     06/13/2022      _x86_64_        (64 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n0.06    0.00    0.03    0.01    0.00   99.90\n\nDevice:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util\nsda               0.00     0.00    0.00    0.00     0.04     0.00    85.75     0.00    0.25    0.25    0.00   0.15   0.00\nsdb               0.06     0.11    7.61    1.10  1849.41    50.81   436.48     0.36   40.93   46.75    0.48   1.56   1.35\ndm-0              0.00     0.00    0.28    0.19     8.25    12.05    87.01     0.00    4.81    7.37    0.94   1.61   0.08\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rrqm/s"),": \u6bcf\u79d2\u8fdb\u884cIO\u5408\u5e76\u7684\u8bfb\u64cd\u4f5c\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"wrqm/s"),": \u6bcf\u79d2\u8fdb\u884cIO\u5408\u5e76\u7684\u5199\u64cd\u4f5c\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"r/s"),"\uff1a\u6bcf\u79d2\u8bfbIO\u6b21\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"w/s"),"\uff1a\u6bcf\u79d2\u5199IO\u6b21\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rkB/s"),"\uff1a\u6bcf\u79d2\u8bfbK\u5b57\u8282\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"wkB/s"),"\uff1a\u6bcf\u79d2\u5199K\u5b57\u8282\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"avgrq-sz"),"\uff1a\u5e73\u5747\u6bcf\u6b21IO\u8bf7\u6c42\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u6247\u533a\uff08512B\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"avgqu-sz"),"\uff1a\u5e73\u5747IO\u961f\u5217\u957f\u5ea6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"await"),"\uff1a\u5e73\u5747IO\u7b49\u5f85\u7684\u54cd\u5e94\u65f6\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"r_await"),"\uff1a\u6bcf\u6b21\u8bfb\u64cd\u4f5cIO\u54cd\u5e94\u65f6\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"w_await"),"\uff1a\u6bcf\u6b21\u5199\u64cd\u4f5cIO\u54cd\u5e94\u65f6\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"svctm"),"\uff1a\u5e73\u5747IO\u670d\u52a1\u7684\u54cd\u5e94\u65f6\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"%util"),"\uff1aIO\u8bf7\u6c42\u7684\u767e\u5206\u6bd4\uff08CPU\u4f7f\u7528\u7387\uff09")),(0,i.kt)("h2",{id:"dstat"},"dstat"),(0,i.kt)("p",null,"dstat\u547d\u4ee4\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# dstat 1 5\n--total-cpu-usage-- -dsk/total- -net/total- ---paging-- ---system--\nusr sys idl wai stl| read  writ| recv  send|  in   out | int   csw \n0   0  99   0   0|9133B 1260k|   0     0 |   0     5B|1059  1009 \n2   0  98   0   0|   0   212k| 572B 2258B|   0     0 |1099   761 \n2   0  98   0   0|   0     0 | 320B 1456B|   0     0 | 919   674 \n2   0  98   0   0|   0     0 | 256B 1448B|   0     0 | 949   665 \n2   0  98   0   0|   0     0 |1366B 2190B|   0     0 |1031   812\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"usr"),"\uff1a\u7528\u6237\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sys"),"\uff1a\u7cfb\u7edf\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"idl"),"\uff1a\u7a7a\u95f2CPU\u5360\u7528\u7684\u767e\u5206\u6bd4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"wai"),"\uff1aIO\u7b49\u5f85\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stl"),"\uff1a\u865a\u62df\u5316\u73af\u5883\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"read"),"\uff1a\u6bcf\u79d2\u8bfbIO\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"writ"),"\uff1a\u6bcf\u79d2\u5199IO\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"recv"),"\uff1a\u6bcf\u79d2\u7f51\u7edc\u63a5\u6536\u5305\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"send"),"\uff1a\u6bcf\u79d2\u7f51\u7edc\u53d1\u9001\u5305\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"in"),"\uff1a\u6bcf\u79d2\u6362\u9875\u6570\uff08\u6362\u8fdb\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"out"),"\uff1a\u6bcf\u79d2\u6362\u9875\u6570\uff08\u6362\u51fa\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"int"),"\uff1a\u6bcf\u79d2\u88ab\u4e2d\u65ad\u7684\u6b21\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"csw"),"\uff1a\u6bcf\u79d2\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u6b21\u6570")))}d.isMDXComponent=!0}}]);