const mongoose = require("mongoose");
import { kupacI } from "../routes/KupacRoute";

const KupacSchema: kupacI = new mongoose.Schema(
  {
    ime: {
      type: String,
    },
    mjesto: {
      type: String,
    },
    napomena: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Kupac", KupacSchema);
