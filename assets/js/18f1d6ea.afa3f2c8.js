"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9423],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"quick-deploy-in-docker",sidebar_position:3.2},c="Quick Deployment in a Docker Container",s={unversionedId:"getting-started/quick-deploy-in-docker",id:"getting-started/quick-deploy-in-docker",title:"Quick Deployment in a Docker Container",description:"Prerequisites",source:"@site/../Docs/02-getting-started/quick-deploy-in-docker.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deploy-in-docker",permalink:"/docs/getting-started/quick-deploy-in-docker",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/02-getting-started/quick-deploy-in-docker.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1659940637,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:3.2,frontMatter:{id:"quick-deploy-in-docker",sidebar_position:3.2},sidebar:"autoSidebar",previous:{title:"Quick Deployment",permalink:"/docs/getting-started/quick-deployment"},next:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"1. Pull the image",id:"1-pull-the-image",level:3},{value:"2. Run the image",id:"2-run-the-image",level:3},{value:"3. Log in to StoneDB in the container",id:"3-log-in-to-stonedb-in-the-container",level:3},{value:"4. Log in to StoneDB using a third-party tool",id:"4-log-in-to-stonedb-using-a-third-party-tool",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-deployment-in-a-docker-container"},"Quick Deployment in a Docker Container"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The image of StoneDB is downloaded from Docker Hub."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/stoneatom/stonedb"},"Docker Hub")),(0,a.kt)("h2",{id:"procedure"},"Procedure"),(0,a.kt)("p",null,"The username and password for login are ",(0,a.kt)("strong",{parentName:"p"},"root")," and ",(0,a.kt)("strong",{parentName:"p"},"stonedb123"),"."),(0,a.kt)("h3",{id:"1-pull-the-image"},"1. Pull the image"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull stoneatom/stonedb:v0.1\n")),(0,a.kt)("h3",{id:"2-run-the-image"},"2. Run the image"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 13306:3306 -v $stonedb_volumn_dir/data/:/stonedb56/install/data/ -it -d stoneatom/stonedb:v0.1 /bin/bash\n")),(0,a.kt)("p",null,"Altenatively, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 13306:3306 -it -d stoneatom/stonedb:v0.1 /bin/bash\n")),(0,a.kt)("p",null,"Parameter description:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-p"),": maps ports in the ",(0,a.kt)("em",{parentName:"li"},"Port of the host"),":",(0,a.kt)("em",{parentName:"li"},"Port of the container")," format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-v"),": mounts directories in the ",(0,a.kt)("em",{parentName:"li"},"Path in the host"),":",(0,a.kt)("em",{parentName:"li"},"Path in the container")," format. If no directories ae mounted, the container will be initialized."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-i"),": the interaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-t"),": the terminal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-d"),": Do not enter the container upon startup. If you want to enter the container upon startup, run the  docker exec command.")),(0,a.kt)("h3",{id:"3-log-in-to-stonedb-in-the-container"},"3. Log in to StoneDB in the container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Obtain the Docker container ID.\ndocker ps\n# Use the "cocker ps" command to obtain the container ID and enter the Docker container.\ndocker exec -it <Container ID> bash\n<Container ID>$ /stonedb56/install/bin/mysql -uroot -pstonedb123\n')),(0,a.kt)("h3",{id:"4-log-in-to-stonedb-using-a-third-party-tool"},"4. Log in to StoneDB using a third-party tool"),(0,a.kt)("p",null,"You can log in to StoneDB by using third-party tools such as mysql, Navicat, and DBeaver. The following code uses mysql as an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h<Host IP address> -uroot -pstonedb123 -P<Mapped port of the host>\n")))}m.isMDXComponent=!0}}]);