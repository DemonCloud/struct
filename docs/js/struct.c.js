!function(e,t,n){"function"==typeof define&&define.amd?define(function(){return n(t)}):"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(t):e.struct=n(t)}(this,struct=function(){return this},function(e){"use strict";function t(t,n){e[n]=function(){return t}}function n(t,n){e[n]=function(){return t.apply(this,arguments)}}function r(e,t,n){return n?H(t,function(t,r){(ln(n)?P(n,r):null!=n&&r===n)||(e[r]=t)}):H(t,function(t,n){e[n]=t}),e}function u(e,t,n){return r(r(d(e)?[]:{},e),t,n)}function o(e,t,n){return i(t)?Object.defineProperties(e,t):Object.defineProperty(e,t,n)}function c(e){var t=M(arguments,1);return function(){return e.apply(null,t.concat(M(arguments)))}}function a(e,t){return function(){return(t.apply(null,arguments)?e:j).apply(null,arguments)}}function i(e){return"function"==typeof e||"object"==typeof e&&!!e}function s(e){return"function"==typeof e&&e===e&&!!e}function f(e){return"number"==typeof e&&+e===e}function l(e){return null==e||"object"!=typeof e}function p(e){return null!=e&&pn.test(e)}function h(e){return null!==e&&"object"==typeof e&&"string"==typeof e.message&&"string"==typeof e.name}function g(e,t){return nn.call(e)==="[object "+t+"]"}function d(e){return"number"==typeof e.length&&i(e)&&(ln(e)||g(e,"Arguments")||g(e,"NodeList")||g(e,"HTMLCollection")||g(e,"Storage"))}function v(e){return"number"==typeof e&&e!==e}function m(e){return+e===e&&e%1==0}function y(e){return+e===e&&e%1!=0}function b(e){return e instanceof Date}function w(e){return!l(e)&&!Rt(e)}function x(e){return i(e)&&e.nodeType>0&&e instanceof Node}function _(e){return"function"==typeof e?fn.test(Function.prototype.toString.call(e)):e&&"object"==typeof e&&sn.test(nn.call(e))||!1}function S(e){var t=[ln(e),s(e),null===e,void 0===e,g(e,"Arguments"),g(e,"Boolean"),g(e,"String"),g(e,"Number"),g(e,"Date"),g(e,"RegExp"),g(e,"NodeList"),g(e,"HTMLCollection")];return hn[W(t,ce(!0))]||"object"}function C(e){var t=function(){};t.prototype=e;for(var n=8;n--;)new t;return e}function R(){}function j(e){return e}function k(e){return null!=e?"function"==typeof e.toString?e.toString():e+"":""}function E(e){return"number"==typeof+e&&+e==+e?+e:e>>0}function L(e){var t=parseInt(~e.indexOf("#")?e.substr(1):e,16);return{r:t>>16,g:(65280&t)>>8,b:255&t}}function O(e){return((1<<24)+(e.r<<16)+(e.g<<8)+e.b).toString(16).substr(1)}function T(e){var t=[];return i(e)||g(e,"String")?t=kt(e):null!=e&&t.push(e),t}function q(e){return-E(e)}function N(e,t){e^=t,t^=e,e^=t}function z(){return M(arguments)}function M(e,t,n){return d(e)?tn.call(e,t,n):[]}function $(e){return null!=e?ln(e)?Object.keys(e).map(E):Object.keys(e):[]}function A(e,t,n){for(var r=0,u=e.length;r<u;r++)t.call(void 0===n?e:n,e[r],r,e);return e}function I(e,t,n){return A($(e),function(n){t.call(this,e[n],n,e)},void 0===n?e:n),e}function H(e,t,n){return ln(e)?A.call(null,e,t,n):i(e)&&!s(e)&&null!==e?I.call(null,e,t,n):e}function J(e,t){return t?U(e):d(e)?M(e):l(e)?e:JSON.parse(JSON.stringify(e))}function U(e){if(d(e))return M(e).map(a(U,Lt(l)));if(!(l(e)||e instanceof Node)){var t={};if(e.constructor.prototype!==Object.prototype){var n=function(){};n.prototype=e.constructor.prototype,t=new n}return I(e,function(e,t){this[t]=l(e)?e:U(e)},t),t}return e}function D(e,t){return e.test(t)}function P(e,t,n){for(var r=g(t,"RegExp")?D:n?Je:ue,u=!1,o=l(e)?[]:$(e),c=o.length;c--;)if(r(t,e[o[c]])){u=!0;break}return u}function B(e,t,n){return P(l(e)?[]:$(e),t,n)}function F(e,t,n){return n?e.splice(t,1):delete e[t]}function X(e,t,n){for(var r=g(t,"RegExp")?D:n?Je:ue,u=ln(e),o=$(e),c=0;c<o.length;c++)r(t,e[o[c]])&&F(e,o[c],u)&&u&&o.pop(c--);return e}function G(e,t,n){var r=[],u=g(t,"RegExp")?c(D,t):s(t)?t:ce(t);return H(J(e),function(e,t,r){u.apply(r,arguments)&&this.push(n?t:e)},r),r}function V(e,t,n){return G(e,Lt(t),n)}function W(e,t){var n=G(e,t,!0);return 1===n.length?n.pop():n.length?n:null}function Z(e,t){var n=W(e,t);return l(n)?n:n.pop()}function K(e,t){var n=W(e,t);return l(n)?n:n.shift()}function Q(e,t){var n=K(e,t);return null===n?n:e[n]}function Y(e){return d(e)?e[0]:e}function ee(e){return d(e)?e[e.length-1]:e}function te(e,t){return H(J(e),function(e,n,r){r[n]=this?t.apply(r,arguments):e[t]},s(t))}function ne(e,t){var n={};return I(e,function(r){n[t.apply(e,arguments)]=r}),n}function re(e,t){var n=[],r=g(t,"RegExp")?c(D,t):s(t)?t:ce(t);if(ln(e))for(var u=0,o=e.length;u<o;u++)r.call(e,e[u],u,e)&&n.push(e.splice(u,1).pop(u--));else if(i(e))for(var a in e)if(e.hasOwnProperty(a)&&r.call(e,e[a],a,e)){var f={};f[a]=e[a],n.push(f),delete e[a]}return n}function ue(e,t){return e===t}function oe(e,t){return e!==t}function ce(e){return function(t){return t===e}}function ae(e){for(var t={},n="number"==typeof Y(e),r=0;r<e.length;r++)t[e[r]]||(t[e[r]]=!0);return $(t).map(n?E:j)}function ie(e,t){for(var n=M(e),r=t?Je:ue,u=0;u<n.length;u++)if(u!==n.length-1)for(var o=u+1;o<n.length;o++)r(n[u],n[o])&&n.splice(o--,1);return n}function se(e,t){var n=s(t);return te(e,function(e){return(n?t:e[t]).apply(e,arguments)})}function fe(e,t){var n=[];return H(e,function(e){for(var n=$(e),r=n.length;r--;)n[r]===k(t)&&this.push(e[n[r]])},n),n}function le(e,t){if(ln(e)){var n={},r=s(t);return H(e,function(e){var n=r?t(e):e[t];this[n]?this[n].push(e):this[n]=[e]},n),n}return e}function pe(e){for(var t=[],n=$(e),r=0,u=n.length;r<u;r++)t.push([n[r],e[n[r]]]);return t}function he(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n][0]]=e[n][1];return t}function ge(e){var t=ke(M(arguments,1),!0);return e.filter(Lt(c(P,t)))}function de(e){var t=ke(M(arguments,1),!0);return e.filter(function(e,n){return!P(t,n)})}function ve(e,t){return X(e,t)}function me(e){for(var t,n=e.length,r=Array(n),u=0;u<n;u++)t=Ee(0,u),t!==u&&(r[u]=r[t]),r[t]=e[u];return r}function ye(e,t){for(var n=parseInt(E(t))||2,r=[],u=0,o=e.length;u<o;u+=n)r.push(e.slice(u,u+n));return r}function be(e){return e.filter(j)}function we(){return un.apply([],arguments)}function xe(){for(var e=[],t=we.apply([],arguments),n=!!s(ee(t))&&t.pop(),r=0,u=t.sort().length;r<u;){var o=t[r],a=W(t,n?c(n,o):o),i=ln(a)?a.length:1;1===i?e.push(t[r])&&r++:r+=i}return e}function _e(){var e=M(arguments),t=!!s(ee(e))&&e.pop(),n=ie(we.apply([],e),!0),r=[];return A(n,function(n){for(var u=!0,o=e.length;o--;)if(null===W(ln(e[o])?e[o]:[e[o]],t?c(t,n):n)){u=!1;break}u&&r.push(n)}),r}function Se(){var e=M(arguments),t=!!g(ee(e),"Boolean")&&e.pop();return ie(we.apply([],e),t)}function Ce(e,t){return M(e,E(t)||1)}function Re(e,t){return M(e,0,-(E(t)||1))}function je(e,t){for(var n=M(e),r=void 0===this?"shift":"pop",u=g(t,"RegExp")?c(D,t):s(t)?t:ce(t),o=n.length;o--&&!u(n[r]()););return n}function ke(){var e=we.apply([],arguments),t=!!g(ee(e),"Boolean")&&e.pop();return M(e).reduce(function(e,n){return e.concat(t&&ln(n)?ke(n,t):n)},[])}function Ee(e,t){return f(t)||(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))}function Le(e,t,n){f(t)||(t=e,e=0);var r=Math.random()*(t-e)+e;return E(n)?+r.toFixed(n):r}function Oe(e){return 100*Math.random()<Math.max(1,Math.min(E(e||50),99))}function Te(e,t){var n=e?gn+yn:"";return n=(t?vn:dn)+n,n.charAt(Ee(0,Rt(n)-1))}function qe(e){return(e?"#":"")+O({r:Ee(0,255),g:Ee(0,255),b:Ee(0,255)})}function Ne(e,t,n){for(var r=E(e)||2,u=[],o=r;o--;)u[o]=Te(t,n);return u.join("")}function ze(){var e=jt();return new Date(e+(Oe()?j:q)(Ee(0,e)))}function Me(e){return e=E(e)>0?E(e):2,Ee(1,e%2==0?e:e+1)}function $e(t){var n=M(arguments,1);return function(){for(var r=0,u=n.slice(),o=0,c=u.length;o<c;o++)u[o]===e&&(u[o]=arguments[r++]);for(;r<arguments.length;)u.push(arguments[r++]);return t.apply(this,u)}}function Ae(e,t){var n;return function(){return--e>0?n=t.apply(this,arguments):t=null,n}}function Ie(e,t){return $e(Ae,(E(t)||1)+1)(e)}function He(e){return Ie(e)}function Je(e,t){if(e===t||l(e)&&l(t))return e===t;if(nn.call(e)!==nn.call(t))return!1;if(e.toString()===t.toString()){var n=$(e),r=$(t);if(n.length===r.length){for(var u=n.length;u--;)if(!Je(e[n[u]],t[n[u]]))return!1;return!0}}return!1}function Ue(e,t){return setTimeout(e,t||0)}function De(e){var t={};return A(e,function(e){t[e.name]=e.value}),t}function Pe(e){return decodeURIComponent(e.replace(/\+/g," "))}function Be(e){return encodeURIComponent(e).replace(" ","%20")}function Fe(e){for(var t,n=k(e).split("#").shift(),r=n.indexOf("?"),u={},o=~r?n.substr(r+1):n;t=wn.exec(o);)u[Pe(t[1])]=Pe(t[2]);return u}function Xe(e){var t=J(e);for(var n in t)t[n]=Be(i(t[n])?JSON.stringify(t[n]):t[n]);return JSON.stringify(t).replace(/[\"\{\}]/g,"").replace(/:/g,"=").replace(/,/g,"&").replace(bn,"")}function Ge(e){return rn.call(e)}function Ve(e){return e.replace(zn,"")}function We(e){return e.replace(Mn,"")}function Ze(e){var t=~e.search("-")?"-":~e.search("_")?"_":"";if(t){t=e.split(t);for(var n=1;n<t.length;n++)t[n]=Ke(t[n]);return t.join("")}return e}function Ke(e){return e.charAt(0).toUpperCase()+e.substr(1)}function Qe(e){return Ge(e).replace(On,"").replace(Nn," ").replace($n,"><").replace(An,"<").replace(In,">").replace(Hn,"</")}function Ye(e,t,n){var r=n?"toUpperCase":"toLowerCase",u=k(t)||"-";return e.replace(Tn,function(e,t){return(t>0?u:"")+e[r]()})}function et(e){return _n[e]||e}function tt(e){return Sn[e]||e}function nt(e){return"\\"+Rn[e]}function rt(e){return+e===e?e:e.replace(jn,et)}function ut(e){return+e===e?e:e.replace(kn,tt)}function ot(e){return e.replace(En,"").replace(Ln,"")}function ct(e){return Qe(e.replace(Ln,""))}function at(t,n){var r,u=0,o="_p+='",c=M(arguments,2),a=RegExp((this.escape||xn)+"|"+(this.interpolate||xn)+"|"+(this.evaluate||xn)+"|$","g");ct(t).replace(a,function(e,n,r,c,a){return o+=t.slice(u,a).replace(Cn,nt),u=a+e.length,n?o+="'+((_t=("+n+"))==null?'':_(_t))+'":r?o+="'+((_t=("+r+"))==null?'':_t)+'":c&&(o+="';"+c+"_p+='"),e}),o+="';",n||(o="with(_x||{}){"+o+"}"),o="var _t,_= struct.html('encode'),_p='';"+o+"return _p;";try{r=on("(function("+(n||"_x")+",struct"+(c.length?","+c.toString():"")+"){"+o+"})")}catch(e){throw e.res=o,e}return function(t){return Je(arguments,r.pre)?r.complete:(r.pre=arguments,r.complete=r.apply(this,[t,e].concat(M(arguments,1))))}}function it(e){var t={};return A(e?e.split(";"):[],function(e){var n=(e||"").search("=");if(~n){var r=Ge(e.substr(0,n));r.length&&(t[r]=Ge(e.substr(n+1)))}}),t}function st(e){var t=M(arguments),n=t.length,r=it(document.cookie);if(n){if(1===n)return r[e];var u=new Date;return u.setDate(u.getDate()+365),document.cookie=Ge(t[0]+"="+(t[1]||"")+";expires="+(t[2]||u.toUTCString())+";path="+(t[3]||"/")+";domain="+(t[4]||"")+";"+(t[5]?"secure":"")),!0}return r}function ft(e,t,n){if(e&&i(t))switch(Un[t["Content-Type"]]){case 1:return JSON.stringify(n||{});default:return Xe(n||{})}return n}function lt(e){var t=r({url:"",type:"GET",param:cn,charset:"utf-8",vaild:!0,cache:!1,success:R,error:R,loading:R,loadend:R,header:cn,username:null,password:null,timeout:0,aysnc:!0,contentType:!0},options||{}),n=an.localStorage;if(t.cache){n.getItem("_struct")||n.setItem("_struct","{}");var u=JSON.parse(n.getItem("_struct")),o=u[t.url||an.location.href.split("#").shift()];if(void 0!==o)return t.sucess.call(an,o)}var c=new XMLHttpRequest;if("GET"===t.type.toUpperCase()&&t.param&&(t.url+=(~t.url.search(/\?/g)?"&":$(t.param).length?"?":"")+Xe(t.param),t.param=null),c.addEventListener("loadstart",t.loading),c.addEventListener("loadend",t.loadend),c.open(t.type,t.url,t.aysnc,t.username,t.password),"POST"===t.type.toUpperCase()&&t.param&&!t.header["Content-Type"]&&t.contentType&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded;chartset="+t.charset),i(t.header)&&t.header!==cn){var a=t.header["Content-Type"];a&&(~a.search("charset")||~a.search("json")||(t.header["Content-Type"]+=";charset="+t.charset)),I(t.header,function(e,t){c.setRequestHeader(t,e)})}return c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("Struct-Requested","StructHttpRequest"),c.onreadystatechange=function(e){if(4===c.readyState&&c.responseText){var r=c.status;if(r>=200&&r<300||304===r){if(t.success.call(an,c.responseText,c,e),t.cache){var u=JSON.parse(n.getItem("_struct"));u[t.url||an.location.href.split("#")[0]]=c.responseText,n.setItem("_struct",JSON.stringify(u))}}else t.error.call(an,c,e)}},c.send(t.param?i(t.param)?ft(t.contentType,t.header,t.param):t.param:null),E(t.timeout)&&Ue(function(){4===c.readyState&&c.responseText||t.error.call(an,c),c.abort()},1e3*(E(t.timeout)||5)),c}function pt(e){var t=r({url:"",param:cn,key:"callback",callback:("jsonp"+Math.random()).replace(".",""),timeout:5,success:R,error:R},e||{}),n=t.url+"?"+Xe(t.param)+($(t.param).length?"&":"")+t.key+"="+t.callback,u=document.createElement("script");u.src=n,an[t.callback]=function(e){clearTimeout(t.timesetup),document.body.removeChild(u),an[t.callback]=null,t.success(e)},document.body.append(u),E(t.timeout)&&(t.timesetup=Ue(function(){document.body.removeChild(u),an[t.callback]=null,t.error()},1e3*t.timeout))}function ht(e,t,n,r){return s(t)&&(r=n,n=t,t={}),lt({url:e,param:t,success:n,error:r})}function gt(e,t,n,r){return s(t)&&(r=n,n=t,t={}),lt({url:e,type:"POST",param:t,success:n,error:r})}function dt(e,t,n){return e._events||o(e,"_events",{value:{},writable:!1,enumerable:!1,configurable:!0}),e._events[t]||(e._events[t]=[]),P(e._events[t],n)||e._events[t].push(n),e}function vt(e,t,n){if(e._events[t])X(e._events[t],n),e._events[t].length&&n||delete e._events[t];else if(!t&&!n)return delete e._events,e;return e}function mt(e,t,n,r){return A(k(t).split(","),function(e){yt(this,Ge(e),n,r)},e),e}function yt(e,t,n,r){var u=s(n);ln(n)&&!r&&(r=n,n=null),e._events&&I(e._events[t],function(t){t!==n&&u||t.apply(e,r||[])})}function bt(e,t){var n,r=(t||"").split(".");if(1===r.length)e.hasOwnProperty(t)&&(n=e[t]);else{n=e;for(var u=0;u<r.length&&(n=n[r[u]],!l(n));u++);}return n}function wt(e,t,n){var r,u,o=(t||"").split(".");if(1===o.length)e.hasOwnProperty(t)&&(e[t]=n);else{r=e,u=o.pop();for(var c=0;c<o.length;c++)r=r[o[c]];r[u]=n}return e}function xt(e,t,n){function r(){return a}function u(r){return c=a,a=n.call(e,r,c,t)}var c=e[t],a=c;return delete e[t]&&o(e,t,{get:r,set:u,enumerable:!0,configurable:!0}),e}function _t(e,t){var n=e[t];return delete e[t],e[t]=n,e}function St(e,t){var n={},r=s(t);return H(e,function(e,u){var o=r?t(e):e[t];n[o]?n[o]+=1:n[o]=1}),n}function Ct(e,t){return E(t)>1?M(me(e),0,E(t)):e[Ee(Rt(e)-1)]}function Rt(e){return s(e)||null==e||v(e)?0:"number"==typeof e.length?e.length:i(e)?$(e).length:0}function jt(){return(new Date).getTime()}function kt(e){var t=[];return g(e,"String")?e.split(""):(H(e,function(e){t.push(e)}),t)}function Et(e,t){var n=[];return function(){for(var r,u=M(arguments),o=n.length;o--;)if(Je(n[o][0],u)){r=n[o][1];break}return void 0===r&&n.push([u,r=e.apply(t,u)]),r}}function Lt(e,t){var n=g(e,"RegExp")?c(D,e):e;return s(n)?function(){return!n.apply(t,arguments)}:c(oe,n).bind(t)}function Ot(){var e=M(arguments);return function(t){return e.reduce(function(e,t){return t(e)},t)}}function Tt(){return new qt(arguments)}function qt(e){o(this,{"-":{value:0 in e?e:void 0,writable:!0,enumerable:!1,configurable:!1},"=":{value:[],writable:!1,enumerable:!1,configurable:!1}})}function Nt(e){switch((e||"").toLowerCase()){case"object":return i;case"array":return ln;case"arraylike":return d;case"function":case"fn":return s;case"nan":return v;case"prim":case"primitive":return l;case"idt":case"identifier":return p;case"define":return g;case"int":return m;case"float":case"double":return y;case"date":return b;case"empty":return w;case"dom":case"elm":case"element":return x;case"native":return _;default:return S}}function zt(e){switch((e||"").toLowerCase()){case"str":case"string":return k;case"num":case"number":return E;case"arr":case"array":return T;case"hex":return O;case"rgb":return L;case"minus":return q;default:return k}}function Mt(e){switch((e||"").toLowerCase()){case"array":return A;case"object":return I;default:return H}}function $t(e){return"key"===e?B:P}function At(e){switch((e||"").toLowerCase()){case"first":return K;case"last":return Z;case"single":case"one":return Q;default:return W}}function It(e){return"key"===e?ne:te}function Ht(e){return"fast"===e?ae:ie}function Jt(e){switch(e){case"un":case"re":return he;default:return pe}}function Ut(e){switch((e||"").toLowerCase()){case"at":return de;case"with":return ve;default:return ge}}function Dt(e){switch((e||"").toLowerCase()){case"left":return Ce;case"right":return Re;case"lefto":case"leftto":return je;case"righto":case"rightto":return je.bind(!0);default:return Ce}}function Pt(){}function Bt(e){switch((e||"").toLowerCase()){case"int":return Ee;case"float":case"double":return Le;case"string":return Ne;case"bool":case"boolean":return Oe;case"char":case"character":case"letter":return Te;case"date":return ze;case"hex":return qe;case"dice":return Me;default:return Math.random}}function Ft(e){switch((e||"").toLowerCase()){case"parse":return Fe;case"string":case"stringify":case"serialize":return Xe;case"query":case"requery":return De;default:return Fe}}function Xt(e){switch((e||"").toLowerCase()){case"encode":return rt;case"decode":return ut;case"strip":return ot;case"zip":return ct;default:return Ot(ot,ct)}}function Gt(e){switch((e||"").toLowerCase()){case"trim":return Ge;case"trimleft":return Ve;case"trimright":return We;case"came":case"camelize":return Ze;case"capit":case"capitalize":return Ke;case"collapse":return Qe;case"rize":case"rizewith":return Ye;default:return k}}function Vt(e){switch((e||"").toLowerCase()){case"get":return ht;case"post":return gt;case"jsonp":return pt;default:return lt}}function Wt(e){switch((e||"").toLowerCase()){case"add":case"on":case"bind":return dt;case"remove":case"unbind":return vt;case"dispatch":case"emit":default:return mt}}function Zt(e){switch((e||"").toLowerCase()){case"get":return bt;case"set":return wt;case"watch":case"listen":return xt;case"unwatch":case"unlisten":return _t;default:return bt}}function Kt(e){return at.bind(g(e,"Object")?u(Jn,e):Jn)}e.VERSION=.1;var Qt={},Yt=[],en="",tn=Yt.slice,nn=Qt.toString,rn="".trim,un=Yt.concat,on=eval,cn={},an=e(),sn=/^\[object .+?Constructor\]$/,fn=RegExp("^"+String(nn).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ln=Array.isArray,pn=/^[a-z$_]+[a-z$_0-9]*$/i,hn=["array","function","null","undefined","arguments","boolean","string","number","date","regexp","nodeList","htmlcollection"],gn="0123456789",dn="abcdefghijklmnopqrstuvwxyz",vn=dn.toUpperCase(),mn=gn+"abcdef",yn="~`!@#$%^&*(){}[]-+=_|/.,><:;",bn=/[\t\r\n\f\x20]/g,wn=/([^&=]+)=?([^&]*)/g,xn="(.)^",_n={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"$quot;","'":"&#x27;","`":"&#x60"},Sn={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"',"&#x27;":"'","&#x60;":"`"},Cn=/\\|'|\r|\n|\u2028|\u2029/g,Rn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},jn=/[&<">'](?:(amp|lt|quot|gt|#39);)?/g,kn=/&((g|l|quo)t|amp|#39);/g,En=/<script\b[^>]*>(.*?)<\/script>/gim,Ln=/<!--[\s\S]*?-->/gim,On=/[\t\r\n\f]/gim,Tn=/[A-Z]/g,qn="[\\s\\x20\\xA0\\uFEFF]+",Nn=new RegExp(qn,"g"),zn=new RegExp("^"+qn,"g"),Mn=new RegExp(qn+"$","g"),$n=new RegExp(">"+qn+"<","g"),An=new RegExp("<"+qn,"g"),In=new RegExp(qn+">","g"),Hn=new RegExp("</"+qn,"g"),Jn={escape:"{{-([\\s\\S]+?)}}",interpolate:"{{#([\\s\\S]+?)}}",evaluate:"{{([\\s\\S]+?)}}"},Un={"application/json":1};qt.prototype.value=function(){return Ot.apply(null,this["="].splice(0,Rt(this["="]))).apply(null,void 0===this["-"]?arguments:this["-"])};var Dn={chain:Tt,define:o,extend:r,depextend:u,keys:$,noop:R,clone:J,depclone:U,not:X,cat:re,slice:M,find:G,filter:G,reject:V,diff:xe,intsec:_e,hook:se,chunk:ye,compact:be,pluck:fe,groupBy:le,countBy:St,castArray:z,shuffle:me,first:Y,last:ee,flat:ke,merge:Se,auto:Ct,part:Ie,once:He,eq:Je,asy:Ue,cookie:st,values:kt,memoize:Et,negate:Lt,wrap:Ot,size:Rt,now:jt,v8:C},Pn={op:Mt,each:Mt,map:It,has:$t,type:Nt,html:Xt,unique:Ht,convert:zt,pull:Ut,param:Ft,ajax:Vt,event:Wt,prop:Zt,drop:Dt,pairs:Jt,index:At,random:Bt,string:Gt,error:Pt,doom:Kt};return I(Dn,function(e,n){qt.prototype[n]=function(){return this["="].push(e),this},t.apply(null,arguments)}),I(Pn,function(e,t){qt.prototype[t]=function(){return this["="].push(e.apply(null,arguments)),this},n.apply(null,arguments)}),e.root=an,e.toString=k,e.broken=cn,e.prototype=e.__proto__=null,Object.freeze(C(e))});