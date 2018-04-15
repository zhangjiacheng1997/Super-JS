var a = 10;
b = 20;
function fn(){
    var a =100,
    c=200;
    function bar(){
        var a = 500,
        d = 600;
    }
}
//fn中的函数无法访问bar中的变量，但bar中的函数能访问fn的
//函数会遵循静态词法作用域，用new创建的对象不一定会
var name = 'jack';
function eoch(){
    console.log(name);
}
eoch();//输出jack
var name = 'jack';
function echo(){
    console.log(name);
}
function env(){
    var name = 'bill';
    echo();
}
env();//jack,因为函数env()和全局name都在windows作用下所以是Jack