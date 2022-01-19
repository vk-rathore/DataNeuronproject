const route = require("express").Router();
const service = require("../service/route");
route.post("/update", async (req, res, next) => {
  try {
    const data = await service.update(req, res);
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(err.code);
  }
});

route.get("/getdata", async (req, res, next) => {
  try {
    
    const data = await service.getdata(req, res);
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(err.code);
  }
});

route.post("/add", async (req, res, next) => {
  try {
    const data = await service.add(req, res);
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(err.code);
  }
});
module.exports = route;
