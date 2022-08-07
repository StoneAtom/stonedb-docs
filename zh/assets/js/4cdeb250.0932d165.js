"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6243],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return l}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),s=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),d=s(t),l=o,f=d["".concat(p,".").concat(l)]||d[l]||m[l]||a;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function l(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18088:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return l},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"top-commands",sidebar_position:7.21},p="TOP\u547d\u4ee4",s={unversionedId:"performance-tuning/performance-monitoring-commands/top-commands",id:"performance-tuning/performance-monitoring-commands/top-commands",title:"TOP\u547d\u4ee4",description:"top\u547d\u4ee4\u5373\u53ef\u4ee5\u76d1\u63a7\u64cd\u4f5c\u7cfb\u7edfCPU\u3001\u5185\u5b58\u3001Swap\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u4e5f\u53ef\u4ee5\u76d1\u63a7\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u9ed8\u8ba4\u6309\u7167CPU\u7684\u4f7f\u7528\u7387\u6392\u5e8f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/top-commands.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/top-commands",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/top-commands",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/top-commands.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1659872679,formattedLastUpdatedAt:"2022/8/7",sidebarPosition:7.21,frontMatter:{id:"top-commands",sidebar_position:7.21},sidebar:"autoSidebar",previous:{title:"\u6982\u8ff0",permalink:"/zh/docs/performance-tuning/overview"},next:{title:"CPU\u76d1\u63a7",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/cpu-monitor"}},u={},m=[],d={toc:m};function l(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"top\u547d\u4ee4"},"TOP\u547d\u4ee4"),(0,a.kt)("p",null,"top\u547d\u4ee4\u5373\u53ef\u4ee5\u76d1\u63a7\u64cd\u4f5c\u7cfb\u7edfCPU\u3001\u5185\u5b58\u3001Swap\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u4e5f\u53ef\u4ee5\u76d1\u63a7\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u9ed8\u8ba4\u6309\u7167CPU\u7684\u4f7f\u7528\u7387\u6392\u5e8f\u3002\ntop\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"top - 10:12:21 up 5 days, 22:31,  4 users,  load average: 1.00, 1.00, 0.78\nTasks: 731 total,   1 running, 730 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  1.7 us,  0.0 sy,  0.0 ni, 98.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nMiB Mem : 257841.3 total,   1887.5 free,  45581.6 used, 210372.2 buff/cache\nMiB Swap:   8192.0 total,   8188.7 free,      3.3 used. 210450.4 avail Mem \n\nPID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                                                                                                                \n908076 mysql     20   0  193.0g  42.4g  44088 S 100.3  16.8 228:10.34 mysqld                                                                                                                 \n823137 root      20   0 6187564  83772  51636 S   6.6   0.0   6:36.12 dockerd                                                                                                                \n822938 root      20   0 3278696  58500  35420 S   0.7   0.0  38:37.69 containerd                                                                                                             \n1483 root      20   0  239280   9260   8136 S   0.3   0.0   0:19.16 accounts-daemon                                                                                                        \n928343 root      20   0    9936   4576   3240 R   0.3   0.0   0:00.04 top                                                                                                                    \n......\n")),(0,a.kt)("p",null,"\u7b2c\u4e00\u884c\n10:12:21\uff1a\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\nup 5 days\uff1a\u81ea\u4e0a\u4e00\u6b21\u7cfb\u7edf\u542f\u52a8\u540e\u5230\u73b0\u5728\u7684\u8fd0\u884c\u5929\u6570\n4 users\uff1a\u767b\u5f55\u5230\u7cfb\u7edf\u7684\u7528\u6237\u6570\nload average\uff1a\u8fc7\u53bb1\u5206\u949f\u30015\u5206\u949f\u300115\u5206\u949f\uff0c\u7cfb\u7edf\u8d1f\u8f7d\u7684\u5e73\u5747\u503c\n\u7b2c\u4e8c\u884c\ntotal\uff1a\u7cfb\u7edf\u8fdb\u7a0b\u603b\u6570\nrunning\uff1a\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\u7684\u8fdb\u7a0b\u6570\nsleeping\uff1a\u5904\u4e8e\u4f11\u7720\u72b6\u6001\u7684\u8fdb\u7a0b\u6570\nstopped\uff1a\u5904\u4e8e\u88ab\u505c\u6b62\u72b6\u6001\u7684\u8fdb\u7a0b\u6570\nzombie\uff1a\u5904\u4e8e\u50f5\u5c38\u72b6\u6001\u8fdb\u7a0b\u6570\n\u7b2c\u4e09\u884c\nus\uff1a\u7528\u6237\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\nsy\uff1a\u7cfb\u7edf\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\nni\uff1a\u4f18\u5148\u7ea7\u88ab\u6539\u53d8\u8fc7\u7684\u8fdb\u7a0b\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\nid\uff1a\u7a7a\u95f2CPU\u5360\u7528\u7684\u767e\u5206\u6bd4\nwa\uff1aIO\u7b49\u5f85\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\nhi\uff1a\u786c\u4ef6\u4e2d\u65ad\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\nsi\uff1a\u8f6f\u4ef6\u4e2d\u65ad\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\nst\uff1a\u865a\u62df\u5316\u73af\u5883\u5360\u7528CPU\u7684\u767e\u5206\u6bd4\n\u9700\u8981\u91cd\u70b9\u5173\u6ce8CPU\u7684\u4f7f\u7528\u7387\uff0c\u5f53us\u503c\u8f83\u9ad8\u65f6\uff0c\u8bf4\u660e\u7528\u6237\u8fdb\u7a0b\u6d88\u8017CPU\u65f6\u95f4\u8f83\u591a\uff0c\u5982\u679c\u957f\u65f6\u95f4\u8d85\u8fc750%\u65f6\uff0c\u5e94\u5c3d\u5feb\u4f18\u5316\u5e94\u7528\u670d\u52a1\u3002\u5f53sy\u503c\u8f83\u9ad8\u65f6\uff0c\u8bf4\u660e\u7cfb\u7edf\u8fdb\u7a0b\u6d88\u8017CPU\u65f6\u95f4\u8f83\u591a\uff0c\u6bd4\u5982\u53ef\u80fd\u662f\u64cd\u4f5c\u7cfb\u7edf\u914d\u7f6e\u4e0d\u5408\u7406\u6216\u8005\u51fa\u73b0\u64cd\u4f5c\u7cfb\u7edf\u7684Bug\u3002\u5f53wa\u503c\u8f83\u9ad8\u65f6\uff0c\u8bf4\u660e\u7cfb\u7edfIO\u7b49\u5f85\u6bd4\u8f83\u4e25\u91cd\uff0c\u6bd4\u5982\u53ef\u80fd\u662f\u53d1\u751f\u4e86\u5927\u91cf\u7684\u968f\u673aIO\u8bbf\u95ee\uff0cIO\u5e26\u5bbd\u51fa\u73b0\u74f6\u9888\u3002\n\u7b2c\u56db\u884c\ntotal\uff1a\u7269\u7406\u5185\u5b58\u603b\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3aM\nfree\uff1a\u7a7a\u95f2\u7684\u5185\u5b58\u5927\u5c0f\nused\uff1a\u5df2\u4f7f\u7528\u7684\u5185\u5b58\u5927\u5c0f\nbuff/cache\uff1a\u5df2\u7f13\u5b58\u7684\u5185\u5b58\u5927\u5c0f\n\u7b2c\u4e94\u884c\ntotal\uff1aSwap\u5927\u5c0f\nfree\uff1a\u7a7a\u95f2\u7684Swap\u5927\u5c0f\nused\uff1a\u5df2\u4f7f\u7528\u7684Swap\u5927\u5c0f\navail Mem\uff1a\u5df2\u7f13\u5b58\u7684Swap\u5927\u5c0f\n\u8fdb\u7a0b\u5217\u8868\nPID\uff1a\u8fdb\u7a0b\u7684id\nUSER\uff1a\u8fdb\u7a0b\u7684\u62e5\u6709\u8005\nPR\uff1a\u8fdb\u7a0b\u7684\u4f18\u5148\u7ea7\uff0c\u503c\u8d8a\u5c0f\u8d8a\u4f18\u5148\u6267\u884c\nNI\uff1a\u8fdb\u7a0bnice\u503c\uff0c\u6b63\u503c\u8868\u793a\u964d\u4f4e\u8fdb\u7a0b\u4f18\u5148\u7ea7\uff0c\u8d1f\u503c\u8868\u793a\u63d0\u9ad8\u8fdb\u7a0b\u4f18\u5148\u7ea7\uff0cnice\u53d6\u503c\u8303\u56f4\u4e3a(-20,19)\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fdb\u7a0b\u7684nice\u503c\u4e3a0\nVIRT\uff1a\u8fdb\u7a0b\u5360\u7528\u7684\u865a\u62df\u5185\u5b58\u5927\u5c0f\nRES\uff1a\u8fdb\u7a0b\u5360\u7528\u7684\u7269\u7406\u5185\u5b58\u5927\u5c0f\nSHR\uff1a\u8fdb\u7a0b\u5360\u7528\u7684\u5171\u4eab\u5185\u5b58\u5927\u5c0f\nS\uff1a\u8fdb\u7a0b\u72b6\u6001\uff0c\u5176\u4e2dS\u8868\u793a\u4f11\u7720\uff0cR\u8868\u793a\u6b63\u5728\u8fd0\u884c\uff0cZ\u8868\u793a\u50f5\u6b7b\u72b6\u6001\uff0cN\u8868\u793a\u8be5\u8fdb\u7a0b\u4f18\u5148\u503c\u4e3a\u8d1f\u6570\n%CPU\uff1a\u8fdb\u7a0bCPU\u4f7f\u7528\u7387\n%MEM\uff1a\u8fdb\u7a0b\u5185\u5b58\u4f7f\u7528\u7387\nTIME+\uff1a\u8fdb\u7a0b\u542f\u52a8\u540e\u5360\u7528CPU\u7684\u603b\u65f6\u95f4\uff0c\u5373\u5360\u7528CPU\u4f7f\u7528\u65f6\u95f4\u7684\u7d2f\u52a0\u503c\nCOMMAND\uff1a\u8fdb\u7a0b\u542f\u52a8\u547d\u4ee4\u540d\u79f0"))}l.isMDXComponent=!0}}]);