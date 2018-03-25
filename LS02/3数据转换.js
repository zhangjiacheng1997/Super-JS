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

//------------------------------------------------------------//

//巧用：若想把变量num转换成number类型可以-0，同理转换成string类型可以+0；
/*Number和String之间进行判等时，会先转换成number类型再比较；Object和基本数据类型进行判断时先转换成基本数据类型 */

//------------------------------------------------------------//

//类型检测
//typeof——结果返回String类型的结果
typeof null;//"Object"历史遗留问题

//instanceof——用于判断Object的下属类型和自定义的类
[1,2] instanceof Array;//true
function Person(){
    //something
}
var bosn = new Person();
bosn instanceof Person;//true

/*typeof适合检测基本数据类型及function类型，但对于Null会失效*/
/*instanceof适合检测一个对象是否属于自定义的一个类，但不同的iframe和window会检测失效*/