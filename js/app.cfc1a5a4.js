(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({create:"create",task:"task"}[e]||e)+"."+{create:"6d43d393",task:"4f0b1149"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={create:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({create:"create",task:"task"}[e]||e)+"."+{create:"74d79018",task:"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-todo/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"01a2":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",e._g(e._b({},"button",e.$attrs,!1),e.listeners),[e._t("default")],2)},o=[],a=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={name:"Button",computed:{listeners:function(){return s({},this.$listeners)}}},u=i,l=(n("6077"),n("2877")),f=Object(l["a"])(u,r,o,!1,null,"6c9556b8",null),d=f.exports;n.d(t,"a",(function(){return d}))},"16e2":function(e,t,n){"use strict";var r=n("da90"),o=n.n(r);o.a},4618:function(e,t,n){"use strict";var r=n("4f92"),o=n.n(r);o.a},"4f92":function(e,t,n){},"5eb3":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t={year:"numeric",month:"short",day:"numeric"};return new Date(e).toLocaleDateString("en-US",t)}},6077:function(e,t,n){"use strict";var r=n("8655"),o=n.n(r);o.a},8655:function(e,t,n){},a0fe:function(e,t,n){"use strict";var r=n("fbc0"),o=n.n(r);o.a},c712:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",[n("router-view")],1)],1)},a=[],c=n("1315"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},["home"!==e.$route.name?n("div",[n("router-link",{attrs:{to:"/"}},[e._v("back")])],1):e._e(),n("h1",[e._v("pawaTask")])])},i=[],u=(n("a0fe"),n("2877")),l={},f=Object(u["a"])(l,s,i,!1,null,"1af8b264",null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e._t("default")],2)},m=[],b=(n("fa56"),{}),h=Object(u["a"])(b,p,m,!1,null,"4176996f",null),v=h.exports;c["Settings"].defaultLocale="us";var g=r["a"].extend({name:"App",components:{Header:d,Main:v},beforeCreate:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.push(e))}}),k=g,O=(n("f565"),Object(u["a"])(k,o,a,!1,null,null,null)),y=O.exports,w=n("9483");Object(w["a"])("".concat("/vue-todo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var j=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Button",{on:{click:function(t){return e.$router.push({name:"create"})}}},[e._v("Add a nex Task")]),n("TaskList")],1)},_=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edition"},[Object.keys(e.tasks).length?n("ul",{staticClass:"tasklist"},e._l(e.tasks,(function(t,r){return n("li",{key:r,staticClass:"tasklist__item"},[n("span",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.done},on:{click:function(n){return e.markAsDone(t.id)}}}),e._v(" "+e._s(t.title)+" ")]),n("span",[n("font-awesome-icon",{attrs:{icon:e.calendarIcon}}),e._v(" "+e._s(e.formatDate(t.date))+" "),n("Button",{on:{click:function(n){return e.$router.push({name:"task",params:{taskId:t.id}})}}},[n("font-awesome-icon",{attrs:{icon:e.commentIcon}})],1),n("Button",{on:{click:function(n){return e.$router.push({name:"edit",params:{taskId:t.id}})}}},[n("font-awesome-icon",{attrs:{icon:e.editIcon}})],1),n("Button",{on:{click:function(n){return e.handleDelete(t.id)}}},[n("font-awesome-icon",{attrs:{icon:e.deleteIcon}})],1)],1)])})),0):n("p",[e._v(" You do not have any tasks, "),n("router-link",{attrs:{to:"/create"}},[e._v("add a new one")])],1)])},T=[],L=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),S=n("2f62"),D=n("ad3d"),E=n("b702"),x=n("c074"),A=n("5eb3"),C=n("01a2");function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(L["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=r["a"].extend({name:"TaskList",components:{FontAwesomeIcon:D["a"],Button:C["a"]},data:function(){return{deleteIcon:x["b"],commentIcon:E["b"],editIcon:x["a"],calendarIcon:E["a"]}},computed:B({},Object(S["e"])({tasks:function(e){return e.tasks}})),methods:B({handleDelete:function(e){var t=confirm("Remove task?");t&&this.deleteTask(e)},formatDate:A["a"]},Object(S["d"])(["deleteTask","markAsDone"]))}),M=N,H=(n("16e2"),Object(u["a"])(M,I,T,!1,null,"34826004",null)),F=H.exports,Z={name:"Home",components:{TaskList:F,Button:C["a"]}},q=Z,J=(n("4618"),Object(u["a"])(q,P,_,!1,null,"44da43ae",null)),U=J.exports;r["a"].use(j["a"]);var K,R=[{path:"/",name:"home",component:U},{path:"/create",name:"create",component:function(){return n.e("create").then(n.bind(null,"421b"))}},{path:"/edit/:taskId",name:"edit",props:!0,component:function(){return n.e("create").then(n.bind(null,"421b"))}},{path:"/task/:taskId",name:"task",props:!0,component:function(){return n.e("task").then(n.bind(null,"82bf"))}}],Y=new j["a"]({mode:"history",base:"/vue-todo/",routes:R}),z=Y,G=n("c437"),Q=n.n(G);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(L["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(function(e){e["Low"]="low",e["Medium"]="medium",e["High"]="high"})(K||(K={})),r["a"].use(S["a"]);var X=new S["a"].Store({state:{tasks:{"88aea980-31ae-11ea-a56c-15a7ed720afe":{id:"88aea980-31ae-11ea-a56c-15a7ed720afe",done:!0,title:"Task Title",description:"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ",priority:K.High,date:"2020-01-05T23:25:07.551Z",comments:[{author:"Tiago Porto",date:"2020-01-05T23:25:07.551Z",message:"First"},{author:"Tiago Porto2",date:"2020-01-05T23:25:07.551Z",message:"Second"}]},"87aea980-34ai-11ea-a76c-15a7ed720abe":{id:"87aea980-34ai-11ea-a76c-15a7ed720abe",title:"Task Title 22222",done:!1,description:"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ",priority:K.Low,date:"2020-01-05T23:25:07.551Z",comments:[{author:"Tiago Porto",date:"2020-01-05T23:25:07.551Z",message:"Third"}]}}},mutations:{markAsDone:function(e,t){var n=e.tasks[t];e.tasks[t]=W({},n,{done:!n.done})},addNewTask:function(e,t){e.tasks[t.id]=W({},t,{comments:[]})},addNewComment:function(e,t){var n=t.id,r=t.comment;e.tasks[n].comments.push(W({},r,{date:(new Date).toISOString()}))},deleteTask:function(e,t){r["a"].delete(e.tasks,t)},editTask:function(e,t){var n=e.tasks[t.id];e.tasks[t.id]=W({},n,{},t)}},actions:{addTask:function(e,t){e.state;var n=e.commit,r=Q()();return n("addNewTask",W({id:r},t)),r}},modules:{},getters:{tasksList:function(e){return e.tasks},getTaskById:function(e,t){return function(e){return t.tasksList[e]}}}});r["a"].config.productionTip=!1,new r["a"]({router:z,store:X,render:function(e){return e(y)}}).$mount("#app")},da90:function(e,t,n){},ede5:function(e,t,n){},f565:function(e,t,n){"use strict";var r=n("c712"),o=n.n(r);o.a},fa56:function(e,t,n){"use strict";var r=n("ede5"),o=n.n(r);o.a},fbc0:function(e,t,n){}});
//# sourceMappingURL=app.cfc1a5a4.js.map