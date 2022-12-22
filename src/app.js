
import express from "express";
import morgan from "morgan";

//rutas

import languageRoutes from "./routes/language.routes";

const app = express();

//configuro puerto

app.set("port", 4000);

//middlewares

app.use(morgan("dev"));
app.use(express.json());


//rutas

app.use("/api/languages", languageRoutes);

export default app;
