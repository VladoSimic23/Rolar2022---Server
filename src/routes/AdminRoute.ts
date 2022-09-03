const router = require("express").Router();
const Admin = require("../models/Admin");
import dotenv from "dotenv";
dotenv.config();
const bcrypt = require("bcrypt");

export interface adminI {
  name: string | undefined;
  password: string | undefined;
}

const adminCred: adminI = {
  name: "rolar",
  password: "borajna",
};

// POST
router.post("/", async (req: any, res: { status: any }) => {
  try {
    const hashPass: string = await bcrypt.hash(adminCred.password, 10);

    const hashedAdmin = {
      name: adminCred.name,
      password: hashPass,
    };

    const admin = new Admin(hashedAdmin);
    const saveAdmin = await admin.save();

    res.status(200).json(saveAdmin);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET
router.get("/", async (req: any, res: { status: any }) => {
  try {
    res.status(200).json(adminCred);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
