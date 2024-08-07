import "dotenv/config";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./db/db.conecction";
import { Photo } from "./entities/photo";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log("Base de datos en linea");
    newPhoto();
  })
  .catch((error) => console.log(error));
app.listen(PORT, () => {
  console.log("listo");
});

let numero: number = 300;

const newPhoto = async () => {
  const photoRepository = AppDataSource.getRepository(Photo);

  console.log("Photo has been saved");
  console.log("entro");

  const photo = new Photo();
  photo.name = "Me and Bearssssss";
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;
  try {
    await photoRepository.save(photo);
    console.log("Photo has been saved. Photo id is", photo.id);
    const savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos);
    const firstPhoto = await photoRepository.findOneBy({
      id: 2,
    });
    console.log("First photo from the db: ", firstPhoto);
  } catch (error) {}
};
