"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGOOSE_CONNECTION, () => {
    console.log("Connected to MongoDB!");
});
// ROUTES
const novaRoletaRoute = require("./routes/NovaRoletaRoute");
const novaMrezaRoute = require("./routes/NovaMrezaRoute");
const novaMrezaStandardRoute = require("./routes/NovaMrezaStandardRoute");
const kupacRoute = require("./routes/KupacRoute");
const adminRoute = require("./routes/AdminRoute");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ROUTES
app.use("/novaRoleta", novaRoletaRoute);
app.use("/novaMreza", novaMrezaRoute);
app.use("/novaMrezaStandard", novaMrezaStandardRoute);
app.use("/kupac", kupacRoute);
app.use("/admin", adminRoute);
// const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`[server]: Server is running at port ${8000}`);
});
