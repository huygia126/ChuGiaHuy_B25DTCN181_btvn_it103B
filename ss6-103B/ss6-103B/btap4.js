
let n = parseInt(prompt("Nhập n:"));

let arr = [];

if (n === 0) {
    console.log("Không có ký tự số");
} else {

    for (let i = 0; i < n; i++) {
        let ch = prompt("Nhập ký tự thứ " + (i + 1) + ":");
        arr.push(ch);
    }

    console.log("Mảng:", arr);

    let digits = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            digits.push(arr[i]);
        }
    }

    if (digits.length > 0) {
        console.log(digits.join(" "));
    } else {
        console.log("Không có ký tự số");
    }
}
