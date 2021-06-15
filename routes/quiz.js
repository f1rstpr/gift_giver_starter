const express = require("express");
const router = express.Router();
const GiftGiver = require("../model/quiz");

router.get("/", (req, res, next) => {
    const quizzes = GiftGiver.quiz();
    res.status(200).json(quizzes);
});

router.post("/", (req, res, next) => {
    const user_answers = req.body;
    const get_prize = GiftGiver.quizResults(user_answers);
    res.status(200).json(get_prize);
});

module.exports = router;
