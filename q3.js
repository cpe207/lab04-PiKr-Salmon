// 660612152 ปิยวัฒน์ เครือประเสริฐ
function primeNumber(a) {
    /* Your code here */
    var found = 1;
    if (a <= 1) {
        return "NO";
    }
    var b = [2, 3, 5, 7];
    for (var i = 0; i < b.length; i++) {
        if (a % b[i] == 0 && a / b[i] != 1 && a / b[i] > 1) {
            found = 0;
            break;
        }
    }
    if (found == 1) {
        return "YES";
    }
    else {
        return "NO";
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
