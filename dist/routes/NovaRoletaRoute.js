"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const NovaRoleta = require("../models/NovaRoleta");
// POST
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roleta = new NovaRoleta(req.body);
    try {
        const savedPost = yield roleta.save();
        res.status(200).json(savedPost);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// GET
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roleta = yield NovaRoleta.find(req.body);
    try {
        res.status(200).json(roleta);
    }
    catch (error) {
        console.log(error);
    }
}));
// PUT
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleta = yield NovaRoleta.findById(req.params.id);
        if (roleta) {
            yield roleta.updateOne({ $set: req.body });
            res.status(200).json("Roleta has been updated!");
        }
        else {
            res.status(403).json("no item");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// GET BY ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleta = yield NovaRoleta.findById(req.params.id);
        if (roleta) {
            res.status(200).json(roleta);
        }
        else {
            res.status(403).json("no item");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// DELETE BY ID
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleta = yield NovaRoleta.findByIdAndRemove(req.params.id);
        if (roleta) {
            res.status(200).json(roleta);
        }
        else {
            res.status(403).json("no item");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = router;
