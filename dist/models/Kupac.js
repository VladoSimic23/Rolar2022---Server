"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const KupacSchema = new mongoose.Schema({
    ime: {
        type: String,
    },
    mjesto: {
        type: String,
    },
    napomena: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose.model("Kupac", KupacSchema);
