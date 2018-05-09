//创建数组
var arr = new Array(5);
console.log(arr)//创建一个长度为5的空数组

var arr = new Array("5");
console.log(arr)//创建含有一个元素为5的数组

var arr1 = [];
arr1[4] = 2;//arr1变成含5个元素的数组第5个元素是2

var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2)//a1和a2都是空数组（引用数据类型）数组属于对象

//数组的基本操作
var arr3 = [1,2,3]
delete arr3[2];
console.log(arr3)//arr3第三个属性变成empty。数组的length不变
//直接改变数组长度可以删除元素，用pop()也可以删除元素

//数组一定是对象，对象不一定是数组
//0到2的23次方之外的数，数组会视其为属性名添加到自身
var arr4 = [];
arr4[-1] = 2;
arr4[1.2] = 2;
arr4["4"] = 4;//数组有5个元素，2个属性（字符串型能转换成number型）

//稀疏数组：length大于元素个数
var b = [,,];
console.log(b.length)//2，最后一个逗号后面不算
//多维数组 多维数组无法定义

//数组的静态方法
var a = Array.of(7)//创建含有一个元素7的数组
var b = Array.of("7")//创建含有一个元素"7"的数组
//还有很多方法定义在Array.prototype上

function f(){
    console.log(arguments);
    Array.prototype.pop.call(arguments);//arguments无法调用pop方法
    console.log(arguments);
}
f(1,2,3,4);

//排序
var s = [5,4,0,9];
s.sort(function(a,b){return a>b})//返回值是布尔类型的话大于零则交换
s.sort(function(a,b){return a-b})//返回值是数字类型的话大于零则交换
//forEach()
var arr = [1,2,3]
var arr1 = [1,2,6]
arr.forEach(function(a,i){
	console.log(a,this,i)
},arr1)
//every(),只要有一个不满足条件就不会再执行
var arr2 = [2,5,8];
var returnValue = arr2.every(function(a){
    console.log(a);
    return a%2===0;
});