//let创建的变量不会被污染，有块的作用域
let i = 6;
if(1){
	let i = 3;
	console.log(i);
}
console.log(i);
//ES6用const声明不变变量，也常用来声明不变函数
//const作用域和let一样，都有块作用域
if(1){
	const i = 2;
}
console.log(i);//找不到i
const fee = function(){}//声明一个不变函数
//const修饰的引用，引用不会变，但引用的内容可变