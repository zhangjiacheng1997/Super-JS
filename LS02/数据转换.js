if(new Boolean(false)){
    console.log("执行");
}   //输出执行，因为对象转为布尔值总为true
var temp="23"-1;
typeof temp;
//"number"
var temp=23-"1";
typeof temp;
//"number"
var temp=23+"1";
typeof temp;
//"string"
var temp="23"+1;
typeof temp;
//"string"
