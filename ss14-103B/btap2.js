window.onload = function () {

    var products = [
        { id: 1, name: "Bánh Chưng", price: 150000 },
        { id: 2, name: "Giò Lụa", price: 180000 },
        { id: 3, name: "Cành Đào", price: 500000 }
    ];

    var productList = document.getElementById("product-list");
    function renderProduct(product) {
        var li = document.createElement("li");
        li.className = "product-item";
        li.innerText = product.name + " - " + product.price + " VND";
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