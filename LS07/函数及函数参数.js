//函数定义的三种方式
/*用构造函数创建函数对象，参数都是字符串类型，最后一个参数是函数体*/
var str = "return a<b?a:b";
var min = new Function("a","b",str);//动态生成函数，可以随时给str传值
/*用关键字创建函数*/
function min(){
    return a<b?a:b;
}
/*利用变量*/
var min = function(){
    return a<b?a:b;
}

/*----------------------------------------------------------------------------------------*/

//函数调用的四种方法
/*作为函数直接调用，（非严格模式下this表示window，严格模式下是undefined）*/
function foo(){
    console,log("log");
}
foo();//定义到window下，作为window的方法
/*作为对象的方法调用（this表示调用此方法的对象）*/
var x = 45;
var test = function(){//创建一个函数
    console.log("this.x");
}
var obj = {
    x:23,
}
obj.test = test;
obj.test();//23
test();//45
//
var x = 45;
var obj = {
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		console.log(this.x);
		foo();
	}
};
obj.test();//23 45,对于对象的方法，指向对象的this指针只能渗透一层function

/*通过call()和apply()间接调用（this为函数对象的call//apply方法的首个参数，移花接木）*/
objA = {name:"AA"};
objB = {name:"BB"};
var name = CC;
objA.foo = function(){
    console.log(this.name);
}
objA.foo.call(objB);//BB;foo后面不能加()，如果加了直接调用objA的方法然后结束
objA.foo.call(null);//CC;null表示调用全局的name
/*----------------------------------------------------------------------------------------*/
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var me = {
    name:"ABC"
};

fish.swim(5,6);
fish.swim.call(me,3,4);

/*----------------------------------------------------------------------------------------*/

/*函数参数数量问题*/
//实参数量大于形参的情况（通过函数对象属性argument获得所有实参，类数组对象）argument是类数组对象有数组的属性和方法但类型仍是object
function test() {
    console.log(arguments);
}
test("hello,", "world!");//"hello,world!"
//实参数量小于形参的情况
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
/*类数组对象*/