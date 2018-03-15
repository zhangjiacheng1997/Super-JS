
//Number进阶
//访问Number基本数据类型方法或属性时会创建临时包装对象，访问的都是Number对象中的属性或方法
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true,检查是否是非数字值
console.log(Math.floor(3.8));//3，向下取整
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//向上取整
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-8

//--------------------------------------------------------------------------//

//String进阶
//访问String基本数据类型方法或属性时会创建临时包装对象，访问的都是String对象中的属性或方法
//字符串的拼接（+，+=）
var a = "abc";
var b = "def";
console.log(a+b);//abcdef
//字符串的相关函数
var str2 = "abcdef".slice(2);//cdef，截取下标为2（包含2）之后的内容
var str3 = "abcdef".slice(2,5);//cde,截取下标为2（包含2）之后，5之前的内容
var str4 = "abcdef".slice(-2);//ef
var str5 = "abcdef".slice(2,-2);//cd
var arr6 = "abcdef".split("c");//["ab","def"],以c为分割点，分隔出一个数组，不包含c
var arr7 = "abcdef".split("c",1);//["ab"],以c为分割点，生成一个数组，数组只有一个成员
var str9 = "abcdef".charAt(2);//c,取下标为2的成员单独生成一个字符串
var str10 = "abcdef".charCodeAt(0);//97,返回指定下标的Unicode编码
var str11 = "abcdefabcdef".indexOf("d");//3,计算给定字符串首次出现的位置
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//计算给定字符串最后一次出现的位置
var str12 = "abcdefabcdef".indexOf("d",4)//9，前四个忽略，计算给定字符串首次出现的位置
//substr
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);
console.log(str14);//cdefg,取下标为2的元素后连续5个元素生成新字符串
//substring
var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str15);//cde,取下标为2到下标为5之前的元素生成一个新的字符串