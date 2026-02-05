let n = parseInt(prompt("Nhập số phần tử n:"));


if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
}
else if (n === 0) {
    console.log("Mảng không có phần tử");
}
else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
        arr.push(num);
    }

    console.log("Mảng:", arr);

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] < 0) {
            count++;
        }
    }

    console.log(count);
}
