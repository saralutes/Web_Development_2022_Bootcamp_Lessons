function isLeap(year) {
    var a = year % 4;
    var b = year % 100;
    var c = year % 400;
    if ((a > 0) || ((b === 0) && (c > 0))){
        return ("Not a leap year.")
    }
    if (((a === 0) && (b > 0)) || ((a === 0) && (b === 0) && (c === 0))){
        return ("Leap year.")
    }
}

isLeap(2000);
