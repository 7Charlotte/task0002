var btn = document.getElementById("count_down");
var content = document.getElementById("date");
btn.addEventListener("click", function() {
	countDown(content);
} , false);

function countDown(str) {
	// console.log(str.value);
	var date_arr = str.value.split("-");//分割用户输入的时间
	// console.log(date_arr);
	var target_date = new Date( Number(date_arr[0]), (Number(date_arr[1]) - 1), Number(date_arr[2]) ).getTime();//将用户输入时间转换成毫秒
	// console.log(target_date);
	var days, hours, minutes, seconds;

	var my_count_down = setInterval(function() {

		var current_date = new Date().getTime();
		// console.log(current_date);
		var second_left = (target_date - current_date) / 1000;//得到两个时间之间间隔的秒数
		// console.log(second_left);

		days = parseInt(second_left / (24 * 60 * 60));
		second_left = parseInt(second_left % (24 * 60 * 60));

		hours = parseInt(second_left / (60 * 60));
		second_left = parseInt(second_left % (60 * 60));

		minutes = parseInt(second_left / 60);
		second_left = parseInt(second_left % 60);

		seconds = second_left;

		document.getElementById("time").innerHTML = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";

		if (second_left === 0) {
			endCountFunction();
		};

	},1000);//1000毫秒 = 1秒

	function endCountFunction() {
    clearInterval(my_count_down);
	}
}