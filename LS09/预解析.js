//JS
//解析器不会进行二次声明，会二次定义
//全局预解析阶段（全局变量和函数声明前置）
//将变量和函数声明在当前作用域进行提升
//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出什么
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么
var obj2 = obj1;
console.log(obj1,obj2);//输出什么
obj2.x =25;
console.log(obj1,obj2);//输出什么
/*
会将两个var语句提到前面执行第一行输出undefined，第二次输出23，undefind，再往下
obj2指向obj1并改变值，输出25,25
 */

/*--------------------------------------------------------------------------*/

foo();//报错
var foo = function foo(){}
//function前面有运算符的话，会认为其为表达式不会提升

var name = "jack";
function echo(){
	console.log(name);
}
function foo(){
	var name = "bill";
	echo();
}
foo();//调用函数时 以函数为基准向上找变量

//es5没有块作用域，但有函数作用域
if(false){
    var z = 23;
}
console.log(z);//undefind

if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错