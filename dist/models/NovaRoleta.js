"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NovaRoletaSchema = new mongoose.Schema({
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
}, { timestamps: true });
module.exports = mongoose.model("NovaRoleta", NovaRoletaSchema);
