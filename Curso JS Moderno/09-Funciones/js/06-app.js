const saludar = (nombre = "Juan", apellido = "Perez") => {
  console.log(`Hola ${nombre} ${apellido}`);
};

saludar("Luciano", "Bertero");
saludar();
