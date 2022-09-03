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
const NovaMrezaStandard = require("../models/NovaMrezaStandard");
// POST
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mreza = new NovaMrezaStandard(req.body);
    try {
        const savedPost = yield mreza.save();
        res.status(200).json(savedPost);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// GET
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mreza = yield NovaMrezaStandard.find(req.body);
    try {
        res.status(200).json(mreza);
    }
    catch (error) {
        console.log(error);
    }
}));
// PUT
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mreza = yield NovaMrezaStandard.findById(req.params.id);
        if (mreza) {
            yield mreza.updateOne({ $set: req.body });
            res.status(200).json("mreza has been updated!");
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
        const mreza = yield NovaMrezaStandard.findById(req.params.id);
        if (mreza) {
            res.status(200).json(mreza);
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
        const mreza = yield NovaMrezaStandard.findByIdAndRemove(req.params.id);
        if (mreza) {
            res.status(200).json(mreza);
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
