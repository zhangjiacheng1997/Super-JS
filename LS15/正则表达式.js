//正则表达式是对字符串和特殊操作的一种逻辑公式，是对字符串执行模式匹配的工具
//JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成
//创建正则表达式
var reg1 = /[bcf]at/gi;
var str = "a fat bat ,a faT caT";
str.replace(reg1,"xx")//正则表达式在线分析工具：https://regexper.com/https://regex101.com/
