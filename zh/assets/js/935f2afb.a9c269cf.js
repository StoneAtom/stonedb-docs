"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"autoSidebar":[{"type":"category","label":"About StoneDB","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"StoneDB\u7b80\u4ecb","href":"/zh/docs/about-stonedb/intro","docId":"about-stonedb/intro"},{"type":"link","label":"\u6574\u4f53\u67b6\u6784","href":"/zh/docs/about-stonedb/architecture","docId":"about-stonedb/architecture"},{"type":"link","label":"\u4f7f\u7528\u9650\u5236","href":"/zh/docs/about-stonedb/limits","docId":"about-stonedb/limits"},{"type":"link","label":"\u5e38\u89c1\u672f\u8bed\u4ecb\u7ecd","href":"/zh/docs/about-stonedb/terms","docId":"about-stonedb/terms"}]},{"type":"category","label":"Environment Requirements","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u8f6f\u786c\u4ef6\u73af\u5883\u63a8\u8350","href":"/zh/docs/environment-requirements/supported-servers-and-oss","docId":"environment-requirements/supported-servers-and-oss"},{"type":"link","label":"Server Configuration Requirements","href":"/zh/docs/environment-requirements/server-configuration-requirements","docId":"environment-requirements/server-configuration-requirements"}]},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5feb\u901f\u90e8\u7f72","href":"/zh/docs/getting-started/quick-deployment","docId":"getting-started/quick-deployment"},{"type":"link","label":"\u5feb\u901f\u4e0a\u624b","href":"/zh/docs/getting-started/quick-start","docId":"getting-started/quick-start"},{"type":"link","label":"Basic Operations","href":"/zh/docs/getting-started/basic-operations","docId":"getting-started/basic-operations"}]},{"type":"category","label":"O&M Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5e38\u89c4\u53d8\u66f4","href":"/zh/docs/O&M-Guide/regular-change-operations","docId":"O&M-Guide/regular-change-operations"},{"type":"category","label":"Monitoring and Alerting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases","href":"/zh/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor","docId":"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor"}]},{"type":"category","label":"Backup and Recovery","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Use mysqldump to Back Up or Recover StoneDB","href":"/zh/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore","docId":"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore"},{"type":"link","label":"Use Mydumper for Full Backup","href":"/zh/docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup","docId":"O&M-Guide/backup-and-recovery/use-mydumper-full-backup"}]}]},{"type":"category","label":"Developer Guide","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Compiling Methods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/zh/docs/developer-guide/compiling-methods/compile-overview","docId":"developer-guide/compiling-methods/compile-overview"},{"type":"link","label":"Compile StoneDB on CentOS 7","href":"/zh/docs/developer-guide/compiling-methods/compile-using-centos7","docId":"developer-guide/compiling-methods/compile-using-centos7"},{"type":"link","label":"Compile StoneDB on RHEL 7","href":"/zh/docs/developer-guide/compiling-methods/compile-using-redhat7","docId":"developer-guide/compiling-methods/compile-using-redhat7"},{"type":"link","label":"Compile StoneDB on Ubuntu 20.04","href":"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04","docId":"developer-guide/compiling-methods/compile-using-ubuntu20.04"},{"type":"link","label":"Compile StoneDB in a Docker Container","href":"/zh/docs/developer-guide/compiling-methods/compile-using-docker","docId":"developer-guide/compiling-methods/compile-using-docker"}]}]},{"type":"link","label":"\u5373\u5c06\u53d1\u5e03","href":"/zh/docs/download","docId":"download"}]},"docs":{"about-stonedb/architecture":{"id":"about-stonedb/architecture","title":"\u6574\u4f53\u67b6\u6784","description":"","sidebar":"autoSidebar"},"about-stonedb/intro":{"id":"about-stonedb/intro","title":"StoneDB\u7b80\u4ecb","description":"StoneDB\u662f\u7531\u77f3\u539f\u5b50\u79d1\u6280\u516c\u53f8\u81ea\u4e3b\u8bbe\u8ba1\u3001\u7814\u53d1\u7684\u56fd\u5185\u9996\u6b3e\u57fa\u4e8eMySQL\u5185\u6838\u6253\u9020\u7684\u5f00\u6e90HTAP\uff08Hybrid Transactional and Analytical Processing\uff09\u878d\u5408\u578b\u6570\u636e\u5e93\uff0c\u53ef\u5b9e\u73b0\u4e0eMySQL\u7684\u65e0\u7f1d\u5207\u6362\u3002StoneDB\u5177\u5907\u8d85\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u5206\u6790\u7b49\u7279\u70b9\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0fHTAP\u89e3\u51b3\u65b9\u6848\u3002","sidebar":"autoSidebar"},"about-stonedb/limits":{"id":"about-stonedb/limits","title":"\u4f7f\u7528\u9650\u5236","description":"\u7531\u4e8eStoneDB\u662f\u5728\u539f\u751f\u7684MySQL\u4e2d\u52a0\u5165\u7684\u5b58\u50a8\u5f15\u64ce\uff0c\u56e0\u6b64\u662f\u9ad8\u5ea6\u517c\u5bb9MySQL 5.6\u30015.7\u534f\u8bae\u548cMySQL\u751f\u6001\u7b49\u91cd\u8981\u7279\u6027\uff0c\u652f\u6301MySQL\u5e38\u7528\u7684\u529f\u80fd\u53ca\u8bed\u6cd5\uff0c\u4f46\u7531\u4e8eStoneDB\u672c\u8eab\u7684\u4e00\u4e9b\u7279\u6027\uff0c\u90e8\u5206\u64cd\u4f5c\u548c\u529f\u80fd\u5c1a\u672a\u5f97\u5230\u652f\u6301\uff0c\u4ee5\u4e0b\u5217\u51fa\u7684\u662f\u4e0d\u517c\u5bb9MySQL\u7684\u64cd\u4f5c\u548c\u529f\u80fd\u3002","sidebar":"autoSidebar"},"about-stonedb/terms":{"id":"about-stonedb/terms","title":"\u5e38\u89c1\u672f\u8bed\u4ecb\u7ecd","description":"","sidebar":"autoSidebar"},"developer-guide/compiling-methods/compile-overview":{"id":"developer-guide/compiling-methods/compile-overview","title":"Overview","description":"The method to compile StoneDB varies with the environment. Choose the compiling method that suits your environment.","sidebar":"autoSidebar"},"developer-guide/compiling-methods/compile-using-centos7":{"id":"developer-guide/compiling-methods/compile-using-centos7","title":"Compile StoneDB on CentOS 7","description":"This topic describes how to compile StoneDB on CentOS 7.","sidebar":"autoSidebar"},"developer-guide/compiling-methods/compile-using-docker":{"id":"developer-guide/compiling-methods/compile-using-docker","title":"Compile StoneDB in a Docker Container","description":"","sidebar":"autoSidebar"},"developer-guide/compiling-methods/compile-using-redhat7":{"id":"developer-guide/compiling-methods/compile-using-redhat7","title":"Compile StoneDB on RHEL 7","description":"This topic describes how to compile StoneDB on Red Hat Enterprise Linux (RHEL) 7.","sidebar":"autoSidebar"},"developer-guide/compiling-methods/compile-using-ubuntu20.04":{"id":"developer-guide/compiling-methods/compile-using-ubuntu20.04","title":"Compile StoneDB on Ubuntu 20.04","description":"","sidebar":"autoSidebar"},"download":{"id":"download","title":"\u5373\u5c06\u53d1\u5e03","description":"\u53d1\u5e03\u65f6\u95f4\uff1a2022\u5e746\u670830\u65e5","sidebar":"autoSidebar"},"environment-requirements/server-configuration-requirements":{"id":"environment-requirements/server-configuration-requirements","title":"Server Configuration Requirements","description":"This topic describes the configuration requirements for a development or test environment and a production environment.","sidebar":"autoSidebar"},"environment-requirements/supported-servers-and-oss":{"id":"environment-requirements/supported-servers-and-oss","title":"\u8f6f\u786c\u4ef6\u73af\u5883\u63a8\u8350","description":"","sidebar":"autoSidebar"},"getting-started/basic-operations":{"id":"getting-started/basic-operations","title":"Basic Operations","description":"Structured Query Language (SQL) is a programming language for communicating with databases. You can use it to manage relational databases by performing insert, query, update, and other operations.","sidebar":"autoSidebar"},"getting-started/quick-deployment":{"id":"getting-started/quick-deployment","title":"\u5feb\u901f\u90e8\u7f72","description":"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002","sidebar":"autoSidebar"},"getting-started/quick-start":{"id":"getting-started/quick-start","title":"\u5feb\u901f\u4e0a\u624b","description":"\u672c\u6587\u7684\u76ee\u7684\u662f\u901a\u8fc7\u7b80\u5355\u7684\u6f14\u793a\uff0c\u8ba9\u4f7f\u7528\u8005\u4f53\u9a8cStoneDB\u5728\u5927\u6279\u91cf\u6570\u636e\u63d2\u5165\u3001\u6570\u636e\u538b\u7f29\u6bd4\u548c\u5206\u6790\u67e5\u8be2\u65b9\u9762\u4e0eInnoDB\u76f8\u6bd4\u5177\u6709\u8f83\u9ad8\u7684\u6027\u80fd\u3002","sidebar":"autoSidebar"},"O&M-Guide/backup-and-recovery/use-mydumper-full-backup":{"id":"O&M-Guide/backup-and-recovery/use-mydumper-full-backup","title":"Use Mydumper for Full Backup","description":"Mydumper introduction","sidebar":"autoSidebar"},"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore":{"id":"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore","title":"Use mysqldump to Back Up or Recover StoneDB","description":"mysqldump introduction","sidebar":"autoSidebar"},"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor":{"id":"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor","title":"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases","description":"","sidebar":"autoSidebar"},"O&M-Guide/regular-change-operations":{"id":"O&M-Guide/regular-change-operations","title":"\u5e38\u89c4\u53d8\u66f4","description":"\u8868\u7ed3\u6784\u53d8\u66f4","sidebar":"autoSidebar"}}}')}}]);