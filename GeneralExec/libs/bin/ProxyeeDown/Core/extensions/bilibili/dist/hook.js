!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=93)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(33)("wks"),o=n(34),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var d=n(0),y=n(2),m=n(6),g=n(5),x=n(12),w="prototype",_=function(t,e,n){var r,o,i,u=t&_.F,c=t&_.G,a=t&_.S,s=t&_.P,f=t&_.B,l=t&_.W,p=c?y:y[e]||(y[e]={}),h=p[w],v=c?d:a?d[e]:(d[e]||{})[w];for(r in c&&(n=e),n)(o=!u&&v&&void 0!==v[r])&&x(p,r)||(i=o?v[r]:n[r],p[r]=c&&"function"!=typeof v[r]?n[r]:f&&o?m(i,d):l&&v[r]==i?function(r){var t=function(t,e,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,e)}return new r(t,e,n)}return r.apply(this,arguments)};return t[w]=r[w],t}(i):s&&"function"==typeof i?m(Function.call,i):i,s&&((p.virtual||(p.virtual={}))[r]=i,t&_.R&&h&&!h[r]&&g(h,r,i)))};_.F=1,_.G=2,_.S=4,_.P=8,_.B=16,_.W=32,_.U=64,_.R=128,t.exports=_},function(t,e,n){var r=n(7),o=n(20);t.exports=n(9)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(11);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},function(t,e,n){var r=n(3),o=n(52),i=n(53),u=Object.defineProperty;e.f=n(9)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(8),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(32),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(15),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(33)("keys"),o=n(34);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(7).f,o=n(12),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var o=n(11);function r(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=o(n),this.reject=o(r)}t.exports.f=function(t){return new r(t)}},function(t,e,n){t.exports=n(47)},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(14),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var c=t.apply(this,arguments);return new a.default(function(i,u){return function e(t,n){try{var r=c[t](n),o=r.value}catch(t){return void u(t)}if(!r.done)return a.default.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});i(o)}("next")})}}},function(t,e,n){"use strict";var r=n(51)(!0);n(30)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var x=n(17),w=n(4),_=n(54),b=n(5),j=n(10),O=n(55),T=n(24),S=n(61),L=n(1)("iterator"),k=!([].keys&&"next"in[].keys()),P="values",E=function(){return this};t.exports=function(t,e,n,r,o,i,u){O(n,e,r);var c,a,s,f=function(t){if(!k&&t in v)return v[t];switch(t){case"keys":case P:return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",p=o==P,h=!1,v=t.prototype,d=v[L]||v["@@iterator"]||o&&v[o],y=d||f(o),m=o?p?f("entries"):y:void 0,g="Array"==e&&v.entries||d;if(g&&(s=S(g.call(new t)))!==Object.prototype&&s.next&&(T(s,l,!0),x||"function"==typeof s[L]||b(s,L,E)),p&&d&&d.name!==P&&(h=!0,y=function(){return d.call(this)}),x&&!u||!k&&!h&&v[L]||b(v,L,y),j[e]=y,j[l]=E,o)if(c={values:p?y:f(P),keys:i?y:f("keys"),entries:m},u)for(a in c)a in v||_(v,a,c[a]);else w(w.P+w.F*(k||h),e,c);return c}},function(t,e,n){var r=n(58),o=n(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(2),o=n(0),i="__core-js_shared__",u=o[i]||(o[i]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var o=n(13),i=n(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var i=n(3);t.exports=function(e,t,n,r){try{return r?t(i(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&i(o.call(e)),t}}},function(t,e,n){var r=n(10),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(37),o=n(1)("iterator"),i=n(10);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var o=n(3),i=n(11),u=n(1)("species");t.exports=function(t,e){var n,r=o(t).constructor;return void 0===r||null==(n=o(r)[u])?e:i(n)}},function(t,e,n){var r,o,i,u=n(6),c=n(69),a=n(36),s=n(19),f=n(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,m={},g="onreadystatechange",x=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},w=function(t){x.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),e)},r(y),y},h=function(t){delete m[t]},"process"==n(13)(l)?r=function(t){l.nextTick(u(x,t,1))}:d&&d.now?r=function(t){d.now(u(x,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=w,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",w,!1)):r=g in s("script")?function(t){a.appendChild(s("script"))[g]=function(){a.removeChild(this),x.call(t)}}:function(t){setTimeout(u(x,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(8),i=n(26);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(1)("iterator"),u=!1;try{var r=[7][i]();r.return=function(){u=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!u)return!1;var n=!1;try{var r=[7],o=r[i]();o.next=function(){return{done:n=!0}},r[i]=function(){return o},t(r)}catch(t){}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jQuery=void 0;var c=o(n(77)),a=o(n(84)),r=o(n(14));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(o,i,u){return new r.default(function(e,n){var t;if(pdown)if(pdown[o])(t=pdown)[o].apply(t,(0,a.default)(u).concat([function(t){return e(t)},function(t){return n(t)}]));else if(pdown[i])try{var r;e((r=pdown)[i].apply(r,(0,a.default)(u)))}catch(t){n(t)}})};e.default={resolve:function(t){return i("resolveAsync","resolve",[t])},createTask:function(t){return i("createTaskAsync","createTask",[t])},pushTask:function(t){return i("pushTask","",[t])},refreshTask:function(t,e){return i("refreshTaskAsync","refreshTask",[t,e])},pauseTask:function(t){return i("pauseTaskAsync","pauseTask",[t])},resumeTask:function(t){return i("resumeTaskAsync","resumeTask",[t])},deleteTask:function(t,e){return i("deleteTaskAsync","deleteTask",[t,e])},getDownConfig:function(){return i("getDownConfigAsync","getDownConfig",[])},getCookie:function(t){return i("getCookieAsync","getCookie",[t||"/"])}};e.jQuery=window.jQuery||{ajax:function(){var t=void 0;2==arguments.length?(t=arguments[1]).url=arguments[0]:t=arguments[0];var e=new XMLHttpRequest,n=(0,c.default)({method:"GET",url:t.url,contentType:"application/x-www-form-urlencoded; charset=UTF-8",headers:{},data:null,dataType:null,success:function(){},error:function(){},complete:function(){}},t),r=!1;for(var o in"POST"!==n.method.toUpperCase&&"PUT"!==n.method.toUpperCase||(e.setRequestHeader("Content-Type",n.contentType),r=!0),document.cookie&&e.setRequestHeader("Cookie",document.cookie),n.headers)e.setRequestHeader(o,n.headers[o]);e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){var t=e.responseText;n.dataType?"JSON"===n.dataType.toUpperCase()&&(t=JSON.parse(t)):e.getResponseHeader("content-type").match(/^.*json.*$/i)&&(t=JSON.parse(t)),n.success(t,e.status,e)}else n.error(e,e.status);n.complete(e,e.status)}};var i=void 0;if(n.data)if("[object Object]"===n.data.toString())for(var u in i="",n.data)i&&(i+="&"),i+=u+"="+n.data[u];else i=n.data;r?(e.open(n.method,n.url),e.send(i||null)):(-1===n.url.indexOf("?")&&(n.url+="?"),-1!==n.url.indexOf("&")&&(n.url+="&"),n.url+=i,e.open(n.method,n.url),e.send())}}},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&0<=Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(48),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(A,t){!function(t){"use strict";var a,e=Object.prototype,s=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag",u="object"==typeof A,c=t.regeneratorRuntime;if(c)u&&(A.exports=c);else{(c=t.regeneratorRuntime=u?A.exports:{}).wrap=x;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={},f={};f[o]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(E([])));m&&m!==e&&s.call(m,o)&&(f=m);var g=j.prototype=_.prototype=Object.create(f);b.prototype=g.constructor=j,j.constructor=b,j[i]=b.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(g),t},c.awrap=function(t){return{__await:t}},O(T.prototype),T.prototype[r]=function(){return this},c.AsyncIterator=T,c.async=function(t,e,n,r){var o=new T(x(t,e,n,r));return c.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(g),g[i]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},c.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},c.values=E,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=a),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var u=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=a),d}}}function x(t,e,n,r){var i,u,c,a,o=e&&e.prototype instanceof _?e:_,s=Object.create(o.prototype),f=new P(r||[]);return s._invoke=(i=t,u=n,c=f,a=l,function(t,e){if(a===h)throw new Error("Generator is already running");if(a===v){if("throw"===t)throw e;return M()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=S(n,c);if(r){if(r===d)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(a===l)throw a=v,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);a=h;var o=w(i,u,c);if("normal"===o.type){if(a=c.done?v:p,o.arg===d)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(a=v,c.method="throw",c.arg=o.arg)}}),s}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function b(){}function j(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(a){var e;this._invoke=function(n,r){function t(){return new Promise(function(t,e){!function e(t,n,r,o){var i=w(a[t],a,n);if("throw"!==i.type){var u=i.arg,c=u.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):Promise.resolve(c).then(function(t){u.value=t,r(u)},o)}o(i.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function S(t,e){var n=t.iterator[e.method];if(n===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=w(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(s.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=a,t.done=!0,t};return r.next=r}}return{next:M}}function M(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){n(50),n(29),n(62),n(66),n(74),n(75),t.exports=n(2).Promise},function(t,e){},function(t,e,n){var a=n(15),s=n(16);t.exports=function(c){return function(t,e){var n,r,o=String(s(t)),i=a(e),u=o.length;return i<0||u<=i?c?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===u||(r=o.charCodeAt(i+1))<56320||57343<r?c?o.charAt(i):n:c?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}}},function(t,e,n){t.exports=!n(9)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(8);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var r=n(56),o=n(20),i=n(24),u={};n(5)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,r){var o=r(3),i=r(57),u=r(35),c=r(23)("IE_PROTO"),a=function(){},s="prototype",f=function(){var t,e=r(19)("iframe"),n=u.length;for(e.style.display="none",r(36).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f[s][u[n]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[s]=o(t),n=new a,a[s]=null,n[c]=t):n=f(),void 0===e?n:i(n,e)}},function(t,e,n){var u=n(7),c=n(3),a=n(31);t.exports=n(9)?Object.defineProperties:function(t,e){c(t);for(var n,r=a(e),o=r.length,i=0;i<o;)u.f(t,n=r[i++],e[n]);return t}},function(t,e,n){var u=n(12),c=n(21),a=n(59)(!1),s=n(23)("IE_PROTO");t.exports=function(t,e){var n,r=c(t),o=0,i=[];for(n in r)n!=s&&u(r,n)&&i.push(n);for(;e.length>o;)u(r,n=e[o++])&&(~a(i,n)||i.push(n));return i}},function(t,e,n){var a=n(21),s=n(22),f=n(60);t.exports=function(c){return function(t,e,n){var r,o=a(t),i=s(o.length),u=f(n,i);if(c&&e!=e){for(;u<i;)if((r=o[u++])!=r)return!0}else for(;u<i;u++)if((c||u in o)&&o[u]===e)return c||u||0;return!c&&-1}}},function(t,e,n){var r=n(15),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(12),o=n(25),i=n(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(63);for(var r=n(0),o=n(5),i=n(10),u=n(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var s=c[a],f=r[s],l=f&&f.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e,n){"use strict";var r=n(64),o=n(65),i=n(10),u=n(21);t.exports=n(30)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,u,c=n(17),a=n(0),s=n(6),f=n(37),l=n(4),p=n(8),h=n(11),v=n(67),d=n(68),y=n(41),m=n(42).set,g=n(70)(),x=n(26),w=n(43),_=n(71),b=n(44),j="Promise",O=a.TypeError,T=a.process,S=T&&T.versions,L=S&&S.v8||"",k=a[j],P="process"==f(T),E=function(){},M=o=x.f,A=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(E,E)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==L.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},F=function(f,n){if(!f._n){f._n=!0;var r=f._c;g(function(){for(var a=f._v,s=1==f._s,t=0,e=function(t){var e,n,r,o=s?t.ok:t.fail,i=t.resolve,u=t.reject,c=t.domain;try{o?(s||(2==f._h&&G(f),f._h=1),!0===o?e=a:(c&&c.enter(),e=o(a),c&&(c.exit(),r=!0)),e===t.promise?u(O("Promise-chain cycle")):(n=R(e))?n.call(e,i,u):i(e)):u(a)}catch(t){c&&!r&&c.exit(),u(t)}};r.length>t;)e(r[t++]);f._c=[],f._n=!1,n&&!f._h&&C(f)})}},C=function(i){m.call(a,function(){var t,e,n,r=i._v,o=N(i);if(o&&(t=w(function(){P?T.emit("unhandledRejection",r,i):(e=a.onunhandledrejection)?e({promise:i,reason:r}):(n=a.console)&&n.error&&n.error("Unhandled promise rejection",r)}),i._h=P||N(i)?2:1),i._a=void 0,o&&t.e)throw t.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},G=function(e){m.call(a,function(){var t;P?T.emit("rejectionHandled",e):(t=a.onrejectionhandled)&&t({promise:e,reason:e._v})})},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),F(e,!0))},D=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw O("Promise can't be resolved itself");(n=R(t))?g(function(){var e={_w:r,_d:!1};try{n.call(t,s(D,e,1),s(I,e,1))}catch(t){I.call(e,t)}}):(r._v=t,r._s=1,F(r,!1))}catch(t){I.call({_w:r,_d:!1},t)}}};A||(k=function(t){v(this,k,j,"_h"),h(t),r.call(this);try{t(s(D,this,1),s(I,this,1))}catch(t){I.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(72)(k.prototype,{then:function(t,e){var n=M(y(this,k));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&F(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(D,t,1),this.reject=s(I,t,1)},x.f=M=function(t){return t===k||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!A,{Promise:k}),n(24)(k,j),n(73)(j),u=n(2)[j],l(l.S+l.F*!A,j,{reject:function(t){var e=M(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!A),j,{resolve:function(t){return b(c&&this===u?k:this,t)}}),l(l.S+l.F*!(A&&n(45)(function(t){k.all(t).catch(E)})),j,{all:function(t){var u=this,e=M(u),c=e.resolve,a=e.reject,n=w(function(){var r=[],o=0,i=1;d(t,!1,function(t){var e=o++,n=!1;r.push(void 0),i++,u.resolve(t).then(function(t){n||(n=!0,r[e]=t,--i||c(r))},a)}),--i||c(r)});return n.e&&a(n.v),e.promise},race:function(t){var e=this,n=M(e),r=n.reject,o=w(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var p=n(6),h=n(38),v=n(39),d=n(3),y=n(22),m=n(40),g={},x={};(e=t.exports=function(t,e,n,r,o){var i,u,c,a,s=o?function(){return t}:m(t),f=p(n,r,e?2:1),l=0;if("function"!=typeof s)throw TypeError(t+" is not iterable!");if(v(s)){for(i=y(t.length);l<i;l++)if((a=e?f(d(u=t[l])[0],u[1]):f(t[l]))===g||a===x)return a}else for(c=s.call(t);!(u=c.next()).done;)if((a=h(c,f,u.value,e))===g||a===x)return a}).BREAK=g,e.RETURN=x},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var c=n(0),a=n(42).set,s=c.MutationObserver||c.WebKitMutationObserver,f=c.process,l=c.Promise,p="process"==n(13)(f);t.exports=function(){var n,r,o,t=function(){var t,e;for(p&&(t=f.domain)&&t.exit();n;){e=n.fn,n=n.next;try{e()}catch(t){throw n?o():r=void 0,t}}r=void 0,t&&t.enter()};if(p)o=function(){f.nextTick(t)};else if(!s||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var e=l.resolve(void 0);o=function(){e.then(t)}}else o=function(){a.call(c,t)};else{var i=!0,u=document.createTextNode("");new s(t).observe(u,{characterData:!0}),o=function(){u.data=i=!i}}return function(t){var e={fn:t,next:void 0};r&&(r.next=e),n||(n=e,o()),r=e}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var o=n(5);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(7),u=n(9),c=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(0),u=n(41),c=n(44);r(r.P+r.R,"Promise",{finally:function(e){var n=u(this,o.Promise||i.Promise),t="function"==typeof e;return this.then(t?function(t){return c(n,e()).then(function(){return t})}:e,t?function(t){return c(n,e()).then(function(){throw t})}:e)}})},function(t,e,n){"use strict";var r=n(4),o=n(26),i=n(43);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buildResolveForm=void 0;var o,a=i(n(27)),r=i(n(28)),u=i(n(14));e.buildResolveForm=(o=(0,r.default)(a.default.mark(function t(e,n,r,o){var i,u,c;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e,n,r);case 2:return i=t.sent,u=i.data.durl[0],c=s(u.url),t.abrupt("return",{request:{url:c,heads:{referer:"https://bilibili.com"}},response:{fileName:o+"_"+l(r)+".flv",totalSize:u.size,supportRange:!0},config:{connections:16}});case 6:case"end":return t.stop()}},t,this)})),function(t,e,n,r){return o.apply(this,arguments)});e.getViewInfo=function(t){var n=s("https://api.bilibili.com/x/web-interface/view");return new u.default(function(e,r){c.jQuery.ajax({url:n,type:"GET",dataType:"json",data:{aid:t},success:function(t){e(t)},error:function(t,e,n){r(n)}})})};var c=n(46);function i(t){return t&&t.__esModule?t:{default:t}}var s=function(t){var e=window.location?window.location.protocol:null;return e?t.replace(/^(http)?s?:\/\//,e+"//"):t},f=function(t,n,o){var i=s("https://api.bilibili.com/x/player/playurl");return new u.default(function(e,r){c.jQuery.ajax({url:i,type:"GET",dataType:"json",data:{avid:t,cid:n,qn:o,otype:"json"},success:function(t){e(t)},error:function(t,e,n){r(n)}})})},l=function(t){return 112==t?"1080p+":80==t?"1080p":64==t?"720p":32==t?"480p":16==t?"360p":"other"}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(78),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(79),__esModule:!0}},function(t,e,n){n(80),t.exports=n(2).Object.assign},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(81)})},function(t,e,n){"use strict";var p=n(31),h=n(82),v=n(83),d=n(25),y=n(32),o=Object.assign;t.exports=!o||n(18)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=o({},t)[n]||Object.keys(o({},e)).join("")!=r})?function(t,e){for(var n=d(t),r=arguments.length,o=1,i=h.f,u=v.f;o<r;)for(var c,a=y(arguments[o++]),s=i?p(a).concat(i(a)):p(a),f=s.length,l=0;l<f;)u.call(a,c=s[l++])&&(n[c]=a[c]);return n}:o},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(85),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},function(t,e,n){t.exports={default:n(86),__esModule:!0}},function(t,e,n){n(29),n(87),t.exports=n(2).Array.from},function(t,e,n){"use strict";var p=n(6),r=n(4),h=n(25),v=n(38),d=n(39),y=n(22),m=n(88),g=n(40);r(r.S+r.F*!n(45)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,o,i=h(t),u="function"==typeof this?this:Array,c=arguments.length,a=1<c?arguments[1]:void 0,s=void 0!==a,f=0,l=g(i);if(s&&(a=p(a,2<c?arguments[2]:void 0,2)),null==l||u==Array&&d(l))for(n=new u(e=y(i.length));f<e;f++)m(n,f,s?a(i[f],f):i[f]);else for(o=l.call(i),n=new u;!(r=o.next()).done;f++)m(n,f,s?v(o,a,[r.value,f],!0):r.value);return n.length=f,n}})},function(t,e,n){"use strict";var r=n(7),o=n(20);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},,,,,function(t,e,o){"use strict";(function(t){var e,a=r(o(27)),n=r(o(28)),s=o(76);function r(t){return t&&t.__esModule?t:{default:t}}t.onResolve=(e=(0,n.default)(a.default.mark(function t(e){var n,r,o,i,u,c;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url.replace(/^.*\/av(\d+).*$/,"$1"),t.prev=1,t.next=4,(0,s.getViewInfo)(n);case 4:if(r=t.sent)return o=r.data.cid,i=r.data.title,u=pdown.settings.quality||80,t.next=11,(0,s.buildResolveForm)(n,o,u,i);t.next=15;break;case 11:return(c=t.sent).data={cid:o,quality:u},c.config={connections:16},t.abrupt("return",c);case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.error(t.t0);case 20:case"end":return t.stop()}},t,this,[[1,17]])})),function(t){return e.apply(this,arguments)})}).call(this,o(94))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);