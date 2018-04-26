//创建对象的四种方法
var obj1={
	a:1,
	b:2
};

var obj2=new Object;
obj2.a=1;
obj2.b=2;


var obj4=Object.create(obj2);//原型继承创建对象

function Obj(x,y){//首字母大写表示函数为构造函数
	this.a=x;
	this.b=y;
}
var obj3=new obj(1,2);

//JavaScript采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null
//任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象
var proObj = {
    z:3
};

var obj = Object.create(proObj);//obj继承自proObj
obj.__proto__.z=2;
console.log(proObj.z);
obj.__proto__===proObj.prototype;
false//obj的_proto_指向proObj而不是proObj.prototype
obj.__proto__===proObj;
true
proObj.__proto__===Object.prototype;
true
//只有构造函数才有prototype对象属性，普通继承对象没有prototype属性，子属性直接指向母属性
Bb.__proto__===Function.prototype
true
var bb = new Array;
bb.__proto__===Array.prototype;
true