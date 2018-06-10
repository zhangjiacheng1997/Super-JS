//解构赋值：es6允许按照一定模式，从数组和对象中提取值，对变量进行赋值

//数组的结构赋值
let [,,third] = ["foo","fee","faa"];
console.log(third);//faa

let [x,,y] = [1,2,3];
console.log(x,y);//1,3

let [head,...tail] = [1,2,3,4];
console.log(head,tail);//1,[2,3,4]

let [d,e,...f] = ['a'];
console.log(d,e,f);//d是a，e对应位没有值所以是undefind，f则是空数组

//对象的结构赋值
var {bar,bor} = {bor:'oo',bar:'aa'};
console.log(bar,bor);//赋值时只看变量名字，不看变量位置
//原始应该是var {bar:bar,bor:bor} = {bor:'oo',bar:'aa'};