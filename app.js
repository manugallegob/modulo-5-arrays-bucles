const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

imprCart();
imprCartPremium();

function impreHTML(idcss) {
  let div = document.createElement("div");
  div.classList.add("productItem");
  div.innerHTML = `
    <div> ${producto.id}</div>
    <div> ${producto.name}</div>
    <div> ${producto.price}€</div>
    <div> ${producto.count}</div>
    <div> ${producto.premium}</div>
    <button onclick="clearCar(${producto.id})" class="buttomClear">Eliminar</button>
    `;
  idcss.appendChild(div);
}

function imprCart() {
  let listProduct = document.getElementById("listProduct");
  for (producto of carrito) {
    impreHTML(listProduct);
  }
  totalCart();
  revisarEnvio();
}

function imprCartPremium() {
  let listProductPremium = document.getElementById("listProductPremium");
  for (producto of carrito) {
    if (producto.premium === true) {
      impreHTML(listProductPremium);
    }
  }
}

var actualizarCarrito = () => {
  listProduct.innerHTML = "";
  listProductPremium.innerHTML = "";
};

function totalCart() {
  let total = 0;
  let subTotal = 0;
  for (producto of carrito) {
    subTotal += producto.price * producto.count;
  }

  if (subTotal > 50) { 
    total = subTotal * 0.95
  };
  document.getElementById("totalCart").innerText = "El total de su carrito es: " + total + "€ (" + subTotal + "€ -5%)";
}

function clearCar(productID) {
  let proID = carrito.find(function (cart) {
    return cart.id === productID;
  });
  let indice = carrito.indexOf(proID);
  carrito.splice(indice, 1);
  actualizarCarrito();
  imprCart();
  imprCartPremium();
}

function revisarEnvio() {
  let todosPremium = true;
  let i = 0;
  while (todosPremium && i < carrito.length) {
    todosPremium = todosPremium && carrito[i].premium;
    i++;
  }
  todosPremium === true
    ? (document.getElementById("envio").innerText = "Los gastos de envío de su compra es GRATIS")
    : (document.getElementById("envio").innerText = "Su compra tiene gastos de envío");
}
