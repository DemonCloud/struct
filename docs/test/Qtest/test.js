console.time("struct pref");
;(function(Q,struct){
	var ta = [],
			to = {},
			targ = (function(){ return arguments; }()),
			tn = document.createElement('a'),
			ts = '',
			noop = function(){};

	var eq = struct.eq();

	Q.module("[ Struct ]");

	Q.test(" - [ define ]",function(a){
		var define = struct.define();
		var k = {};

		define(k,"init",{
			value:1,
			writable:true,
			configurable:true,
			enumerable:false
		});
		a.equal(k.init,1,"define single key success!");

		define(k,{
			"a":{
				value:1,
				writable:true,
				configurable:true,
				enumerable:false
			},

			"b":{
				value:'213',
				writable:false,
				configurable:false,
				enumerable:false
			}
		});

		a.equal(k.a,1,"define mutip a key success!");
		a.equal(k.b,'213',"define mutip b key success!");

		delete k.b;
		a.equal(k.b,'213',"can not delete key b");
	});

	Q.test(" - [ extend ]",function(a){
		var extend = struct.extend();

		var k = { a:1 };
		extend(k,{ b:2 });
		a.equal(k.b,2,"extend compose origin object success!");
		
		var k2 = { a:1,b:2 };
		extend(k2,{c:2,d:3,isIgnore:true},["isIgnore"]);
		a.equal(k2.isIgnore,void 0,"ignore define key isIgnore");
	});

	Q.test(" - [ depextend ]",function(a){
		var extend = struct.depextend();

		var k = { a:1 };
		var c = { b:2 };
		var b = extend(k,c);
		a.equal(k!==b&&k!==c,true,"depextend obj not equal themself");

		a.equal(b.a===1&&b.b===2,true,"clone the obj success");
	});

	Q.test(" - [ clone ]",function(a){
		var clone = struct.clone();
		var obj = {a:1,b:2,c:3};
		var arr = [1,2,3,4];

		a.equal(eq(obj,clone(obj)),true,"clone object");
		a.equal(eq(arr,clone(arr)),true,"clone array");
	});

	Q.test(" - [ depclone ]",function(a){
		var clone = struct.depclone();
		var obj = {a:1,b:2,c:3};
		var arr = [1,obj,3,obj];
		var arrcp = clone(arr);

		a.equal(eq(obj,clone(obj)),true,"clone object");
		a.equal(eq(arr,arrcp),true,"clone array");
		a.equal(arrcp[1]!==obj,true,"clone array deep constructor");
		a.equal(arrcp[3]!==obj,true,"clone array deep constructor");
	});

	Q.test(" - [ not ]",function(a){
		var not = struct.not();
		var arr = ['1','2',3,4,'d','e'];
		var arr2 = [3,4,5];
		var obj = { a:1,b:2,c:3,'123':321 };

		not(obj,321);
		not(arr2,3);
		not(arr,/\d/);
		
		a.equal(obj['123'],void 0,"not filter obj");
		a.equal(arr2.length===2&&arr2[0]===4,true,"filter arr");
		a.equal(arr.length===2&&arr[0]==='d',true,"filter arr with regexp");
	});

	Q.test(" - [ filter ]",function(a){
		var filter = struct.filter();
		
		var arr = [1,2,3,4,5,6];
		var obj = { a:1, b:2, c:3, d:4, e:4, f:6 };
		var strarr = ['abc','bca','adc','bcd','dab','cad'];
		var strobj = { abc:'abc',bac:'abc',123:'cad',abd:'abc' };


		a.equal(eq(filter(arr,4),[4]),true,"filter array with value");
		a.equal(eq(filter(obj,4),[4,4]),true,"filter object with value");
		a.equal(filter(strarr,/^ab/).pop(),'abc',"filter array with regExp");
		a.equal(eq(filter(strobj,/^ab/),['abc','abc','abc']),true,"filter object with regExp");
		a.equal(eq(filter(arr,function(v){ return v>3;},true),[3,4,5]),true,"filter array by key");
		a.equal(eq(filter(strobj,/^ab/,true),['abc','bac','abd']),true,"filter object by key");
	});

	Q.test(" - [ reject ]",function(a){
		var reject = struct.reject();
		
		var arr = [1,2,3,4,5,6];
		var obj = { a:1, b:2, c:3, d:4, e:4, f:6 };
		var strarr = ['abc','bca','adc','bcd','dab','cad'];
		var strobj = { abc:'abc',bac:'abc',123:'cad',abd:'abc' };

		a.equal(eq(reject(arr,4),[1,2,3,5,6]),true,"reject array with value");
		a.equal(eq(reject(obj,4),[1,2,3,6]),true,"reject object with value");
		a.equal(eq(reject(strarr,/^ab/),['bca','adc','bcd','dab','cad']),true,"reject array with regExp");
		a.equal(eq(reject(strobj,/^ab/),['cad']),true,"reject object with regExp");
		a.equal(eq(reject(arr,function(v){ return v>3;},true),[0,1,2]),true,"reject array by key");
		a.equal(eq(reject(strobj,/^ab/,true),['123']),true,"reject object by key");
	});

	Q.test(" - [ cat ]",function(a){
		var cat = struct.cat();
		
		var arr = [1,2,3,4,5,6];
		
		var cr = cat(arr,function(v){ return v>3; });
		a.equal(eq(arr,[1,2,3]),true,"cat array");
		a.equal(eq(cr,[4,5,6]),true,"cat array with Identifier");
	});

	Q.test(" - [ has(key) ]",function(a){
		var haskey = struct.has('key');
		var arr = ['a','b','c','d','e'];
		var obj = { a:1,b:2,c:3,'123':321 };

		a.equal(haskey(arr,0),true,"has key index 0");
		a.equal(haskey(arr,1),true,"has key index 1");
		a.equal(haskey(arr,5),false,"has not key index 5");
		a.equal(haskey(obj,'a'),true,"has key a");
		a.equal(haskey(obj,'d'),false,"has not key d");
		a.equal(haskey(obj,/\d+/),true,"support resexp object check");
		a.equal(haskey(arr,/\s/),false,"support resexp array check");
	});

	Q.test(" - [ has() ]",function(a){
		var has = struct.has();
		var arr = ['a','b','c','d','e'];
		var obj = { a:1,b:2,c:3,'123':321 };

		a.equal(has(arr,0),false,"has not value 0");
		a.equal(has(arr,1),false,"has not value 1");
		a.equal(has(arr,'e'),true,"has value 'e'");
		a.equal(has(obj,'a'),false,"has not value 'a'");
		a.equal(has(obj,3),true,"has value 3");
		a.equal(has(obj,/\d+/),true,"support resexp object check");
		a.equal(has(arr,/\d+/),false,"support resexp array check");
	});

	Q.test(" - [ type(object) ]",function(a){
		var iso = struct.type('object');

		a.equal(iso(to),true,"isObject test pure object");
		a.equal(iso(void 0),false,"void 0 is not object");
		a.equal(iso(document.body),true,"dom element instanceof object");
		a.equal(iso(noop),true,"function instanceof object");
	});

	Q.test("- [ type(array) ]",function(a){
		var is = struct.type('array');
	
		a.equal(is(ta),true,"isArray test pure array");
		a.equal(is(to),false,"Object is not pase test pure array");
		a.equal(is(targ),false,"ArrayLike object is not pase test pure array");
	});

	Q.test("- [ type(arraylike) ]",function(a){
		var is = struct.type('arraylike');
	
		a.equal(is(ta),true,"ArrayLike test pure array");
		a.equal(is(to),false,"Object is not pase test arrayLike");
		a.equal(is(targ),true,"arguments is arraylike");
	});

	Q.test(" - [ type(function),(fn) ]",function(a){
		var is = struct.type('fn');

		a.equal(is(noop),true,'check is function');
		a.equal(is(ta),false,'array is not function');
		a.equal(is(to),false,'object is not function');
		a.equal(is(arguments),false,'arguments is not function');
		a.equal(is(true),false,'boolean is not function');
	});

	Q.test(" - [ type(nan) ]",function(a){
		var is = struct.type('nan');
		
		a.equal(is(NaN),true,"check NaN type");
		a.equal(is(to),false,"empty object is not NaN type");
		a.equal(is(ts),false,"empty string is not NaN type");
		a.equal(is(0),false,"0 number is not NaN type");
	});

	Q.test(" - [ type(primitive),(prim) ]",function(a){
		var is = struct.type('primitive');
		
		a.equal(is(to),false,"object is not primitive");
		a.equal(is(ta),false,"array is not primitive");
		a.equal(is(targ),false,"arguments is not primitive");
		a.equal(is(1),true,"number is primitive");
		a.equal(is(NaN),true,"NaN is primitive");
		a.equal(is(ts),true,"string is primitive");
		a.equal(is(null),true,"null is primitive");
		a.equal(is(noop),true,"function is primitive");
		a.equal(is(),true,"void 0 (undefined) is primitive");
	});

	Q.test(" - [ type(identifier),(idt) ]",function(a){
		var is = struct.type('identifier');
		
		a.equal(is(ts),false,"empty string is not Identifier");
		a.equal(is(123),false,"number is not Identifier");
		a.equal(is(),false,"void 0 is not Identifier");
		a.equal(is('abs'),true,"normal string is Identifier");
		a.equal(is('abs123'),true,"normal add number string is Identifier");
		a.equal(is('21abs'),false,"number add normal string is not Identifier");
		a.equal(is('ab-s27'),false,"identifier not support expeace char");
		a.equal(is('ab*&s27'),false,"identifier not support expeace char");
	});

	Q.test(" - [ type(int) ]",function(a){
		var is = struct.type('int');
		
		a.equal(is(1),true,"check static int number");
		a.equal(is(1.2),false,"float type");
		a.equal(is(0.223144444897),false,"double type");
		a.equal(is(-2),true,"minus type");
		a.equal(is(-2.211232321323),false,"minus float type");
		a.equal(is(NaN),false,"nan type ");
	});

	Q.test(" - [ type(float),(double) ]",function(a){
		var is = struct.type('float');
		
		a.equal(is(1),false,"check static int number");
		a.equal(is(1.2),true,"float type");
		a.equal(is(0.223144444897),true,"double type");
		a.equal(is(-2),false,"minus type");
		a.equal(is(-2.211232321323),true,"minus float type");
		a.equal(is(NaN),false,"nan type ");
	});

	Q.test(" - [ type(date) ]",function(a){
		var is = struct.type('date');
	
		a.equal(is(new Date),true,"date type");
		a.equal(is(Date),false,"date function type");
	});

	Q.test(" - [ type(empty) ]",function(a){
		var is = struct.type('empty');
	
		a.equal(is(to),true,"empty object");
		a.equal(is(ta),true,"empty array");
		a.equal(is(ts),false,"empty string is not empty");
		a.equal(is(0),false,"empty number is not empty");
	});
	
	Q.test(" - [ type(element),(elm),(dom) ]",function(a){
		var is = struct.type('element');
	
		a.equal(is(to),false,"empty object");
		a.equal(is(ta),false,"empty array");
		a.equal(is(ts),false,"empty string");
		a.equal(is(0),false,"zero number");
		a.equal(is(tn),true,"elm check");
		a.equal(is(document.body),true,"elm check");
	});

	Q.test(" - [ type(native) ]",function(a){
		var is = struct.type('native');
	
		a.equal(is(to),false,"empty object");
		a.equal(is(ta),false,"empty array");
		a.equal(is(ts),false,"empty striing");
		a.equal(is(tn),false,"empty Element");
		a.equal(is(0),false,"empty 0");
		a.equal(is(struct),false,"asy function object");
		a.equal(is(Object),true,"constrict object");
		a.equal(is(alert),true,"alert is native api");
		a.equal(is(confirm),true,"console log is native api");
	});

	Q.test(" - [ type() ]",function(a){
		var is = struct.type();
	
		a.equal(is(to),'object',"empty object");
		a.equal(is(ta),'array',"empty array");
		a.equal(is(ts),'string',"empty striing");
		a.equal(is(tn),'object',"empty Element");
		a.equal(is(0),'number',"empty 0");
		a.equal(is(new Date()),'date',"date type");
		a.equal(is(/\s/),'regexp',"regexp type");
		a.equal(is(struct),'function',"function type");
	});

	
	Q.test(" - [ convert(string),(str),() ]",function(a){
		var co = struct.convert('string');
	
		a.equal(co(to),'[object Object]',"empty object");
		a.equal(co(ta),'',"empty array");
		a.equal(co(ts),'',"empty string");
		a.equal(co(123),'123','to string number');
		a.equal(co([1,2,3]),'1,2,3','pure array');
		a.equal(co(null),'','null');
		a.equal(co(void 0),'','void 0');
	});

	Q.test(" - [ convert(number),(num) ]",function(a){
		var co = struct.convert('number');
	
		a.equal(co(to),0,"empty object");
		a.equal(co(ta),0,"empty array");
		a.equal(co(ts),0,"empty string");
		a.equal(co(123),123,'pure number');
		a.equal(co('1.232123'),1.232123,'float number');
		a.equal(co(-0.321),-0.321,'float minus');
		a.equal(co([1,2,3]),0,'pure array');
		a.equal(co(null),0,'null');
		a.equal(co(void 0),0,'void 0');
	});

	Q.test(" - [ convert(array),(arr) ]",function(a){
		var co = struct.convert('array');
	
		a.equal(co(to).length,0,"empty object");
		a.equal(co({a:2,b:1}).length,2,"object");
		a.equal(co(ta).length,0,"empty array");
		a.equal(co(ts).length,0,"empty string");
		a.equal(co(123).pop(),123,'pure number');
		a.equal(co('1232123').length,7,'number string');
		a.equal(co(null).length,0,'null');
		a.equal(co(void 0).length,0,'void 0');
	});

	Q.test(" - [ convert(hex) ]",function(a){
		var co = struct.convert('hex');
	
		var rgb1 = { r:82,g:140,b:224 }, //528ce0
				rgb2 = { r:210,g:224,b:230 }, //d2e0e6
				rgb3 = { r:54,g:96,b:151 }, //366097
				rgb4 = { r:255,g:255,b:255 }, //ffffff
				rgb5 = { r:0,g:0,b:0 }; //000000

		a.equal(co(rgb1),'528ce0',"rgb1");
		a.equal(co(rgb2),'d2e0e6',"rgb2");
		a.equal(co(rgb3),'366097',"rgb3");
		a.equal(co(rgb4),'ffffff',"rgb4");
		a.equal(co(rgb5),'000000',"rgb5");
	});

	Q.test(" - [ convert(rgb) ]",function(a){
		var co = struct.convert('rgb');
	
		var hex1 = '528ce0', //528ce0
				hex2 = 'd2e0e6', //d2e0e6
				hex3 = '366097', //366097
				hex4 = 'ffffff', //ffffff
				hex5 = '000000'; //000000

		a.equal(eq(co(hex1),{r:82,g:140,b:224}),true,"hex1");
		a.equal(eq(co(hex2),{r:210,g:224,b:230}),true,"hex2");
		a.equal(eq(co(hex3),{r:54,g:96,b:151}),true,"hex3");
		a.equal(eq(co(hex4),{r:255,g:255,b:255}),true,"hex4");
		a.equal(eq(co(hex5),{r:0,g:0,b:0}),true,"hex5");
	});

	Q.test(" - [ convert(minus) ]",function(a){
		var co = struct.convert('minus');
	
		a.equal(co(1),-1,"minus 1");
		a.equal(co('1'),-1,"minus 1 string");
		a.equal(co(1.23),-1.23,"minus float");
		a.equal(co('1.23'),-1.23,"minus float string");
		a.equal(co('abc'),-0,"minus untype string");
		a.equal(co(-1),1,"minus -1");
	});

	
	Q.test(" - [ each(array),op(array) ]",function(a){
		var loop = struct.each('array');
		var check = [1,2,3,4];
		var res = []; 

		loop(check,function(v){
			res.push(v);
		});
		
		a.equal(eq(check,res),true,"loop array");
	});

	Q.test(" - [ each(object),op(object) ]",function(a){
		var loop = struct.each('object');
		var check = {a:1,b:2,c:3,d:4};
		var res = {}; 

		loop(check,function(val,key){
			res[key] = val;
		});
		
		a.equal(eq(check,res),true,"loop object");
	});

	Q.test(" - [ each(),op() ]",function(a){
		var loop = struct.each();
		var check = [1,2,3,4];
		var res = []; 
		var check1 = {a:1,b:2,c:3,d:4};
		var res1 = {}; 

		loop(check,function(v){
			res.push(v);
		});
		loop(check1,function(val,key){
			res1[key] = val;
		});
		
		a.equal(eq(check,res),true,"loop array");
		a.equal(eq(check1,res1),true,"loop object");
	});

	Q.test(" - [ index(first) ]",function(a){
		var first = struct.index("first");

		var arr = [1,2,3,4,1,2,3,4,5];
		var obj = { a:1, b:4, c:3, d:4 };

		a.equal(first(arr,1),0,"first index in array");
		a.equal(first(obj,4),'b',"first index in object");
	});

	Q.test(" - [ index(last) ]",function(a){
		var last = struct.index("last");

		var arr = [1,2,3,4,1,2,3,4,5];
		var obj = { a:1, b:4, c:3, d:4 };

		a.equal(last(arr,4),7,"last index in array");
		a.equal(last(obj,4),'d',"last index in object");
	});

	Q.test(" - [ index(one),(single) ]",function(a){
		var one = struct.index('single');
		var arr = [1,2,3,4,1,2,3,4,5];
		var strarr = ['abc','bca','adc','bcd','dab','cad'];
		var strobj = { abc:'abc',bac:'abc',123:'cad',abd:'abc' };

		a.equal(one(arr,function(v){ return v>4;}),5,"find first element in array");
		a.equal(one(strarr,/d/),'adc',"regexp first element in string array");
		a.equal(one(strobj,function(v,k){ return /^\d+/.test(k); }),'cad',"find by key regexp element in array");
	});

	Q.test(" - [ index() ]",function(a){
		var index = struct.index();
		var arr = [1,2,3,4,1,2,3,4,5];
		var obj = { a:1, b:4, c:3, d:4 };
		var strarr = ['abc','bca','adc','bcd','dab','cad'];
		var strobj = { abc:'abc',bac:'abc',123:'cad',abd:'abc' };

		a.equal(eq(index(arr,1),[0,4]),true,"index in array");
		a.equal(eq(index(arr,5),8),true,"one index in array");
		a.equal(eq(index(obj,3),'c'),true,"index in object");
		a.equal(eq(index(arr,function(v){ return v>3; }),[3,7,8]),true,"index filter in array");
		a.equal(eq(index(obj,function(v){ return v>3; }),['b','d']),true,"index filter in object");
		a.equal(eq(index(strarr,/ca$/),1),true,"index by regexp in array");
		a.equal(eq(index(strobj,/^ab/),['abc','bac','abd']),true,"index by regexp in object");
	});

	Q.test(" - [ map(key) ]",function(a){
		var mapkey = struct.map('key');
		var obj = { a:1,b:2,c:3,d:4 };
	
		a.equal(eq(mapkey(obj,function(v,k){ return k+v;}),{a1:1,b2:2,c3:3,d4:4}),true,"test mapkey");
		a.equal(eq(mapkey(obj,function(v,k){ return v+k;}),{'1a':1,'2b':2,'3c':3,'4d':4}),true,"test mapkey");
	});

	Q.test(" - [ map() ]",function(a){
		var map = struct.map();
		var obj = { a:1,b:2,c:3 };
		var arr = [1,2,3,4];
	
		a.equal(eq(map(arr,function(a){ return a+1; }),[2,3,4,5]),true,"map object");
		a.equal(eq(map(obj,function(a){ return a+1; }),{a:2,b:3,c:4}),true,"map object");
	});
	
	Q.test(" - [ unique(fast) ]",function(a){
		var fu = struct.unique('fast');
		var arr = [1,2,3,4,1,2,3,4,5,2,3,4,5,6,1,7,2,4,5,6,8];
		var arr2 = ['acd','132','132','abc','acd','cad'];

		a.equal(eq(fu(arr),[1,2,3,4,5,6,7,8]),true,"unique pure number array");
		a.equal(eq(fu(arr2),['132','acd','abc','cad']),true,"unique pure string array");
	});

	Q.test(" - [ unique() ]",function(a){
		var fu = struct.unique();
		var arr = [1,2,3,4,1,2,3,4,5,2,3,4,5,6,1,7,2,4,5,6,8];
		var arr2 = ['acd','132','132','abc','acd','cad'];

		a.equal(eq(fu(arr),[1,2,3,4,5,6,7,8]),true,"unique pure number array");
		a.equal(eq(fu(arr2),['acd','132','abc','cad']),true,"unique pure string array");
	});

}).call(this,QUnit,struct);
console.timeEnd("struct pref");
