import express from "express";
import cors from "cors";
import AppDataSource from "./src/database/data-source.js";
import { User } from "./src/entity/user.entity.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to the database!");

    // Aquí puedes iniciar tu servidor o cualquier lógica de tu aplicación
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log("Error connecting to the database:", error));
