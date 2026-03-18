let products = [];

// truy xuat phan tu
let productForm = document.getElementById("productForm");
let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productPrice = document.getElementById("productPrice");
let productQuantity = document.getElementById("productQuantity");
let productDescription = document.getElementById("productDescription");

let productTableBody = document.getElementById("productTableBody");

let submitBtn = document.getElementById("submitBtn");
let formTitle = document.getElementById("formTitle");

let editingProductId = null;


productForm.addEventListener("submit", createProduct);


function getData() {
  let getProduct = localStorage.getItem("products");
  if (getProduct) {
    products = JSON.parse(getProduct);
    renderData();
  }
}
getData();

function createProduct(e) {
  e.preventDefault();


  if (editingProductId !== null) {
    let itemNeedUpdate = products.find((item) => item.id === editingProductId);

    if (itemNeedUpdate) {
      itemNeedUpdate.productName = productName.value.trim();
      itemNeedUpdate.productCategory = productCategory.value;
      itemNeedUpdate.productPrice = Number(productPrice.value);
      itemNeedUpdate.productQuantity = Number(productQuantity.value);
      itemNeedUpdate.productDescription = productDescription.value;
    }

    localStorage.setItem("products", JSON.stringify(products));

    productForm.reset();
    editingProductId = null;

    submitBtn.textContent = "➕ Thêm Sản Phẩm";
    formTitle.textContent = "Thêm Sản Phẩm Mới";

    renderData();
    return;
  }

  // CREATE
  let newProduct = {
    id: Date.now(),
    productName: productName.value.trim(),
    productCategory: productCategory.value,
    productPrice: Number(productPrice.value),
    productQuantity: Number(productQuantity.value),
    productDescription: productDescription.value,
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  productForm.reset();

  renderData();
}


function renderData() {
  productTableBody.innerHTML = "";

  products.forEach((product) => {
    let createTr = document.createElement("tr");

    createTr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.productName}</td>
        <td>${product.productCategory}</td>
        <td>${product.productPrice}</td>
        <td>${product.productQuantity}</td>
        <td>${product.productDescription}</td>
        <td>
            <button onclick="updateProduct(${product.id})">✏️ Sửa</button>
            <button onclick="deleteProduct(${product.id})">🗑️ Xóa</button>
        </td>
    `;

    productTableBody.appendChild(createTr);
  });
}


function updateProduct(id) {
  let itemNeedUpdate = products.find((item) => item.id === id);

  if (itemNeedUpdate) {
    editingProductId = id;

    productName.value = itemNeedUpdate.productName;
    productCategory.value = itemNeedUpdate.productCategory;
    productPrice.value = itemNeedUpdate.productPrice;
    productQuantity.value = itemNeedUpdate.productQuantity;
    productDescription.value = itemNeedUpdate.productDescription;

    submitBtn.textContent = "💾 Cập nhật sản phẩm";
    formTitle.textContent = "Chỉnh sửa sản phẩm";
  }

  productName.focus();
}


function deleteProduct(id) {
  let confirmDelete = confirm("Bạn có chắc muốn xóa không?");

  if (confirmDelete) {
    products = products.filter((item) => item.id !== id);

    localStorage.setItem("products", JSON.stringify(products));

    renderData();
  }
}