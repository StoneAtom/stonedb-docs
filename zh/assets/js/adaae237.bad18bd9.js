"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1444],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)t=l[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)t=l[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=s.createContext({}),c=function(e){var n=s.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return s.createElement(r.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(r,".").concat(m)]||p[m]||d[m]||l;return t?s.createElement(g,o(o({ref:n},u),{},{components:t})):s.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var r in n)hasOwnProperty.call(n,r)&&(i[r]=n[r]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},70054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var s=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={id:"compile-using-ubuntu20.04",sidebar_position:5.14},r="Ubuntu 20.04 \u4e0b\u7f16\u8bd1StoneDB",c={unversionedId:"developer-guide/compiling-methods/compile-using-ubuntu20.04",id:"developer-guide/compiling-methods/compile-using-ubuntu20.04",title:"Ubuntu 20.04 \u4e0b\u7f16\u8bd1StoneDB",description:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5gcc 7.3.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-ubuntu20.04",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",tags:[],version:"current",lastUpdatedBy:"Ma Jun",lastUpdatedAt:1658641969,formattedLastUpdatedAt:"2022/7/24",sidebarPosition:5.14,frontMatter:{id:"compile-using-ubuntu20.04",sidebar_position:5.14},sidebar:"autoSidebar",previous:{title:"RedHat 7 \u4e0b\u7f16\u8bd1StoneDB",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-redhat7"},next:{title:"Docker \u7f16\u8bd1\u73af\u5883\u642d\u5efa\u548c\u4f7f\u7528",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-docker"}},u={},d=[{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5gcc 7.3.0",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5gcc-730",level:2},{value:"1. \u5b89\u88c5\u4f9d\u8d56\u5305",id:"1-\u5b89\u88c5\u4f9d\u8d56\u5305",level:3},{value:"2. \u89e3\u538bgcc 7.3.0\u6e90\u7801\u5305",id:"2-\u89e3\u538bgcc-730\u6e90\u7801\u5305",level:3},{value:"3. \u7f16\u8bd1\u524d\u51c6\u5907\u5de5\u4f5c",id:"3-\u7f16\u8bd1\u524d\u51c6\u5907\u5de5\u4f5c",level:3},{value:"4. \u7f16\u8bd1",id:"4-\u7f16\u8bd1",level:3},{value:"5. \u68c0\u67e5\u7248\u672c",id:"5-\u68c0\u67e5\u7248\u672c",level:3},{value:"6. \u5220\u9664\u9ad8\u7248\u672cgcc\u3001g++",id:"6-\u5220\u9664\u9ad8\u7248\u672cgccg",level:3},{value:"\u4e0b\u8f7d\u6e90\u7801\u5305",id:"\u4e0b\u8f7d\u6e90\u7801\u5305",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",id:"\u7b2c\u4e8c\u6b65\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"1. \u5b89\u88c5 cmake",id:"1-\u5b89\u88c5-cmake",level:3},{value:"2. \u5b89\u88c5 marisa",id:"2-\u5b89\u88c5-marisa",level:3},{value:"3. \u5b89\u88c5 rocksdb",id:"3-\u5b89\u88c5-rocksdb",level:3},{value:"4. \u5b89\u88c5 boost",id:"4-\u5b89\u88c5-boost",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u6267\u884c\u7f16\u8bd1",id:"\u7b2c\u4e09\u6b65\u6267\u884c\u7f16\u8bd1",level:2},{value:"\u7b2c\u56db\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b",id:"\u7b2c\u56db\u6b65\u542f\u52a8\u5b9e\u4f8b",level:2},{value:"1. \u521b\u5efa\u7528\u6237",id:"1-\u521b\u5efa\u7528\u6237",level:3},{value:"2. \u6267\u884c\u811a\u672creinstall.sh",id:"2-\u6267\u884c\u811a\u672creinstallsh",level:3},{value:"3. \u6267\u884c\u767b\u5f55",id:"3-\u6267\u884c\u767b\u5f55",level:3}],p={toc:d};function m(e){var n=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,s.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ubuntu-2004-\u4e0b\u7f16\u8bd1stonedb"},"Ubuntu 20.04 \u4e0b\u7f16\u8bd1StoneDB"),(0,l.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5gcc-730"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5gcc 7.3.0"),(0,l.kt)("p",null,"Ubuntu 20.04 LTS\u9ed8\u8ba4\u7684gcc\u7248\u672c\u662f9.4.0\uff0c\u7531\u4e8e\u9ad8\u7248\u672c\u4e0d\u652f\u6301\u7f16\u8bd1\uff0c\u9700\u8981\u964d\u4f4egcc\u7248\u672c\u4e3a 7.3.0\u3002"),(0,l.kt)("h3",{id:"1-\u5b89\u88c5\u4f9d\u8d56\u5305"},"1. \u5b89\u88c5\u4f9d\u8d56\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install gcc\nsudo apt install g++\nsudo apt install make\nsudo apt install build-essential\nsudo apt install autoconf\nsudo apt install tree\nsudo apt install bison\nsudo apt install git\nsudo apt install cmake\nsudo apt install libtool\nsudo apt install numactl\nsudo apt install python\nsudo apt install openssl\nsudo apt install perl\nsudo apt install binutils\nsudo apt install libgmp-dev\nsudo apt install libmpfr-dev\nsudo apt install libmpc-dev\nsudo apt install libisl-dev\nsudo apt install zlib1g-dev\nsudo apt install liblz4-dev\nsudo apt install libbz2-dev\nsudo apt install libzstd-dev\nsudo apt install lz4\nsudo apt install ncurses-dev\nsudo apt install libsnappy-dev\nsudo apt install libedit-dev\nsudo apt install libaio-dev\nsudo apt install libncurses5-dev \nsudo apt install libreadline-dev\nsudo apt install libpam0g-dev\nsudo apt install zlib1g-dev\nsudo apt install libcurl-ocaml-dev\nsudo apt install libicu-dev\nsudo apt install libboost-all-dev\nsudo apt install libgflags-dev\nsudo apt install libjemalloc-dev\nsudo apt install libssl-dev\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u4f9d\u8d56\u5305\u5fc5\u987b\u90fd\u88c5\u4e0a\uff0c\u5426\u5219\u540e\u9762\u6709\u5f88\u591a\u62a5\u9519\u3002"),(0,l.kt)("h3",{id:"2-\u89e3\u538bgcc-730\u6e90\u7801\u5305"},"2. \u89e3\u538bgcc 7.3.0\u6e90\u7801\u5305"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://ftp.gnu.org/gnu/gcc/"},"http://ftp.gnu.org/gnu/gcc/"),"\n\u4e0b\u8f7dgcc 7.3.0\u6e90\u7801\u5305\uff0c\u4e0a\u4f20\u5e76\u89e3\u538b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home\ntar -zxvf gcc-7.3.0.tar.gz\n")),(0,l.kt)("h3",{id:"3-\u7f16\u8bd1\u524d\u51c6\u5907\u5de5\u4f5c"},"3. \u7f16\u8bd1\u524d\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u7f16\u8bd1\u4f1a\u62a5\u9519\uff0c\u63d0\u793a\u627e\u4e0d\u5230sys/ustat.h\uff0c\u8fd9\u662f\u56e0\u4e3agcc-7.3.0\u5728\u6587\u4ef6 sanitizer-platform-limits-posix.cc\n\u5df2\u7ecf\u79fb\u9664\u4e86 ustat.h\uff0c\u9700\u8981\u505a\u5982\u4e0b\u4fee\u6539\u3002\n1\uff09\u5728\u7b2c157\u884c\u5c06 ustat.h \u6ce8\u91ca"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home/gcc-7.3.0/libsanitizer/sanitizer_common\ncp sanitizer_platform_limits_posix.cc sanitizer_platform_limits_posix.cc.bak\nvim sanitizer_platform_limits_posix.cc\n\n//#include <sys/ustat.h>\n\n")),(0,l.kt)("p",null,"2\uff09\u5728\u7b2c250\u884c\u540e\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vim sanitizer_platform_limits_posix.cc\n\n// Use pre-computed size of struct ustat to avoid <sys/ustat.h> which\n// has been removed from glibc 2.28.\n#if defined(__aarch64__) || defined(__s390x__) || defined (__mips64) \\\n|| defined(__powerpc64__) || defined(__arch64__) || defined(__sparcv9) \\\n|| defined(__x86_64__)\n#define SIZEOF_STRUCT_USTAT 32\n#elif defined(__arm__) || defined(__i386__) || defined(__mips__) \\\n|| defined(__powerpc__) || defined(__s390__)\n#define SIZEOF_STRUCT_USTAT 20\n#else\n#error Unknown size of struct ustat\n#endif\n  unsigned struct_ustat_sz = SIZEOF_STRUCT_USTAT;\n")),(0,l.kt)("h3",{id:"4-\u7f16\u8bd1"},"4. \u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /gcc\ncd /home/gcc-7.3.0\n./contrib/download_prerequisites\n./configure --prefix=/gcc --enable-bootstrap -enable-threads=posix --enable-checking=release --enable-languages=c,c++ --disable-multilib --disable-libsanitizer\nsudo make && make install\n")),(0,l.kt)("h3",{id:"5-\u68c0\u67e5\u7248\u672c"},"5. \u68c0\u67e5\u7248\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/gcc/bin/gcc --version\ngcc (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")),(0,l.kt)("h3",{id:"6-\u5220\u9664\u9ad8\u7248\u672cgccg"},"6. \u5220\u9664\u9ad8\u7248\u672cgcc\u3001g++"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo rm /usr/bin/gcc\nsudo ln -s /gcc/bin/gcc /usr/bin/gcc\nsudo rm /usr/bin/g++\nsudo ln -s /gcc/bin/g++ /usr/bin/g++\n\ngcc --version\ngcc (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\ng++ --version\ng++ (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\nc++ --version\nc++ (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n")),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u6e90\u7801\u5305"},"\u4e0b\u8f7d\u6e90\u7801\u5305"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stoneatom/stonedb.git"},"https://github.com/stoneatom/stonedb.git"),"\n\u5b8c\u6210\u6e90\u7801\u5305\u4e0b\u8f7d\u540e\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff0c\u5b8c\u6210\u7f16\u8bd1\u5de5\u4f5c\n\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93\n\u7b2c\u4e09\u6b65\uff1a\u6267\u884c\u7f16\u8bd1\n\u7b2c\u56db\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b"),(0,l.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"},"\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"),(0,l.kt)("p",null,"\u5b89\u88c5\u7b2c\u4e09\u5e93\u524d\u9700\u8981\u786e\u8ba4cmake\u7248\u672c\u662f3.7.2\u4ee5\u4e0a\uff0cmake\u7248\u672c\u662f3.82\u4ee5\u4e0a\u3002"),(0,l.kt)("h3",{id:"1-\u5b89\u88c5-cmake"},"1. \u5b89\u88c5 cmake"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\napt remove cmake -y\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,l.kt)("h3",{id:"2-\u5b89\u88c5-marisa"},"2. \u5b89\u88c5 marisa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,l.kt)("p",null,"\u6b64\u6b65\u9aa4\u4f1a\u5728/usr/local/stonedb-marisa\u4e0b\u751f\u6210\u5982\u4e0b\u76ee\u5f55\u548c\u6587\u4ef6\u3002\n",(0,l.kt)("img",{alt:"image.png",src:t(46868).Z,width:"565",height:"225"})),(0,l.kt)("h3",{id:"3-\u5b89\u88c5-rocksdb"},"3. \u5b89\u88c5 rocksdb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v6.12.6.tar.gz \ntar -zxvf v6.12.6.tar.gz\ncd rocksdb-6.12.6\nmake shared_lib\nmake install-shared INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\nmake static_lib\nmake install-static INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\n")),(0,l.kt)("p",null,"\u6b64\u6b65\u9aa4\u4f1a\u5728/usr/local/stonedb-gcc-rocksdb\u4e0b\u751f\u6210\u5982\u4e0b\u76ee\u5f55\u548c\u6587\u4ef6\u3002\n",(0,l.kt)("img",{alt:"image.png",src:t(53582).Z,width:"625",height:"164"})),(0,l.kt)("h3",{id:"4-\u5b89\u88c5-boost"},"4. \u5b89\u88c5 boost"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://sourceforge.net/projects/boost/files/boost/1.66.0/boost_1_66_0.tar.gz\ntar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,l.kt)("p",null,"\u5728/usr/local/stonedb-boost\u4e0b\u751f\u6210\u5982\u4e0b\u76ee\u5f55\u548c\u6587\u4ef6\u3002\n",(0,l.kt)("img",{alt:"image.png",src:t(26992).Z,width:"694",height:"438"})),(0,l.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u6267\u884c\u7f16\u8bd1"},"\u7b2c\u4e09\u6b65\uff1a\u6267\u884c\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb/scripts\n./stonedb_build.sh\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u76ee\u5f55/stonedb57\u3002"),(0,l.kt)("h2",{id:"\u7b2c\u56db\u6b65\u542f\u52a8\u5b9e\u4f8b"},"\u7b2c\u56db\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u52a8StoneDB\u5b9e\u4f8b\u3002"),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u7528\u6237"},"1. \u521b\u5efa\u7528\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,l.kt)("h3",{id:"2-\u6267\u884c\u811a\u672creinstallsh"},"2. \u6267\u884c\u811a\u672creinstall.sh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb57/install\n./reinstall.sh\n")),(0,l.kt)("p",null,"\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u5c31\u662f\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u3002"),(0,l.kt)("h3",{id:"3-\u6267\u884c\u767b\u5f55"},"3. \u6267\u884c\u767b\u5f55"),(0,l.kt)("p",null,"\u767b\u5f55\u524d\u9700\u8981\u5728/stonedb57/install/log/mysqld.log\u627e\u5230\u8d85\u7ea7\u7528\u6237\u7684\u5bc6\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"more /stonedb57/install/log/mysqld.log |grep password\n2022-07-12T06:02:17.440039Z 1 [Note] A temporary password is generated for root@localhost: 3QpW#tTDAe=U\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb57/install/bin/mysql -uroot -p -S /stonedb57/install//tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 3\nServer version: 5.7.36-StoneDB-debug-log\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\nERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.\nmysql> alter user 'root'@'localhost' identified by 'xxx';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| mysql              |\n| performance_schema |\n| sys                |\n| sys_stonedb        |\n+--------------------+\n6 rows in set (0.00 sec)\n")))}m.isMDXComponent=!0},26992:function(e,n,t){n.Z=t.p+"assets/images/libboost-3ca5b8a86d32b56f714fb2c73fe7044e.png"},46868:function(e,n,t){n.Z=t.p+"assets/images/libmarisa-75eb57fbce88e88ab035ae0ceb6dd196.png"},53582:function(e,n,t){n.Z=t.p+"assets/images/librocksdb-206ea707175783e9275feee8ef6991e6.png"}}]);