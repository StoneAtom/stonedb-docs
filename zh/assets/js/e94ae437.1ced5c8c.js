"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[3914],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15605:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],u={id:"os-tuning",sidebar_position:7.3},l="\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316",s={unversionedId:"performance-tuning/os-tuning",id:"performance-tuning/os-tuning",title:"\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316",description:"\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316\u4ec5\u5305\u542bLinux\uff0c\u793a\u4f8b\u547d\u4ee4\u4ec5\u9002\u7528\u4e8e CentOS 7.x\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/os-tuning.md",sourceDirName:"06-performance-tuning",slug:"/performance-tuning/os-tuning",permalink:"/zh/docs/performance-tuning/os-tuning",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/os-tuning.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1659930328,formattedLastUpdatedAt:"2022/8/8",sidebarPosition:7.3,frontMatter:{id:"os-tuning",sidebar_position:7.3},sidebar:"autoSidebar",previous:{title:"\u7f51\u7edc\u76d1\u63a7",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/network-monitor"},next:{title:"SQL\u7f16\u5199\u89c4\u8303",permalink:"/zh/docs/performance-tuning/database-tuning/sql-best-practices"}},c={},p=[{value:"\u5173\u95edSElinux\u548c\u9632\u706b\u5899",id:"\u5173\u95edselinux\u548c\u9632\u706b\u5899",level:2},{value:"I/O\u8c03\u5ea6\u6a21\u5f0f",id:"io\u8c03\u5ea6\u6a21\u5f0f",level:2},{value:"\u5c3d\u91cf\u4e0d\u4f7f\u7528swap",id:"\u5c3d\u91cf\u4e0d\u4f7f\u7528swap",level:2},{value:"\u5173\u95edNUMA",id:"\u5173\u95ednuma",level:2},{value:"\u5173\u95ed\u900f\u660e\u5927\u9875",id:"\u5173\u95ed\u900f\u660e\u5927\u9875",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316"},"\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316"),(0,o.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316\u4ec5\u5305\u542bLinux\uff0c\u793a\u4f8b\u547d\u4ee4\u4ec5\u9002\u7528\u4e8e CentOS 7.x\u3002"),(0,o.kt)("h2",{id:"\u5173\u95edselinux\u548c\u9632\u706b\u5899"},"\u5173\u95edSElinux\u548c\u9632\u706b\u5899"),(0,o.kt)("p",null,"\u5173\u95edSElinux\u548c\u9632\u706b\u5899\u7684\u76ee\u7684\u662f\u6253\u5f00\u90e8\u5206\u7f51\u7edc\u901a\u4fe1\uff0c\u4f7f\u5f97\u4e00\u4e9b\u670d\u52a1\u7aef\u53e3\u9ed8\u8ba4\u662f\u5f00\u542f\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld \nsystemctl disable firewalld\nvi /etc/selinux/config\n#\u4fee\u6539SELINUX\u7684\u503c\nSELINUX = disabled\n")),(0,o.kt)("h2",{id:"io\u8c03\u5ea6\u6a21\u5f0f"},"I/O\u8c03\u5ea6\u6a21\u5f0f"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u673a\u68b0\u76d8\uff0c\u8c03\u6574\u4e3aDeadline\uff0c\u76ee\u7684\u662f\u63d0\u9ad8I/O\u541e\u5410\u91cf\uff0c\u5982\u679c\u662f\u56fa\u6001\u76d8\uff0c\u8c03\u6574\u4e3anoop\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'dmesg | grep -i scheduler\ngrubby --update-kernel=ALL --args="elevator=noop"\n')),(0,o.kt)("h2",{id:"\u5c3d\u91cf\u4e0d\u4f7f\u7528swap"},"\u5c3d\u91cf\u4e0d\u4f7f\u7528swap"),(0,o.kt)("p",null,"\u5982\u679c\u7269\u7406\u5185\u5b58\u4e0d\u8db3\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528swap\u4f5c\u4e3a\u7f13\u51b2\u533a\uff0c\u56e0\u4e3a\u5f53swap\u88ab\u4f7f\u7528\uff0c\u8bf4\u660e\u64cd\u4f5c\u7cfb\u7edf\u5df2\u7ecf\u51fa\u73b0\u4e86\u4e25\u91cd\u7684\u6027\u80fd\u95ee\u9898\uff0c\u5c06\u53c2\u6570vm.swappiness\u8c03\u6574\u6700\u5c0f\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sysctl.conf\n#\u65b0\u589evm.swappiness = 0\nvm.swappiness = 0\n")),(0,o.kt)("h2",{id:"\u5173\u95ednuma"},"\u5173\u95edNUMA"),(0,o.kt)("p",null,"\u5982\u679cNUMA node\u7269\u7406\u5185\u5b58\u4f7f\u7528\u4e0d\u5747\u8861\uff0c\u5373\u4f7f\u7269\u7406\u5185\u5b58\u603b\u7684\u7a7a\u95f2\u91cf\u8fd8\u5f88\u591a\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u8981\u505a\u5185\u5b58\u56de\u6536\uff0c\u56de\u6536\u7684\u8fc7\u7a0b\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u662f\u6709\u5f71\u54cd\u7684\u3002\u5173\u95edNUMA\u4e3b\u8981\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u5206\u914d\u548c\u4f7f\u7528\u5185\u5b58\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'grubby --update-kernel=ALL --args="numa=off"\n')),(0,o.kt)("h2",{id:"\u5173\u95ed\u900f\u660e\u5927\u9875"},"\u5173\u95ed\u900f\u660e\u5927\u9875"),(0,o.kt)("p",null,"\u900f\u660e\u5927\u9875\u662f\u52a8\u6001\u5206\u914d\u7684\uff0c\u800c\u6570\u636e\u5e93\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\u662f\u7a00\u758f\u7684\uff0c\u5e76\u4e0d\u662f\u8fde\u7eed\u3002\u5f53\u5185\u5b58\u788e\u7247\u5316\u6bd4\u8f83\u4e25\u91cd\u65f6\uff0c\u52a8\u6001\u5206\u914d\u900f\u660e\u5927\u9875\u4f1a\u51fa\u73b0\u8f83\u5927\u7684\u5ef6\u8fdf\uff0cCPU\u4f7f\u7528\u7387\u4f1a\u51fa\u73b0\u95f4\u63a5\u6027\u6fc0\u589e\u7684\u73b0\u8c61\uff0c\u56e0\u6b64\u5efa\u8bae\u5173\u95ed\u900f\u660e\u5927\u9875\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat /sys/kernel/mm/transparent_hugepage/enabled\nvi /etc/default/grub\nGRUB_CMDLINE_LINUX="xxx transparent_hugepage=never"\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n')))}f.isMDXComponent=!0}}]);