import { novaRoletaI } from "../routes/NovaRoletaRoute";
const mongoose = require("mongoose");

const NovaRoletaSchema: novaRoletaI = new mongoose.Schema(
  {
    tip: {
      type: String,
      required: true,
    },
    lamela: {
      type: Number,
      required: true,
    },
    osovina: {
      type: Number,
      required: true,
    },
    vodilica: {
      type: Number,
      required: true,
    },
    mrezaZaRoletu: [
      { tip: String, mreza: Number, zavrsnaZaMrezu: Number },
      { tip: String, mreza: Number, zavrsnaZaMrezu: Number },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("NovaRoleta", NovaRoletaSchema);
