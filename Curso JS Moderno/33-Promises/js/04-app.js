const paises = ["Francia", "Espania", "Portugal", "Argentina"];
const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve(`Agregado: ${pais}`);
    }, 3000);
  });

nuevoPais("Alemania")
  .then((result) => {
    console.log(result);
    console.log(paises);
    return nuevoPais("Francia");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Inglaterra");
  })
  .then((result) => {
    console.log(result);
    console.log(paises);
  });
