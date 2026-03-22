window.onload = function () {

    var products = [
        { id: 1, name: "Bánh Chưng", price: 150000 },
        { id: 2, name: "Giò Lụa", price: 180000 },
        { id: 3, name: "Cành Đào", price: 500000 }
    ];

    var productList = document.getElementById("product-list");

    for (var i = 0; i < products.length; i++) {

        var li = document.createElement("li");
        li.className = "product";

        li.innerText = products[i].name + " - " + products[i].price + " VND";

        productList.appendChild(li);
    }

};