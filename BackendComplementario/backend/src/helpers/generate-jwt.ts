import jwt from "jsonwebtoken";

export const generateJWT = (uid: string = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.SECRET_KEY_JWT ?? "vortex-akademi",
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};
