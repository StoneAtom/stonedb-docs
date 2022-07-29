"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4594],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,d=l["".concat(u,".").concat(m)]||l[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},93728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"overview",sidebar_position:7.1},u="\u6982\u8ff0",p={unversionedId:"performance-tuning/overview",id:"performance-tuning/overview",title:"\u6982\u8ff0",description:"\u4e3a\u4ec0\u4e48\u8981\u505a\u4f18\u5316\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/overview.md",sourceDirName:"06-performance-tuning",slug:"/performance-tuning/overview",permalink:"/zh/docs/performance-tuning/overview",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/overview.md",tags:[],version:"current",lastUpdatedBy:"hustjieke",lastUpdatedAt:1659083464,formattedLastUpdatedAt:"2022/7/29",sidebarPosition:7.1,frontMatter:{id:"overview",sidebar_position:7.1},sidebar:"autoSidebar",previous:{title:"\u805a\u5408\u51fd\u6570",permalink:"/zh/docs/SQL-reference/functions/aggregate-functions"},next:{title:"TOP\u547d\u4ee4",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/top-commands"}},s={},f=[],l={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8981\u505a\u4f18\u5316\uff1f"),"\n\u5f53\u4e1a\u52a1\u5e76\u53d1\u91cf\u8d8a\u6765\u8d8a\u9ad8\uff0c\u6570\u636e\u91cf\u8d8a\u6765\u8d8a\u5927\u65f6\uff0c\u7cfb\u7edf\u4e5f\u4f1a\u53d8\u7684\u8d8a\u6765\u8d8a\u6162\u3002\u5982\u679c\u4e0d\u4e3b\u52a8\u5bf9\u7cfb\u7edf\u505a\u4f18\u5316\uff0c\u4e25\u91cd\u7684\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u5b95\u673a\uff0c\u7cfb\u7edf\u65e0\u6cd5\u63d0\u4f9b\u5bf9\u5916\u670d\u52a1\uff0c\u8fd9\u7ed9\u4f01\u4e1a\u5e26\u6765\u7684\u635f\u5931\u662f\u65e0\u6cd5\u9884\u4f30\u7684\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u5728\u54ea\u4e9b\u65b9\u9762\u505a\u4f18\u5316\uff1f"),"\n\u4e00\u822c\u662f\u5728\u7cfb\u7edf\u67b6\u6784\u3001\u5e94\u7528\u67b6\u6784\u3001\u786c\u4ef6\u914d\u7f6e\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u6570\u636e\u5e93\u65b9\u9762\u505a\u4f18\u5316\u3002\u5176\u4e2d\u7cfb\u7edf\u67b6\u6784\u3001\u5e94\u7528\u67b6\u6784\u3001\u786c\u4ef6\u914d\u7f6e\u7684\u4f18\u5316\u5de5\u4f5c\u5e94\u8be5\u5728\u7cfb\u7edf\u4e0a\u7ebf\u524d\u5b8c\u6210\uff0c\u540e\u671f\u968f\u7740\u4e1a\u52a1\u7684\u6269\u5c55\u4e5f\u4f1a\u505a\u76f8\u5e94\u7684\u4f18\u5316\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u5982\u4f55\u505a\u4f18\u5316\uff1f"),"\n\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316\u901a\u5e38\u662f\u8ba9\u7cfb\u7edf\u8d44\u6e90\uff0c\u5982CPU\u3001\u5185\u5b58\u3001IO\u548c\u7f51\u7edc\u5f97\u5230\u5145\u5206\u7684\u5229\u7528\uff0c\u907f\u514d\u7cfb\u7edf\u8d44\u6e90\u51fa\u73b0\u74f6\u9888\u548c\u51b2\u7a81\uff0c\u63d0\u9ad8\u6574\u4e2a\u7cfb\u7edf\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4\u7684\u541e\u5410\u91cf\u3002\n\u6570\u636e\u5e93\u4f18\u5316\u901a\u5e38\u662f\u6570\u636e\u5e93\u53c2\u6570\u4f18\u5316\u548cSQL\u4f18\u5316\uff0c\u5176\u4e2dSQL\u4f18\u5316\u5360\u636e\u4e8690%\u4ee5\u4e0a\u7684\u5de5\u4f5c\u3002\u8981\u6c42\u6df1\u523b\u7406\u89e3SQL\u7684\u6267\u884c\u8fc7\u7a0b\u548c\u8bfb\u61c2\u5206\u6790SQL\u7684\u6267\u884c\u8ba1\u5212\uff0c\u6700\u7ec8\u5b9a\u4f4d\u5230\u6839\u56e0\u5e76\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002"))}m.isMDXComponent=!0}}]);