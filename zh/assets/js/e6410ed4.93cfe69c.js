"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2509],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,f=p["".concat(l,".").concat(c)]||p[c]||m[c]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"use-mydumper-full-backup",sidebar_position:4.32},l="MySQL\u5168\u91cf\u6570\u636e\u5907\u4efd-mydumper",d={unversionedId:"O&M-Guide/backup-and-recovery/use-mydumper-full-backup",id:"O&M-Guide/backup-and-recovery/use-mydumper-full-backup",title:"MySQL\u5168\u91cf\u6570\u636e\u5907\u4efd-mydumper",description:"mydumper\u9879\u76ee\u5730\u5740\uff1ahttps://github.com/mydumper/mydumper",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/01-backup-and-recovery/use-mydumper-full-backup.md",sourceDirName:"03-O&M-Guide/01-backup-and-recovery",slug:"/O&M-Guide/backup-and-recovery/use-mydumper-full-backup",permalink:"/zh/docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/01-backup-and-recovery/use-mydumper-full-backup.md",tags:[],version:"current",lastUpdatedBy:"Ma Jun",lastUpdatedAt:1658641969,formattedLastUpdatedAt:"2022/7/24",sidebarPosition:4.32,frontMatter:{id:"use-mydumper-full-backup",sidebar_position:4.32},sidebar:"autoSidebar",previous:{title:"\u4f7f\u7528mysqldump\u5907\u4efd\u6062\u590dStoneDB",permalink:"/zh/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore"},next:{title:"Compiling Methods",permalink:"/zh/docs/compiling-methods"}},u={},m=[{value:"Mydumper\u4ecb\u7ecd",id:"mydumper\u4ecb\u7ecd",level:2},{value:"\u4ec0\u4e48\u662fMydumper\uff1f",id:"\u4ec0\u4e48\u662fmydumper",level:3},{value:"Mydumper\u4f18\u52bf",id:"mydumper\u4f18\u52bf",level:3},{value:"Mydumper\u4e3b\u8981\u7279\u6027",id:"mydumper\u4e3b\u8981\u7279\u6027",level:3},{value:"Mydumper\u4f7f\u7528",id:"mydumper\u4f7f\u7528",level:2},{value:"Mydumer \u53c2\u6570",id:"mydumer-\u53c2\u6570",level:3},{value:"Myloader\u53c2\u6570",id:"myloader\u53c2\u6570",level:3},{value:"\u5b89\u88c5\u4f7f\u7528",id:"\u5b89\u88c5\u4f7f\u7528",level:3},{value:"\u5907\u4efd\u539f\u7406",id:"\u5907\u4efd\u539f\u7406",level:3}],p={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql\u5168\u91cf\u6570\u636e\u5907\u4efd-mydumper"},"MySQL\u5168\u91cf\u6570\u636e\u5907\u4efd-mydumper"),(0,o.kt)("p",null,"mydumper\u9879\u76ee\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mydumper/mydumper"},"https://github.com/mydumper/mydumper")),(0,o.kt)("h2",{id:"mydumper\u4ecb\u7ecd"},"Mydumper\u4ecb\u7ecd"),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662fmydumper"},"\u4ec0\u4e48\u662fMydumper\uff1f"),(0,o.kt)("p",null,"Mydumper \u662f\u4e00\u4e2a MySQL \u903b\u8f91\u5907\u4efd\u5de5\u5177\u3002\u5b83\u6709 2 \u4e2a\u5de5\u5177\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mydumper\u8d1f\u8d23\u5bfc\u51fa MySQL \u6570\u636e\u5e93\u7684\u4e00\u81f4\u5907\u4efd"),(0,o.kt)("li",{parentName:"ul"},"myloader\u4ece mydumper \u8bfb\u53d6\u5907\u4efd\uff0c\u8fde\u63a5\u5230\u76ee\u6807\u6570\u636e\u5e93\u5e76\u5bfc\u5165\u5907\u4efd\u3002\u4e24\u79cd\u5de5\u5177\u90fd\u4f7f\u7528\u591a\u7ebf\u7a0b\u529f\u80fd")),(0,o.kt)("h3",{id:"mydumper\u4f18\u52bf"},"Mydumper\u4f18\u52bf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e76\u884c\u6027\uff08\u56e0\u6b64\uff0c\u901f\u5ea6\uff09\u548c\u6027\u80fd\uff08\u907f\u514d\u6602\u8d35\u7684\u5b57\u7b26\u96c6\u8f6c\u6362\u4f8b\u7a0b\uff0c\u6574\u4f53\u9ad8\u6548\u7684\u4ee3\u7801\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6613\u4e8e\u7ba1\u7406\u8f93\u51fa\uff08\u8868\u7684\u5355\u72ec\u6587\u4ef6\u3001\u8f6c\u50a8\u5143\u6570\u636e\u7b49\uff0c\u6613\u4e8e\u67e5\u770b/\u89e3\u6790\u6570\u636e\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027 - \u7ef4\u62a4\u6240\u6709\u7ebf\u7a0b\u7684\u5feb\u7167\uff0c\u63d0\u4f9b\u51c6\u786e\u7684\u4e3b\u4ece\u65e5\u5fd7\u4f4d\u7f6e\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7ba1\u7406\u6027 - \u652f\u6301 PCRE \u4ee5\u6307\u5b9a\u6570\u636e\u5e93\u548c\u8868\u7684\u5305\u542b\u548c\u6392\u9664")),(0,o.kt)("h3",{id:"mydumper\u4e3b\u8981\u7279\u6027"},"Mydumper\u4e3b\u8981\u7279\u6027"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u5907\u4efd\uff0c\u5907\u4efd\u540e\u4f1a\u751f\u6210\u591a\u4e2a\u5907\u4efd\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u6027\u548c\u975e\u4e8b\u52a1\u6027\u8868\u4e00\u81f4\u7684\u5feb\u7167(\u9002\u7528\u4e8e0.2.2\u4ee5\u4e0a\u7248\u672c)"),(0,o.kt)("li",{parentName:"ul"},"\u5feb\u901f\u7684\u6587\u4ef6\u538b\u7f29"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u5bfc\u51fabinlog"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u6062\u590d(\u9002\u7528\u4e8e0.2.1\u4ee5\u4e0a\u7248\u672c)"),(0,o.kt)("li",{parentName:"ul"},"\u4ee5\u5b88\u62a4\u8fdb\u7a0b\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u5b9a\u65f6\u5feb\u7167\u548c\u8fde\u7eed\u4e8c\u8fdb\u5236\u65e5\u5fd7(\u9002\u7528\u4e8e0.5.0\u4ee5\u4e0a\u7248\u672c)"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u6e90 (GNU GPLv3)")),(0,o.kt)("h2",{id:"mydumper\u4f7f\u7528"},"Mydumper\u4f7f\u7528"),(0,o.kt)("h3",{id:"mydumer-\u53c2\u6570"},"Mydumer \u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mydumper --help\nUsage:\nmydumper [OPTION\u2026] multi-threaded MySQL dumping\n\nHelp Options:\n-?, --help                      Show help options\n\nApplication Options:\n-B, --database                  Database to dump\n-o, --outputdir                 Directory to output files to\n-s, --statement-size            Attempted size of INSERT statement in bytes, default 1000000\n-r, --rows                      Try to split tables into chunks of this many rows. This option turns off --chunk-filesize\n-F, --chunk-filesize            Split tables into chunks of this output file size. This value is in MB\n--max-rows                      Limit the number of rows per block after the table is estimated, default 1000000\n-c, --compress                  Compress output files\n-e, --build-empty-files         Build dump files even if no data available from table\n-i, --ignore-engines            Comma delimited list of storage engines to ignore\n-N, --insert-ignore             Dump rows with INSERT IGNORE\n-m, --no-schemas                Do not dump table schemas with the data and triggers\n-M, --table-checksums           Dump table checksums with the data\n-d, --no-data                   Do not dump table data\n--order-by-primary              Sort the data by Primary Key or Unique key if no primary key exists\n-G, --triggers                  Dump triggers. By default, it do not dump triggers\n-E, --events                    Dump events. By default, it do not dump events\n-R, --routines                  Dump stored procedures and functions. By default, it do not dump stored procedures nor functions\n-W, --no-views                  Do not dump VIEWs\n-k, --no-locks                  Do not execute the temporary shared read lock.  WARNING: This will cause inconsistent backups\n--no-backup-locks               Do not use Percona backup locks\n--less-locking                  Minimize locking time on InnoDB tables.\n--long-query-retries            Retry checking for long queries, default 0 (do not retry)\n--long-query-retry-interval     Time to wait before retrying the long query check in seconds, default 60\n-l, --long-query-guard          Set long query timer in seconds, default 60\n-K, --kill-long-queries         Kill long running queries (instead of aborting)\n-D, --daemon                    Enable daemon mode\n-X, --snapshot-count            number of snapshots, default 2\n-I, --snapshot-interval         Interval between each dump snapshot (in minutes), requires --daemon, default 60\n-L, --logfile                   Log file name to use, by default stdout is used\n--tz-utc                        SET TIME_ZONE='+00:00' at top of dump to allow dumping of TIMESTAMP data when a server has data in different time zones or data is being moved between servers with different time zones, defaults to on use --skip-tz-utc to disable.\n--skip-tz-utc\n--use-savepoints                Use savepoints to reduce metadata locking issues, needs SUPER privilege\n--success-on-1146               Not increment error count and Warning instead of Critical in case of table doesn't exist\n--lock-all-tables               Use LOCK TABLE for all, instead of FTWRL\n-U, --updated-since             Use Update_time to dump only tables updated in the last U days\n--trx-consistency-only          Transactional consistency only\n--complete-insert               Use complete INSERT statements that include column names\n--split-partitions              Dump partitions into separate files. This options overrides the --rows option for partitioned tables.\n--set-names                     Sets the names, use it at your own risk, default binary\n-z, --tidb-snapshot             Snapshot to use for TiDB\n--load-data\n--fields-terminated-by\n--fields-enclosed-by\n--fields-escaped-by             Single character that is going to be used to escape characters in theLOAD DATA stament, default: '\\'\n--lines-starting-by             Adds the string at the begining of each row. When --load-data is usedit is added to the LOAD DATA statement. Its affects INSERT INTO statementsalso when it is used.\n--lines-terminated-by           Adds the string at the end of each row. When --load-data is used it isadded to the LOAD DATA statement. Its affects INSERT INTO statementsalso when it is used.\n--statement-terminated-by       This might never be used, unless you know what are you doing\n--sync-wait                     WSREP_SYNC_WAIT value to set at SESSION level\n--where                         Dump only selected records.\n--no-check-generated-fields     Queries related to generated fields are not going to be executed.It will lead to restoration issues if you have generated columns\n--disk-limits                   Set the limit to pause and resume if determines there is no enough disk space.Accepts values like: '<resume>:<pause>' in MB.For instance: 100:500 will pause when there is only 100MB free and willresume if 500MB are available\n--csv                           Automatically enables --load-data and set variables to export in CSV format.\n-t, --threads                   Number of threads to use, default 4\n-C, --compress-protocol         Use compression on the MySQL connection\n-V, --version                   Show the program version and exit\n-v, --verbose                   Verbosity of output, 0 = silent, 1 = errors, 2 = warnings, 3 = info, default 2\n--defaults-file                 Use a specific defaults file\n--stream                        It will stream over STDOUT once the files has been written\n--no-delete                     It will not delete the files after stream has been completed\n-O, --omit-from-file            File containing a list of database.table entries to skip, one per line (skips before applying regex option)\n-T, --tables-list               Comma delimited table list to dump (does not exclude regex option)\n-h, --host                      The host to connect to\n-u, --user                      Username with the necessary privileges\n-p, --password                  User password\n-a, --ask-password              Prompt For User password\n-P, --port                      TCP/IP port to connect to\n-S, --socket                    UNIX domain socket file to use for connection\n  -x, --regex                     Regular expression for 'db.table' matching\n")),(0,o.kt)("h3",{id:"myloader\u53c2\u6570"},"Myloader\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"myloader --help\nUsage:\n  myloader [OPTION\u2026] multi-threaded MySQL loader\n\nHelp Options:\n  -?, --help                        Show help options\n\nApplication Options:\n  -d, --directory                   Directory of the dump to import\n  -q, --queries-per-transaction     Number of queries per transaction, default 1000\n  -o, --overwrite-tables            Drop tables if they already exist\n  -B, --database                    An alternative database to restore into\n  -s, --source-db                   Database to restore\n  -e, --enable-binlog               Enable binary logging of the restore data\n  --innodb-optimize-keys            Creates the table without the indexes and it adds them at the end\n  --set-names                       Sets the names, use it at your own risk, default binary\n  -L, --logfile                     Log file name to use, by default stdout is used\n  --purge-mode                      This specify the truncate mode which can be: NONE, DROP, TRUNCATE and DELETE\n  --disable-redo-log                Disables the REDO_LOG and enables it after, doesn't check initial status\n  -r, --rows                        Split the INSERT statement into this many rows.\n  --max-threads-per-table           Maximum number of threads per table to use, default 4\n  --skip-triggers                   Do not import triggers. By default, it imports triggers\n  --skip-post                       Do not import events, stored procedures and functions. By default, it imports events, stored procedures nor functions\n  --no-data                         Do not dump or import table data\n  --serialized-table-creation       Table recreation will be executed in serie, one thread at a time\n  --resume                          Expect to find resume file in backup dir and will only process those files\n  -t, --threads                     Number of threads to use, default 4\n  -C, --compress-protocol           Use compression on the MySQL connection\n  -V, --version                     Show the program version and exit\n  -v, --verbose                     Verbosity of output, 0 = silent, 1 = errors, 2 = warnings, 3 = info, default 2\n  --defaults-file                   Use a specific defaults file\n  --stream                          It will stream over STDOUT once the files has been written\n  --no-delete                       It will not delete the files after stream has been completed\n  -O, --omit-from-file              File containing a list of database.table entries to skip, one per line (skips before applying regex option)\n  -T, --tables-list                 Comma delimited table list to dump (does not exclude regex option)\n  -h, --host                        The host to connect to\n  -u, --user                        Username with the necessary privileges\n  -p, --password                    User password\n  -a, --ask-password                Prompt For User password\n  -P, --port                        TCP/IP port to connect to\n  -S, --socket                      UNIX domain socket file to use for connection\n  -x, --regex                       Regular expression for 'db.table' matching\n  --skip-definer                    Removes DEFINER from the CREATE statement. By default, statements are not modified\n\n")),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f7f\u7528"},"\u5b89\u88c5\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5230\u9879\u76eegithub \u4e0a\u4e0b\u8f7d\u673a\u5668\u5bf9\u5e94\u7684rpm\u5305\u6216\u8005\u6e90\u7801\u5305\uff0c\u6e90\u7801\u5305\u9700\u8981\u8fdb\u884c\u7f16\u8bd1\uff0crpm\u5305\u5b89\u88c5\u7b80\u5355\u5efa\u8bae\u4f7f\u7528\uff0c\u672c\u6587\u4ee5centos 7\u7cfb\u7edf\u4e3a\u4f8b\uff0c\u6240\u4ee5\u4e0b\u8f7del7\u7248\u672c\n[root@dev tmp]# wget https://github.com/mydumper/mydumper/releases/download/v0.12.1/mydumper-0.12.1-1-zstd.el7.x86_64.rpm\n#\u7531\u4e8e\u4e0b\u8f7d\u7684mydumper\u662fzstd\u7c7b\u578b\u7684\uff0c\u6240\u4ee5\u9700\u8981\u4e0b\u8f7dlibzstd\u4f9d\u8d56\n[root@dev tmp]# yum install libzstd.x86_64 -y\n[root@dev tmp]#rpm -ivh mydumper-0.12.1-1-zstd.el7.x86_64.rpm\nPreparing...                          ################################# [100%]\nUpdating / installing...\n   1:mydumper-0.12.1-1                ################################# [100%]\n\n#\u5907\u4efd\u5e93\n[root@dev home]# mydumper -u root -p xxx -P 3306 -h 127.0.0.1 -B zz -o /home/dumper/\n#\u6062\u590d\u5e93\n[root@dev home]# myloader -u root -p xxx -P 3306 -h 127.0.0.1 -S /stonedb/install/tmp/mysql.sock -B zz -d /home/dumper\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5907\u4efd\u6240\u751f\u6210\u7684\u6587\u4ef6")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[root@dev home]# ll dumper/\ntotal 112\n-rw-r--r--. 1 root root   139 Mar 23 14:24 metadata\n-rw-r--r--. 1 root root    88 Mar 23 14:24 zz-schema-create.sql\n-rw-r--r--. 1 root root 97819 Mar 23 14:24 zz.t_user.00000.sql\n-rw-r--r--. 1 root root     4 Mar 23 14:24 zz.t_user-metadata\n-rw-r--r--. 1 root root   477 Mar 23 14:24 zz.t_user-schema.sql\n[root@dev dumper]# cat metadata\nStarted dump at: 2022-03-23 15:51:40\nSHOW MASTER STATUS:\n        Log: mysql-bin.000002\n        Pos: 4737113\n        GTID:\n\nFinished dump at: 2022-03-23 15:51:40\n[root@dev-myos dumper]# cat zz-schema-create.sql\nCREATE DATABASE /*!32312 IF NOT EXISTS*/ `zz` /*!40100 DEFAULT CHARACTER SET utf8 */;\n[root@dev dumper]# more zz.t_user.00000.sql\n/*!40101 SET NAMES binary*/;\n/*!40014 SET FOREIGN_KEY_CHECKS=0*/;\n/*!40103 SET TIME_ZONE=\'+00:00\' */;\nINSERT INTO `t_user` VALUES(1,"e1195afd-aa7d-11ec-936e-00155d840103","kAMXjvtFJym1S7PAlMJ7",102,62,"2022-03-23 15:50:16")\n,(2,"e11a7719-aa7d-11ec-936e-00155d840103","0ufCd3sXffjFdVPbjOWa",698,44,"2022-03-23 15:50:16")\n.....#\u5185\u5bb9\u8fc7\u591a\u4e0d\u5168\u90e8\u5c55\u793a\n[root@dev dumper]# cat zz.t_user-metadata\n10000\n[root@dev-myos dumper]# cat zz.t_user-schema.sql\n/*!40101 SET NAMES binary*/;\n/*!40014 SET FOREIGN_KEY_CHECKS=0*/;\n\n/*!40103 SET TIME_ZONE=\'+00:00\' */;\nCREATE TABLE `t_user` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `c_user_id` varchar(36) NOT NULL DEFAULT \'\',\n  `c_name` varchar(22) NOT NULL DEFAULT \'\',\n  `c_province_id` int(11) NOT NULL,\n  `c_city_id` int(11) NOT NULL,\n  `create_time` datetime NOT NULL,\n  PRIMARY KEY (`id`),\n  KEY `idx_user_id` (`c_user_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8;\n')),(0,o.kt)("p",null,"\u76ee\u5f55\nmetadata\u6587\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u4e86\u5907\u4efd\u6570\u636e\u5e93\u5728\u5907\u4efd\u65f6\u95f4\u70b9\u7684\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\u540d\uff0c\u65e5\u5fd7\u7684\u5199\u5165\u4f4d\u7f6e\uff0c"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5728\u4ece\u5e93\u8fdb\u884c\u5907\u4efd\uff0c\u8fd8\u4f1a\u8bb0\u5f55\u5907\u4efd\u65f6\u540c\u6b65\u81f3\u4e3b\u5e93\u7684\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\u53ca\u5199\u5165\u4f4d\u7f6e\n\u6bcf\u4e2a\u8868\u6709\u4e24\u4e2a\u5907\u4efd\u6587\u4ef6\uff1a")),(0,o.kt)("p",null,"database-schema-create \u5e93\u521b\u5efa\u8bed\u53e5\u6587\u4ef6\ndatabase.table-schema.sql \u8868\u7ed3\u6784\u6587\u4ef6\ndatabase.table.00000.sql \u8868\u6570\u636e\u6587\u4ef6\ndatabase.table-metadata \u8868\u5143\u6570\u636e\u6587\u4ef6"),(0,o.kt)("h3",{id:"\u5907\u4efd\u539f\u7406"},"\u5907\u4efd\u539f\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b FLUSH TABLES WITH READ LOCK, \u65bd\u52a0\u5168\u5c40\u53ea\u8bfb\u9501\uff0c\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027 "),(0,o.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u70b9\u7684\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\u540d\u548c\u65e5\u5fd7\u5199\u5165\u7684\u4f4d\u7f6e\u5e76\u8bb0\u5f55\u5728metadata\u6587\u4ef6\u4e2d\uff0c\u4ee5\u4f9b\u5168\u91cf\u6062\u590d\u540e\u8ffd\u52a0binlog\u6062\u590d\u4f7f\u7528 "),(0,o.kt)("li",{parentName:"ul"},"N\u4e2a\uff08\u7ebf\u7a0b\u6570\u53ef\u4ee5\u6307\u5b9a\uff0c\u9ed8\u8ba4\u662f4\uff09dump\u7ebf\u7a0b\u628a\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u6539\u4e3a\u53ef\u91cd\u590d\u8bfb \u5e76\u5f00\u542f\u4e00\u81f4\u6027\u8bfb\u4e8b\u52a1"),(0,o.kt)("li",{parentName:"ul"},"dump non-InnoDB tables, \u9996\u5148\u5bfc\u51fa\u975e\u4e8b\u7269\u5f15\u64ce\u7684\u8868 "),(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b UNLOCK TABLES \u975e\u4e8b\u7269\u5f15\u64ce\u5907\u4efd\u5b8c\u540e\uff0c\u91ca\u653e\u5168\u5c40\u53ea\u8bfb\u9501 "),(0,o.kt)("li",{parentName:"ul"},"dump InnoDB tables, \u57fa\u4e8e\u4e8b\u7269\u5bfc\u51faInnoDB\u8868 "),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u7269\u7ed3\u675f")))}c.isMDXComponent=!0}}]);