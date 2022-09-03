const router = require("express").Router();
const Kupac = require("../models/Kupac");

export interface kupacI {
  updateOne: any;
  save: any;
  ime: string;
  mjesto: string;
  napomena: string;
}

// POST
router.post("/", async (req: { body: kupacI }, res: { status: any }) => {
  const kupac: kupacI = new Kupac(req.body);
  try {
    const savedPost = await kupac.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET
router.get("/", async (req: { body: kupacI }, res: { status: any }) => {
  const kupac: kupacI = await Kupac.find(req.body);

  try {
    res.status(200).json(kupac);
  } catch (error) {
    console.log(error);
  }
});

// PUT
router.put(
  "/:id",
  async (
    req: { params: { id: number }; body: kupacI },
    res: { status: any }
  ) => {
    try {
      const kupac: kupacI = await Kupac.findById(req.params.id);
      if (kupac) {
        await kupac.updateOne({ $set: req.body });
        res.status(200).json("Kupac has been updated!");
      } else {
        res.status(403).json("no item");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// GET BY ID
router.get(
  "/:id",
  async (
    req: { params: { id: number }; body: kupacI },
    res: { status: any }
  ) => {
    try {
      const kupac: kupacI = await Kupac.findById(req.params.id);
      if (kupac) {
        res.status(200).json(kupac);
      } else {
        res.status(403).json("no item");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
