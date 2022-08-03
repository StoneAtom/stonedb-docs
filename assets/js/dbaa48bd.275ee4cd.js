"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[607],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=s,b=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),r=["components"],i={id:"use-mysqldump-backup-and-restore",sidebar_position:4.31},l="Use mysqldump to Back Up or Recover StoneDB",d={unversionedId:"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",id:"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",title:"Use mysqldump to Back Up or Recover StoneDB",description:"mysqldump introduction",source:"@site/../Docs/03-O&M-Guide/01-backup-and-recovery/use-mysqldump-backup-and-restore.md",sourceDirName:"03-O&M-Guide/01-backup-and-recovery",slug:"/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",permalink:"/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/03-O&M-Guide/01-backup-and-recovery/use-mysqldump-backup-and-restore.md",tags:[],version:"current",lastUpdatedBy:"hustjieke",lastUpdatedAt:1659496788,formattedLastUpdatedAt:"8/3/2022",sidebarPosition:4.31,frontMatter:{id:"use-mysqldump-backup-and-restore",sidebar_position:4.31},sidebar:"autoSidebar",previous:{title:"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases",permalink:"/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor"},next:{title:"Use Mydumper for Full Backup",permalink:"/docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup"}},u={},c=[{value:"mysqldump introduction",id:"mysqldump-introduction",level:2},{value:"Precautions for backing up StoneDB",id:"precautions-for-backing-up-stonedb",level:2},{value:"Examples",id:"examples",level:2},{value:"Backup",id:"backup",level:3},{value:"Create databases and tables for backup and prepare test data",id:"create-databases-and-tables-for-backup-and-prepare-test-data",level:4},{value:"Use mysqldump to back up a given database",id:"use-mysqldump-to-back-up-a-given-database",level:4},{value:"Use mysqldump to back up all databases, except system databases mysql, performation_schema, and information_schema",id:"use-mysqldump-to-back-up-all-databases-except-system-databases-mysql-performation_schema-and-information_schema",level:4},{value:"Recovery",id:"recovery",level:3},{value:"Import data to StoneDB",id:"import-data-to-stonedb",level:4}],p={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-mysqldump-to-back-up-or-recover-stonedb"},"Use mysqldump to Back Up or Recover StoneDB"),(0,o.kt)("h2",{id:"mysqldump-introduction"},"mysqldump introduction"),(0,o.kt)("p",null,"mysqldump is offered by MySQL to perform logical backups. During a backup, mysqldump produces a set of SQL statements that can be executed to reproduce the original database object definitions and table data. It dumps one or more MySQL databases for backup or transfer to another SQL server. For information about how to use mysqldump, see ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/mysqldump.html"},"mysqldump \u2014 A Database Backup Program")," or the following code example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# mysqldump --help\nmysqldump  Ver 10.13 Distrib 5.6.24-StoneDB, for Linux (x86_64)\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nDumping structure and contents of MySQL databases and tables.\nUsage: mysqldump [OPTIONS] database [tables]\nOR     mysqldump [OPTIONS] --databases [OPTIONS] DB1 [DB2 DB3...]\nOR     mysqldump [OPTIONS] --all-databases [OPTIONS]\n\nDefault options are read from the following files in the given order:\n/etc/stonedb.cnf /etc/mysql/stonedb.cnf /stonedb56/install/stonedb.cnf ~/.stonedb.cnf\nThe following groups are read: mysqldump client\nThe following options may be given as the first argument:\n--print-defaults        Print the program argument list and exit.\n--no-defaults           Don't read default options from any option file,\n                        except for login file.\n--defaults-file=#       Only read default options from the given file #.\n--defaults-extra-file=# Read this file after the global files are read.\n--defaults-group-suffix=#\n                        Also read groups with concat(group, suffix)\n--login-path=#          Read this path from the login file.\n  -A, --all-databases Dump all the databases. This will be same as --databases\n                      with all databases selected.\n  -Y, --all-tablespaces\n                      Dump all the tablespaces.\n  -y, --no-tablespaces\n                      Do not dump any tablespace information.\n  --add-drop-database Add a DROP DATABASE before each create.\n  --add-drop-table    Add a DROP TABLE before each create.\n                      (Defaults to on; use --skip-add-drop-table to disable.)\n  --add-drop-trigger  Add a DROP TRIGGER before each create.\n  --add-locks         Add locks around INSERT statements.\n                      (Defaults to on; use --skip-add-locks to disable.)\n  --allow-keywords    Allow creation of column names that are keywords.\n  --apply-slave-statements\n                      Adds 'STOP SLAVE' prior to 'CHANGE MASTER' and 'START\n                      SLAVE' to bottom of dump.\n  --bind-address=name IP address to bind to.\n  --character-sets-dir=name\n                      Directory for character set files.\n  -i, --comments      Write additional information.\n                      (Defaults to on; use --skip-comments to disable.)\n  --compatible=name   Change the dump to be compatible with a given mode. By\n                      default tables are dumped in a format optimized for\n                      MySQL. Legal modes are: ansi, mysql323, mysql40,\n                      postgresql, oracle, mssql, db2, maxdb, no_key_options,\n                      no_table_options, no_field_options. One can use several\n                      modes separated by commas. Note: Requires MySQL server\n                      version 4.1.0 or higher. This option is ignored with\n                      earlier server versions.\n  --compact           Give less verbose output (useful for debugging). Disables\n                      structure comments and header/footer constructs.  Enables\n                      options --skip-add-drop-table --skip-add-locks\n                      --skip-comments --skip-disable-keys --skip-set-charset.\n  -c, --complete-insert\n                      Use complete insert statements.\n  -C, --compress      Use compression in server/client protocol.\n  -a, --create-options\n                      Include all MySQL specific create options.\n                      (Defaults to on; use --skip-create-options to disable.)\n  -B, --databases     Dump several databases. Note the difference in usage; in\n                      this case no tables are given. All name arguments are\n                      regarded as database names. 'USE db_name;' will be\n                      included in the output.\n  -#, --debug[=#]     This is a non-debug version. Catch this and exit.\n  --debug-check       Check memory and open file usage at exit.\n  --debug-info        Print some debug info at exit.\n  --default-character-set=name\n                      Set the default character set.\n  --delayed-insert    Insert rows with INSERT DELAYED.\n  --delete-master-logs\n                      Delete logs on master after backup. This automatically\n                      enables --master-data.\n  -K, --disable-keys  '/*!40000 ALTER TABLE tb_name DISABLE KEYS */; and\n                      '/*!40000 ALTER TABLE tb_name ENABLE KEYS */; will be put\n                      in the output.\n                      (Defaults to on; use --skip-disable-keys to disable.)\n  --dump-slave[=#]    This causes the binary log position and filename of the\n                      master to be appended to the dumped data output. Setting\n                      the value to 1, will printit as a CHANGE MASTER command\n                      in the dumped data output; if equal to 2, that command\n                      will be prefixed with a comment symbol. This option will\n                      turn --lock-all-tables on, unless --single-transaction is\n                      specified too (in which case a global read lock is only\n                      taken a short time at the beginning of the dump - don't\n                      forget to read about --single-transaction below). In all\n                      cases any action on logs will happen at the exact moment\n                      of the dump.Option automatically turns --lock-tables off.\n  -E, --events        Dump events.\n  -e, --extended-insert\n                      Use multiple-row INSERT syntax that include several\n                      VALUES lists.\n                      (Defaults to on; use --skip-extended-insert to disable.)\n  --fields-terminated-by=name\n                      Fields in the output file are terminated by the given\n                      string.\n  --fields-enclosed-by=name\n                      Fields in the output file are enclosed by the given\n                      character.\n  --fields-optionally-enclosed-by=name\n                      Fields in the output file are optionally enclosed by the\n                      given character.\n  --fields-escaped-by=name\n                      Fields in the output file are escaped by the given\n                      character.\n  -F, --flush-logs    Flush logs file in server before starting dump. Note that\n                      if you dump many databases at once (using the option\n                      --databases= or --all-databases), the logs will be\n                      flushed for each database dumped. The exception is when\n                      using --lock-all-tables or --master-data: in this case\n                      the logs will be flushed only once, corresponding to the\n                      moment all tables are locked. So if you want your dump\n                      and the log flush to happen at the same exact moment you\n                      should use --lock-all-tables or --master-data with\n                      --flush-logs.\n  --flush-privileges  Emit a FLUSH PRIVILEGES statement after dumping the mysql\n                      database.  This option should be used any time the dump\n                      contains the mysql database and any other database that\n                      depends on the data in the mysql database for proper\n                      restore.\n  -f, --force         Continue even if we get an SQL error.\n  -?, --help          Display this help message and exit.\n  --hex-blob          Dump binary strings (BINARY, VARBINARY, BLOB) in\n                      hexadecimal format.\n  -h, --host=name     Connect to host.\n  --ignore-table=name Do not dump the specified table. To specify more than one\n                      table to ignore, use the directive multiple times, once\n                      for each table.  Each table must be specified with both\n                      database and table names, e.g.,\n                      --ignore-table=database.table.\n  --include-master-host-port\n                      Adds 'MASTER_HOST=<host>, MASTER_PORT=<port>' to 'CHANGE\n                      MASTER TO..' in dump produced with --dump-slave.\n  --insert-ignore     Insert rows with INSERT IGNORE.\n  --lines-terminated-by=name\n                      Lines in the output file are terminated by the given\n                      string.\n  -x, --lock-all-tables\n                      Locks all tables across all databases. This is achieved\n                      by taking a global read lock for the duration of the\n                      whole dump. Automatically turns --single-transaction and\n                      --lock-tables off.\n  -l, --lock-tables   Lock all tables for read.\n                      (Defaults to on; use --skip-lock-tables to disable.)\n  --log-error=name    Append warnings and errors to given file.\n  --master-data[=#]   This causes the binary log position and filename to be\n                      appended to the output. If equal to 1, will print it as a\n                      CHANGE MASTER command; if equal to 2, that command will\n                      be prefixed with a comment symbol. This option will turn\n                      --lock-all-tables on, unless --single-transaction is\n                      specified too (in which case a global read lock is only\n                      taken a short time at the beginning of the dump; don't\n                      forget to read about --single-transaction below). In all\n                      cases, any action on logs will happen at the exact moment\n                      of the dump. Option automatically turns --lock-tables\n                      off.\n  --max-allowed-packet=#\n                      The maximum packet length to send to or receive from\n                      server.\n  --net-buffer-length=#\n                      The buffer size for TCP/IP and socket communication.\n  --no-autocommit     Wrap tables with autocommit/commit statements.\n  -n, --no-create-db  Suppress the CREATE DATABASE ... IF EXISTS statement that\n                      normally is output for each dumped database if\n                      --all-databases or --databases is given.\n  -t, --no-create-info\n                      Don't write table creation info.\n  -d, --no-data       No row information.\n  -N, --no-set-names  Same as --skip-set-charset.\n  --opt               Same as --add-drop-table, --add-locks, --create-options,\n                      --quick, --extended-insert, --lock-tables, --set-charset,\n                      and --disable-keys. Enabled by default, disable with\n                      --skip-opt.\n  --order-by-primary  Sorts each table's rows by primary key, or first unique\n                      key, if such a key exists.  Useful when dumping a MyISAM\n                      table to be loaded into an InnoDB table, but will make\n                      the dump itself take considerably longer.\n  -p, --password[=name]\n                      Password to use when connecting to server. If password is\n                      not given it's solicited on the tty.\n  -P, --port=#        Port number to use for connection.\n  --protocol=name     The protocol to use for connection (tcp, socket, pipe,\n                      memory).\n  -q, --quick         Don't buffer query, dump directly to stdout.\n                      (Defaults to on; use --skip-quick to disable.)\n  -Q, --quote-names   Quote table and column names with backticks (`).\n                      (Defaults to on; use --skip-quote-names to disable.)\n  --replace           Use REPLACE INTO instead of INSERT INTO.\n  -r, --result-file=name\n                      Direct output to a given file. This option should be used\n                      in systems (e.g., DOS, Windows) that use carriage-return\n                      linefeed pairs (\\r\\n) to separate text lines. This option\n                      ensures that only a single newline is used.\n  -R, --routines      Dump stored routines (functions and procedures).\n  --set-charset       Add 'SET NAMES default_character_set' to the output.\n                      (Defaults to on; use --skip-set-charset to disable.)\n  --set-gtid-purged[=name]\n                      Add 'SET @@GLOBAL.GTID_PURGED' to the output. Possible\n                      values for this option are ON, OFF and AUTO. If ON is\n                      used and GTIDs are not enabled on the server, an error is\n                      generated. If OFF is used, this option does nothing. If\n                      AUTO is used and GTIDs are enabled on the server, 'SET\n                      @@GLOBAL.GTID_PURGED' is added to the output. If GTIDs\n                      are disabled, AUTO does nothing. If no value is supplied\n                      then the default (AUTO) value will be considered.\n  --single-transaction\n                      Creates a consistent snapshot by dumping all tables in a\n                      single transaction. Works ONLY for tables stored in\n                      storage engines which support multiversioning (currently\n                      only InnoDB does); the dump is NOT guaranteed to be\n                      consistent for other storage engines. While a\n                      --single-transaction dump is in process, to ensure a\n                      valid dump file (correct table contents and binary log\n                      position), no other connection should use the following\n                      statements: ALTER TABLE, DROP TABLE, RENAME TABLE,\n                      TRUNCATE TABLE, as consistent snapshot is not isolated\n                      from them. Option automatically turns off --lock-tables.\n  --dump-date         Put a dump date to the end of the output.\n                      (Defaults to on; use --skip-dump-date to disable.)\n  --skip-opt          Disable --opt. Disables --add-drop-table, --add-locks,\n                      --create-options, --quick, --extended-insert,\n                      --lock-tables, --set-charset, and --disable-keys.\n  -S, --socket=name   The socket file to use for connection.\n  --secure-auth       Refuse client connecting to server if it uses old\n                      (pre-4.1.1) protocol.\n                      (Defaults to on; use --skip-secure-auth to disable.)\n  --ssl               Enable SSL for connection (automatically enabled with\n                      other flags).\n  --ssl-ca=name       CA file in PEM format (check OpenSSL docs, implies\n                      --ssl).\n  --ssl-capath=name   CA directory (check OpenSSL docs, implies --ssl).\n  --ssl-cert=name     X509 cert in PEM format (implies --ssl).\n  --ssl-cipher=name   SSL cipher to use (implies --ssl).\n  --ssl-key=name      X509 key in PEM format (implies --ssl).\n  --ssl-crl=name      Certificate revocation list (implies --ssl).\n  --ssl-crlpath=name  Certificate revocation list path (implies --ssl).\n  --ssl-verify-server-cert\n                      Verify server's \"Common Name\" in its cert against\n                      hostname used when connecting. This option is disabled by\n                      default.\n  -T, --tab=name      Create tab-separated textfile for each table to given\n                      path. (Create .sql and .txt files.) NOTE: This only works\n                      if mysqldump is run on the same machine as the mysqld\n                      server.\n  --tables            Overrides option --databases (-B).\n  --triggers          Dump triggers for each dumped table.\n                      (Defaults to on; use --skip-triggers to disable.)\n  --tz-utc            SET TIME_ZONE='+00:00' at top of dump to allow dumping of\n                      TIMESTAMP data when a server has data in different time\n                      zones or data is being moved between servers with\n                      different time zones.\n                      (Defaults to on; use --skip-tz-utc to disable.)\n  -u, --user=name     User for login if not current user.\n  -v, --verbose       Print info about the various stages.\n  -V, --version       Output version information and exit.\n  -w, --where=name    Dump only selected records. Quotes are mandatory.\n  -X, --xml           Dump a database as well formed XML.\n  --plugin-dir=name   Directory for client-side plugins.\n  --default-auth=name Default authentication client-side plugin to use.\n\nVariables (--variable-name=value)\nand boolean options {FALSE|TRUE}  Value (after reading options)\n--------------------------------- ----------------------------------------\nall-databases                     FALSE\nall-tablespaces                   FALSE\nno-tablespaces                    FALSE\nadd-drop-database                 FALSE\nadd-drop-table                    TRUE\nadd-drop-trigger                  FALSE\nadd-locks                         TRUE\nallow-keywords                    FALSE\napply-slave-statements            FALSE\nbind-address                      (No default value)\ncharacter-sets-dir                (No default value)\ncomments                          TRUE\ncompatible                        (No default value)\ncompact                           FALSE\ncomplete-insert                   FALSE\ncompress                          FALSE\ncreate-options                    TRUE\ndatabases                         FALSE\ndebug-check                       FALSE\ndebug-info                        FALSE\ndefault-character-set             utf8\ndelayed-insert                    FALSE\ndelete-master-logs                FALSE\ndisable-keys                      TRUE\ndump-slave                        0\nevents                            FALSE\nextended-insert                   TRUE\nfields-terminated-by              (No default value)\nfields-enclosed-by                (No default value)\nfields-optionally-enclosed-by     (No default value)\nfields-escaped-by                 (No default value)\nflush-logs                        FALSE\nflush-privileges                  FALSE\nforce                             FALSE\nhex-blob                          FALSE\nhost                              (No default value)\ninclude-master-host-port          FALSE\ninsert-ignore                     FALSE\nlines-terminated-by               (No default value)\nlock-all-tables                   FALSE\nlock-tables                       TRUE\nlog-error                         (No default value)\nmaster-data                       0\nmax-allowed-packet                536870912\nnet-buffer-length                 1046528\nno-autocommit                     FALSE\nno-create-db                      FALSE\nno-create-info                    FALSE\nno-data                           FALSE\norder-by-primary                  FALSE\nport                              3308\nquick                             TRUE\nquote-names                       TRUE\nreplace                           FALSE\nroutines                          FALSE\nset-charset                       TRUE\nsingle-transaction                FALSE\ndump-date                         TRUE\nsocket                            /stonedb56/install/tmp/mysql.sock\nsecure-auth                       TRUE\nssl                               FALSE\nssl-ca                            (No default value)\nssl-capath                        (No default value)\nssl-cert                          (No default value)\nssl-cipher                        (No default value)\nssl-key                           (No default value)\nssl-crl                           (No default value)\nssl-crlpath                       (No default value)\nssl-verify-server-cert            FALSE\ntab                               (No default value)\ntriggers                          TRUE\ntz-utc                            TRUE\nuser                              (No default value)\nverbose                           FALSE\nwhere                             (No default value)\nplugin-dir                        (No default value)\ndefault-auth                      (No default value)\n")),(0,o.kt)("h2",{id:"precautions-for-backing-up-stonedb"},"Precautions for backing up StoneDB"),(0,o.kt)("p",null,"StoneDB does not support ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCK TABLES")," operations. Therefore, when you back up StoneDB, you must add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-opt")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-add-locks")," parameter to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCK TABLES\u2026 WRITE")," statement from the backup file. Otherwise, backup data cannot be imported to StoneDB."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"backup"},"Backup"),(0,o.kt)("h4",{id:"create-databases-and-tables-for-backup-and-prepare-test-data"},"Create databases and tables for backup and prepare test data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# /stonedb56/install/bin/mysql -uroot -p***** -P3306\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 878\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> create database dumpdb;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| dumpdb             |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n8 rows in set (0.00 sec)\n\nmysql> use dumpdb\nDatabase changed\n\nmysql> create table dumptb(id int primary key,vname varchar(20))engine=StoneDB;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into dumpdb.dumptb(id,vname) values(1,'zhangsan'),(2,'lisi'),(3,'wangwu');\nQuery OK, 3 rows affected (0.00 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from dumpdb.dumptb;\n+----+----------+\n| id | vname    |\n+----+----------+\n|  1 | zhangsan |\n|  2 | lisi     |\n|  3 | wangwu   |\n+----+----------+\n3 rows in set (0.01 sec)\n\n\n")),(0,o.kt)("h4",{id:"use-mysqldump-to-back-up-a-given-database"},"Use mysqldump to back up a given database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/stonedb56/install/bin/mysqldump  -uroot -p***** -P3306 --skip-opt --master-data=2 --single-transaction --set-gtid-purged=off  --databases dumpdb > /tmp/dumpdb.sql\n")),(0,o.kt)("h4",{id:"use-mysqldump-to-back-up-all-databases-except-system-databases-mysql-performation_schema-and-information_schema"},"Use mysqldump to back up all databases, except system databases mysql, performation_schema, and information_schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/stonedb56/install/bin/mysql  -uroot -p****** -P3306 -e "show databases;" | grep -Ev "sys|performance_schema|information_schema|Database|test" | xargs /stonedb56/install/bin/mysqldump  -uroot -p****** -P3306 --master-data=1 --skip-opt --databases > /tmp/ig_sysdb.sql\n')),(0,o.kt)("h3",{id:"recovery"},"Recovery"),(0,o.kt)("h4",{id:"import-data-to-stonedb"},"Import data to StoneDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/stonedb56/install/bin/mysql  -uroot -p****** -P3306 dumpdb < /tmp/dumpdb.sql\n")))}m.isMDXComponent=!0}}]);