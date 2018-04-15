
(function (x,y){
	console.log(x>y?x:y);
}(2,3));//函数可以匿名，不用调用可以立即执行
(function(x,y){
	console.log(x>y?x:y);
})(2,3);//第二种形式

function f(){
	var getnumfuncs = [];
	for(var i=0;i<10;i++){
			getnumfuncs[i]=function(){return i;};
	}
	console.log(getnumfuncs[2]);
return getnumfuncs;
}
var temp=f();
temp[3]();

function f(){
	var getnumfuncs = [];
	for(var i=0;i<10;i++){
		(function(j){
			getnumfuncs[j]=function(){return j;};
		})(i);
		console.log(getnumfuncs[j]);
	}
	return getnumfuncs;
}
var temp=f();
temp[3]();

//变量共享问题
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);

//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}