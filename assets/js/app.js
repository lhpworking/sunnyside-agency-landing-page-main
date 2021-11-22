const nodeHeaderMenu = document.querySelectorAll(".header__menu-item");
for (let index = 0; index < nodeHeaderMenu.length; index++) {
  nodeHeaderMenu[index].addEventListener("click", () => {
    document
      .querySelector(".header__menu-item.active")
      .classList.remove("active");
    nodeHeaderMenu[index].classList.add("active");
  });
}

const menuHam = document.querySelector(".menu-ham")
const menuMobile = document.querySelector(".header__menu-mobile");
menuHam.addEventListener("click",()=>{
  menuMobile.classList.toggle("show");
})