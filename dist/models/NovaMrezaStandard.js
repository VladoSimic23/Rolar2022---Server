"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NovaMrezaStandardSchema = new mongoose.Schema({
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
}, { timestamps: true });
module.exports = mongoose.model("NovaMrezaStandard", NovaMrezaStandardSchema);
