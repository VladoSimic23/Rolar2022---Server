const router = require("express").Router();
const NovaMrezaStandard = require("../models/NovaMrezaStandard");

export interface novaKomaricaTip2I {
  updateOne: any;
  save?: any;
  _id?: string;
  tip: string;
  sirina: number;
  visina: number;
}

// POST
router.post(
  "/",
  async (req: { body: novaKomaricaTip2I }, res: { status: any }) => {
    const mreza: novaKomaricaTip2I = new NovaMrezaStandard(req.body);
    try {
      const savedPost: novaKomaricaTip2I = await mreza.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

// GET
router.get(
  "/",
  async (req: { body: novaKomaricaTip2I }, res: { status: any }) => {
    const mreza: novaKomaricaTip2I = await NovaMrezaStandard.find(req.body);

    try {
      res.status(200).json(mreza);
    } catch (error) {
      console.log(error);
    }
  }
);

// PUT
router.put(
  "/:id",
  async (
    req: { params: { id: number }; body: novaKomaricaTip2I },
    res: { status: any }
  ) => {
    try {
      const mreza: novaKomaricaTip2I = await NovaMrezaStandard.findById(
        req.params.id
      );
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
  async (
    req: { params: { id: number }; body: novaKomaricaTip2I },
    res: { status: any }
  ) => {
    try {
      const mreza: novaKomaricaTip2I = await NovaMrezaStandard.findById(
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
// DELETE BY ID
router.delete(
  "/delete/:id",
  async (
    req: { params: { id: number }; body: novaKomaricaTip2I },
    res: { status: any }
  ) => {
    try {
      const mreza: novaKomaricaTip2I =
        await NovaMrezaStandard.findByIdAndRemove(req.params.id);
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
