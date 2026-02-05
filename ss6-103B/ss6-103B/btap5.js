
let n = parseInt(prompt("Nhập n:"));

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
}
else if (n === 0) {
    console.log("Mảng không có phần tử");
}
else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let ch = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        arr.push(ch);
    }

    console.log("Mảng:", arr);

    let sum = 0;
    let countNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i].trim() !== "") {
            sum += Number(arr[i]);
            countNumber++;
        }
    }

    if (countNumber === 0) {
        console.log("Không có phần tử nào là số");
    } else {
        console.log(sum);
    }
}
