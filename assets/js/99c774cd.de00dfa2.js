"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[8708],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),l=a,d=m["".concat(u,".").concat(l)]||m[l]||f[l]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"performance-tuning-overview",sidebar_position:7.1},u="Overview",s={unversionedId:"performance-tuning/performance-tuning-overview",id:"performance-tuning/performance-tuning-overview",title:"Overview",description:"As the concurrency and data volume of a database keep increasing, the database performance decreases. If the performance is not tuned in time, the database may break down. This may cause catastrophic losses.",source:"@site/../Docs/06-performance-tuning/overview.md",sourceDirName:"06-performance-tuning",slug:"/performance-tuning/performance-tuning-overview",permalink:"/docs/performance-tuning/performance-tuning-overview",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/06-performance-tuning/overview.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:7.1,frontMatter:{id:"performance-tuning-overview",sidebar_position:7.1},sidebar:"autoSidebar",previous:{title:"Aggregate Functions",permalink:"/docs/SQL-reference/functions/aggregate-functions"},next:{title:"The top command",permalink:"/docs/performance-tuning/performance-monitoring-commands/top-commands"}},p={},f=[],m={toc:f};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"As the concurrency and data volume of a database keep increasing, the database performance decreases. If the performance is not tuned in time, the database may break down. This may cause catastrophic losses."),(0,o.kt)("p",null,"Database performance can be tuned in terms of system architecture, application architecture, hardware configuration, OS, and database itself. The system architecture, application architecture, and hardware configuration should be tuned before the database rollout and further optimized during the database running."),(0,o.kt)("p",null,"This guide aims to help you tune the performance of your StoneDB from the following aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Common commands used for performance monitoring"),(0,o.kt)("li",{parentName:"ul"},"OS performance tuning"),(0,o.kt)("li",{parentName:"ul"},"Database performance tuning"),(0,o.kt)("li",{parentName:"ul"},"Architecture optimization"),(0,o.kt)("li",{parentName:"ul"},"Performance testing")))}l.isMDXComponent=!0}}]);