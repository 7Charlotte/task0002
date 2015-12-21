var arr = ["1","3","er"];
isArray(arr);

isFunction(isArray);
isNumber(3.2);




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
