import { novaKomaricaTip2I } from "../routes/NovaMrezaStandardRoute";
const mongoose = require("mongoose");

const NovaMrezaStandardSchema: novaKomaricaTip2I = new mongoose.Schema(
  {
    tip: {
      type: String,
      required: true,
    },
    sirina: {
      type: Number,
      required: true,
    },
    visina: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NovaMrezaStandard", NovaMrezaStandardSchema);
