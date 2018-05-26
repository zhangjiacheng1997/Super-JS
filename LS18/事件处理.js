//事件流
//事件冒泡：即事件最开始由最具体的元素（文档中嵌套层次最深的那个点）接收，然后逐级向上传播至最不具体的节点（文档）
//事件捕获：不太具体的节点应该最早接收事件，而最具体的节点最后接收到事件

//事件处理程序
//1.HTML事件处理程序：事件处理程序直接加载HTML结构里的
    //<input type="button" value="按钮" id="btn" onclick="alert("hello")">
    //函数体可以存放在js文件中，函数名在HTML中，缺点是HTML代码和js代码耦合在一起，不利于更新
//2.DOM0级事件处理程序：把一个函数赋值给一个事件的处理程序属性（较普遍）
    //<input type="button" value="按钮" id="btn">
    //var btn = getElementById("btn");
    //btn.onclick = function(){alert("ss")} 给btn添加一个属性
    //btn.onclick = null; 删除点击事件
//3.DOM2级事件处理程序：addEventListener()和removeEventListen()
    //var btn = getElementById("btn");
    //btn.addEentListener('click',function,false); 添加事件监听对象,false表示事件添加到冒泡阶段
    //btn.addEentListener('click',function1,false); 添加第二个事件处理程序，按顺序执行
    //removeEventListener('click',function,false); 删除事件 通过addEventListener添加的事件只能用此删除
//IE不支持DOM2级事件处理程序
//IE事件处理程序

//事件对象
//事件对象用来查看此事件的属性，以及控制这个事件
//在触发DOM上的事件时都会产生一个对象event，它会包含一些和事件有关的信息以及一些函数
//event.type 可以获取事件的类型，比如处理click
//event.target 获取事件目标，查看事件来自哪个元素
//event.stopPropagation() 用于阻止事件冒泡
    //例：若div有一个点击事件属性，div中有一个a元素，此时我们希望点击a后不触发div的点击事件;
    //这时要给a的点击事件处理程序添加一个event.stopPropagation()用于阻止冒泡
//event.preventDefault()
    //a元素有默认的单击事件处理程序，要想阻止其默认处理程序添加event.preventDefault()
