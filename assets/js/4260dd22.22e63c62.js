"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2778],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||h[d]||c;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10889:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var a=r(87462),n=r(63366),c=(r(67294),r(3905)),s=["components"],i={id:"character-sets",sidebar_position:6.1},o="Character Sets",l={unversionedId:"SQL-reference/character-sets",id:"SQL-reference/character-sets",title:"Character Sets",description:"A character set is a collection of symbols and encodings, where the encodings determine how character strings are stored. A collation is a collection of rules for comparing and sorting character strings. A character set is associated with a collation. If you change either of them, the other also changes.",source:"@site/../Docs/05-SQL-reference/character-sets.md",sourceDirName:"05-SQL-reference",slug:"/SQL-reference/character-sets",permalink:"/docs/SQL-reference/character-sets",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/05-SQL-reference/character-sets.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1659952101,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:6.1,frontMatter:{id:"character-sets",sidebar_position:6.1},sidebar:"autoSidebar",previous:{title:"Error Codes",permalink:"/docs/developer-guide/appendix/error-codes"},next:{title:"Data Types",permalink:"/docs/SQL-reference/data-types"}},p={},h=[{value:"Supported character sets",id:"supported-character-sets",level:2},{value:"Variables relevant to character sets",id:"variables-relevant-to-character-sets",level:2}],u={toc:h};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,c.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"character-sets"},"Character Sets"),(0,c.kt)("p",null,"A character set is a collection of symbols and encodings, where the encodings determine how character strings are stored. A collation is a collection of rules for comparing and sorting character strings. A character set is associated with a collation. If you change either of them, the other also changes."),(0,c.kt)("h2",{id:"supported-character-sets"},"Supported character sets"),(0,c.kt)("p",null,"You can execute the ",(0,c.kt)("inlineCode",{parentName:"p"},"SHOW CHARACTER SET")," statement to view the character sets supported by StoneDB."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"> show character set; \n+----------+---------------------------------+---------------------+--------+\n| Charset  | Description                     | Default collation   | Maxlen |\n+----------+---------------------------------+---------------------+--------+\n| big5     | Big5 Traditional Chinese        | big5_chinese_ci     |      2 |\n| dec8     | DEC West European               | dec8_swedish_ci     |      1 |\n| cp850    | DOS West European               | cp850_general_ci    |      1 |\n| hp8      | HP West European                | hp8_english_ci      |      1 |\n| koi8r    | KOI8-R Relcom Russian           | koi8r_general_ci    |      1 |\n| latin1   | cp1252 West European            | latin1_swedish_ci   |      1 |\n| latin2   | ISO 8859-2 Central European     | latin2_general_ci   |      1 |\n| swe7     | 7bit Swedish                    | swe7_swedish_ci     |      1 |\n| ascii    | US ASCII                        | ascii_general_ci    |      1 |\n| ujis     | EUC-JP Japanese                 | ujis_japanese_ci    |      3 |\n| sjis     | Shift-JIS Japanese              | sjis_japanese_ci    |      2 |\n| hebrew   | ISO 8859-8 Hebrew               | hebrew_general_ci   |      1 |\n| tis620   | TIS620 Thai                     | tis620_thai_ci      |      1 |\n| euckr    | EUC-KR Korean                   | euckr_korean_ci     |      2 |\n| koi8u    | KOI8-U Ukrainian                | koi8u_general_ci    |      1 |\n| gb2312   | GB2312 Simplified Chinese       | gb2312_chinese_ci   |      2 |\n| greek    | ISO 8859-7 Greek                | greek_general_ci    |      1 |\n| cp1250   | Windows Central European        | cp1250_general_ci   |      1 |\n| gbk      | GBK Simplified Chinese          | gbk_chinese_ci      |      2 |\n| latin5   | ISO 8859-9 Turkish              | latin5_turkish_ci   |      1 |\n| armscii8 | ARMSCII-8 Armenian              | armscii8_general_ci |      1 |\n| utf8     | UTF-8 Unicode                   | utf8_general_ci     |      3 |\n| ucs2     | UCS-2 Unicode                   | ucs2_general_ci     |      2 |\n| cp866    | DOS Russian                     | cp866_general_ci    |      1 |\n| keybcs2  | DOS Kamenicky Czech-Slovak      | keybcs2_general_ci  |      1 |\n| macce    | Mac Central European            | macce_general_ci    |      1 |\n| macroman | Mac West European               | macroman_general_ci |      1 |\n| cp852    | DOS Central European            | cp852_general_ci    |      1 |\n| latin7   | ISO 8859-13 Baltic              | latin7_general_ci   |      1 |\n| utf8mb4  | UTF-8 Unicode                   | utf8mb4_general_ci  |      4 |\n| cp1251   | Windows Cyrillic                | cp1251_general_ci   |      1 |\n| utf16    | UTF-16 Unicode                  | utf16_general_ci    |      4 |\n| utf16le  | UTF-16LE Unicode                | utf16le_general_ci  |      4 |\n| cp1256   | Windows Arabic                  | cp1256_general_ci   |      1 |\n| cp1257   | Windows Baltic                  | cp1257_general_ci   |      1 |\n| utf32    | UTF-32 Unicode                  | utf32_general_ci    |      4 |\n| binary   | Binary pseudo charset           | binary              |      1 |\n| geostd8  | GEOSTD8 Georgian                | geostd8_general_ci  |      1 |\n| cp932    | SJIS for Windows Japanese       | cp932_japanese_ci   |      2 |\n| eucjpms  | UJIS for Windows Japanese       | eucjpms_japanese_ci |      3 |\n| gb18030  | China National Standard GB18030 | gb18030_chinese_ci  |      4 |\n+----------+---------------------------------+---------------------+--------+\n")),(0,c.kt)("h2",{id:"variables-relevant-to-character-sets"},"Variables relevant to character sets"),(0,c.kt)("p",null,"You can execute the following statement to show the variables relevant to character sets."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"> show variables like '%char%';\n+--------------------------+----------------------------------+\n| Variable_name            | Value                            |\n+--------------------------+----------------------------------+\n| character_set_client     | utf8                             |\n| character_set_connection | utf8                             |\n| character_set_database   | utf8mb4                          |\n| character_set_filesystem | binary                           |\n| character_set_results    | utf8                             |\n| character_set_server     | utf8mb4                          |\n| character_set_system     | utf8                             |\n| character_sets_dir       | /stonedb/install/share/charsets/ |\n+--------------------------+----------------------------------+\n8 rows in set (0.01 sec)\n")),(0,c.kt)("p",null,"Variable description:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"character_set_client")," specifies the character set used by the server to receive requests from the client."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"character_set_connection")," specifies the character set converted by the server from the character set specified by ",(0,c.kt)("strong",{parentName:"li"},"character_set_client"),"."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"character_set_results")," specifies the character set used by the server to respond to requests sent by the client. ")),(0,c.kt)("p",null,"The character set used by a client to send requests to a server and receive response from the server is the character set used by the client OS, which can be specified by the ",(0,c.kt)("strong",{parentName:"p"},"LC_ALL"),", ",(0,c.kt)("strong",{parentName:"p"},"LC_CTYPE"),", or ",(0,c.kt)("strong",{parentName:"p"},"LANG "),"variable. Among the three variables, ",(0,c.kt)("strong",{parentName:"p"},"LC_ALL")," has the highest priority, ",(0,c.kt)("strong",{parentName:"p"},"LC_CTYPE")," the second, and then ",(0,c.kt)("strong",{parentName:"p"},"LANG")," the lowest."),(0,c.kt)("p",null,"If the client OS uses the UTF-8 character set and ",(0,c.kt)("strong",{parentName:"p"},"default-character-set")," is set to ",(0,c.kt)("strong",{parentName:"p"},"gbk")," during the client startup, ",(0,c.kt)("strong",{parentName:"p"},"character_set_client"),", ",(0,c.kt)("strong",{parentName:"p"},"character_set_connection"),", and ",(0,c.kt)("strong",{parentName:"p"},"character_set_results")," are automatically set to ",(0,c.kt)("strong",{parentName:"p"},"gbk"),". Now, the client requests a table that contains Chinese characters. The representation of each Chinese character in the server and that in the client are two different strings. In a UNIX OS, data received by the server will be converted based on the character set specified by ",(0,c.kt)("strong",{parentName:"p"},"character_set_connection"),". In this case, the data presented to the server is garbled text."),(0,c.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"For StoneDB, if no character set is specified for the database when the database is being created, the database uses the character set specified by ",(0,c.kt)("strong",{parentName:"p"},"character_set_server"),", by default. If a table is not specified with a character set when the table is being created, the table uses the character set used by the database. Once a table is created, you cannot change or convert its character set."))))}d.isMDXComponent=!0}}]);