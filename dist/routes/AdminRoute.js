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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const Admin = require("../models/Admin");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bcrypt = require("bcrypt");
const adminCred = {
    name: "rolar",
    password: "borajna",
};
// POST
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashPass = yield bcrypt.hash(adminCred.password, 10);
        const hashedAdmin = {
            name: adminCred.name,
            password: hashPass,
        };
        const admin = new Admin(hashedAdmin);
        const saveAdmin = yield admin.save();
        res.status(200).json(saveAdmin);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// GET
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(adminCred);
    }
    catch (error) {
        console.log(error);
    }
}));
module.exports = router;
