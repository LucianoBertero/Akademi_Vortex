const busqueda = document.querySelector(".busqueda");

// busqueda.addEventListener("keydown", () => {
//   console.log("Escribiendo");
// });

// busqueda.addEventListener("keyup", () => {
//   console.log("Escribiendo (keyup)");
// });

// busqueda.addEventListener("blur", () => {
//   console.log("Escribiendo (blur)");
// });

// busqueda.addEventListener("copy", () => {
//   console.log("Escribiendo (copy)");
// });

// busqueda.addEventListener("paste", () => {
//   console.log("Escribiendo (paste)");
// });

// busqueda.addEventListener("cut", () => {
//   console.log("Escribiendo (cut)");
// });

busqueda.addEventListener("input", (e) => {
  console.log("evento:", e.type, e.target, e.target.value);
});
