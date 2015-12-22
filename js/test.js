
var arrString = ["Selly","Alice","Lee","Lee","Harry","Harry"];
var arrNum = [1,2,1,4,3,7,4,7];


function uniqueArr(arr){
	var ret = [];
	for(x in arr){//语句中x为索引值。
		if (ret.indexOf(arr[x]) === -1) 
			ret.push(arr[x]);
	}
	return ret;
}

var result1 = uniqueArr(arrString);//测试字符串
console.log(result1);

var result2 = uniqueArr(arrNum);//测试数字
console.log(result2);


// console.log(arr.indexOf("Alice"));



// ret.push("Harry");
// console.log(ret);


// for(item in arr){
// 	console.log(arr[item]);//item数组的索引，而不是数组项
// }