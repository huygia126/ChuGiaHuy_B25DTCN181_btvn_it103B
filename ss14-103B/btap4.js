window.onload = function () {
var products = [
        { id: 1, name: "Bánh Chưng", price: 150000 },
        { id: 2, name: "Giò Lụa", price: 180000 },
        { id: 3, name: "Cành Đào", price: 500000 }
    ];
    var productList = document.getElementById("product-list");

    function formatPrice(price) {
        return Number(price).toLocaleString("vi-VN") + " VND";
    }

    function renderProduct(product) {

        var li = document.createElement("li");
        li.className = "product-item";

        var text = document.createElement("span");
        text.innerText = product.name + " - " + formatPrice(product.price);
        var editBtn = document.createElement("button");
        editBtn.className = "edit-price-btn";
        editBtn.innerText = "Sửa giá";

        editBtn.addEventListener("click", function () {

            var newPrice = prompt("Nhập giá mới (VND):");

            if (newPrice !== null && newPrice !== "" && !isNaN(newPrice)) {

                product.price = newPrice;

                text.innerText = product.name + " - " + formatPrice(newPrice);
            }
        });
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Xóa";

        deleteBtn.addEventListener("click", function () {

            var confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");

            if (confirmDelete) {
                productList.removeChild(li);
            }
        });

        li.appendChild(text);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        productList.appendChild(li);
    }
    for (var i = 0; i < products.length; i++) {
        renderProduct(products[i]);
    }
    var form = document.getElementById("product-form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        var nameInput = document.getElementById("product-name");
        var priceInput = document.getElementById("product-price");

        var name = nameInput.value;
        var price = priceInput.value;

        if (name === "" || price === "") {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        var newProduct = {
            id: products.length + 1,
            name: name,
            price: price
        };

        products.push(newProduct);

        renderProduct(newProduct);

        nameInput.value = "";
        priceInput.value = "";
    });

};