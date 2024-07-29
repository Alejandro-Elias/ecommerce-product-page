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
  document.getElementById("resultado").innerHTML ="  $" + count * 125 + ".00";
  document.getElementById("icon-cart-header").setAttribute("src", "../images/icon-cart-copia.svg");

}

document.getElementById("delete").addEventListener("click", () => {
  document.getElementById("empty").classList.remove("hidden");
  document.getElementById("product-cart").classList.add("hidden");
  document.getElementById("div-number-cart").classList.add("hidden");
  document.getElementById("icon-cart-header").setAttribute("src", "../images/icon-cart.svg");
})

document.getElementById("image1").addEventListener("click", () => {
  const image1 = document.getElementById("image1").getAttribute("src");
  document.getElementById("div-image1").classList.add("border-naranja","border-2");
  document.getElementById("image1").classList.add("opacity-40");
  document.getElementById("image-product").setAttribute("src", image1)  
  document.getElementById("div-image2").classList.remove("border-naranja","border-2");
  document.getElementById("image2").classList.remove("opacity-40");
  document.getElementById("div-image3").classList.remove("border-naranja","border-2");
  document.getElementById("image3").classList.remove("opacity-40");
  document.getElementById("div-image4").classList.remove("border-naranja","border-2");
  document.getElementById("image4").classList.remove("opacity-40");
})

document.getElementById("image2").addEventListener("click", () => {
  const image1 = document.getElementById("image2").getAttribute("src");
  document.getElementById("image-product").setAttribute("src", image1)
  document.getElementById("div-image2").classList.add("border-naranja","border-2");
  document.getElementById("image2").classList.add("opacity-40");
  document.getElementById("div-image1").classList.remove("border-naranja","border-2");
  document.getElementById("image1").classList.remove("opacity-40");
  document.getElementById("div-image3").classList.remove("border-naranja","border-2");
  document.getElementById("image3").classList.remove("opacity-40");
  document.getElementById("div-image4").classList.remove("border-naranja","border-2");
  document.getElementById("image4").classList.remove("opacity-40");

})

document.getElementById("image3").addEventListener("click", () => {
  const image1 = document.getElementById("image3").getAttribute("src");
  document.getElementById("image-product").setAttribute("src", image1)
  document.getElementById("div-image3").classList.add("border-naranja","border-2");
  document.getElementById("image3").classList.add("opacity-40");
  document.getElementById("div-image1").classList.remove("border-naranja","border-2");
  document.getElementById("image1").classList.remove("opacity-40");
  document.getElementById("div-image2").classList.remove("border-naranja","border-2");
  document.getElementById("image2").classList.remove("opacity-40");
  document.getElementById("div-image4").classList.remove("border-naranja","border-2");
  document.getElementById("image4").classList.remove("opacity-40");
})

document.getElementById("image4").addEventListener("click", () => {
  const image1 = document.getElementById("image4").getAttribute("src");
  document.getElementById("image-product").setAttribute("src", image1)
  document.getElementById("div-image4").classList.add("border-naranja","border-2");
  document.getElementById("image4").classList.add("opacity-40");
  document.getElementById("div-image1").classList.remove("border-naranja","border-2");
  document.getElementById("image1").classList.remove("opacity-40");
  document.getElementById("div-image2").classList.remove("border-naranja","border-2");
  document.getElementById("image2").classList.remove("opacity-40");
  document.getElementById("div-image3").classList.remove("border-naranja","border-2");
  document.getElementById("image3").classList.remove("opacity-40");
})

document.getElementById("image-product").addEventListener("click", () =>  {
  document.getElementById("modal").classList.add("block")
  document.getElementById("modal").classList.remove("hidden")   
})

function closeModal() {
  document.getElementById("modal").classList.add("hidden")    
}