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
    function renderList() {

        productList.innerHTML = "";

        for (var i = 0; i < products.length; i++) {

            var li = document.createElement("li");
            li.className = "product-item";

            var text = document.createElement("span");
            text.innerText = products[i].name + " - " + formatPrice(products[i].price);
            var editBtn = document.createElement("button");
            editBtn.className = "edit-price-btn";
            editBtn.innerText = "Sửa giá";

            editBtn.addEventListener("click", function (index) {
                return function () {

                    var newPrice = prompt("Nhập giá mới (VND):");

                    if (newPrice !== null && newPrice !== "" && !isNaN(newPrice)) {
                        products[index].price = Number(newPrice);
                        renderList();
                    }
                };
            }(i));

            var deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.innerText = "Xóa";

            deleteBtn.addEventListener("click", function (index) {
                return function () {

                    var confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");

                    if (confirmDelete) {
                        products.splice(index, 1);
                        renderList();
                    }
                };
            }(i));

            li.appendChild(text);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);

            productList.appendChild(li);
        }
    }

    renderList();
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

        products.push({
            id: products.length + 1,
            name: name,
            price: Number(price)
        });

        renderList();

        nameInput.value = "";
        priceInput.value = "";
    });
    var searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", function () {

        var keyword = searchInput.value.toLowerCase();
        var items = document.getElementsByClassName("product-item");

        for (var i = 0; i < items.length; i++) {

            var text = items[i].innerText.toLowerCase();

            if (text.indexOf(keyword) !== -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });
    var sortAscBtn = document.getElementById("sort-asc");
    var sortDescBtn = document.getElementById("sort-desc");

    sortAscBtn.addEventListener("click", function () {

        products.sort(function (a, b) {
            return a.price - b.price;
        });

        renderList();
    });

    sortDescBtn.addEventListener("click", function () {

        products.sort(function (a, b) {
            return b.price - a.price;
        });

        renderList();
    });

};