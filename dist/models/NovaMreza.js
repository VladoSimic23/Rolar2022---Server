"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NovaMrezaSchema = new mongoose.Schema({
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
}, { timestamps: true });
module.exports = mongoose.model("NovaMreza", NovaMrezaSchema);
