const booksId = [];
const booksName = [];
const inventoryQuantity = [];


const total = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");


for (let i = 0; i < total; i++) {
    const id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    const name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    const quantity = +prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`);

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}


console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại):`);

for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`
    );
}


let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }
}

console.log(`\nSố sách có tồn kho ≤ 5 bản: ${lowStockCount} loại`);


let outOfStockIds = "";
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        outOfStockIds += booksId[i] + " ";
    }
}

console.log(`Các mã sách đã hết hàng (0 bản): ${outOfStockIds.trim()}`);
