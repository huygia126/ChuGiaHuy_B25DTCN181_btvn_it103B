  let products = [
  { id: 1, name: "Áo thun", price: 150000 },
    { id: 2, name: "Quần jeans", price: 300000 },
  { id: 3, name: "Giày sneaker", price: 800000 },
];
let cart = [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let data = localStorage.getItem("cart");
    if (data) {
    try {
        cart = JSON.parse(data);
    } catch {
        cart = [];
    }
  }
}
function formatMoney(num) {
    return num.toLocaleString("vi-VN") + " VNĐ";
}

function renderProducts() {
   let html = "";

    if (products.length === 0) {
    document.getElementById("products-empty").classList.remove("hidden");
      return;
  }

  document.getElementById("products-empty").classList.add("hidden");

    products.forEach(p => {
    html += `
      <div class="product-card">
          <h3>${p.name}</h3>
        <p>${formatMoney(p.price)}</p>
          <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        </div>
    `;
  });

    document.getElementById("products-grid").innerHTML = html;
  document.getElementById("product-count-badge").innerText =
    products.length + " sản phẩm";
}  

function addToCart(id) {
    let index = cart.findIndex(item => item.productId === id);

    if (index === -1) {
    let product = products.find(p => p.id === id);
    cart.push({
        productId: product.id,
      name: product.name,
        price: product.price,
        quantity: 1,
    });
    } else {
    cart[index].quantity++;
  }
  
  saveCart();
    renderCart();
}

function renderCart() {
  let html = "";
  
  if (cart.length === 0) {
      document.getElementById("cart-empty").style.display = "block";
  } else {
    document.getElementById("cart-empty").style.display = "none";
    }

    cart.forEach(item => {
    html += `
      <tr>
          <td>${item.name}</td>
        <td>${formatMoney(item.price)}</td>
        <td>
            <button onclick="changeQty(${item.productId}, -1)">-</button>
          ${item.quantity}
          <button onclick="changeQty(${item.productId}, 1)">+</button>
          </td>
        <td>${formatMoney(item.price * item.quantity)}</td>
        <td>
            <button onclick="removeItem(${item.productId})">Xóa</button>
        </td>
      </tr>
      `;
  });
  
  document.getElementById("cart-tbody").innerHTML = html;

  renderStats();
}  

function changeQty(id, delta) {
  let index = cart.findIndex(item => item.productId === id);
  
  if (index !== -1) {
    cart[index].quantity += delta;
  
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    }

    saveCart();
  renderCart();
}

function removeItem(id) {
    let check = confirm("Bạn có muốn xóa không?");
  if (!check) return;

    cart = cart.filter(item => item.productId !== id);
  
  saveCart();
    renderCart();
}

function clearCart() {
    let check = confirm("Xóa toàn bộ giỏ hàng?");
   if (!check) return;

  cart = [];
  saveCart();
  renderCart();
}  

function renderStats() {
    let totalQty = 0;
  let totalPrice = 0;
  
  cart.forEach(item => {
     totalQty += item.quantity;
    totalPrice += item.price * item.quantity;
    });

    document.getElementById("stat-lines").innerText = cart.length;
  document.getElementById("stat-qty").innerText = totalQty;
  document.getElementById("stat-total").innerText =
      formatMoney(totalPrice);

  document.getElementById("cart-lines-badge").innerText =
      cart.length + " dòng";
  document.getElementById("cart-qty-badge").innerText =
      totalQty + " món";
}

document
  .getElementById("clear-cart-btn")
    .addEventListener("click", clearCart);

function init() {
   loadCart();
    renderProducts();
  renderCart();
}

init();
