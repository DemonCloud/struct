/* 
 * Struct 0.1
 *
 * Faster slim Javascript untils lib
 *
 * Clang & Trunk with K&R <The C programming language>
 * support web browser and Node
 *
 * Desktop Browser Support (ES3 ES5 redict)
 *  Chrome 30+
 *  FireFox 4+
 *  IE 9+
 *
 * Server Version With
 *  Node 6.0+ (Full support with ES6)
 *
 * @Author  : YiJun
 * @Date    : 2017.2.28 - now
 * @License : FAL
 */

(function(root,struct,factory){
	if(typeof define === 'function' && define.amd)
		// Ruler by UMD Javascript
		// support AMD define
		define(function(){ return factory(struct); });
	else if(typeof exports === "object" && typeof module !== "undefined")
		// support CommonJS exports
		module.exports = factory(struct);
	else
		// build on browser global object
		root.struct = factory(struct);
}(this, struct=function(){ return this; }, function(struct){
'use strict';

// Strict mode
// define const
var VERSION = 0.1;

// base method
var or = {},
		ar = [],
    st = "",
    slc = ar.slice,
    splc = ar.splice,
    ts = or.toString,
    tm = st.trim,
    cot = ar.concat,
  	ev = eval,

  	broken = {};

// strict mode hack this
// hack* =>
// var root = this
// var root = (function(){ return this || ev("this"); }());
var root = struct();

// Sub struct return pointer
// Zub struct with custom method in function
function nub(fn,name){ struct[name] = function(){ return fn; };}
function zub(fn,name){ struct[name] = function(){ return fn.apply(this,arguments); };}

// extend Object-assign or pub struct method
// @use has
// @use depclone
// @export extend
// @export *depextend
function extend(o1,o2,nothisproperty){
	if(nothisproperty)
		fov(o2,function(v,k){
			if(isArray(nothisproperty) ? 
				!has(nothisproperty,k) :
				(nothisproperty != null ? k !== nothisproperty : true))
				o1[k] = v; 
		});
	else
		fov(o2,function(v,k){ o1[k] = v; });
	return o1;
}

// extend object or define module for struct
function depextend(a,b,nothisproperty){
	var c = isArrayLike(a) ? clone : depclone;
	return extend(c(a),c(b),nothisproperty);
}

// define Property [ ES5 method ]
// @use object.defineProperty
function define(obj,prop,st){
	return isObject(prop) ?
		Object.defineProperties(obj,prop) :
		Object.defineProperty(obj,prop,st);
}

// create itree function [ method ]
function cit(fn){
	var args = slice(arguments,1);
	return function(){
		return fn.apply(null,args.concat(arguments)); 
	};
}
	
// Typeof Check List
// @ Object
// @ Primitive
// @ Identifier
// @ Error
// @ ArrayLike
// @ NaN
// @ Int
// @ Float
// @ *Define [ contain ]
//
// @ exprot type[name] 

// Object [ type ]
function isObject(e){
	return typeof e === "function" || typeof e === "object" && !!e;
}

// Function [ type ]
function isFn(e){
	return typeof e === "function" && e === e && e;
}

// Primitive [ type ]
function isPrimitive(e){
	return e == null || typeof e !== "object" ;
}

var isArray = Array.isArray;

// Identifier [ type ]
var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(e){
	return rident.test(e);
}

// Error [ type ]
function isError(obj){
	return obj !== null &&
		typeof obj === "object" &&
		typeof obj.message === "string" &&
		typeof obj.name === "string";
}

// Define the typename [ type ]
function isDefine(obj,name){
	return ts.call(obj) === '[object ' + name + ']';
}

// ArrayLike [ type ] 
function isArrayLike(obj){
	return typeof obj.length === "number" &&(
				 isArray(obj) ||
				 isDefine(obj,"Arguments") ||
				 isDefine(obj,"NodeList") ||
				 isDefine(obj,"HTMLCollection"));
}

function isNaN(n){
	return typeof n === "number" && n !== n;
}

function isInt(n){
	return +n===n && n%1 === 0;
}

function isFloat(n){
	return +n===n && n%1 !== 0;
}

function isDate(n){
	return n instanceof Date;
}

var typeArray = [
  'array',
  'function',
  'null',
  'undefined',
  'arguments',
  'boolean',
  'string',
  'number',
  'date',
  'regExp',
  'nodeList',
  'hTMLCollection'
];

// Typec advance typeof [ method ]
function typec(e){
  var types = [
  	isArray(e),
		isFn(e),
		e === null,
		e === void 0,
		isDefine(e,"Arguments"),
		isDefine(e,"Boolean"),
		isDefine(e,"String"),
		isDefine(e,"Number"),
		isDefine(e,"Date"),
		isDefine(e,"RegExp"),
		isDefine(e,"NodeList"),
		isDefine(e,"HTMLCollection")
	];

	return typeArray[index(types,fseq(true))] || "object"; 
}

// Type export
function type(c){
	switch((c||"").toLowerCase()){
		case "object":
			return isObject;
		case "array":
			return isArray;
		case "arraylike":
			return isArrayLike;
		case "function":
		case "fn":
			return isFn;
		case "nan":
			return isNaN;
		case "primitive":
			return isPrimitive;
		case "identifier":
			return isIdentifier;
		case "define":
			return isDefine;
		case "int":
			return isInt;
		case "float":
		case "double":
			return isFloat;
		case "date":
			return isDate;
		default:
			return typec;
	}
}

// Optimze V8 compress
// check form bluebird.js ( miss *ASSERT checker )
function v8(obj){
	var $ = function(){}
	$.prototype = obj;
	
	var l = 8;
	while(l--) new $();
	return obj;
	// Prevent the function from being optimized through dead code elimination
	// or further optimizations. This code is never reached but even using eval
	// in unreachable code causes v8 to not optimize functions.
	// eslint [ eval not ]
	eval(obj);
}

// noop function pointer
// cool function return origin value
function noop(){}
function cool(e){ 
	return e;
}

// safe convert [ method ]
// @use toString
// @use toNumber
// @use toRGB => HexToRGB
// @use toHEX => RGCToHex
// @export convert(method)
function toString(s){
	return s!=null ? (typeof s.toString === "function" ? s.toString() : s + "") : s;
}

function toNumber(s){
	return (typeof +s === "number" && +s===+s) ? +s : s>>0;
}

// HEX Create RGB object
function toRGB(hex){
	var h = parseInt(((~hex.indexOf('#')) ? hex : hex.substr(1)),16);
	return { r:h>>16, g:(h&0x00FF00)>>8, b:(h&0x0000FF) };
}

// RGB object to HEX
function toHEX(rgb){
	// var hex = [
	// 	rgb.r.toString(16),
	// 	rgb.g.toString(16),
	// 	rgb.b.toString(16)
	// ];

	// return '#'+hex.map(function(val){
	// 	return (val.length === 1 ? '0' : '') + val;
	// }).join('');
	
	return ((1<<24) + (rgb.r<<16) + (rgb.g<<8) + rgb.b).toString(16).substr(1);
}

function convert(c){
	switch((c||"").toLowerCase()){
		case "string":
			return toString;
		case "number":
			return toNumber;
		case "array":
			return slice;
		case "hex":
			return toHEX;
		case "rgb":
			return toRGB;
		default:
			return toString;
	}
}

// XOR operation, 
// details: http://en.wikipedia.org/wiki/XOR_swap_algorithm
function swap(a,b){
	a^=b;
	b^=a;
	a^=b;
}

function slice(ary,n,e){
	return isArrayLike(ary) ? slc.call(ary,n,e) : [];
}

function keys(e){
	if(e !==null){
		if(isArray(e))
			return Object.keys(e).map(toNumber);
		return Object.keys(e);
	}
	return [];
}

// Loop Array ^ Object
// @use al
// @use ol
// @export op
// @alias each
function al(ary,fn,ts){
	for(var i=0, l=ary.length; i<l; i++)
		fn.call(ts===void 0 ? ary : ts ,ary[i],i,ary);
	return ary;
}

function ol(obj,fn,ts){
	al(keys(obj),function(v){ 
		fn.call(this,obj[v],v,obj);
	},ts===void 0 ? obj : ts);
	return obj;
}

function fov(list){
	if(isArray(list))
		return al.apply(list,arguments);
	else if(isObject(list) && !isFn(list) && list !== null)
		return ol.apply(list,arguments);
	return list;
}

// Loop function
function op(c){
	switch((c||"").toLowerCase()){
		case "array":
			return al;
		case "obejct":
			return ol;
		default :
			return fov;
	}
}

// Simple Clone [ fast , signet ]
// @use depclone
// @export *clone
// @alias(deep) depclone
function clone(l,deep){
	if(deep)
		return depclone(l);
	if(isArray(l))
		return slice(l);
	if(!isPrimitive(l))
		return JSON.parse(JSON.stringify(l));
	return l;
}

// Deeping Clone [ fast , complicated ]
function depclone(l){
	if(isArrayLike(l))
		// clone array 
		return slice(l);
	else if(!isPrimitive(l)){
		// clone object
		// copy prototype
		var $ = function(){};
		$.prototype = l.constructor.prototype;
		var res = new $();
		// dist clone data
		ol(l, function(val,key){
			this[key] = isPrimitive(l) ? val : depclone(val);
		},res);

		return res;
	}
	return l;
}

// List has [ method ]
// Identifier if has value in array
// has([1,2,3],2) => true;
function has(list,n){
	var idf = 0 , key = isPrimitive(list) ? [] : keys(list);

	for(var i=key.length; i--;){
		if(list[key[i]] === n){
			idf = 1; break;
		}
	}

	return !!idf;
}

// Array not [ array method ]
// pull a element in array
// not([1,2,3,2,3,4,5],3) => [1,2,2,4,5]
function not(list,n,useq){
	var check = useq ? eq : seq;
	for( var i=0 , len=list.length ; i<len ; i++)
		if(check(list[i],n))
			splc.call(list,i--,1);
	return list;
}

// List filter [ method ]
// @use filter
// @use find
// @use index
// @use reject
function filter(list,idf,reskey){
	var res = [];
	fov(clone(list),function(val,key,that){
		if(idf(val,key,that)) this.push(reskey ? key : val);
	},res);
	return res;
}

function reject(list,idf){
	return filter(list,negate(idf));
}

// filter indexkey
// FindIndex array [ method ]
// @use index
// @use firstindex
// @use lastindex
// @export *index
//
// index([1,2,3,1,2,4,1],1) => [0,3,6]
function index(list,idf){
	var fn = isFn(idf) ? idf : fseq(idf),
			res = filter(list,fn,true);
	return res.length === 1 ? res.pop() : (res.length ? res : null);
}

function lastindex(list,idf){
	var res = index(list,idf);
	return isPrimitive(res) ? res : res.pop();
}

function firstindex(list,idf){
	var res = index(list,idf);
	return isPrimitive(res) ? res : res.shift();
}

function Index(c){
	switch ((c||"").toLowerCase()) {
		case 'first':
			return firstindex;
		case 'last':
			return lastindex;
		default:
			return index;
	}
}

// Get first element in array [ method ]
// @export last
// @export first
// @alias *head
function first(ary){
	return isArrayLike(ary) ? ary[0] : ary;
}

function last(ary){
	return isArrayLike(ary) ? ary[ary.length-1] : ary;
}

// List map [ method ]
// values map
// @use mapValue
// @use mapKey
// @export map
function mapValue(list,fn){
	return fov(clone(list),function(val,key,list){
		list[key] = this ? fn.call(list,val,key,list) : val[fn];
	},isFn(fn));
}

// function mapKey [ method ]
// map the [ Object ] keys
function mapKey(list,fn){
	var res = {};
	ol(list,function(val){
		res[fn.apply(val,arguments)] = val;
	});
	return res;
}

function map(c){
	return c === "key" ? mapKey : mapValue;
}

// List cat [ method ]
function cat(list,idf){
	var res = [];
	if(isArray(list)){
		for(var i=0,l=list.length; i<l; i++)
			if(idf.call(list,list[i],i,list)){
				res.push(list.splice(i,1).pop()); i--;
			}
	}else if(isObject(list)){
		for(var j in list)
			if(list.hasOwnProperty(j))
				if(idf.call(list,list[j],j,list)){
					var po = {};
					po[j] = list[j];
					res.push(po);
					delete list[j];
				}
	}
	return res;
}

// Array Unique [ array method ]
// @use eq
// @use seq
// @fix *fseq
// @use fastunqiue [ pure type ] [ fast n]
// @use slimunqiue [ all allow ] [ slim n^n-1 ]
// @export unique(method)
function seq(a,b){
	return a===b;
}

function fseq(a){
	return function(n){
		return n === a;
	};
}

function fastUnique(ary){
	var u = {}, n = typeof ary[0] === 'number';

	for(var i = 0 ; i<ary.length; i++){
		if(u[ary[i]]) continue;
		u[ary[i]] = true;
	}

	return keys(u).map(n ? toNumber : cool);
}

function slimUnique(ary,ueq){
	for(var check = ueq ? eq : seq, i = 0 ; i<ary.length; i++)
		if(i !== ary.length-1)
			for(var j=i+1; j<ary.length; j++)
				if(check(ary[i],ary[j])) ary.splice(j--,1);
	return ary;
}

function unique(c){
	return c==="fast" ? fastUnique : slimUnique;
}

// advance map [ method ]
function hook(list,hookname){
	var args = slice(arguments,2),
			func = isFn(hookname);
	return map(list,function(val){
		return (func ? hookname : v[hookname]).apply(val,args);
	});
}

// pluck contain [ method ]
function pluck(list,mapkey){
	var res = [];
	fov(list,function(item){
		var key = keys(item);
		for( var i=key.length; i--; )
			if(key[i]===mapkey+'')
				this.push(item[key[i]]);
	},res);
	return res;
}

function groupby(list,by){
	if(isArray(list)){
		var group = {},
				func  = isFn(by);
		fov(list,function(val){
			var key = func ? by(val) : val[by];
			if(!this[key])
				// first time should init group check
				this[key] = [val];
			else
				this[key].push(val);
		},group);
		return group;
	}
	return list;
}

// Pairs Object to array 
// @use pairs
// @use unpairs
// @export *pair(s)
//
// pairs({a:1,b:2}) => [['a',1],['b',2]]
// unpairs([['a',1],['b',2]]) => {a:1,b:2}
function pairs(obj){
	var res = [];
	var key = keys(obj);
	for(var i=0,l=key.length; i<l ; i++)
		res.push([key[i],obj[key[i]]]);
	return res;
}

function unpairs(ary){
	var res = {};
	for(var i=0,l=ary.length; i<l ; i++)
		res[ary[i][0]] = ary[i][1];
	return res;
}

function pair(c){
	switch(c){
		case 'un':
		case 're':
			return unpairs;
		default:
			return pairs;
	}
}

// Pull element form array [ method ]
// @use pullAll
// @use pullAt
// @use flatten
// @export pull
//
// pullAll([1,2,3,4,1,2,4],1,4) => [2,3,2];
function pullAll(ary){
	var ft = flatten(slice(arguments,1),true);
	return ary.filter(function(val){
		return !has(ft,val);
	});
}

function pullAt(ary){
	var ft = flatten(slice(arguments,1),true);
	return ary.filter(function(val,index){
		return !has(ft,index);
	});
}

function pullWith(ary,it){
	return isFn(it) ? ary.filter(it) : not(ary,it);
}

function pull(c){
	switch((c||"").toLowerCase()){
		case "at":
			return pullAt;
		case "with":
			return pullWith;
		default:
			return pullAll;
	}
}

// Array Disorder
// Shuffle a collection , using the modern version of the
// [Fisher-Yates shuffle] (http://en.wikipedia.org/wike/Fisher-Yates_shuffle)
// @use random
function shuffle(ary){
	var ln = ary.length,
			disorder = Array(ln);
	for( var i=0 , ra; i<ln; i++){
		ra = random(0,i);
		if(ra !==i)
			disorder[i] = disorder[ra];
		disorder[ra] = ary[i];
	}
	return disorder;
}

// Chunk partof array [ method ]
// chunk([1,2,3,4]) => [[1,2],[3,4]]
function chunk(ary,size){
	var s = parseInt(toNumber(size)) || 2 ,res = [];
	for(var i=0,l=ary.length;i<l;i+=s)
		res.push(ary.slice(i,i+s));

	return res;
}

// Compact array [ method ]
// save pure number filter the false value
// compact([1,'',false,2,undefined,null,function(){},[],3]) => [1,2,3]
function compact(ary){
	return ary.filter(function(val){
		return +val === val && val;
	});
}

function concat(){
	return cot.apply([],arguments);
}

// Difference array [ method ]
// @use index
// @use cit
// @export diff
// @export *intsec
// diff([1,2],[2,3],[1,3,4],[5]) => [4,5]
function diff(){
	var res =[], 
			pact = concat.apply([],arguments), 
			ite = isFn(last(pact)) ? pact.pop() : false;

	for(var i=0,l=pact.sort().length;i<l;){
		var p = pact[i] ,list = index(pact, ite ? cit(ite,p) : p),
				n = isArray(list) ? list.length : 1;
		if(n===1)
			res.push(pact[i]) && i++;
		else
			i+=n;
	}
	
	return res;
}

// intersection([1,2],[2,3],[2,3,4]) => [2]
function intersection(){
	var args = slice(arguments),
			ite = isFn(last(args)) ? args.pop() : false,
			pact = slimUnique(concat.apply([],args),true),
			res = [];

	al(pact,function(key){
		var all = true;
		for(var i=args.length; i--;){
			if(index(args[i],ite ? cit(ite,key) : key)===null){
				all = false; break;
			}
		}
		if(all) res.push(key);
	});
	
	return res;
}

// Merge array [ method ]
// *use eq or not [ ...ary(values),useeq? ]
// @export merge
// merge([1,2,3],[2,1,3],[3,4],[1,5]) => [1,2,3,4,5]
function merge(){
	var args = slice(arguments),
			useq = isDefine(last(args),"Boolean") ? args.pop():false;
	return slimUnique(concat.apply([],args),useq);
}

// Drop array [ method ]
// base @use slice method
// @use dropLeft
// @use dropRight
// @use dorpTo
// @export drop
//
// dropLeft([1,2,3]) => [2,3]
function dropLeft(ary,n){
	return slice(ary,toNumber(n)||1);
}

// dropRight([1,2,3],2) => [1]
function dropRight(ary,n){
	return slice(arg,0,-(toNumber(n)||1));
}

// dropTo([4,3,2,1,-1,-2],2) => [1,-1,-2];
function dropTo(ary,it){
	var res = slice(ary),
			key = this===void 0 ? "shift" : "pop",
			fn = isFn(it) ? it : cit(eq,it);

	for(var i=res.length;i--;)
		if(fn(res[key]())) 
			break;
	return res;
}

function drop(c){
	switch((c||"").toLowerCase()){
		case "left":
			return dropLeft;
		case "right":
			return dropRight;
		case "leftto":
			return dropTo;
		case "rightto":
			return dropTo.bind(true);
		default:
			return dropLeft;
	}
}

// Flatten array *with deep [ method ]
// flatten([1, [2, [3, [4]], 5]],true) => [1,2,3,4,5]
function flatten(ary,deep){
	return slice(ary).reduce(function(flat,toFlat){
		return flat.concat(deep ? 
			(isArray(toFlat) ? flatten(toFlat,deep) : toFlat) : 
			toFlat
		); 
	},[]);
}

// Static Random [ method ]
function random(min,max){
	if(!isDefine(max,"Number")){
		max = min; min = 0;
	}
	return min + Math.floor(Math.random()*(max-min+1));
}

// String trim [ method ]
function trim(s){
	return tm.call(s);
}

// Create Function caller [ method ]
// @use partial
// @use before
// @export part , once
function partial(fn){
	var boundArgs = slice(arguments,1);

	return function(){
		var position = 0;
		var args = boundArgs.slice();

		for (var i = 0, len = args.length; i < len; i++)
			if(args[i] === struct)
				args[i] = arguments[position++];

		while(position < arguments.length)
			args.push(arguments[position++]);

		return fn.apply(this,args);
	};
}

function before(times,fn){
	var undef;
	return function(){
		if(--times > 0)
			undef = fn.apply(this,arguments);
		else
			fn = null;
		return undef;
	};
}

// building the (*) times Function
// base it on _.once  --- underscore.js
function part(fn,times){
	return (partial(before,(parseInt(times)||1)+1))(fn);
}

// create once function
function once(fn){
	return part(fn);
}

// slim equal [ method ]
function eq(x,y){
	if((x==null||y==null)||(isPrimitive(x)&&isPrimitive(y)))
		return x===y;
	if(ts.call(x) !== ts.call(y))
		return false;

	if(x.toString() === y.toString()){
		var xkeys = keys(x) , ykeys = keys(y);
		if(xkeys.length === ykeys.length){
			for(var i=xkeys.length; i--; )
				if(!eq(x[xkeys[i]],y[xkeys[i]]))
					return false;
			return true;
		}
	}

	return false;
}

// use setTimeout
function asy(fn,time){
	return setTimeout(fn,time||0);
}

// pack the serializeArray to Object
// @fix jQuery.serializeArray
// @fix Zepto.serializeArray
// @fix z.serializeArray
// @export requery
function requery(serializea){
	var res = {};
	al(arr,function(elm){ res[elm.name] = elm.value; });
	return res;
}

// the one what found in this array [ method ]
// @fix index
// @export one
function one(list,fn){
	for(var i=0, l= list.length; i<l; i++)
		if(fn.call(list,list[i],i,list)) return list[i];
}

// URL [param] parse and stringify
// Browser useful
// @use paramParse
// @use paramStringify
// @export param
var whiteSpace = /[\t\r\n\f\x20]/g,
		qrsReg = /([^&=]+)=?([^&]*)/g;

function rSpace(part){ 
	return decodeURIComponent(part.replace(/\+/g," ")); 
}

function rInsignia(part){ 
	return encodeURIComponent(part).replace(" ","%20"); 
}

function paramParse(url){
	var turl = (url || "").split("#").shift();

	var findQuery = turl.indexOf("?") , match , x = {},
			param = ~findQuery ? turl.substr(findQuery+1) : turl;

	while( match = qrsReg.exec(param) )
		x[rSpace(match[1])] = rSpace(match[2]);

	return x;
}

function paramStringify(param){
	var Cparam = clone(param);

	for(var key in Cparam)
		Cparam[key] = rInsignia(
			isObject(Cparam[key]) ?
			JSON.stringify(Cparam[key]) :
			Cparam[key]
		);

	return JSON.stringify(Cparam).replace(/[\"\{\}]/g,"")
		.replace(/:/g,"=")
		.replace(/,/g,"&")
		.replace(whiteSpace,"");
}

function param(c){
	return c==="parse" ? paramParse : paramStringify;
}

// slim Template engine call [ DOOM ]
var no = "(.)^";
var ecode = {
	"&" : "&amp;",
	">" : "&gt;",
	"<" : "&lt;",
	'"' : "$quot;",
	"'" : "&#x27;",
	"`" : "&#x60"
};
var dcode = {
	"&amp;"  : '&',
	"&gt;"   : '>',
	"&lt;"   : '<',
	"&quot;" : '"',
	"&#x27;" : "'",
	"&#x60;" : '`'
};
var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
var escapes = {
	"'"      : "'",
	"\\"     : "\\",
	"\r"     : "r",
	"\n"	   : "n",
	"\u2028" : "u2028",
	"\u2029" : "u2029"
};

var encodeReg = /[&<">'](?:(amp|lt|quot|gt|#39);)?/g;
var decodeReg = /&((g|l|quo)t|amp|#39);/g;
var stripReg = /<script\b[^>]*>(.*?)<\/script>/gim;
var zipReg = /[\t\r\n\f]/gim;

// const DOOM4 settings
// rule for parse Template
var doomSetting  = {
	escape      : "{{-([\\s\\S]+?)}}",
	interpolate : "{{#([\\s\\S]+?)}}",
	evaluate    : "{{([\\s\\S]+?)}}"
};

function c_ecode(str){ return ecode[str] || str; }
function c_dcode(str){ return dcode[str] || str; }
function c_escape(et){ return '\\' + escapes[et]; }

// html escape method
// @use encodeHTML
// @use decodeHTML
// @use stripHTML
// @use zipHTML
// @fix wrap(s,z)
// export html(command)
function encodeHTML(str){
	return +str===str ? 
					str :
					str.replace(encodeReg,c_ecode);
}

function decodeHTML(str){
	return +str===str ? 
					str : 
					str.replace(decodeReg,c_dcode);
}

function stripHTML(str){
	return str.replace(stripReg,'');
}

function zipHTML(str){
	return str.replace(zipReg,'');
}

function html(c){
	switch((c||"").toLowerCase()){
		case "encode":
			return encodeHTML;
		case "decode":
			return decodeHTML;
		case "strip":
			return stripHTML;
		default:
			return wrap(stripHTML,zipHTML);
	}
}

// ID Form GAME - [[ DOOM4 ]]
// slim javascript Template engine
// [ fast , precomplete, zoom ]
// @use ev
// @export doom
function DOOM(txt,name){
	var position = 0,
			render,
			res = "_p+='",
			args = slice(arguments,2),

			exp = RegExp((this.escape||no) + 
						"|" + (this.interpolate||no) + 
						"|" + (this.evaluate||no) +"|$","g");

	// start replace
	stripHTML(txt).replace( exp, function(match,escape,interpolate,evaluate,offset){
		res += txt.slice(position,offset).replace(escaper,c_escape);
		// refresh index where to find text string
		position = offset + match.length;

		if(escape)
			// if command is - should encodeHTML string
			res += "'+((_t=(" + escape + "))==null?'':_(_t))+'";
		else if(interpolate)
			res += "'+((_t=(" + interpolate + "))==null?'':_t)+'";
		else if(evaluate)
			res += "';" + evaluate + "_p+='";

		return match;
	});

	// End wrap res@ String
	res += "';";
	if(!name) res = "with(_x||{}){" + res + "}";
	res = "var _t,_= struct.html('encode'),_p='';" + res + "return _p;";

	// Complete building Function string
	// try to build anmousyous function
	try{
		render = ev("(function("+(name||"_x") + ",struct" + ( args.length ? ","+args.toString() : "" ) + "){" + res + "})");
	}catch(e){
		e.res = res;
		throw e;
	}

  // @ Precomplete JavaScript Template Function
  // @ the you build once template that use diff Data, not use diff to build function again
	// @ protect your template code other can observe it?
	return function(data){
		return eq(arguments,render.pre) ? (render.complete) : 
			(render.pre=arguments, render.complete = render.apply(this,
				[data,struct].concat(slice(arguments,1))
			));
	};
}

// bound DOOM settings
function doom(config){
	return DOOM.bind((isDefine(config,"Object"))?
		depextend(doomSetting,config):
		doomSetting
	);
}

// Browser cookie
// @use cookieParse
// @export cookie
function cookieParse(ckstr){
	var tmp, res={}, pars = ckstr ? ckstr.split(";") : [];

	fov(pars, function(item){
		var ind = (item||"").search("=");

		if(!~ind) return;
		var rkey = trim(item.substr(0,ind));
		if(rkey.length)
			res[rkey] = trim(item.substr(ind+1));
	});

	return res;
}

function cookie(param){
	// args :( name , value, expires, path, domain, secure)
	var args = slice(arguments),
			len = args.length,
			parsec = cookieParse(document.cookie);

	if(len){
		// get cookie
		if(len === 1)
			return parsec[param];
		else{
			var time = new Date();
			time.setDate(time.getDate()+365);

			return document.cookie = trim(
				args[0]+"="+(args[1]||"") + ';' +
				"expires="+(args[2]||time.toUTCString()) + ';' +
				"path="   +(args[3]||"/") + ';' +
				"domain=" +(args[4]||"") + ';' +
				( args[5] ? "secure":"" )
			);
		}
	}

	return parsec;
}

// slim ajax method
// @use *aix
// @use ajaxGET
// @use ajaxPOST
// @use JSONP
// @export ajax
//
// *Init set localStorage
var ls = root.localStorage;
if(!ls.getItem("_struct"))
	ls.setItem("_struct","{}");

var MIME = {
	"application/json" : 1
};

// deal with Data type
function dataMIME(enable,header,param){
	if(enable)
		if(isObject(header))
			switch(MIME[header["Content-Type"]]){
				case 1:
					return JSON.stringify(param||{});
				default : 
					return _.paramstringify(param||{});
			}
	return param;
}

// base ajax aix [ method ]
function aix(option){
	var config = extend({
		// default param
		url       : "",
		type      : "GET",
		param     : broken,
		charset   : "utf-8",
		vaild     : true,
		cache     : false,
		success   : noop,
		error     : noop,
		loading   : noop,
		loadend   : noop,
		header    : broken,
		username  : null,
		password  : null,
		timeout   : 0,
		aysnc     : true,
		contentType : true
	} , options || {} );

	if(config.cache){
		var cache = JSON.parse(ls.getItem("_struct"));
		var data = cache[config.url || root.location.href.split("#").shift()];

		if(data!=null) 
			return config.sucess.call(root,data);
	}
	
	var xhr = new XMLHttpRequest();
	// with GET method
	if(config.type.toUpperCase() === "GET" && config.param){
		config.url += (~config.url.search(/\?/g) ?
									"&" : (keys(config.param).length ? "?" : ""))+
									paramStringify(config.param);
		config.param = null;
	}

	//set Loading
	xhr.addEventListener("loadstart",config.loading);
	xhr.addEventListener("loadend",config.loadend);

	xhr.open(
		config.type,
		config.url,
		config.aysnc,
		config.username,
		config.password
	);

	// with POST method
	if(config.type.toUpperCase() === "POST" &&
		 config.param &&
		 !config.header["Content-Type"] &&
		 config.contentType)
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;chartset="+config.charset);

	if(isObject(config.header) && config.header !== broken){
		var contentType = config.header["Content-Type"];

		if(contentType)
			if(!~contentType.search('charset') && !~contentType.search('json'))
				config.header["Content-Type"] += ";charset=" + config.charset;

		ol(config.header,function(val,key){
			xhr.setRequestHeader(key,val);
		});
	}

	xhr.onreadystatechange = function(event){
		// response HTTP response header 200 or lower 300
		// 304 not modifined
		if(xhr.readyState === 4 && xhr.responseText){
			var status = xhr.status;

			if(( status >= 200 && status < 300) || status === 304){
				config.success.call(root,xhr.responseText,xhr,event);
				// if cache been set writeJSON in chache
				if(config.cache){
					var cache = JSON.parse(ls.getItem("_struct"));
					cache[config.url||root.location.href.split("#")[0]] = xhr.responseText;
					ls.setItem("_struct",JSON.stringify(cache));
				}
			} else {
				config.error.call(root,xhr,event);
			}
		}
	};

	// send request
	xhr.send(config.param ? 
			(isObject(config.param) ? 
			dataMIME(config.contentType,config.header,config.param) :
			config.param ) : null);

	// setTimeout data of ajax
	if(toNumber(config.timeout)){
		asy(function(){
			if(xhr.readyState !== 4 || !xhr.responseText)
				config.error.call(root,xhr);
			xhr.abort();
		},config.timeout*1000||5000);
	}

	return xhr;
}

function JSONP(option){
	var config = extend({
		url : "",
		param : broken,
		key : "callback",
		callback : ("jsonp"+Math.random()).replace(".",""),
		timeout: 5,
		success : noop,
		error : noop
	}, option || {} );

	var url = config.url+"?" +
			paramStringify(config.param) +
			(keys(config.param).length ? "&" : "") +
			config.key + "=" + config.callback;

	var tag = document.createElement("script");
			tag.src = url;

	// define callback
	root[config.callback] = function(res){
		clearTimeout(config.timesetup);

		document.body.removeChild(tag);
		root[config.callback] = null;
		config.success(res);
	};

	// append elm
	// send request
	document.body.append(tag);

	// if timeout will trigger failcall
	if(toNumber(config.timeout)){
		config.timesetup = asy(function(){
			document.body.removeChild(tag);
			root[config.callback] = null;

			config.error();
		},config.timeout * 1000);
	}
}

// get slim method with signet param [ method ]
function ajaxGET(url,param,sucess,error){
	if(isFn(param)){
		error = sucess;
		sucess = param;
		param = {};
	}

	return aix({
		url : url,
		param : param,
		success : sucess,
		error : error
	});
}

function ajaxPOST(url,param,sucess,error){
	if(isFn(param)){
		error = sucess;
		sucess = param;
		param = {};
	}

	return aix({
		url : url,
		type : "POST",
		param : param,
		success : sucess,
		error : error
	});
}

function ajax(c){
	switch((c||"").toLowerCase()){
		case "get":
			return ajaxGET;
		case "post":
			return ajaxPOST;
		case "jsonp":
			return JSONP;
		default:
			return aix;
	}
}

// Struct Events 
// object add custom event, use [ emit ] to trigger
// @use addEvent
// @use removeEvent
// @use *emit
// @export Event
function addEvent(obj,type,fn){
	if(!obj._events)
		define(obj,"_events",{
			value : {},
			writable : false,
			enumerable: false,
			configurable: true
		});
	if(!obj._events[type])
		obj._events[type] = [];
	if(!has(obj._events[type],fn))
		obj._events[type].push(fn);
	return obj;
}

function removeEvent(obj,type,fn){
	if(obj._events[type]){
		not(obj._events[type],fn);
		if(!obj._events[type].length || !fn)
			delete obj._events[type];
	}else if(!type && !fn){
		delete obj._events;
		return obj;
	}
	return obj;
}

function emit(obj,type,fn,args){
	var hasFn = isFn(fn);

	if(isArray(fn) && !args){
		args = fn;
		fn = null;
	}

	if(obj._events)
		if(obj._events[type])
				ol(obj._events[type],function(f){
					if(f===fn||!hasFn) f.apply(obj,args||[]);
				});
	return obj;
}

function Event(c){
	switch((c||"").toLowerCase()){
		case "add":
			return addEvent;
		case "remove":
			return removeEvent;
		default:
			return emit;
	}
}

// Struct Prop listener
// @use getProp
// @use watch [ listen ]
// @use unwatch [ unlisten ]
// @exprot prop
function getProp(obj,prop){
	if(obj.hasOwnProperty(prop))
		return obj[prop];
}

function watch(obj,prop,handle){
	var oldval = obj[prop] , newval = oldval;
	function getter(){ return newval; }
	function setter(val){ 
		oldval = newval; 
		return newval = handle.call(obj,val,oldval,prop); 
	}

	if(delete obj[prop]){
		define(obj,prop,{
			get: getter,
			set: setter,
			enumerable: true,
			configurable: true
		});
	}

	return obj;
}

function unwatch(obj,prop){
	var val = obj[prop];
	delete obj[prop]; 
	obj[prop] = val;
	return obj;
}

function prop(c){
	switch((c||"").toLowerCase()){
		case "watch":
		case "listen":
			return watch;
		case "unwatch":
		case "unlisten":
			return unwatch;
		default:
			return getProp;
	}
}

// countBy [ method ]
// countBy(['abc','de','fg'],'length') => {2: 2, 3: 1}
// countBy([3.1, 1.4, 1.2, 2.2],Math.floor) => {1: 2, 2: 1, 3: 1}
function countBy(ary,by){
	var res = {};
	var fn = isFn(by);
	fov(ary,function(val,key){
		var getkey = (fn ? by(val) : val[by]);
		if(!res[getkey])
			res[getkey] = 1;
		else
			res[getkey] += 1;
	});
	return res;
}

// return random element [ method ]
// auto([1,2,3,4,5]) => random(in ary);
function auto(ary,size){
	return toNumber(size) > 1 ? 
				 slice(shuffle(ary),0,toNumber(size)) : 
				 ary[random(ary.length-1)];
}

// detect Variable size [ method ]
// size([1,2,3]) => 3
// size('abcd') => 4
// size({a:1}) => 1
// size(null) => 0
// size(NaN) => 0
function size(n){
	if(!isFn(n) && n!= null && !isNaN(n))
		return n.length !=null ? n.length : (isObject(n) ? keys(n).length : 0);
	return 0;
}

// return now TimeStamp [ method ]
function now(){
	return (new Date()).getTime();
}

// object values [ method ]
// @export values
function values(obj){
	var res;
	if(isDefine(obj,"String"))
		return obj.join('');
	else
		ol((res = [],obj),function(val){ res.push(val); });
	return res;
}

// create Memoize function [ method ]
function memoize(fn,context){
	var memo = [];
	return function(){
		var args = slice(arguments), df;
		for(var i=memo.length; i--; ){
			if(eq(memo[i][0],args)){
				df = memo[i][1]; break;
			}
		}
		if(df===void 0)
			memo.push([args,df=fn.apply(context,args)]);
		return df;
	};
}

// create Negate function [ method ]
function negate(fn,context){
	return function(){
		return !fn.apply(context,arguments);
	};
}

// create wrapper functions stack [ method ]
// args [ ...function ];
//
// var a = function(t){ return "<a>"+t+"<a>"}
// var b = function(t){ return "<b>"+t+"<b>"}
// var c = function(t){ return "<c>"+t+"<c>"}
// var w = wrap(a,b,c);
// w("tag") => "<c><b><a>tag<a><b><c>"
function wrap(){
	var stk = slice(arguments)
	.filter(function(fn){ return isFn(fn); })
	.map(function(fn,index){
		return function(){
			var next = stk[index+1], res=fn.apply(null,arguments);
			return isFn(next) ? next(res) : res;
		};
	});
	return first(stk) || noop;
}

// _ chain stack [ method ]
// @use wrap
// @use chain
// @export [ _ ]
function _(){
	return new chain(arguments);
}

function chain(args){
	define(this,{
		"-" : {
			value : 0 in args ? args : void 0,
			writable : true,
			enumerable : false,
			configurable : false
		},
		"=" : {
			value : [],
			writable : false,
			enumerable : false,
			configurable : false
		}
	});
}

chain.prototype.run = function(){
	return wrap.apply(null,this["="].splice(0,size(this['='])))
						 .apply(null,this['-']===void 0 ? arguments : this['-']);
};

// cast arguments to Array
function castArray(){
	return slice(arguments);
}

function toArray(n){
	var res = [];
	if(typeof n === "string")
		res = n.split('');
	else if(isObject(n) && !isFn(n))
		res = values(n);
	return res;
}

// Struct stack [=]
var stack = function(arr){
	var ram = arr || [];

	var fireList = [];

	al(ram,function(g){
		var fn = isFn(g[0]) ? g[0] : noop;
		var time = toNumber(g[1]);

		var fire = function(args){
			asy(function(){
				var next = fireList.pop();
				var res = fn(args);
				if(isFn(next)) next(res);
			});
		};

		fireList.push(fire);
	});

	define(this,"=",{
		value : fireList,
		writable : true,
		enumerable: false,
		configurable: false
	});
};

extend(stack.prototype,{
	noop : function(){
		this["="] = [];
		return this;
	},

	fire : function(args){
		return this["="].length &&
			     this["="].pop().call(root,args);
	},

	add : function(){
		var args = slice(arguments);

		al(args,function(item){
			var _this = this;

			if(!isFn(item)&&!isArray(item))
				throw new ReferenceError("add/push arguments error when assign to stack!");
			var fn = isArray(item) ? item[0] : item;
			var time = isArray(item) ? (item[1]||0) : toNumber(item||0);

			var fire = function(args){
				asy(function(){ 
					var next = _this["="].pop();
					var res = fn(args);
					if(isFn(next)) next(res);
				},time*1000);
			};

			this["="].push(fire);
		},this);
	}
});

var nublist = {
	extend : extend,
	depextend : depextend,
	define : define,
	keys : keys,
	noop : noop,
	cool : cool,
	clone : clone,
	depclone : depclone,
	has : has,
	not : not,
	cat : cat,
	find : filter,
	filter : filter,
	reject : reject,
	diff : diff,
	intsec : intersection,
	hook : hook,
	chunk : chunk,
	compact : compact,
	pluck : pluck,
	groupby : groupby,
	shuffle: shuffle,
	first : first,
	head : first,
	last : last,
	flat : flatten,
	merge : merge,
	random : random,
	auto : auto,
	trim : trim,
	countBy : countBy,
	part : part,
	once : once,
	one : one,
	eq : eq,
	asy : asy,
	cookie : cookie,
	stack : stack,
	values : values,
	memoize: memoize,
	negate : negate,
	size : size,
	now : now,
	cit : cit,
	wrap : wrap,
	castArray:castArray,
	// swap: swap,
	v8 : v8,
};

// Advance list
var zublist = {
	op : op,
	each : op,
	map : map,
	type : type,
	html : html,
	unique : unique,
	convert: convert,
	pull : pull,
	param : param,
	ajax : ajax,
	event : Event,
	prop : prop,
	drop : drop,
	pairs : pair,
	index : Index,
	doom : doom
};

// Generators
// @define base symbol
ol(nublist,function(fn,key){
	chain.prototype[key] = function(){
		return this['='].push(fn),this;
	};
	return nub.apply(null,arguments);
}); 

ol(zublist,function(fn,key){
	chain.prototype[key] = function(){
		return this['='].push(fn.apply(null,arguments)),this;
	};
	return zub.apply(null,arguments);
});


struct._ = _;
struct.broken = broken;
struct.VERSION = VERSION;
struct.prototype = struct.__proto__ = null;

return Object.freeze(v8(struct));
}));
