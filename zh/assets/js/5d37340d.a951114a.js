"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[169],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?l.createElement(k,o(o({ref:n},c),{},{components:t})):l.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},44226:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var l=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],i={id:"sql-best-practices",sidebar_position:7.41},s="SQL\u7f16\u5199\u89c4\u8303",u={unversionedId:"performance-tuning/database-tuning/sql-best-practices",id:"performance-tuning/database-tuning/sql-best-practices",title:"SQL\u7f16\u5199\u89c4\u8303",description:"\u4e00\u3001\u8868\u8bbe\u8ba1\u89c4\u8303",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/04-database-tuning/sql-best-practices.md",sourceDirName:"06-performance-tuning/04-database-tuning",slug:"/performance-tuning/database-tuning/sql-best-practices",permalink:"/zh/docs/performance-tuning/database-tuning/sql-best-practices",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/04-database-tuning/sql-best-practices.md",tags:[],version:"current",lastUpdatedBy:"xiaoguangye",lastUpdatedAt:1660115193,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:7.41,frontMatter:{id:"sql-best-practices",sidebar_position:7.41},sidebar:"autoSidebar",previous:{title:"\u64cd\u4f5c\u7cfb\u7edf\u4f18\u5316",permalink:"/zh/docs/performance-tuning/os-tuning"},next:{title:"SQL\u4f18\u5316",permalink:"/zh/docs/performance-tuning/database-tuning/sql-tuning"}},c={},d=[{value:"\u4e00\u3001\u8868\u8bbe\u8ba1\u89c4\u8303",id:"\u4e00\u8868\u8bbe\u8ba1\u89c4\u8303",level:2},{value:"\u4e8c\u3001SQL\u7f16\u5199\u89c4\u8303",id:"\u4e8csql\u7f16\u5199\u89c4\u8303",level:2},{value:"2.1 \u907f\u514d<code>select *</code>",id:"21-\u907f\u514dselect-",level:3},{value:"2.2 \u907f\u514d\u5728<code>where</code>\u5b50\u53e5\u4e2d\u4f7f\u7528<code>or</code>",id:"22-\u907f\u514d\u5728where\u5b50\u53e5\u4e2d\u4f7f\u7528or",level:3},{value:"2.3 \u907f\u514d\u5bf9\u7d22\u5f15\u5217\u8fd0\u7b97",id:"23-\u907f\u514d\u5bf9\u7d22\u5f15\u5217\u8fd0\u7b97",level:3},{value:"2.4 \u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528\u51fd\u6570",id:"24-\u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528\u51fd\u6570",level:3},{value:"2.5 \u907f\u514d\u51fa\u73b0\u7d22\u5f15\u5217\u81ea\u52a8\u8f6c\u6362",id:"25-\u907f\u514d\u51fa\u73b0\u7d22\u5f15\u5217\u81ea\u52a8\u8f6c\u6362",level:3},{value:"2.6 \u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528<code>NOT</code>\u3001<code>&lt;&gt;</code>",id:"26-\u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528not",level:3},{value:"2.7 \u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528<code>IS NOT NULL</code>",id:"27-\u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528is-not-null",level:3},{value:"2.8 \u5c3d\u91cf\u5c11\u7528\u524d\u7f6e\u901a\u914d\u7b26",id:"28-\u5c3d\u91cf\u5c11\u7528\u524d\u7f6e\u901a\u914d\u7b26",level:3},{value:"2.9 \u5927\u8868\u5220\u9664\uff0c\u4e14\u6ca1\u6709where\u6761\u4ef6\u65f6\uff0c\u7528truncate\u4ee3\u66ffdelete",id:"29-\u5927\u8868\u5220\u9664\u4e14\u6ca1\u6709where\u6761\u4ef6\u65f6\u7528truncate\u4ee3\u66ffdelete",level:3},{value:"2.10 \u5927\u6570\u636e\u91cf\u5220\u9664/\u66f4\u65b0\uff0c\u8003\u8651\u5206\u6279\u64cd\u4f5c",id:"210-\u5927\u6570\u636e\u91cf\u5220\u9664\u66f4\u65b0\u8003\u8651\u5206\u6279\u64cd\u4f5c",level:3},{value:"2.11 \u5927\u6570\u636e\u91cf\u63d2\u5165\uff0c\u8003\u8651\u6279\u91cf\u63d2\u5165",id:"211-\u5927\u6570\u636e\u91cf\u63d2\u5165\u8003\u8651\u6279\u91cf\u63d2\u5165",level:3},{value:"2.12 \u4e8b\u52a1\u5c3d\u65e9commit",id:"212-\u4e8b\u52a1\u5c3d\u65e9commit",level:3},{value:"2.13 \u5c3d\u91cf\u5c11\u7528having\u8fc7\u6ee4\u6570\u636e",id:"213-\u5c3d\u91cf\u5c11\u7528having\u8fc7\u6ee4\u6570\u636e",level:3},{value:"2.14 \u614e\u7528\u81ea\u5b9a\u4e49\u51fd\u6570",id:"214-\u614e\u7528\u81ea\u5b9a\u4e49\u51fd\u6570",level:3},{value:"2.15 \u614e\u7528\u6807\u91cf\u5b50\u67e5\u8be2",id:"215-\u614e\u7528\u6807\u91cf\u5b50\u67e5\u8be2",level:3},{value:"2.16 \u6392\u5e8f\u5b57\u6bb5\u987a\u5e8f\u6700\u597d\u4fdd\u6301\u4e00\u81f4",id:"216-\u6392\u5e8f\u5b57\u6bb5\u987a\u5e8f\u6700\u597d\u4fdd\u6301\u4e00\u81f4",level:3},{value:"2.17 \u8868\u8fde\u63a5\u5c3d\u91cf\u5c11",id:"217-\u8868\u8fde\u63a5\u5c3d\u91cf\u5c11",level:3},{value:"2.18 \u5d4c\u5957\u5c42\u6b21\u5c3d\u91cf\u5c11",id:"218-\u5d4c\u5957\u5c42\u6b21\u5c3d\u91cf\u5c11",level:3},{value:"2.19 \u907f\u514d\u51fa\u73b0\u7b1b\u5361\u5c14\u79ef\u5173\u8054",id:"219-\u907f\u514d\u51fa\u73b0\u7b1b\u5361\u5c14\u79ef\u5173\u8054",level:3},{value:"2.20 limit\u5206\u9875\u7684\u504f\u79fb\u91cf\u4e0d\u5b9c\u8fc7\u5927",id:"220-limit\u5206\u9875\u7684\u504f\u79fb\u91cf\u4e0d\u5b9c\u8fc7\u5927",level:3},{value:"2.21 \u4f7f\u7528left join\uff0c\u5e94\u786e\u4fdd\u5de6\u8fb9\u8868\u7ed3\u679c\u96c6\u5c3d\u91cf\u5c0f",id:"221-\u4f7f\u7528left-join\u5e94\u786e\u4fdd\u5de6\u8fb9\u8868\u7ed3\u679c\u96c6\u5c3d\u91cf\u5c0f",level:3},{value:"2.22 \u5408\u7406\u5229\u7528exists&amp;in",id:"222-\u5408\u7406\u5229\u7528existsin",level:3},{value:"2.23 \u8981\u5206\u6e05union all\u4e0eunion\u7684\u533a\u522b",id:"223-\u8981\u5206\u6e05union-all\u4e0eunion\u7684\u533a\u522b",level:3},{value:"2.24 \u8981\u5206\u6e05left join\u4e0einner join\u7684\u533a\u522b",id:"224-\u8981\u5206\u6e05left-join\u4e0einner-join\u7684\u533a\u522b",level:3},{value:"2.25 \u8981\u5206\u6e05left join\u4e2don...and\u4e0eon...where\u7684\u533a\u522b",id:"225-\u8981\u5206\u6e05left-join\u4e2donand\u4e0eonwhere\u7684\u533a\u522b",level:3},{value:"2.26 \u8981\u5206\u6e05inner join\u4e2don...and\u4e0eon...where\u7684\u533a\u522b",id:"226-\u8981\u5206\u6e05inner-join\u4e2donand\u4e0eonwhere\u7684\u533a\u522b",level:3},{value:"2.27 \u4e0d\u5fc5\u8981\u7684\u6392\u5e8f",id:"227-\u4e0d\u5fc5\u8981\u7684\u6392\u5e8f",level:3},{value:"2.28 \u4e0d\u5fc5\u8981\u7684\u5d4c\u5957",id:"228-\u4e0d\u5fc5\u8981\u7684\u5d4c\u5957",level:3},{value:"2.29 \u5199\u5b8cSQL\u8981explain SQL",id:"229-\u5199\u5b8csql\u8981explain-sql",level:3}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql\u7f16\u5199\u89c4\u8303"},"SQL\u7f16\u5199\u89c4\u8303"),(0,r.kt)("h2",{id:"\u4e00\u8868\u8bbe\u8ba1\u89c4\u8303"},"\u4e00\u3001\u8868\u8bbe\u8ba1\u89c4\u8303"),(0,r.kt)("p",null,"1\uff09StoneDB\u7684\u8868\u65e0\u9700\u521b\u5efa\u7d22\u5f15\uff0c\u4f46\u4e3b\u952e\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u552f\u4e00\u786e\u5b9a\u4e00\u6761\u8bb0\u5f55\u7684\u4f9d\u636e\uff0c\u5efa\u8bae\u7ed9\u8868\u5b9a\u4e49\u4e3b\u952e\u3002\n2\uff09\u4f7f\u7528\u81ea\u589e\u7c7b\u578b\u4e3b\u952e\uff0c\u4e25\u7981\u4f7f\u7528uuid\u7c7b\u578b\u4e3b\u952e\uff0c\u81ea\u589e\u4e3b\u952e\u80fd\u6709\u6548\u63d0\u9ad8\u63d2\u5165\u7684\u6027\u80fd\uff0c\u907f\u514d\u8fc7\u591a\u7684\u6570\u636e\u9875\u5206\u88c2\u548c\u788e\u7247\u7684\u589e\u52a0\uff0c\u63d0\u9ad8\u4e86\u7a7a\u95f4\u7684\u4f7f\u7528\u7387\uff0c\u800cuuid\u7c7b\u578b\u4e3b\u952e\u4e0d\u4ec5\u65e0\u5e8f\uff0c\u800c\u4e14\u5360\u7528\u7a7a\u95f4\u66f4\u5927\u3002\n3\uff09\u4e25\u7981\u4f7f\u7528\u5916\u952e\u7ea6\u675f\uff0c\u6709\u5916\u952e\u7684\u8868\u5728\u6bcf\u6b21\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u540e\uff0c\u9700\u8981\u8fdb\u884c\u5b8c\u6574\u6027\u7684\u68c0\u67e5\uff0c\u989d\u5916\u7684\u68c0\u67e5\u5de5\u4f5c\u5bf9\u6027\u80fd\u6765\u8bf4\u662f\u6709\u635f\u7684\u3002\n4\uff09\u5b9a\u957f\u5b57\u7b26\u578b\u5b57\u6bb5\u4f7f\u7528CHAR\u7c7b\u578b\uff0c\u4e0d\u5b9a\u957f\u5b57\u7b26\u578b\u5b57\u6bb5\u4f7f\u7528VARCHAR\u7c7b\u578b\u3002\n5\uff09\u5408\u7406\u5b9a\u4e49\u5b57\u6bb5\u957f\u5ea6\uff0c\u82e5\u5b9e\u9645\u5b58\u50a8\u957f\u5ea6\u4e0e\u5b9a\u4e49\u957f\u5ea6\u5dee\u5f02\u8fc7\u5927\uff0c\u4e0d\u4ec5\u5360\u7528\u7a7a\u95f4\uff0c\u800c\u4e14\u5f71\u54cd\u8bbf\u95ee\u6548\u7387\u3002\n6\uff09\u5b57\u6bb5\u5c3d\u91cf\u5b9a\u4e49\u4e3aNOT NULL\uff0c\u5e76\u4e14\u63d0\u4f9b\u9ed8\u8ba4\u503c\u3002\n7\uff09\u8868\u4e2d\u5e94\u5305\u542b\u65f6\u95f4\u6233\u7684\u5b57\u6bb5\uff0c\u65f6\u95f4\u6233\u662f\u83b7\u53d6\u589e\u91cf\u6570\u636e\u7684\u4e00\u79cd\u65b9\u6cd5\uff0c\u53ef\u9884\u4f30\u4e00\u4e2a\u65f6\u95f4\u8303\u56f4\u5185\u7684\u884c\u6570\uff0c\u4e5f\u53ef\u66f4\u65b9\u4fbf\u7684\u8fdb\u884c\u6570\u636e\u6e05\u7406\u548c\u5f52\u6863\u3002\n8\uff09\u5b57\u6bb5\u5c3d\u91cf\u4e0d\u4f7f\u7528\u5927\u5bf9\u8c61\u7c7b\u578b\uff0c\u5982\u679c\u67e5\u8be2\u51fa\u73b0\u5927\u5bf9\u8c61\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u5c31\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u7f51\u7edc\u548cIO\u5e26\u5bbd\uff0c\u5982\u6709\u9700\u8981\uff0c\u53ef\u8003\u8651\u5728\u5916\u90e8\u8fdb\u884c\u5b58\u50a8\u3002\n9\uff09\u65e0\u8bba\u662f\u8868\u540d\u8fd8\u662f\u5b57\u6bb5\u540d\uff0c\u90fd\u4e0d\u80fd\u4f7f\u7528\u6570\u636e\u5e93\u7684\u5173\u952e\u5b57\uff0c\u5982desc\u3001order\u3001group\u3001distinct\u7b49\u3002\n10\uff09\u65e0\u8bba\u662f\u8868\u8fd8\u662f\u5b57\u6bb5\uff0c\u5b57\u7b26\u96c6\u5efa\u8bae\u4e00\u81f4\u3002\n11\uff09\u65e0\u8bba\u662f\u8868\u8fd8\u662f\u5b57\u6bb5\uff0c\u6709\u5fc5\u8981\u52a0\u5165\u6ce8\u91ca\uff0c\u6709\u6ce8\u91ca\u66f4\u6613\u4e8e\u7ef4\u62a4\u548c\u6613\u8bfb\u3002"),(0,r.kt)("h2",{id:"\u4e8csql\u7f16\u5199\u89c4\u8303"},"\u4e8c\u3001SQL\u7f16\u5199\u89c4\u8303"),(0,r.kt)("h3",{id:"21-\u907f\u514dselect-"},"2.1 \u907f\u514d",(0,r.kt)("inlineCode",{parentName:"h3"},"select *")),(0,r.kt)("p",null,"\u67e5\u8be2\u5c3d\u91cf\u7528\u786e\u5b9a\u7684\u5b57\u6bb5\u540d\uff0c\u4e0d\u56e0\u56fe\u65b9\u4fbf\u7528",(0,r.kt)("em",{parentName:"p"},"\u6765\u4ee3\u66ff\uff0c\u7406\u7531\uff1a\n1\uff09\u5c06\u4e0d\u9700\u8981\u7684\u5b57\u6bb5\u4ece\u670d\u52a1\u7aef\u4f20\u8f93\u5230\u5ba2\u6237\u7aef\uff0c\u989d\u5916\u589e\u52a0\u4e86\u7f51\u7edc\u5f00\u9500\uff1b\n2\uff09\u5f71\u54cdSQL\u7684\u6267\u884c\u8ba1\u5212\uff0c\u4f8b\u5982\uff1a\u7528select "),"\u8fdb\u884c\u67e5\u8be2\u65f6\uff0c\u5f88\u53ef\u80fd\u4e0d\u4f1a\u4f7f\u7528\u5230\u8986\u76d6\u7d22\u5f15\uff0c\u5c31\u4f1a\u9020\u6210\u56de\u8868\u67e5\u8be2\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name from test;\n")),(0,r.kt)("h3",{id:"22-\u907f\u514d\u5728where\u5b50\u53e5\u4e2d\u4f7f\u7528or"},"2.2 \u907f\u514d\u5728",(0,r.kt)("inlineCode",{parentName:"h3"},"where"),"\u5b50\u53e5\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"or")),(0,r.kt)("p",null,"\u591a\u4e2a\u5b57\u6bb5\u8fdb\u884cor\u67e5\u8be2\u65f6\uff0c\u5efa\u8bae\u7528union all\u8054\u7ed3\uff0c\u5206\u6210\u591a\u6b21\u67e5\u8be2\u3002\n\u7406\u7531\uff1a\u4f7f\u7528or\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id='40' or user_id='uOrzp9ojhfgqcwRCiume';\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id='40'\nunion all\nselect * from test where user_id='uOrzp9ojhfgqcwRCiume';\n")),(0,r.kt)("h3",{id:"23-\u907f\u514d\u5bf9\u7d22\u5f15\u5217\u8fd0\u7b97"},"2.3 \u907f\u514d\u5bf9\u7d22\u5f15\u5217\u8fd0\u7b97"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5bf9\u7d22\u5f15\u5217\u8fdb\u884c\u8fd0\u7b97\u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where id-1=99;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where id=100;\n")),(0,r.kt)("h3",{id:"24-\u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528\u51fd\u6570"},"2.4 \u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528\u51fd\u6570"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528\u51fd\u6570\u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where date_add(create_time,interval 10 minute)=now();\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where create_time=date_add(now(),interval - 10 minute);\n")),(0,r.kt)("h3",{id:"25-\u907f\u514d\u51fa\u73b0\u7d22\u5f15\u5217\u81ea\u52a8\u8f6c\u6362"},"2.5 \u907f\u514d\u51fa\u73b0\u7d22\u5f15\u5217\u81ea\u52a8\u8f6c\u6362"),(0,r.kt)("p",null,"\u5982\u679c\u5b57\u6bb5\u7684\u6570\u636e\u7c7b\u578b\u662f\u5b57\u7b26\u4e32\uff0c\u4ee3\u5165\u53d8\u91cf\u4e00\u5b9a\u8981\u7528\u5f15\u53f7\u62ec\u8d77\u6765\u3002\n\u7406\u7531\uff1a\u5bf9\u7d22\u5f15\u5217\u8fdb\u884c\u8f6c\u6362\u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id=40;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id='40';\n")),(0,r.kt)("h3",{id:"26-\u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528not"},"2.6 \u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"NOT"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h3"},"<>")),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"),(0,r.kt)("h3",{id:"27-\u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528is-not-null"},"2.7 \u907f\u514d\u5728\u7d22\u5f15\u5217\u4e0a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"IS NOT NULL")),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"),(0,r.kt)("h3",{id:"28-\u5c3d\u91cf\u5c11\u7528\u524d\u7f6e\u901a\u914d\u7b26"},"2.8 \u5c3d\u91cf\u5c11\u7528\u524d\u7f6e\u901a\u914d\u7b26"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"),(0,r.kt)("h3",{id:"29-\u5927\u8868\u5220\u9664\u4e14\u6ca1\u6709where\u6761\u4ef6\u65f6\u7528truncate\u4ee3\u66ffdelete"},"2.9 \u5927\u8868\u5220\u9664\uff0c\u4e14\u6ca1\u6709where\u6761\u4ef6\u65f6\uff0c\u7528truncate\u4ee3\u66ffdelete"),(0,r.kt)("p",null,"\u7406\u7531\uff1atruncate\u5c5e\u4e8eddl\u64cd\u4f5c\uff0c\u4e0d\u4ec5\u65f6\u95f4\u5feb\uff0c\u800c\u4e14\u4f1a\u91ca\u653e\u7a7a\u95f4\u3002"),(0,r.kt)("h3",{id:"210-\u5927\u6570\u636e\u91cf\u5220\u9664\u66f4\u65b0\u8003\u8651\u5206\u6279\u64cd\u4f5c"},"2.10 \u5927\u6570\u636e\u91cf\u5220\u9664/\u66f4\u65b0\uff0c\u8003\u8651\u5206\u6279\u64cd\u4f5c"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5927\u4e8b\u52a1\u7b80\u5316\u6210\u591a\u4e2a\u5c0f\u4e8b\u52a1\uff0c\u6bcf\u4e2a\u5c0f\u4e8b\u52a1\u7684\u52a0\u9501\u8303\u56f4\u5c0f\uff0c\u6301\u9501\u65f6\u95f4\u77ed\uff0c\u80fd\u964d\u4f4e\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"211-\u5927\u6570\u636e\u91cf\u63d2\u5165\u8003\u8651\u6279\u91cf\u63d2\u5165"},"2.11 \u5927\u6570\u636e\u91cf\u63d2\u5165\uff0c\u8003\u8651\u6279\u91cf\u63d2\u5165"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u6279\u91cf\u63d2\u5165\u80fd\u51cf\u5c11commit\u6b21\u6570\uff0c\u63d0\u5347\u4e86\u6027\u80fd\u3002"),(0,r.kt)("h3",{id:"212-\u4e8b\u52a1\u5c3d\u65e9commit"},"2.12 \u4e8b\u52a1\u5c3d\u65e9commit"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u51cf\u5c11\u52a0\u9501\u65f6\u95f4\u3002"),(0,r.kt)("h3",{id:"213-\u5c3d\u91cf\u5c11\u7528having\u8fc7\u6ee4\u6570\u636e"},"2.13 \u5c3d\u91cf\u5c11\u7528having\u8fc7\u6ee4\u6570\u636e"),(0,r.kt)("p",null,"\u7406\u7531\uff1ahaving\u4f1a\u5728\u6700\u540e\u4e00\u6b65\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u8fc7\u6ee4\uff0c\u8fd9\u4e2a\u5904\u7406\u9700\u8981\u6392\u5e8f\u3001\u6c47\u603b\u7b49\u64cd\u4f5c\uff0c\u5982\u679c\u80fd\u901a\u8fc7where\u8fc7\u6ee4\u5c31\u4e0d\u7528having\u8fc7\u6ee4\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select job,avg(salary) from test group by job having job = 'managent';\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select job,avg(salary) from test where job = 'managent' group by job;\n")),(0,r.kt)("h3",{id:"214-\u614e\u7528\u81ea\u5b9a\u4e49\u51fd\u6570"},"2.14 \u614e\u7528\u81ea\u5b9a\u4e49\u51fd\u6570"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5982\u679cSQL\u8bed\u53e5\u4e2d\u8c03\u7528\u51fd\u6570\uff0c\u5219\u8fd4\u56de\u591a\u5c11\u7ed3\u679c\u96c6\uff0c\u51fd\u6570\u5c31\u4f1a\u88ab\u8c03\u7528\u591a\u5c11\u6b21\u3002"),(0,r.kt)("h3",{id:"215-\u614e\u7528\u6807\u91cf\u5b50\u67e5\u8be2"},"2.15 \u614e\u7528\u6807\u91cf\u5b50\u67e5\u8be2"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u4e3b\u67e5\u8be2\u8fd4\u56de\u591a\u5c11\u884c\uff0c\u6807\u91cf\u5b50\u67e5\u8be2\u5c31\u9700\u8981\u6267\u884c\u591a\u5c11\u6b21\uff0c\u5982\u679c\u4e3b\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u5f88\u5927\uff0cSQL\u7684\u6027\u80fd\u5c31\u4f1a\u5f88\u5dee\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select e.empno, e.ename, e.sal,e.deptno,\n(select d.dname from dept d where d.deptno = e.deptno) as dname\nfrom emp e;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select e.empno, e.ename, e.sal, e.deptno, d.dname\nfrom emp e\nleft join dept d\non e.deptno = d.deptno;\n")),(0,r.kt)("h3",{id:"216-\u6392\u5e8f\u5b57\u6bb5\u987a\u5e8f\u6700\u597d\u4fdd\u6301\u4e00\u81f4"},"2.16 \u6392\u5e8f\u5b57\u6bb5\u987a\u5e8f\u6700\u597d\u4fdd\u6301\u4e00\u81f4"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u6392\u5e8f\u4fdd\u6301\u4e00\u81f4\uff0c\u80fd\u5145\u5206\u5229\u7528\u7d22\u5f15\u7684\u6709\u5e8f\u6027\u6765\u6d88\u9664\u6392\u5e8f\u5e26\u6765\u7684CPU\u5f00\u9500\u3002\n\u4f8b\u5982\uff1a\u7ec4\u5408\u7d22\u5f15(a,b)\uff0c\u5728\u53cd\u4f8b\u4e2d\uff0c\u7531\u4e8e\u5b57\u6bb5a\u8981\u5347\u5e8f\uff0c\u5b57\u6bb5b\u8981\u964d\u5e8f\uff0c\u4f18\u5316\u5668\u5c31\u4e0d\u80fd\u9009\u62e9\u7d22\u5f15\u6765\u6d88\u9664\u6392\u5e8f\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select a,b from test order by a,b desc;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select a,b from test order by a,b;\nselect a,b from test order by a desc,b desc;\n")),(0,r.kt)("h3",{id:"217-\u8868\u8fde\u63a5\u5c3d\u91cf\u5c11"},"2.17 \u8868\u8fde\u63a5\u5c3d\u91cf\u5c11"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u8868\u8fde\u63a5\u8d8a\u591a\uff0c\u7f16\u8bd1\u7684\u65f6\u95f4\u548c\u5f00\u9500\u4e5f\u5c31\u8d8a\u5927\uff0c\u800c\u4e14\u4f18\u5316\u5668\u5bb9\u6613\u9009\u9519\u6267\u884c\u8ba1\u5212\u3002"),(0,r.kt)("h3",{id:"218-\u5d4c\u5957\u5c42\u6b21\u5c3d\u91cf\u5c11"},"2.18 \u5d4c\u5957\u5c42\u6b21\u5c3d\u91cf\u5c11"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5bb9\u6613\u4ea7\u751f\u4e34\u65f6\u8868\u548c\u8f83\u5dee\u7684\u6267\u884c\u8ba1\u5212\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t1 a where a.proj_no in\n(select b.proj_no from t2 b where b.proj_name = 'xxx' \nand not exists\n(select 1 from t3 c where c.mess_id = b.t_project_id))\nand a.oper_type <> 'D';\n")),(0,r.kt)("h3",{id:"219-\u907f\u514d\u51fa\u73b0\u7b1b\u5361\u5c14\u79ef\u5173\u8054"},"2.19 \u907f\u514d\u51fa\u73b0\u7b1b\u5361\u5c14\u79ef\u5173\u8054"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u5982\u679c\u4e24\u8868\u8fdb\u884c\u5173\u8054\uff0c\u4e14\u6ca1\u6709\u5173\u8054\u6761\u4ef6\uff0c\u5c31\u4f1a\u53d1\u751f\u7b1b\u5361\u5c14\u79ef\u5173\u8054\uff0c\u5982\u679c\u4e24\u8868\u7684\u6570\u636e\u91cf\u90fd\u5f88\u5927\uff0c\u8fd9\u79cd\u8fde\u63a5\u662f\u6781\u5176\u6d88\u8017CPU\u548c\u5185\u5b58\u7684\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a,b;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a,b where a.id=b.id;\n")),(0,r.kt)("h3",{id:"220-limit\u5206\u9875\u7684\u504f\u79fb\u91cf\u4e0d\u5b9c\u8fc7\u5927"},"2.20 limit\u5206\u9875\u7684\u504f\u79fb\u91cf\u4e0d\u5b9c\u8fc7\u5927"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u7531\u4e8e\u5148\u83b7\u53d6\u7684\u662f\u504f\u79fb\u91cf\u7684\u6570\u636e\uff0c\u7136\u540e\u83b7\u53d6\u5206\u9875\u7684\u6570\u636e\uff0c\u6700\u540e\u518d\u628a\u504f\u79fb\u91cf\u8fd9\u4e00\u6bb5\u7684\u6570\u636e\u629b\u5f03\u8fd4\u56de\u5206\u9875\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5f53\u504f\u79fb\u91cf\u5f88\u5927\u65f6\uff0cSQL\u7684\u6027\u80fd\u5c31\u4f1a\u5f88\u5dee\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name from test limit 10000,10;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name from test where id>10000 limit 10;\n")),(0,r.kt)("h3",{id:"221-\u4f7f\u7528left-join\u5e94\u786e\u4fdd\u5de6\u8fb9\u8868\u7ed3\u679c\u96c6\u5c3d\u91cf\u5c0f"},"2.21 \u4f7f\u7528left join\uff0c\u5e94\u786e\u4fdd\u5de6\u8fb9\u8868\u7ed3\u679c\u96c6\u5c3d\u91cf\u5c0f"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u4f7f\u7528left join\u8fde\u63a5\u65f6\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u5de6\u8fb9\u7684\u8868\u5c31\u662f\u9a71\u52a8\u8868\uff0c\u9a71\u52a8\u8868\u8fd4\u56de\u591a\u5c11\u7ed3\u679c\u96c6\uff0c\u88ab\u9a71\u52a8\u8868\u5c31\u8981\u6267\u884c\u591a\u5c11\u6b21\uff0c\u5982\u679c\u5de6\u8fb9\u7684\u8868\u7684\u7ed3\u679c\u96c6\u5f88\u5927\uff0c\u90a3\u4e48\u88ab\u9a71\u52a8\u8868\u5c31\u8981\u6267\u884c\u5f88\u591a\u6b21\uff0c\u6027\u80fd\u5c31\u4f1a\u5f88\u5dee\u3002"),(0,r.kt)("h3",{id:"222-\u5408\u7406\u5229\u7528existsin"},"2.22 \u5408\u7406\u5229\u7528exists&in"),(0,r.kt)("p",null,"\u7406\u7531\uff1aexists\u4e0ein\uff0c\u8c01\u7684\u5199\u6cd5\u66f4\u9ad8\u6548\uff0c\u53d6\u51b3\u4e8e\u5916\u5c42\u67e5\u8be2\u548c\u5185\u5c42\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u5927\u5c0f\uff0c\u5982\u679c\u5916\u5c42\u67e5\u8be2\u7ed3\u679c\u96c6\u5927\u4e8e\u5185\u5c42\u67e5\u8be2\u7ed3\u679c\u96c6\uff0c\u90a3\u4e48in\u4f18\u4e8eexists\uff0c\u53cd\u4e4b\uff0cexists\u4f18\u4e8ein\u3002"),(0,r.kt)("h3",{id:"223-\u8981\u5206\u6e05union-all\u4e0eunion\u7684\u533a\u522b"},"2.23 \u8981\u5206\u6e05union all\u4e0eunion\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u533a\u522b\uff1aunion all\u8fd4\u56de\u7684\u662f\u4e24\u4e2a\u7ed3\u679c\u96c6\u7684\u96c6\u5408\uff0c\u800cunion\u4f1a\u5728\u4e24\u4e2a\u7ed3\u679c\u96c6\u7684\u96c6\u5408\u4e0a\u505a\u6392\u5e8f\u53bb\u91cd\u64cd\u4f5c\uff0c\u6700\u7ec8\u8fd4\u56de\u7684\u662f\u6392\u5e8f\u53bb\u91cd\u7684\u7ed3\u679c\u96c6\uff0c\u5982\u679c\u80fd\u7528union all\u5c31\u4e0d\u7528union\uff0c\u56e0\u4e3a\u5148\u6392\u5e8f\u518d\u53bb\u91cd\u662f\u4e2a\u6d88\u8017\u8d44\u6e90\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"224-\u8981\u5206\u6e05left-join\u4e0einner-join\u7684\u533a\u522b"},"2.24 \u8981\u5206\u6e05left join\u4e0einner join\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u533a\u522b\uff1aleft join\u8fd4\u56de\u7684\u662f\u5de6\u8868\u6240\u6709\u884c\uff0c\u53f3\u8868\u4e0d\u5339\u914d\u7684\u884c\u7528null\u6765\u586b\u5145\uff0cinner join\u8fd4\u56de\u7684\u662f\u4e24\u8868\u5b8c\u5168\u5339\u914d\u7684\u884c\u3002"),(0,r.kt)("h3",{id:"225-\u8981\u5206\u6e05left-join\u4e2donand\u4e0eonwhere\u7684\u533a\u522b"},"2.25 \u8981\u5206\u6e05left join\u4e2don...and\u4e0eon...where\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u533a\u522b\uff1a\n1\uff09on...and\u6ca1\u6709\u8d77\u5230\u8fc7\u6ee4\u4f5c\u7528\uff0c\u4e0d\u5339\u914d\u7684\u884c\u8fd8\u662f\u7528null\u6765\u586b\u5145\uff0con...where\u6709\u8fc7\u6ee4\u4f5c\u7528\uff1b\n2\uff09left\u53f3\u8fb9\u7684\u8868\u8c13\u8bcd\u6761\u4ef6\u4e0d\u7ba1\u653e\u5728on\u8fd8\u662fwhere\u540e\u9762\uff0c\u90fd\u4f1a\u5bf9\u53f3\u8868\u5148\u8fc7\u6ee4\u518d\u8fde\u63a5\uff0c\u4f46\u662f\u653e\u5728where\u540eleft join\u4f1a\u8f6c\u6362\u4e3ainner join\u3002"),(0,r.kt)("h3",{id:"226-\u8981\u5206\u6e05inner-join\u4e2donand\u4e0eonwhere\u7684\u533a\u522b"},"2.26 \u8981\u5206\u6e05inner join\u4e2don...and\u4e0eon...where\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u533a\u522b\uff1aon...and\u4e0eon...where\u662f\u7b49\u4ef7\u7684\uff0c\u90fd\u6709\u8fc7\u6ee4\u4f5c\u7528\u3002"),(0,r.kt)("h3",{id:"227-\u4e0d\u5fc5\u8981\u7684\u6392\u5e8f"},"2.27 \u4e0d\u5fc5\u8981\u7684\u6392\u5e8f"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u7528\u4e8e\u7edf\u8ba1\u6761\u6570\uff0c\u90a3\u4e48\u6392\u5e8f\u5c31\u662f\u591a\u6b64\u4e00\u4e3e\u7684\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) as totalCount from \n(select * from enquiry e where 1 = 1\nAND status = 'closed'\nAND is_show = 1\norder by id desc, expire_date asc) _xx;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from enquiry e where 1 = 1\nAND status = 'closed'\nAND is_show = 1;\n")),(0,r.kt)("h3",{id:"228-\u4e0d\u5fc5\u8981\u7684\u5d4c\u5957"},"2.28 \u4e0d\u5fc5\u8981\u7684\u5d4c\u5957"),(0,r.kt)("p",null,"\u7406\u7531\uff1a\u80fd\u7528\u4e00\u6761select\u5c31\u6ee1\u8db3\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u907f\u514d\u4e86\u5916\u5c42\u7684\u5d4c\u5957select\u67e5\u8be2\u3002\n\u53cd\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) as totalCount from \n(select * from enquiry e where 1 = 1 \nAND status = 'closed'\nAND is_show = 1\norder by id desc, expire_date asc) _xx;\n")),(0,r.kt)("p",null,"\u6b63\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from enquiry e where 1 = 1\nAND status = 'closed'\nAND is_show = 1;\n")),(0,r.kt)("h3",{id:"229-\u5199\u5b8csql\u8981explain-sql"},"2.29 \u5199\u5b8cSQL\u8981explain SQL"),(0,r.kt)("p",null,"\u7f16\u5199\u5b8cSQL\u540e\uff0c\u9700\u8981\u67e5\u770b\u8fd9\u6761SQL\u7684\u6267\u884c\u8ba1\u5212\uff0c\u9700\u8981\u5173\u6ce8\u6267\u884c\u8ba1\u5212\u4e2d\u7684type\u3001rows\u3001extra\u3002"))}m.isMDXComponent=!0}}]);