"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1935],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"os-tuning",sidebar_position:7.3},l="OS Tuning",u={unversionedId:"performance-tuning/os-tuning",id:"performance-tuning/os-tuning",title:"OS Tuning",description:"This topic describes how to tune a Linux OS. Methods to tune other types of OSs are currently not provided. The commands used in the following example suits only to CentOS 7.x.",source:"@site/../Docs/06-performance-tuning/os-tuning.md",sourceDirName:"06-performance-tuning",slug:"/performance-tuning/os-tuning",permalink:"/docs/performance-tuning/os-tuning",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/06-performance-tuning/os-tuning.md",tags:[],version:"current",lastUpdatedBy:"hustjieke",lastUpdatedAt:1659083464,formattedLastUpdatedAt:"7/29/2022",sidebarPosition:7.3,frontMatter:{id:"os-tuning",sidebar_position:7.3},sidebar:"autoSidebar",previous:{title:"Command for Network Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/network-monitor"},next:{title:"Best Practices for SQL Coding",permalink:"/docs/performance-tuning/database-tuning/sql-best-practices"}},c={},p=[{value:"<strong>Disable SELinux and the firewall</strong>",id:"disable-selinux-and-the-firewall",level:2},{value:"<strong>Change the I/O scheduling mode</strong>",id:"change-the-io-scheduling-mode",level:2},{value:"<strong>Do use swap space unless necessary</strong>",id:"do-use-swap-space-unless-necessary",level:2},{value:"<strong>Disable NUMA</strong>",id:"disable-numa",level:2},{value:"<strong>Disable transparent hugepages</strong>",id:"disable-transparent-hugepages",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"os-tuning"},"OS Tuning"),(0,s.kt)("p",null,"This topic describes how to tune a Linux OS. Methods to tune other types of OSs are currently not provided. The commands used in the following example suits only to CentOS 7.",(0,s.kt)("em",{parentName:"p"},"x"),"."),(0,s.kt)("h2",{id:"disable-selinux-and-the-firewall"},(0,s.kt)("strong",{parentName:"h2"},"Disable SELinux and the firewall")),(0,s.kt)("p",null,"We recommend that you disable SELinux and the firewall to allow access from certain services."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld \nsystemctl disable firewalld\nvi /etc/selinux/config\n# Modify the value of SELINUX.\nSELINUX = disabled\n")),(0,s.kt)("h2",{id:"change-the-io-scheduling-mode"},(0,s.kt)("strong",{parentName:"h2"},"Change the I/O scheduling mode")),(0,s.kt)("p",null,"If your disks are hard disk drives (HDDs), change the mode to ",(0,s.kt)("strong",{parentName:"p"},"Deadline")," to improve throughput. If your disks are solid-state drive (SSDs), change the mode to ",(0,s.kt)("strong",{parentName:"p"},"noop"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'dmesg | grep -i scheduler\ngrubby --update-kernel=ALL --args="elevator=noop"\n')),(0,s.kt)("h2",{id:"do-use-swap-space-unless-necessary"},(0,s.kt)("strong",{parentName:"h2"},"Do use swap space unless necessary")),(0,s.kt)("p",null,"If your memory is insufficient, we recommend that you do not use swap space as buffer. This is because the OS will suffer from severe performance problems if the swap space is used. For this reason, set ",(0,s.kt)("strong",{parentName:"p"},"vm.swappiness")," to the smallest value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sysctl.conf\n# Add parameter setting vm.swappiness = 0\nvm.swappiness = 0\n")),(0,s.kt)("h2",{id:"disable-numa"},(0,s.kt)("strong",{parentName:"h2"},"Disable NUMA")),(0,s.kt)("p",null,"If the memory allocated to non-uniform memory access (NUMA) nodes in a zone is exhausted, the OS will reclaim memory even though the free memory in total is sufficient. This has certain impacts on the OS. We recommend that you disable NUMA to allocate and use memory more efficiently."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'grubby --update-kernel=ALL --args="numa=off"\n')),(0,s.kt)("h2",{id:"disable-transparent-hugepages"},(0,s.kt)("strong",{parentName:"h2"},"Disable transparent hugepages")),(0,s.kt)("p",null,"Transparent hugepages are dynamically allocated. Databases use sparse memory access. If the system contains a large number of memory fragments, dynamic allocation of transparent hugepages will suffer from high latency and CPU bursts will occur. For this reason, we recommend you to disable transparent hugepages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cat /sys/kernel/mm/transparent_hugepage/enabled\nvi /etc/default/grub\nGRUB_CMDLINE_LINUX="xxx transparent_hugepage=never"\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n')))}m.isMDXComponent=!0}}]);