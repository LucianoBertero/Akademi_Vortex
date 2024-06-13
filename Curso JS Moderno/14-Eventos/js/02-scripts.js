const nav = document.querySelector(".navegacion");

nav.addEventListener("mouseout", () => {
  console.log("entro");
  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mouseenter", () => {
  console.log("entro");
  nav.style.backgroundColor = "white";
});
