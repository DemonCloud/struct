const src = "./src/";
const dest = "./dest/";
const testdest = "./docs/js/";

const colors = require("colors");
const gulp = require("gulp");
const gfilter = require("gulp-filter");
const uglify = require("gulp-uglify");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");

const esconfig = {
	parserOptions:{
		ecmaVersion : 5
	},
	rules: {
		'strict': 2,
		'no-new-wrappers' : 2,
		'no-await-in-loop' : 1,
		'no-compare-neg-zero' :1,
		'no-console':1,
		'no-constant-condition':1,
		'no-dupe-args':1,
		'no-dupe-keys':1,
		'no-duplicate-case':1,
		'no-empty':1,
		'no-empty-character-class':1,
		'no-ex-assign':1,
		'no-func-assign':1,
		'no-obj-calls':1,
		'no-regex-spaces':1,
		'no-sparse-arrays':1,
		'use-isnan':1,
		'valid-typeof':1,
		'accessor-pairs':1,
		'block-scoped-var':1,
		'array-callback-return':1,
		'complexity':1,
		'default-case':1,
		'no-caller':1,
		'no-extend-native':1,
		'no-extra-bind':1,
		'no-loop-func':1,
		'no-octal-escape':1,
		'array-bracket-spacing':1
	},
	globals: [
		'struct'
	],
	env:{
		browser : true
	}
};

const stdout = (result) => {
	// Called for each ESLint result. 
	if(result.errorCount){
		console.log(`ESLint result: ${result.filePath}`);
		console.log((`# Errors: ${result.errorCount}`).red);
		for(let i=0,msg; i<result.messages.length;i++){
			msg = result.messages[i];
			console.log((`   Line:${msg.line}   Column: ${msg.column}`).yellow);
			console.log((` - ${msg.message}`).red);
		}
	}
};

gulp.task('build:es5',function(){
	return gulp.src(src+"struct.js")
		.pipe(gfilter(['**'],{restore:true}))
		.pipe(eslint(esconfig))
		.pipe(eslint.result(stdout))
		.pipe(uglify())
		.pipe(rename('struct.c.js'))
		.pipe(gulp.dest(dest))
		.pipe(gulp.dest(testdest));
});

gulp.task('default',['build:es5']);
