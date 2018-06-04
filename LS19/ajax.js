//Ajax是一种无需重新加载整个页面而部分更新网页的技术
//XMLHttpRequest对象出现后网页开始异步操作
//HTTP是计算机通过网络进行通讯的规则
//HTTP不会建立永久的连接，用户通过其向服务器获取信息，此过程无法记忆
inputElement.onkeyup = function () {//键盘松开事件
    //思考创建了多少个xhr对象，每个对象都是单独请求的么，如果将下一行提到函数外会如何
    //对应读写DOM操作，有什么区别
    var xhr = new XMLHttpRequest();//创建一个异步处理对象
    if (!xhr) {
        console.log("xhr 创建失败！！");
    }
    xhr.onreadystatechange = function () {
        //console.log(xhr.readyState,xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            var message = xhr.responseText;
            //console.log(message);
            label.innerText = message;
        }
    };
    xhr.open("get", "http://127.0.0.1:8080?getInfo=" + inputElement.value, true);
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
    xhr.send();
};
//XMLHttpRequest对象的属性
    //readyState--表示XMLHttpRequest对象的状态：0,1,2,3,4分别对应
        //0：未初始化，指对象已创建但未调用open方法
        //1：open方法已调用，但send方法没调用
        //2：send方法已经调用，尚未开始接收数据
        //3.正在接收数据。HTTP响应头信息已经接受，但尚未接受完成
        //4.完成。
    //Onreadystatechange--readyState状态发生改变时会调用这个属性上注册的函数（状态改变事件）
    //responseText--服务器响应的文本内容
    //status--服务器返回的HTTP状态码。200表示成功，404表示未找到，500表示服务器内部错误
    //stateText--服务器返回的状态文本信息
//XMLHttpRequest对象的方法
    //open(method,url,)指定和服务器的交互方法method表示HTTP的请求方法，一般用get，post
    //send()向服务器发送请求