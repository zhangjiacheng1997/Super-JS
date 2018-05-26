//正则表达式是对字符串和特殊操作的一种逻辑公式，是对字符串执行模式匹配的工具
//JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成
//创建正则表达式
var reg1 = /[bcf]at/gi;
var str = "a fat bat ,a faT caT";
str.replace(reg1,"xx")//正则表达式在线分析工具：https://regexper.com/https://regex101.com/
//
var str = "ss-v*v-ee";
var a = str.split(/[-*]/gi);//使用-或*匹配
console.log(a);
//非全局的正则使用一次，全局是匹配整个字符串
"abcdef".replace("a","x");
"abcdef".replace(/a/,"x");
//转义字符
"a3h4".replace(/\d/,"x");// 
"axh4"
"a3h4".replace(/\d/g,"x");// \d数字
"axhx"
"a3h4".replace(/\w/g,"x");// \w字符
"xxxx"
"a3h4".replace(/\D/g,"x");// \非数字
"x3x4"
"a3 h4".replace(/\s/g,"x")// \空格
"a3xh4"
"a3 h4".replace(/\S/g,"x")// \非空格
"xx xx"

//test()方法
console.log(/oo/.test("moon")); //返回true
console.log(/oo\b/.test("moon")); //\b表示边界，\B表示非边界
console.log(/oon\b/.test("moon"));
console.log(/\bmoo/.test("moon"));

//量词
"mooooooonooy".replace(/o?/g,"x");//出现0次或1次
"xmxxxxxxxxnxxxyx"
"mooooooonooy".replace(/o{7}/g,"x")//出现7次
"mxnooy"
"mooooooonooy".replace(/o{1,2}/g,"x")//出现1到2次，使用贪婪算法刚开始以2
"mxxxxnxy"
//默认为贪婪模式，在量词后面加?可以设置为非贪婪模式（匹配最短的）
// /name{3}/ 相当于nameee
// /(name){3}/ namenamename

// |运算符
// /abc(def|ghi)ddd/ 表示有两种选择