//try catch 
//try finally
//try catch finally
/*try语句块中有错误时会执行catch快中的语句，若错误没有被解决直接执行finally中的语句*/
try{
    try{
        throw new Error("oops");//一个异常
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.error("outer");
}//第一个异常没有被解决，会调到最近的一层去解决，
