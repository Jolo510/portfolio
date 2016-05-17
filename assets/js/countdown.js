
var endDate = new Date("December 31, 2016 23:59:59");
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

function countDown() {
	var todaysDate = new Date();

	var distance = endDate - todaysDate;
	if (distance < 0) {

		return;
	}

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    days = appendZeroes(days.toString(), 3);
    hours = appendZeroes(hours.toString(), 2);
    minutes = appendZeroes(minutes.toString(), 2);
    seconds = appendZeroes(seconds.toString(), 2);

    var daysArray = numberToStringArray(days);
    var hoursArray = numberToStringArray(hours);
    var minutesArray = numberToStringArray(minutes);
    var secondsArray = numberToStringArray(seconds);

    $("#dayDigit1").html(daysArray[0]);
    $("#dayDigit2").html(daysArray[1]);
    $("#dayDigit3").html(daysArray[2]);

    $("#hourDigit1").html(hoursArray[0]);
    $("#hourDigit2").html(hoursArray[1]);

    $("#minuteDigit1").html(minutesArray[0]);
    $("#minuteDigit2").html(minutesArray[1]);

    $("#secondDigit1").html(secondsArray[0]);
    $("#secondDigit2").html(secondsArray[1]);
}


function numberToStringArray(inputString) {
	var output = [];

	for (var i = 0; i < inputString.length; i++) {
		output.push(inputString.charAt(i));
	}
	return output;
}

function appendZeroes(inputString, size) {
	while ( inputString.length < size ) {
		inputString = "0" + inputString;
	}

	return inputString;
}

setInterval( countDown, 1000);
