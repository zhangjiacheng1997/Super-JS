//JS对象属性（数据属性）的特性
//-属性的值（value），对应的值
//-可写特性（writeable），确定属性是否可写
//-可配置性（configurable），确定属性是否能删除和其他特性是否可配置
//-可枚举性（enumerable），是否可枚举
var obj = {
    x:1,//默认所有属性都是true
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
console.log(obj.x);//可以打印x的值
for(var k in obj){
    console.log(k,obj[k]);//只能打印y的值,for in 遍历属性时用[]
}
//
var person = {
    name:"jack"
};
Object.defineProperty(person,"name",{
    writable:false,//不可更改
    configurable:false,//不可删除
    enumerable:true,
    value:"jack"
});
//添加属性
var obj={
    x:1,
    y:2
};
obj.z=3;//直接添加属性
Object.defineProperty(obj,"w",{
    configurable:true,
    value:344
});
for(var k in obj){
    console.log(obj[k]);//遍历不到“w”，defineProperty添加属性时默认false
}
//
//JS对象属性（访问器属性）的特性
//-读取属性特性（get），对应的值
//-写入属性特性（set），确定属性是否可写
//-可配置性（configurable），确定属性是否能删除和其他特性是否可配置
//-可枚举性（enumerable），是否可枚举
var obj1={
    _name:"jack",
    get name(){
        return this._name;//直接添加get name方法
    },
    set name(val){
        this._name=val;
    }
}
Object.defineProperty(obj1,"name",{
    get:function(){
        return (this._name+"haha");
    },
    set:function(val){
        return (this._name=val+"haha");
    }
})
//属性特性描述符（Descriptor）
//属性特性描述符是用来查看对象属性的特性的对象
var obj={
    x:2
}
var show=Object.getOwnPropertyDescriptor(obj,"x");
console.log(show);
//对象的其他属性
var obj2=Object.create({x:1});
obj2.y=2;
Object.defineProperty(obj2,"z",{value:3});
//
Object.keys(obj2);//只能访问到y，keys()方法只能访问到自身可枚举的属性
Object.getOwnPropertyNames(obj2);//返回一个属性名的数组包括自身的可枚举和不可枚举
