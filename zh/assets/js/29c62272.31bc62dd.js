"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[890],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(m,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},45895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"cpu-monitor",sidebar_position:7.22},m="CPU\u76d1\u63a7",c={unversionedId:"performance-tuning/performance-monitoring-commands/cpu-monitor",id:"performance-tuning/performance-monitoring-commands/cpu-monitor",title:"CPU\u76d1\u63a7",description:"vmstat",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/cpu-monitor.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/cpu-monitor",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/cpu-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/cpu-monitor.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1659872679,formattedLastUpdatedAt:"2022/8/7",sidebarPosition:7.22,frontMatter:{id:"cpu-monitor",sidebar_position:7.22},sidebar:"autoSidebar",previous:{title:"TOP\u547d\u4ee4",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/top-commands"},next:{title:"\u5185\u5b58\u76d1\u63a7",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/mem-monitor"}},l={},u=[{value:"vmstat",id:"vmstat",level:2},{value:"perf top",id:"perf-top",level:2}],s={toc:u};function f(e){var t=e.components,p=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cpu\u76d1\u63a7"},"CPU\u76d1\u63a7"),(0,o.kt)("h2",{id:"vmstat"},"vmstat"),(0,o.kt)("p",null,"vmstat\u662fVirtual Memory Statistics\u7684\u7f29\u5199\uff0c\u53ef\u4ee5\u76d1\u63a7\u64cd\u4f5c\u7cfb\u7edf\u7684\u8fdb\u7a0b\u3001\u865a\u62df\u5185\u5b58\u3001\u7cfb\u7edfIO\u3001CPU\u7b49\uff0c\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# vmstat 1 5\nprocs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\nr  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n1  0   3340 1934580 656188 214762784    0    0     0    20    1    0  0  0 100  0  0\n1  0   3340 1934548 656188 214762832    0    0     0     0  854  592  2  0 98  0  0\n1  0   3340 1934548 656188 214762832    0    0     0     0  865  605  2  0 98  0  0\n1  0   3340 1934548 656196 214762832    0    0     0    32  925  634  2  0 98  0  0\n1  0   3340 1934548 656196 214762832    0    0     0     0  844  710  2  0 98  0  0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"r"),"\uff1a\u8fd0\u884c\u961f\u5217\u4e2d\u7684\u8fdb\u7a0b\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"b"),"\uff1a\u7b49\u5f85IO\u7684\u8fdb\u7a0b\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"swpd"),"\uff1a\u4f7f\u7528\u865a\u62df\u5185\u5b58\u5927\u5c0f\uff0c\u5355\u4f4dKB"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"free"),"\uff1a\u7a7a\u95f2\u7684\u5185\u5b58\u5927\u5c0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"buff"),"\uff1a\u7528\u4f5c\u7f13\u51b2\u7684\u5185\u5b58\u5927\u5c0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cache"),"\uff1a\u7528\u4f5c\u7f13\u5b58\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u5982\u679ccache\u7684\u503c\u8d8a\u5927\uff0c\u8bf4\u660ecache\u7684\u6587\u4ef6\u6570\u8d8a\u591a\uff0c\u5982\u679c\u9891\u7e41\u8bbf\u95ee\u5230\u7684\u6587\u4ef6\u90fd\u80fd\u88abcache\uff0c\u90a3\u4e48\u78c1\u76d8\u7684\u8bfbIO bi\u4f1a\u975e\u5e38\u5c0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"si"),"\uff1a\u6bcf\u79d2\u4eceSwap\u5199\u5230\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u7531\u78c1\u76d8\u8c03\u5165\u5185\u5b58"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"so"),"\uff1a\u6bcf\u79d2\u5199\u5165Swap\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u7531\u5185\u5b58\u8c03\u5165\u78c1\u76d8\uff08si\u548cso\u8fd9\u4e24\u4e2a\u53d6\u503c\u8d8a\u5927\uff0c\u8bf4\u660e\u7cfb\u7edf\u5728\u8fdb\u884c\u6362\u9875\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bi"),"\uff1a\u6bcf\u79d2\u8bfb\u5165\u7684\u5757\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bo"),"\uff1a\u6bcf\u79d2\u5199\u5165\u7684\u5757\u6570\uff08bi\u548cbo\u8fd9\u4e24\u4e2a\u53d6\u503c\u8d8a\u5927\uff0c\u8bf4\u660e\u7cfb\u7edf\u7684IO\u8d8a\u7e41\u5fd9\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"in"),"\uff1a\u6bcf\u79d2\u88ab\u4e2d\u65ad\u7684\u6b21\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cs"),"\uff1a\u6bcf\u79d2\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u6b21\u6570\uff08in\u548ccs\u8fd9\u4e24\u4e2a\u53d6\u503c\u8d8a\u5927\uff0c\u8bf4\u660e\u7cfb\u7edf\u4e0e\u63a5\u53e3\u8bbe\u5907\u7684\u901a\u4fe1\u8d8a\u7e41\u5fd9\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"us"),"\uff1a\u7528\u6237\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sy"),"\uff1a\u7cfb\u7edf\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id"),"\uff1a\u7a7a\u95f2CPU\u5360\u7528\u7684\u767e\u5206\u6bd4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"wa"),"\uff1aIO\u7b49\u5f85\u5360\u7528CPU\u7684\u767e\u5206\u6bd4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"st"),"\uff1a\u865a\u62df\u5316\u73af\u5883\u5360\u7528CPU\u7684\u767e\u5206\u6bd4")),(0,o.kt)("h2",{id:"perf-top"},"perf top"),(0,o.kt)("p",null,"perf top\u53ef\u4ee5\u76d1\u63a7\u8fdb\u7a0b\u8c03\u7528\u51fd\u6570\u7684CPU\u4f7f\u7528\u7387\uff0c\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a\n",(0,o.kt)("img",{alt:"image.png",src:n(39410).Z,width:"741",height:"245"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Overhead"),"\uff1aCPU\u4f7f\u7528\u7387"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shared Object"),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u3001\u5185\u6838\u3001\u52a8\u6001\u94fe\u63a5\u5e93\u7b49"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Symbol"),"\uff1a\u901a\u5e38\u662f\u51fd\u6570\u540d")))}f.isMDXComponent=!0},39410:function(e,t,n){t.Z=n.p+"assets/images/perf_top-522bc25951d14d9b344148ddc4730b8d.png"}}]);