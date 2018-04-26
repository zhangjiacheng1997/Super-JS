//创建对象
var obj1={
    x:1
}
var obj2=Object.create(obj1);
//创建对象
var Obj3=function(){
    this.z=3;
}
var obj3=new Obj3();
//访问器属性--get--set
var o = {
    _x:1.0,//在属性前加下划线一般表示私有属性
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;
    }//get set是一对函数，使用时不加双括号，可以单独出现，访问器属性不具有可写的属性特性
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);
//访问器属性和数据属性同名时，访问器属性优先级高于数据属性
var p1 = {
    _name:"Jack",
    _age:23,       //私有属性_name和_age
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);

