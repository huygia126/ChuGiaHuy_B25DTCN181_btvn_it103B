
let n = parseInt(prompt("Nhập số phần tử của mảng (tối đa 10):"));
let arr = [];

if (n === 0) {
    console.log("Không có số lớn nhất");
} else {

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));

        if (arr.includes(num)) {
            console.log("Số bị trùng! Nhập lại.");
            i--; 
        } else {
            arr.push(num);
        }
    }

    let max = arr[0];
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }

    console.log("Mảng:", arr);
    console.log("Số lớn nhất: " + max);
    console.log("Vị trí: " + index);
}
