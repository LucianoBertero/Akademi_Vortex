function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando cliente");
    setTimeout(() => {
      resolve("los clientes fueron descargados");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos");
    setTimeout(() => {
      resolve("los pedidos fueron descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    const respuesta = await Promise.all([
      descargarNuevosClientes(),
      descargarNuevosPedidos(),
    ]);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

app();
