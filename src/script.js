var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function viewCart() {
  document.getElementById("carrito").classList.toggle("hidden");
}

function viewMenu() {
  document.getElementById("menu").classList.remove("hidden")
  document.getElementById("menu").classList.remove("animate__fadeOutLeft")
  document.getElementById("menu").classList.add("animate__fadeInLeft")
}

function closeMenu() {
  document.getElementById("menu").classList.add("animate__fadeOutLeft")
  document.getElementById("menu").classList.remove("animate__fadeInLeft")

}

let count = 0;
document.getElementById("plus").addEventListener("click", () => {
    count++;
  document.getElementById("count").innerHTML = count;
})
document.getElementById("minus").addEventListener("click", () => {

  if (count > 0) {
    count--;
  } else {
    count = 0;
  }
  document.getElementById("count").innerHTML = count;  
})

function addToCart() {
  document.getElementById("empty").classList.add("hidden");
  document.getElementById("product-cart").classList.remove("hidden");
  document.getElementById("div-number-cart").classList.remove("hidden");
  document.getElementById("number-cart").innerHTML = count;
  document.getElementById("cantidad").innerHTML = count;
  document.getElementById("resultado").innerHTML =" $" + count * 125 + ".00";
}

document.getElementById("delete").addEventListener("click", () => {
  document.getElementById("empty").classList.remove("hidden");
  document.getElementById("product-cart").classList.add("hidden");
  document.getElementById("div-number-cart").classList.add("hidden");
})
