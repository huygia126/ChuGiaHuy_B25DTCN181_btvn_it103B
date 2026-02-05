
let arr = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));
    arr.push(num);
}

let result = arr.filter(x => x >= 10);

console.log("Mảng đã nhập:", arr);

if (result.length > 0) {
    console.log("Các số nguyên lớn hơn hoặc bằng 10 là:");
    console.log(result.join(" "));
} else {
    console.log("Không có số nào lớn hơn 10");
}
