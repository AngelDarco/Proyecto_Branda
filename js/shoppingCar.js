import addProducts from "./addProducts.js";
import deleteProducts from "./deleteProducts.js";
import handlerSpa from "./handlerSpa.js";

document.addEventListener("DOMContentLoaded", () => {
  const localStorageSession = window.localStorage.getItem("BeautyFaceSession");
  if (localStorageSession) {
    document.getElementById("userCarId").innerHTML = localStorageSession;
  }
  const caja = document.querySelector(".iframe__container");
  const fragment = new DocumentFragment();
  (async () => {
    await fetch("../php/shoppingCar.php")
      .then((res) => res.json())
      .then((data) => {
        if (!data) handlerSpa("#acne");
        if (data === "userNotFound") {
          const message = document.createElement("h2");
          message.setAttribute("style", "color: #6d6c6cab; padding: 30px");
          // eslint-disable-next-line quotes
          const ico = '<i class="product__icon fa fa-cart-plus"></i>';
          if (message)
            message.innerHTML = `!Hey <span style=" color: slateblue; font-size: 2rem">${localStorageSession}</span> Parece ser que aun no tines articulos en tu carro de compras, intenta agregar algunos precionando en el boton ${ico} de cada articulo que te guste`;
          caja.appendChild(message);
          return;
        } else if (typeof data === "object") {
          data.forEach((item) => {
            const container = document.createElement("div");
            const img = document.createElement("img");
            const containerDescription = document.createElement("div");
            const h3 = document.createElement("h3");
            const p = document.createElement("p");
            const span = document.createElement("span");
            const containerIcons = document.createElement("div");
            const addIcon = document.createElement("i");
            const deleteIcon = document.createElement("i");
            const cantidad = document.createElement("span");

            container.setAttribute("class", "product");
            container.setAttribute("id", item.id);
            img.setAttribute("class", "myimg");
            img.setAttribute("src", item.img);
            containerDescription.setAttribute("class", "product__description");
            h3.setAttribute("class", "product__title");

            h3.innerHTML = item.nombre;
            p.setAttribute("class", "product__text");
            p.innerHTML = item.seccion;
            span.setAttribute("class", "product__price");
            span.innerHTML = item.precio;
            containerIcons.setAttribute("class", "containerIcons");
            addIcon.setAttribute("class", "add product__icon fa fa-cart-plus");
            deleteIcon.setAttribute(
              "class",
              "delete product__icon fa fa-trash"
            );
            cantidad.setAttribute("class", "cantidad");
            cantidad.innerHTML = item.cantidad;

            container.appendChild(img);
            containerDescription.appendChild(h3);
            containerDescription.appendChild(p);
            containerDescription.appendChild(span);
            container.appendChild(containerDescription);
            containerIcons.appendChild(addIcon);
            containerIcons.appendChild(deleteIcon);
            containerIcons.appendChild(cantidad);
            container.appendChild(containerIcons);

            fragment.appendChild(container);
          });
        }
        caja.appendChild(fragment);
      })
      .catch((err) => console.log(err));

    document.querySelectorAll(".product").forEach((item) =>
      item.addEventListener("click", (e) => {
        if (e.target.classList.contains("add")) {
          addProducts(e, localStorageSession, true);
          addAndDeleteNodes(e, "add");
        } else if (e.target.classList.contains("delete")) {
          deleteProducts(e, localStorageSession);
          addAndDeleteNodes(e, "delete");
        }
      })
    );
  })();
});

const addAndDeleteNodes = (id, func) => {
  const container = id.target.offsetParent;
  const spanCantidad = container.children[2];
  let cantidad = spanCantidad.innerHTML;

  if (func === "add") cantidad++;
  else cantidad--;
  spanCantidad.innerHTML = cantidad;
  if (cantidad === 0) container.parentNode.remove();
};
