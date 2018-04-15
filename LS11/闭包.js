//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是一个函数外加上该函数创建时所建立的作用域
function foo(){
	var i=0
	function bar(){
		console.log(++i);//函数bar和i闭包成为一个整体
	}
	return bar;
}
var a = foo();
a();//调用bar函数打印 1
a();//再次调用i没被释放打印 2

//可通过闭包来访问隐藏在函数作用域内的局部变量
//使函数中的变量被保存在内存中不被释放（单例模式）

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？
console.log(inc(2));//输出多少？
var inc = createInc(5);
console.log(inc(1));//输出多少？删除原有闭包

//闭包只包含函数及函数所在的作用域下的变量，自由全局变量可以访问但不在闭包中
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18