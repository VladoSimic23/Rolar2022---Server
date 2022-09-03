const router = require("express").Router();
const NovaRoleta = require("../models/NovaRoleta");

export interface novaRoletaI {
  [x: string]: any;
  _id?: string;
  tip: string;
  lamela: number;
  osovina: number;
  vodilica: number;
  mrezaZaRoletu: [
    { tip: "Klik-Klak"; mreza: number; zavrsnaZaMrezu: number },
    { tip: "Bolcna"; mreza: number; zavrsnaZaMrezu: number }
  ];
}

// POST
router.post("/", async (req: { body: novaRoletaI }, res: { status: any }) => {
  const roleta: novaRoletaI = new NovaRoleta(req.body);
  try {
    const savedPost: novaRoletaI = await roleta.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET
router.get("/", async (req: { body: novaRoletaI }, res: { status: any }) => {
  const roleta: novaRoletaI = await NovaRoleta.find(req.body);

  try {
    res.status(200).json(roleta);
  } catch (error) {
    console.log(error);
  }
});

// PUT
router.put(
  "/:id",
  async (req: { params: { id: number }; body: novaRoletaI }, res: any) => {
    try {
      const roleta: novaRoletaI = await NovaRoleta.findById(req.params.id);
      if (roleta) {
        await roleta.updateOne({ $set: req.body });
        res.status(200).json("Roleta has been updated!");
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
      const roleta: novaRoletaI = await NovaRoleta.findById(req.params.id);
      if (roleta) {
        res.status(200).json(roleta);
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
  async (req: { params: { id: number } }, res: { status: any }) => {
    try {
      const roleta: novaRoletaI = await NovaRoleta.findByIdAndRemove(
        req.params.id
      );
      if (roleta) {
        res.status(200).json(roleta);
      } else {
        res.status(403).json("no item");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
