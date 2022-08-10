"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1926],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var i=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},l=Object.keys(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=i.createContext({}),a=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=a(n.components);return i.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,l=n.originalType,s=n.parentName,u=b(n,["components","mdxType","originalType","parentName"]),d=a(t),f=o,p=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return t?i.createElement(p,r(r({ref:e},u),{},{components:t})):i.createElement(p,r({ref:e},u))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=t.length,r=new Array(l);r[0]=d;var b={};for(var s in e)hasOwnProperty.call(e,s)&&(b[s]=e[s]);b.originalType=n,b.mdxType="string"==typeof n?n:o,r[1]=b;for(var a=2;a<l;a++)r[a]=t[a];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26437:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return b},metadata:function(){return a},toc:function(){return c}});var i=t(87462),o=t(63366),l=(t(67294),t(3905)),r=["components"],b={id:"install-faq",sidebar_position:10.1},s="Installation FAQ",a={unversionedId:"FAQ/install-faq",id:"FAQ/install-faq",title:"Installation FAQ",description:"What do I do if I want to run StoneDB on a KVM?",source:"@site/../Docs/09-FAQ/install-faq.md",sourceDirName:"09-FAQ",slug:"/FAQ/install-faq",permalink:"/docs/FAQ/install-faq",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/09-FAQ/install-faq.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1660115193,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:10.1,frontMatter:{id:"install-faq",sidebar_position:10.1},sidebar:"autoSidebar",previous:{title:"Diagnose System Resource Bottlenecks",permalink:"/docs/troubleshooting/resource-bottleneck"},next:{title:"StoneDB FAQ",permalink:"/docs/FAQ/stonedb-faq"}},u={},c=[{value:"<strong>What do I do if I want to run StoneDB on a KVM?</strong>",id:"what-do-i-do-if-i-want-to-run-stonedb-on-a-kvm",level:2},{value:"<strong>What dependencies are required for StoneDB installation?</strong>",id:"what-dependencies-are-required-for-stonedb-installation",level:2}],d={toc:c};function f(n){var e=n.components,t=(0,o.Z)(n,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation-faq"},"Installation FAQ"),(0,l.kt)("h2",{id:"what-do-i-do-if-i-want-to-run-stonedb-on-a-kvm"},(0,l.kt)("strong",{parentName:"h2"},"What do I do if I want to run StoneDB on a KVM?")),(0,l.kt)("p",null,"If your development or test environment is deployed on a Kernel-based Virtual Machine (KVM), the AVX instruction set must be enabled. Otherwise, StoneDB cannot be installed."),(0,l.kt)("p",null,"You can run the following command to check whether the AVX instruction set is enabled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat /proc/cpuinfo | grep avx\n")),(0,l.kt)("p",null,"If the command output is empty, the AVX instruction set is disabled."),(0,l.kt)("h2",{id:"what-dependencies-are-required-for-stonedb-installation"},(0,l.kt)("strong",{parentName:"h2"},"What dependencies are required for StoneDB installation?")),(0,l.kt)("p",null,"The required dependencies vary with the OS used in the environment. You can run the following command to check the dependencies after decompressing the installation package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# cd /stonedb/install/bin\n# ldd mysqld\n\nlinux-vdso.so.1 (0x00007ffd968d0000)\nlibpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007fb4bc0ad000)\nlibrt.so.1 => /lib/x86_64-linux-gnu/librt.so.1 (0x00007fb4bc0a3000)\nlibssl.so.10 => /lib/libssl.so.10 (0x00007fb4bbe31000)\nlibcrypto.so.10 => /lib/libcrypto.so.10 (0x00007fb4bb9ce000)\nlibdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007fb4bb9c8000)\nlibncurses.so.5 => not found\nlibtinfo.so.5 => not found\nlibstdc++.so.6 => /lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007fb4bb7e4000)\nlibm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007fb4bb695000)\nlibgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007fb4bb67a000)\nlibc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fb4bb488000)\n/lib64/ld-linux-x86-64.so.2 (0x00007fb4bc0da000)\nlibgssapi_krb5.so.2 => /lib/x86_64-linux-gnu/libgssapi_krb5.so.2 (0x00007fb4bb43b000)\nlibkrb5.so.3 => /lib/x86_64-linux-gnu/libkrb5.so.3 (0x00007fb4bb35c000)\nlibcom_err.so.2 => /lib/x86_64-linux-gnu/libcom_err.so.2 (0x00007fb4bb355000)\nlibk5crypto.so.3 => /lib/x86_64-linux-gnu/libk5crypto.so.3 (0x00007fb4bb324000)\nlibz.so.1 => /lib/x86_64-linux-gnu/libz.so.1 (0x00007fb4bb308000)\nlibkrb5support.so.0 => /lib/x86_64-linux-gnu/libkrb5support.so.0 (0x00007fb4bb2f9000)\nlibkeyutils.so.1 => /lib/x86_64-linux-gnu/libkeyutils.so.1 (0x00007fb4bb2f0000)\nlibresolv.so.2 => /lib/x86_64-linux-gnu/libresolv.so.2 (0x00007fb4bb2d4000)\n# ldd mysql\nlinux-vdso.so.1 (0x00007ffd968d0000)\nlibpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007fb4bc0ad000)\nlibrt.so.1 => /lib/x86_64-linux-gnu/librt.so.1 (0x00007fb4bc0a3000)\nlibssl.so.10 => /lib/libssl.so.10 (0x00007fb4bbe31000)\nlibcrypto.so.10 => /lib/libcrypto.so.10 (0x00007fb4bb9ce000)\nlibdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007fb4bb9c8000)\nlibncurses.so.5 => not found\nlibtinfo.so.5 => not found\nlibstdc++.so.6 => /lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007fb4bb7e4000)\nlibm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007fb4bb695000)\nlibgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007fb4bb67a000)\nlibc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fb4bb488000)\n/lib64/ld-linux-x86-64.so.2 (0x00007fb4bc0da000)\nlibgssapi_krb5.so.2 => /lib/x86_64-linux-gnu/libgssapi_krb5.so.2 (0x00007fb4bb43b000)\nlibkrb5.so.3 => /lib/x86_64-linux-gnu/libkrb5.so.3 (0x00007fb4bb35c000)\nlibcom_err.so.2 => /lib/x86_64-linux-gnu/libcom_err.so.2 (0x00007fb4bb355000)\nlibk5crypto.so.3 => /lib/x86_64-linux-gnu/libk5crypto.so.3 (0x00007fb4bb324000)\nlibz.so.1 => /lib/x86_64-linux-gnu/libz.so.1 (0x00007fb4bb308000)\nlibkrb5support.so.0 => /lib/x86_64-linux-gnu/libkrb5support.so.0 (0x00007fb4bb2f9000)\nlibkeyutils.so.1 => /lib/x86_64-linux-gnu/libkeyutils.so.1 (0x00007fb4bb2f0000)\nlibresolv.so.2 => /lib/x86_64-linux-gnu/libresolv.so.2 (0x00007fb4bb2d4000)\n")),(0,l.kt)("p",null,"If the command output contains ",(0,l.kt)("strong",{parentName:"p"},"not found"),", some dependencies are missing and need to be installed."))}f.isMDXComponent=!0}}]);