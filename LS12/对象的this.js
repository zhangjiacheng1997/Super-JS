//Java中的this含义是明确且具体的
//JavaScript中的this是动态绑定的
//this不进行作用域传递

//一般函数中的this
var a = 10,b = 50;
function thisTist(){
    this.a = 20;//非严格模式下this指向全局对象，严格模式下指向undefined
    delete this.b;//无法删除
    this.c = 30;
}
thisTist();
console.log(a,b,c);

//对象方法中的this
var point = {
    x : 0,
    y : 0,
    moveTo : function(x,y){
        this.x = x;
        this.y = y;
    }
}
point.moveTo(1,1);
console.log(point.x,point.y);

//构造函数中的this
function Person(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this.name,this.age);
    }
}
var p2 = new Person("jack",23);
var p1 = new Person("Jon",22);
p2.say();
p1.say();

//function创建私有属性
function privte(){
    var b = 1;
}
console.log(b);//无法输出，b相当于私有属性

//call和apply
obj1 = {
    a:1,
    b:2,
}
var say = function(){
    console.log(this.a,this.b);
}
say.call(obj1);

var point = {
    x:0,
    y:0,
    move:function(x,y){
        var that = this;
        function moveX(){//函数moveX指向window对象
            that.x = x;
        }
        function moveY(){
            that.y = y;
        }
        moveX();
        moveY();
    }
}