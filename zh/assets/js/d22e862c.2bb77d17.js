"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[784],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),k=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},p=function(t){var e=k(t.components);return a.createElement(u.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),o=k(n),N=r,s=o["".concat(u,".").concat(N)]||o[N]||i[N]||l;return n?a.createElement(s,d(d({ref:e},p),{},{components:n})):a.createElement(s,d({ref:e},p))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=o;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=t,m.mdxType="string"==typeof t?t:r,d[1]=m;for(var k=2;k<l;k++)d[k]=n[k];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},10381:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return i}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),d=["components"],m={id:"date-and-time-functions",sidebar_position:6.41},u="\u65e5\u671f\u4e0e\u65f6\u95f4\u51fd\u6570",k={unversionedId:"SQL-reference/functions/date-and-time-functions",id:"SQL-reference/functions/date-and-time-functions",title:"\u65e5\u671f\u4e0e\u65f6\u95f4\u51fd\u6570",description:"| Function | Description | Example |",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/04-functions/date-and-time-functions.md",sourceDirName:"05-SQL-reference/04-functions",slug:"/SQL-reference/functions/date-and-time-functions",permalink:"/zh/docs/SQL-reference/functions/date-and-time-functions",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/04-functions/date-and-time-functions.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:6.41,frontMatter:{id:"date-and-time-functions",sidebar_position:6.41},sidebar:"autoSidebar",previous:{title:"\u8d4b\u503c\u8fd0\u7b97\u7b26",permalink:"/zh/docs/SQL-reference/operators/assignment-operators"},next:{title:"\u5b57\u7b26\u4e32\u51fd\u6570",permalink:"/zh/docs/SQL-reference/functions/string-functions"}},p={},i=[],o={toc:i};function N(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65e5\u671f\u4e0e\u65f6\u95f4\u51fd\u6570"},"\u65e5\u671f\u4e0e\u65f6\u95f4\u51fd\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Function")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Example")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADDDATE(d,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds time value (interval) ",(0,l.kt)("em",{parentName:"td"},"n")," to date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ADDDATE('2022-06-10', INTERVAL 5 DAY);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADDTIME(t,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds time ",(0,l.kt)("em",{parentName:"td"},"n")," to time ",(0,l.kt)("em",{parentName:"td"},"t"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ADDTIME('2022-06-10 10:00:00',5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10 10:00:05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CURDATE()",(0,l.kt)("br",null),"CURRENT_DATE()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current date."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT CURDATE();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIME",(0,l.kt)("br",null),"CURTIME()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current time."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT CURRENT_TIME();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->17:10:31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIMESTAMP()",(0,l.kt)("br",null),"LOCALTIME()",(0,l.kt)("br",null),"LOCALTIMESTAMP()",(0,l.kt)("br",null),"NOW()",(0,l.kt)("br",null),"SYSDATE()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current date and time."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT CURRENT_TIMESTAMP();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10 17:11:06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE()"),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts the date part of a date or datetime expression."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DATE('2022-06-10');    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATEDIFF(d1,d2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts two dates. ",(0,l.kt)("em",{parentName:"td"},"d1")," and ",(0,l.kt)("em",{parentName:"td"},"d2")," each specify a date."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DATEDIFF('2022-06-10','2021-06-10');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->365")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE_ADD(d,INTERVAL expr type)"),(0,l.kt)("td",{parentName:"tr",align:null},"Add time values (intervals) to date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"type")," can be set to ",(0,l.kt)("strong",{parentName:"td"},"SECOND"),", ",(0,l.kt)("strong",{parentName:"td"},"MINUTE"),", ",(0,l.kt)("strong",{parentName:"td"},"HOUR"),", ",(0,l.kt)("strong",{parentName:"td"},"DAY"),", ",(0,l.kt)("strong",{parentName:"td"},"WEEK"),", ",(0,l.kt)("strong",{parentName:"td"},"MONTH"),", and ",(0,l.kt)("strong",{parentName:"td"},"YEAR"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DATE_ADD('2022-06-10 17:17:21', INTERVAL -3 HOUR); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10 14:17:21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE_FORMAT(d,f)"),(0,l.kt)("td",{parentName:"tr",align:null},"Formats date ",(0,l.kt)("em",{parentName:"td"},"d")," based on expression ",(0,l.kt)("em",{parentName:"td"},"f"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DATE_FORMAT('2022-06-10 17:21:11','%Y-%m-%d %r');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10 05:21:11 PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE_SUB(date,INTERVAL expr type)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts a time value (interval) from date ",(0,l.kt)("em",{parentName:"td"},"date"),".",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"type")," can be set to ",(0,l.kt)("strong",{parentName:"td"},"SECOND"),", ",(0,l.kt)("strong",{parentName:"td"},"MINUTE"),", ",(0,l.kt)("strong",{parentName:"td"},"HOUR"),", ",(0,l.kt)("strong",{parentName:"td"},"DAY"),", ",(0,l.kt)("strong",{parentName:"td"},"WEEK"),", ",(0,l.kt)("strong",{parentName:"td"},"MONTH"),", and ",(0,l.kt)("strong",{parentName:"td"},"YEAR"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DATE_SUB(",(0,l.kt)("br",null),"CURRENT_DATE(),INTERVAL 2 DAY);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAY(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the day in date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DAY('2022-06-10');  ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAYNAME(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the name of the weekday from date** ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"d"),", for example, "),"Monday**."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DAYNAME('2022-06-10 17:30:30');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->Friday")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAYOFMONTH(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the day of the month from date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DAYOFMONTH('2022-06-10 17:31:11');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAYOFWEEK(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the weekday index from date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),"The return value ranges from 1 to 7 and value 1 indicates Sunday."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DAYOFWEEK('2022-06-10 17:35:11');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAYOFYEAR(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the day of the year from date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DAYOFYEAR('2022-06-10 18:02:11');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->161")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXTRACT(type FROM d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts part of date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"type")," can be set to ",(0,l.kt)("strong",{parentName:"td"},"SECOND"),", ",(0,l.kt)("strong",{parentName:"td"},"MINUTE"),", ",(0,l.kt)("strong",{parentName:"td"},"HOUR"),", ",(0,l.kt)("strong",{parentName:"td"},"DAY"),", ",(0,l.kt)("strong",{parentName:"td"},"WEEK"),", ",(0,l.kt)("strong",{parentName:"td"},"MONTH"),", and ",(0,l.kt)("strong",{parentName:"td"},"YEAR"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT EXTRACT(MONTH FROM '2022-06-10 18:02:33') ;",(0,l.kt)("br",null),(0,l.kt)("br",null),"->6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HOUR(t)"),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts the hour from time ",(0,l.kt)("em",{parentName:"td"},"t"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT HOUR('18:06:31');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAST_DAY(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the last day of the month from date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},'SELECT LAST_DAY("2022-06-10");',(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAKEDATE(year, day-of-year)"),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a date based on the given year and day of year. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"year")," specifies the year. ",(0,l.kt)("em",{parentName:"td"},"day-of-year")," specifies the day of year."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MAKEDATE(2022,161);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAKETIME(hour, minute, second)"),(0,l.kt)("td",{parentName:"tr",align:null},"Creates time based on the given hour, minute, and second."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MAKETIME(11,35,4);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->11:35:04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MICROSECOND(date)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the microseconds from date ",(0,l.kt)("em",{parentName:"td"},"date"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MICROSECOND('2022-06-10 18:12:00.000023');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINUTE(t)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the minute from time ",(0,l.kt)("em",{parentName:"td"},"t"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MINUTE('18:12:31');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MONTHNAME(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the name of the month from date ",(0,l.kt)("em",{parentName:"td"},"d"),", such as ",(0,l.kt)("strong",{parentName:"td"},"November"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MONTHNAME('2022-06-10 18:13:19');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->June")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MONTH(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the month from date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),"The return value ranges from 1 to 12."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MONTH('2022-06-10 18:14:11');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERIOD_ADD(period, number)"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds a period (expressed in months) to a year-month. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"period")," specifies the year-month. ",(0,l.kt)("em",{parentName:"td"},"number")," specifies the period to add."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT PERIOD_ADD(202206,5);   ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->202211")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERIOD_DIFF(period1, period2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number of months between periods."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT PERIOD_DIFF(202204,202012);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUARTER(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the quarter from date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),"The return value ranges from 1 to 4."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT QUARTER('2022-06-10 18:16:29');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SECOND(t)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the second from time ",(0,l.kt)("em",{parentName:"td"},"t"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SECOND('18:17:36');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->36")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEC_TO_TIME(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts time ",(0,l.kt)("em",{parentName:"td"},"s")," which is expressed in seconds to the hh:mm:ss format."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SEC_TO_TIME(4320);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->01:12:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STR_TO_DATE(string, format_mask)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts a string to a date."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT STR_TO_DATE('June 10 2022','%M %d %Y');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBDATE(d,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts interval ",(0,l.kt)("em",{parentName:"td"},"n")," from date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SUBDATE('2022-06-10 18:19:27',15);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-05-26 18:19:27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBTIME(t,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts period",(0,l.kt)("em",{parentName:"td"}," n")," from time ",(0,l.kt)("em",{parentName:"td"},"t"),". n is expressed in seconds."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SUBTIME('2022-06-10 18:21:11',5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10 18:21:06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME(expression)"),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts the time portion of an expression."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TIME('18:22:10');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->18:22:10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME_FORMAT(t,f)"),(0,l.kt)("td",{parentName:"tr",align:null},"Formats time ",(0,l.kt)("em",{parentName:"td"},"t")," based on expression ",(0,l.kt)("em",{parentName:"td"},"f"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TIME_FORMAT('18:22:59','%r');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->06:22:59 PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME_TO_SEC(t)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts time ",(0,l.kt)("em",{parentName:"td"},"t")," to seconds."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TIME_TO_SEC('18:24:00');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->66240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMEDIFF(time1, time2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts two points in time. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"time1")," and ",(0,l.kt)("em",{parentName:"td"},"time2")," each specify a point in time."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TIMEDIFF('18:24:11','13:10:10');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->05:14:01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(expression, interval)"),(0,l.kt)("td",{parentName:"tr",align:null},"With a single argument, this function returns the date or datetime expression. With two arguments, this function returns the sum of the arguments."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TIMESTAMP('2022-06-10',  '18:25:17');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022-06-10 18:25:17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMPDIFF(unit,datetime_expr1,datetime_expr2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtracts two datetime expressions. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"datetime_expr1")," and ",(0,l.kt)("em",{parentName:"td"},"datetime_expr2")," each specify a datetime expression. ",(0,l.kt)("em",{parentName:"td"},"unit")," specifies the unit of the return value."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null),"1. SELECT TIMESTAMPDIFF(DAY,'2020-12-23','2022-04-02');",(0,l.kt)("br",null),"    ->465",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),"2. SELECT TIMESTAMPDIFF(MONTH,'2020-12-23','2022-04-02'); ",(0,l.kt)("br",null),"   ->15",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TO_DAYS(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts date ",(0,l.kt)("em",{parentName:"td"},"d")," to the number of days since date 0000-01-01."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TO_DAYS('2022-06-10 00:00:00');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->738681")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WEEK(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the week number of date",(0,l.kt)("em",{parentName:"td"}," d"),". ",(0,l.kt)("br",null),"The return value ranges from 0 to 53."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT WEEK('2022-06-10 00:00:00');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WEEKDAY(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the weekday index of date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),"For example, return value ",(0,l.kt)("strong",{parentName:"td"},"0")," indicates Monday and ",(0,l.kt)("strong",{parentName:"td"},"1")," indicates Tuesday."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT WEEKDAY('2022-06-10');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WEEKOFYEAR(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the calendar week of date ",(0,l.kt)("em",{parentName:"td"},"d"),". ",(0,l.kt)("br",null),"The return value ranges from 0 to 53."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT WEEKOFYEAR('2022-06-10 11:11:11');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YEAR(d)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the year of date ",(0,l.kt)("em",{parentName:"td"},"d"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT YEAR('2022-06-10');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YEARWEEK(date, mode)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the year and week number (value range: 0 to 53). ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"mode")," is optional and specifies what day a week starts on. For example, return value ",(0,l.kt)("strong",{parentName:"td"},"0")," indicates Sunday and ",(0,l.kt)("strong",{parentName:"td"},"1")," indicates Monday."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT YEARWEEK('2022-06-10');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->202223")))))}N.isMDXComponent=!0}}]);