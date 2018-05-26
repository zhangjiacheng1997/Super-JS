var jsonStr5 = '{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';

//reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var o5 = JSON.parse(jsonStr5,function (key,value) {
	console.log(key)
    if(typeof value === "boolean"){
        value = "ChangeToString";
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);
    }
    return value;
});

console.log(o5);
VM281:5 0
VM281:5 1
VM281:5 a
VM281:5 b
VM281:5 0
VM281:5 1
VM281:5 2
VM281:5 y
VM281:5 z
VM281:5 3
VM281:5 c
VM281:10 c: [3, 4, "x", Object]
VM281:5 
VM281:15 Object {a: Array[2], b: "ChangeToString", c: Array[4]}