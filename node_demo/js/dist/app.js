(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

let modules1 = require('./modules1')
let modules2 = require('./modules2')
let modules3 = require('./modules3')
let uniq = require('uniq')

console.log(modules1.age);
modules2.haha();
console.log(modules3());
console.log(uniq([4,7,2,5,3,6]))
// console.log(modules3.haha())
console.log(require)
},{"./modules1":2,"./modules2":3,"./modules3":4,"uniq":5}],2:[function(require,module,exports){

module.exports = {
	name:'zhaoxia',
	age:'18',
	test(){
		console.log(this.age)
	}
}
},{}],3:[function(require,module,exports){

exports.haha = function(){
	console.log('woshiwo')
}
},{}],4:[function(require,module,exports){

// exports.peiqi = [1,2,3,4,5];

module.exports = function(){
    console.log('哈哈')
}
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
