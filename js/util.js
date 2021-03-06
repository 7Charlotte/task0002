// var arr = ["1","3","er"];
// isArray(arr);

// isFunction(isArray);
// isNumber(3.2);




// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if(arr.isArray){
    	return true;
    }else{
    	return false;
    }// 判断是不是数组
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if(typeof(fn) === "function"){//类型需要加引号
    	console.log(true);
    }else{
    	console.log(false);
    }// 判断是不是函数
}


function isNumber(x) {
    if (typeof x =="number") {
    	console.log(true);
    }else{
    	console.log(false);
    }
    }// 判断是不是数字类型


//了解值类型和引用类型的区别，了解各种对象的读取、遍历方式，并在util.js中实现以下方法:
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
// function cloneObject(src) {
//     // your implement
// }

// // 测试用例：
// var srcObj = {
//     a: 1,
//     b: {
//         b1: ["hello", "hi"],
//         b2: "JavaScript"
//     }
// };
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"



//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var ret = [];
    for(item in arr){//item数组的索引，而不是数组项
        if(ret.indexOf(arr[item]) === -1)//在ret里面找，如果没找到，就说明没重复.
            ret.push(arr[item]);
    }
    return ret;//返回数组
}

// 使用示例
// var a = [2 ,1, 3, 5, 7, 5, 3, 3, 8, 9, 9];
// var b = uniqArray(a);




// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var trimmedstr = str.trim();
    return trimmedstr;  
 }

 var testarr = "    你们都没我长     ";
 var trimmedstr = testarr.trim();


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i in arr){
        fn(arr[i]);
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item) {

//     console.log(item)
// }
// // each(arr, output);  // java, c, php, html
// 
// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item, index) {
//     console.log(index + ': ' + item)
// }
// each(arr, output);  // 0:java, 1:c, 2:php, 3:html

 // 获取一个对象里面第一层元素的数量，返回一个整数
 function getObjectLength(obj) {
     var n = 0;
     for (i in obj){
         n++;
     }
     return n;
 }

 // 使用示例
 var obj = {
     a: 1,
     b: 2,
     c: {
         c1: 3,
         c2: 4
     }
 };

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.setAttribute("class", "newClassName");
}

// 移除element中的样式oldClassName // removeAttribute("style"
function removeClass(element, oldClassName) {
    element.removeAttribute("oldClassName");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    if (element.parentNode === siblingNode.parentNode) {
        return true;
    }else{
        return false;
    };
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var leftDistance = element.getBoundingClientRect().left;
    var topDistance = element.getBoundingClientRect().top;
}



// 实现一个简单的Query
function $(selector) {

}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// 给一个element绑定一个针对event事件的响应，响应函数为listener
// function addEvent(element, event, listener) {
//     element.addEventListener(event,listener,false);
// }

// // 例如：
// function clicklistener(event) {
//     alert("good day");
// }
// addEvent($("#doma"), "click", clicklistener);

// // 移除element对象对于event事件发生时执行listener的响应
// function removeEvent(element, event, listener) {
//     element.removeEventListener(event,listener,false);
//     }



function splitString(str){
    return str.split(/(?:\s|,|，|、|;)+/);//正则：[]表示或关系，\s表示空白字符（tab, enter, space）
}

function checkParam(list) {
    var filterred = uniqArray(list);
    if(filterred.length > 10){
        return false;
    }
    return true;
}

function showCheckbox(list) {
    var output = document.getElementById("output");
    output.innerHTML = "";//清空output的内容
    for(var i in list) {
        var input = document.createElement("input");
        input.type = "checkbox";
        var label = document.createElement("label");
        output.appendChild(label);//将label添加到output里面
        var content = document.createTextNode(list[i]);//用数组中的内容新建字符元素
        label.appendChild(content);//将数组内容写入label
        output.insertBefore(input, label);//将label插入input后面 var insertedNode = parentNode.insertBefore(newNode, referenceNode)
    }
}

function oninput() {
    var content = document.getElementById("hobby");
    if(content.value.length == 0)
    {
        alert("至少填写一个爱好");
        return;
    }
    var list = splitString(content.value); 
    if(checkParam(list) == true) {
        showCheckbox(list);
    } else {
        alert("爱好不能超过10个。");    
    }
}

var btn = document.getElementById("addbtn");
btn.addEventListener("click", oninput, false);//事件侦听函数是一个匿名函数


