
//aboutblank
function foo(){
    var a=b=3;//b定义到了window上，a是局部变量
    var a,b=3;//都是局部变量
}
foo();
console.log("b:",b);//是否报错？输出几？为什么？
console.log("a:",a);//是否报错？

//--------------------------------------------------------------//

//ES5中没有块的概念,ES6中有
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);

if(true){
    var a = 20;
}
console.log(a);

//--------------------------------------------------------------//

// 严格模式使用方式
//全局使用
"use strict"
//函数内部使用
function foo() {
    "use strict"
}
//严格模式下全局变量要显式声明
//严格模式下this为undefined，非严格模式下this指向window
var a=3;
function foo(){
	a=0;
	console.log(this.a);
}
foo();
console.log(a)

//--------------------------------------------------------------//

var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}