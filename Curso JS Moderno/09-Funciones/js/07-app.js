const iniciarApp = () => {
  console.log("Iniciando app...");
  segundaFuncion();
};

const segundaFuncion = () => {
  console.log("Desde la segunda Funcion");
  usuarioAuthenticated("Luciano");
};

const usuarioAuthenticated = (usuario) => {
  console.log("Autenticando Usuario..... Espere....");
  console.log("Usuario Autenticado Exitosamente " + usuario);
};

iniciarApp();
