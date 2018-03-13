var a = 123;
var b = new Number(a);

console.log(a == b);//true 数值相等
console.log(a === b);//false 先判断类型，a是基本数据类型，b是引用数据类型

//包装对象
//number，boolean，string等基本数据类型都有对应的对象类型，可以将其包装成对象
new Number(20);//装箱
new String("some str");//装箱
//当系统读取基本数据类型（数字，布尔值，字符串）值属性的时候，会自动创建临时包装对象
console.log("abc".length);//创建临时包装对象

//基本数据类型的属性不会被改变
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象，所以可以调用str的length方法
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值
//引用数据类型的值可以被改变
var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]

//临时对象在使用后会立即释放，因此给临时对象设置一个新属性没什么意义
var str="abs";
str.d=3;//给临时对象设置新属性，执行完此语句临时对象被释放
console.log(str.d);//输出结果为underfined