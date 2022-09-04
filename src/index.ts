import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGOOSE_CONNECTION as any, () => {
  console.log("Connected to MongoDB!");
});

// ROUTES
const novaRoletaRoute = require("./routes/NovaRoletaRoute");
const novaMrezaRoute = require("./routes/NovaMrezaRoute");
const novaMrezaStandardRoute = require("./routes/NovaMrezaStandardRoute");
const kupacRoute = require("./routes/KupacRoute");
const adminRoute = require("./routes/AdminRoute");

const app: Express = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/novaRoleta", novaRoletaRoute);
app.use("/novaMreza", novaMrezaRoute);
app.use("/novaMrezaStandard", novaMrezaStandardRoute);
app.use("/kupac", kupacRoute);
app.use("/admin", adminRoute);

// const PORT = process.env.PORT || 8000;

app.listen(https://rolar-server.herokuapp.com, () => {
  console.log(`[server]: Server is running at port ${https://rolar-server.herokuapp.com}`);
});
