const router = require("express").Router();
const NovaMreza = require("../models/NovaMreza");

export interface novaKomaricaI {
  updateOne: any;
  save(): novaKomaricaI | PromiseLike<novaKomaricaI>;
  _id?: string;
  tip: string;
  mjere: [
    { tipMjere: "Konačna"; sirina: number; visina: number },
    { tipMjere: "Unutarnja"; sirina: number; visina: number }
  ];
}

// POST
router.post("/", async (req: { body: novaKomaricaI }, res: { status: any }) => {
  const mreza: novaKomaricaI = new NovaMreza(req.body);
  try {
    const savedPost: novaKomaricaI = await mreza.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET
router.get("/", async (req: { body: novaKomaricaI }, res: { status: any }) => {
  const mreza: novaKomaricaI = await NovaMreza.find(req.body);

  try {
    res.status(200).json(mreza);
  } catch (error) {
    console.log(error);
  }
});

// PUT
router.put(
  "/:id",
  async (
    req: { params: { id: number }; body: novaKomaricaI },
    res: { status: any }
  ) => {
    try {
      const mreza: novaKomaricaI = await NovaMreza.findById(req.params.id);
      if (mreza) {
        await mreza.updateOne({ $set: req.body });
        res.status(200).json("mreza has been updated!");
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
  async (req: { params: { id: number } }, res: { status: any }) => {
    try {
      const mreza: novaKomaricaI = await NovaMreza.findById(req.params.id);
      if (mreza) {
        res.status(200).json(mreza);
      } else {
        res.status(403).json("no item");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
// DLETE BY ID
router.delete(
  "/delete/:id",
  async (req: { params: { id: number } }, res: { status: any }) => {
    try {
      const mreza: novaKomaricaI = await NovaMreza.findByIdAndRemove(
        req.params.id
      );
      if (mreza) {
        res.status(200).json(mreza);
      } else {
        res.status(403).json("no item");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
