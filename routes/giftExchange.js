const express = require("express");
const router = express.Router();
const giftExchangeModel = require("../model/giftExchange");

router.get("/", (req, res, next) => {
    res.status(200).json({ hello: "changed" });
});

router.post("/pairs/", (req, res, next) => {
    const pairs = giftExchangeModel.pairs(req.body);
    res.status(200).json(pairs);
});

router.post("/traditional/", (req, res, next) => {
    const pairs = giftExchangeModel.pairs(req.body);
    const t = giftExchangeModel.traditional(pairs);
    res.status(200).json(t);
});

module.exports = router;
