//数据转换

//------------------------------------------------------------//

//其他类型转换成Boolean类型
//转换方式：Boolean(); value?true:false; !!value
Boolean(undefined);//False
Boolean(null);//False
Boolean(NaN);Boolean(0);//False,其他数字都是True
Boolean("");//False,其他字符串都是True包括空格字符串
//对象转化为布尔值总是true
if(new Boolean(false)){//发生隐式类型转换
    console.log("执行");
}   //输出执行，因为对象转为布尔值总为true

//------------------------------------------------------------//

//其他类型转换成Number类型
//转换方式：Number(); -value; parseFloat; parseInt;
Number(undefined);//NaN
Number(null);//0
//转换布尔值时，false为0，true为1
//转换字符串时，空字符串为0;解析字符串中的数字，若有字母转换为NaN;可以忽略开头和结尾的空格，但中间有空格是转换成NaN

//------------------------------------------------------------//

//其他类型转换成String类型
//转换方式：String(); +value; value.toString();
String(undefined)//"undefined"
String(null)//"null"
String(true)//"true"
String(false)//"false"

//隐式类型转换----关系，算数，逻辑运算符的使用；流程语句的判断
//显式类型转换----函数转换
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