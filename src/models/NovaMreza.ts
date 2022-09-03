import { novaKomaricaI } from "../routes/NovaMrezaRoute";
const mongoose = require("mongoose");

const NovaMrezaSchema: novaKomaricaI = new mongoose.Schema(
  {
    tip: {
      type: String,
      required: true,
    },
    mjere: [
      {
        tipMjere: String,
        sirina: Number,
        visina: Number,
      },
      {
        tipMjere: String,
        sirina: Number,
        visina: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("NovaMreza", NovaMrezaSchema);
