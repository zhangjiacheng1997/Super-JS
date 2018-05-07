var superObj = {
    x:1,
    y:2
};
var obj1 = Object.create(superObj);
var obj2 = Object.create(superObj);
obj1.__proto__.x = 5;//原始对象的属性为子对象共享
console.log(obj2.x);
//
var superObj = {
    show:function(){
		console.log(this.x,this.y)
	}
};
var obj1 = Object.create(superObj);
obj1.x = 1;
obj1.y = 2;
obj1.show();//show中的this指向的先是调用函数的对象自身若没有找对象的原型
//
function Person(name){
	this.name = name;
}
Person.prototype.age = 22;//给其prototype对象属性添加属性
Person.prototype.showName = function(){console.log(this.name)}
function Student(id){
	this.id = id;
}
Student.prototype = new Person("jack");
var s1 = new Student(2017001);//s1的__proto__属性指向Person类的对象Student.prototype
var s2 = new Student(2017002);