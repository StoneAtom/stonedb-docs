"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2843],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(r,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"compile-using-ubuntu20.04",sidebar_position:5.14},r="Compile StoneDB on Ubuntu 20.04",d={unversionedId:"developer-guide/compiling-methods/compile-using-ubuntu20.04",id:"developer-guide/compiling-methods/compile-using-ubuntu20.04",title:"Compile StoneDB on Ubuntu 20.04",description:"This topic describes how to compile StoneDB on Ubuntu 20.04.",source:"@site/../Docs/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-ubuntu20.04",permalink:"/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1659930328,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:5.14,frontMatter:{id:"compile-using-ubuntu20.04",sidebar_position:5.14},sidebar:"autoSidebar",previous:{title:"Compile StoneDB on RHEL 7",permalink:"/docs/developer-guide/compiling-methods/compile-using-redhat7"},next:{title:"Compile StoneDB in a Docker Container",permalink:"/docs/developer-guide/compiling-methods/compile-using-docker"}},p={},c=[{value:"Precautions",id:"precautions",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Step 1. Install the dependencies",id:"step-1-install-the-dependencies",level:3},{value:"Step 2. Install  third-party dependencies",id:"step-2-install--third-party-dependencies",level:3},{value:"Step 3. Compile StoneDB",id:"step-3-compile-stonedb",level:3},{value:"Step 4. Start StoneDB",id:"step-4-start-stonedb",level:3}],m={toc:c};function u(e){var t=e.components,s=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compile-stonedb-on-ubuntu-2004"},"Compile StoneDB on Ubuntu 20.04"),(0,i.kt)("p",null,"This topic describes how to compile StoneDB on Ubuntu 20.04."),(0,i.kt)("h2",{id:"precautions"},"Precautions"),(0,i.kt)("p",null,"Ensure that the tools and third-party libraries used in your environment meet the following version requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GCC 9.4.0"),(0,i.kt)("li",{parentName:"ul"},"Make 3.82 or later"),(0,i.kt)("li",{parentName:"ul"},"CMake 3.7.2 or later"),(0,i.kt)("li",{parentName:"ul"},"marisa 0.77"),(0,i.kt)("li",{parentName:"ul"},"RocksDB 6.12.6"),(0,i.kt)("li",{parentName:"ul"},"Boost 1.66")),(0,i.kt)("h2",{id:"procedure"},"Procedure"),(0,i.kt)("h3",{id:"step-1-install-the-dependencies"},"Step 1. Install the dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install -y gcc\nsudo apt install -y g++\nsudo apt install -y make\nsudo apt install -y cmake\nsudo apt install -y build-essential\nsudo apt install -y autoconf\nsudo apt install -y tree\nsudo apt install -y bison\nsudo apt install -y git\nsudo apt install -y libtool\nsudo apt install -y numactl\nsudo apt install -y python3-dev\nsudo apt install -y openssl\nsudo apt install -y perl\nsudo apt install -y binutils\nsudo apt install -y libgmp-dev\nsudo apt install -y libmpfr-dev\nsudo apt install -y libmpc-dev\nsudo apt install -y libisl-dev\nsudo apt install -y zlib1g-dev\nsudo apt install -y liblz4-dev\nsudo apt install -y libbz2-dev\nsudo apt install -y libzstd-dev\nsudo apt install -y zstd\nsudo apt install -y lz4\nsudo apt install -y ncurses-dev\nsudo apt install -y libsnappy-dev\nsudo apt install -y libedit-dev\nsudo apt install -y libaio-dev\nsudo apt install -y libncurses5-dev \nsudo apt install -y libreadline-dev\nsudo apt install -y libpam0g-dev\nsudo apt install -y zlib1g-dev\nsudo apt install -y libicu-dev\nsudo apt install -y libboost-all-dev\nsudo apt install -y libgflags-dev\nsudo apt install -y libjemalloc-dev\nsudo apt install -y libssl-dev\nsudo apt install -y pkg-config\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ensure that all the dependencies are installed. Otherwise, a large number of errors will be reported."))),(0,i.kt)("h3",{id:"step-2-install--third-party-dependencies"},"Step 2. Install  third-party dependencies"),(0,i.kt)("p",null,"Ensure that the CMake version in your environment is 3.7.2 or later and the Make version is 3.82 or later. Otherwise, install CMake, Make, or both of them of the correct versions."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"StoneDB is dependent on marisa, RocksDB, and Boost. You can specify an installation directory for marisa, RocksDB, or Boost, when compiling it, or the library will be saved in ",(0,i.kt)("strong",{parentName:"p"},"/usr/local "),"by default. In the following example, each directory is specified with an installation directory. There is also no need to specify the installation directory for StoneDB."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install CMake.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\napt remove cmake -y\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Install Make.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"http://mirrors.ustc.edu.cn/gnu/make/\ntar -zxvf make-3.82.tar.gz\ncd make-3.82\n./configure  --prefix=/usr/local/make\nmake && make install\nrm -rf /usr/local/bin/make\nln -s /usr/local/make/bin/make /usr/local/bin/make\nmake --version\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Install marisa.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nsudo make && make install \n")),(0,i.kt)("p",null,"The installation directory of marisa in the example is",(0,i.kt)("strong",{parentName:"p"}," /usr/local/stonedb-marisa"),". You can change it based on your actual conditions. In this step, the following directories and files are generated in ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-marisa/lib"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"marisa",src:n(95415).Z,width:"567",height:"124"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install RocksDB.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v6.12.6.tar.gz \ntar -zxvf v6.12.6.tar.gz\ncd rocksdb-6.12.6\n\nsudo cmake ./ \\\n  -DCMAKE_BUILD_TYPE=Release \\\n  -DCMAKE_INSTALL_PREFIX=/usr/local/stonedb-gcc-rocksdb \\\n  -DCMAKE_INSTALL_LIBDIR=/usr/local/stonedb-gcc-rocksdb \\\n  -DWITH_JEMALLOC=ON \\\n  -DWITH_SNAPPY=ON \\\n  -DWITH_LZ4=ON \\\n  -DWITH_ZLIB=ON \\\n  -DWITH_ZSTD=ON \\\n  -DUSE_RTTI=ON \\\n  -DROCKSDB_BUILD_SHARED=ON \\\n  -DWITH_GFLAGS=OFF \\\n  -DWITH_TOOLS=OFF \\\n  -DWITH_BENCHMARK_TOOLS=OFF \\\n  -DWITH_CORE_TOOLS=OFF \n\nsudo make -j`nproc`\nsudo make install -j`nproc`\n")),(0,i.kt)("p",null,"The installation directory of RocksDB in the example is ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-gcc-rocksdb"),". You can change it based on your actual conditions. In this step, the following directories and files are generated in ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-gcc-rocksdb"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rocksdb",src:n(95043).Z,width:"598",height:"128"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install Boost.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://sourceforge.net/projects/boost/files/boost/1.66.0/boost_1_66_0.tar.gz\ntar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,i.kt)("p",null,"The installation directory of Boost in the example is ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-boost"),". You can change it based on your actual conditions. In this step, the following directories and files are generated in ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-boost/lib"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"boost",src:n(59063).Z,width:"714",height:"537"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"During the compilation, the occurrences of keywords ",(0,i.kt)("strong",{parentName:"p"},"warning")," and",(0,i.kt)("strong",{parentName:"p"}," failed")," are normal, unless ",(0,i.kt)("strong",{parentName:"p"},"error")," is displayed and the CLI is automatically closed."))),(0,i.kt)("h3",{id:"step-3-compile-stonedb"},"Step 3. Compile StoneDB"),(0,i.kt)("p",null,"Currently, StoneDB has two branches: StoneDB-5.6 (for MySQL 5.6) and StoneDB-5.7 (for MySQL 5.7). The link provided in this topic is to the source code package of StoneDB-5.7. In the following example, the source code package is saved to the root directory and is switched to StoneDB-5.6 for compilation. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"GCC 9.3.0 or later supports the compilation of StoneDB-5.6 and allows you to specify the installation directories for RocksDB and marisa. We are working on the support for GCC 7.3.0 and for compilation of StoneDB-5.7."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /\ngit clone https://github.com/stoneatom/stonedb.git\ncd stonedb\ngit checkout remotes/origin/stonedb-5.6\n")),(0,i.kt)("p",null,"Before compilation, modify the compilation script as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Change the installation directory of StoneDB based on your actual conditions. In the example, ",(0,i.kt)("strong",{parentName:"li"},"/stonedb56/install")," is used."),(0,i.kt)("li",{parentName:"ol"},"Change the installation directories of marisa, RocksDB, and Boost based on your actual conditions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"### Modify the compilation script.\ncd /stonedb/scripts\nvim stonedb_build.sh\n...\ninstall_target=/stonedb56/install\n...\n-DDOWNLOAD_BOOST=0 \\\n-DWITH_BOOST=/usr/local/stonedb-boost/ \\\n-DWITH_MARISA=/usr/local/stonedb-marisa \\\n-DWITH_ROCKSDB=/usr/local/stonedb-gcc-rocksdb \\\n2>&1 | tee -a ${build_log}\n\n### Execute the compilation script.\nsh stonedb_build.sh\n")),(0,i.kt)("h3",{id:"step-4-start-stonedb"},"Step 4. Start StoneDB"),(0,i.kt)("p",null,"Perform the following steps to start StoneDB."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an account.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Manually install StoneDB.")),(0,i.kt)("p",null,"If the installation directory after compilation is not ",(0,i.kt)("strong",{parentName:"p"},"/stonedb56"),", files ",(0,i.kt)("strong",{parentName:"p"},"reinstall.sh"),", ",(0,i.kt)("strong",{parentName:"p"},"install.sh"),", and ",(0,i.kt)("strong",{parentName:"p"},"my.cnf")," will not automatically generated. You need to manually create directories, and then initialize and start StoneDB. You also need to configure parameters in file ",(0,i.kt)("strong",{parentName:"p"},"my.cnf"),", including the installation directories and port."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"### Create directories.\nmkdir -p /data/stonedb56/install/data/innodb\nmkdir -p /data/stonedb56/install/binlog\nmkdir -p /data/stonedb56/install/log\nmkdir -p /data/stonedb56/install/tmp\nchown -R mysql:mysql /data\n\n### Configure parameters in my.cnf.\nvim /data/stonedb56/install/my.cnf\n[mysqld]\nport      = 3306\nsocket    = /data/stonedb56/install/tmp/mysql.sock\ndatadir   = /data/stonedb56/install/data\npid-file  = /data/stonedb56/install/data/mysqld.pid\nlog-error = /data/stonedb56/install/log/mysqld.log\n\nchown -R mysql:mysql /data/stonedb56/install/my.cnf\n\n### Initialize StoneDB.\n/data/stonedb56/install/scripts/mysql_install_db --datadir=/data/stonedb56/install/data --basedir=/data/stonedb56/install --user=mysql\n\n### Start StoneDB.\n/data/stonedb56/install/bin/mysqld_safe --defaults-file=/data/stonedb56/install/my.cnf --user=mysql &\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("strong",{parentName:"li"},"reinstall.sh")," to automatically install StoneDB.")),(0,i.kt)("p",null,"If the installation directory after compilation is ",(0,i.kt)("strong",{parentName:"p"},"/stonedb56"),", execute ",(0,i.kt)("strong",{parentName:"p"},"reinstall.sh"),". Then, StoneDB will be automatically installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install\n./reinstall.sh\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Differences between ",(0,i.kt)("strong",{parentName:"p"},"reinstall.sh")," and ",(0,i.kt)("strong",{parentName:"p"},"install.sh"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reinstall.sh")," is the script for automatic installation. When the script is being executed, directories are created, and StoneDB is initialized and started. Therefore, do not execute the script unless for the initial startup of StoneDB. Otherwise, all directories will be deleted and StoneDB will be initialized again."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"install.sh")," is the script for manual installation. You can specify the installation directories based on your needs and then execute the script. Same as ",(0,i.kt)("strong",{parentName:"li"},"reinstall.sh"),", when the script is being executed, directories are created, and StoneDB is initialized and started. Therefore, do not execute the script unless for the initial startup. Otherwise, all directories will be deleted and StoneDB will be initialized again.")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Log in to StoneDB.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.6.24-StoneDB-debug build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n")))}u.isMDXComponent=!0},59063:function(e,t,n){t.Z=n.p+"assets/images/boost_dir-f70a6179a9ce56e57b326c14180b266a.png"},95415:function(e,t,n){t.Z=n.p+"assets/images/marisa_dir-338883c6bd0e89d1209ad7a84cc4b7b0.png"},95043:function(e,t,n){t.Z=n.p+"assets/images/rocks_dir-1bbecb3f3e5b776ad917c7513ef024f6.png"}}]);