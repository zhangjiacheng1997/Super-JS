//对象一般包含：proto，class，extensible。
//proto-对象的对象属性，指向此对象的原型
//class-表示对象属于哪个类
//extensible-表示对象是否允许增加新属性

/*--------------------------------------------------------------------------*/

//创建对象
//1.用字面量创建
var obj1 = {
    x:1,
    y:2
}//其原型是Object.prototype

//2.new/原型链创建对象
function foo(){}//创建函数对象
foo.prototype.z = 3;//函数对象都会有一个prototype对象属性，由foo构造的对象的proto会指向foo.prototype,foo.prototype会指向Object.prototype
var obj = new foo();//obj会有一个proto的属性指向foo.prototype
obj.a=1;        /*每个对象基本都有toString方法因为他们大多数最终都指向Object，Object的方法子对象也可以使用*/
'z' in obj;//true,in函数不能判断一个属性是存在其本身还是在其原型链上
obj.hasOwnProperty('z');//false,对象的hasOwnProperty能判断某一属性是否在其本身
obj.z = 5;//只是给对象obj添加了属性z，并不能修改其原型链上的值
delete obj.z//删除对象本身的z，原型链上的z不变

//3.用Object.create创建
var obj = Object.create({x:1});//系统内置函数，创建一个对象，这个对象的proto指向create()内的参数
obj.x//1,x不是obj的属性
obj.hasOwnProperty('x')//false
var obj1 = Object.create(null);
obj1.toString//undefined,对象最终并没指向Object

/*--------------------------------------------------------------------------*/

//对象属性

/*访问*/
var obj = {x:1,y:2}
obj.x;
obj[y];//传入的值都会转化成字符串类型
//一般[]用于属性多时
var p;
for(p in obj){
    console.log(obj[p]);
}//利用for in访问容易访问到原型链上的属性，而且访问结果是无序的
for(i=0;i<=n;i++){//n是对象属性数量
    console.log(obj[x+i]);
}
/*删除*/
//用delete删除，若某属性已被删除，再次delete仍会返回true
var glo = 1;
delete glo;//false,全局变量不可删
var
(function(){

})