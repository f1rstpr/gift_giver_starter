const express = require("express");
const morgan = require("morgan");

const app = express();

const giftExchangeRouter = require("./routes/giftExchange");
const giftQuizRouter = require("./routes/quiz");

app.use(morgan("tiny"));
app.use(express.json());
app.use("/gift-exchange", giftExchangeRouter);
app.use("/quiz", giftQuizRouter);

app.get("/", (req, res, next) => {
    res.status(200).json({ ping: "pong" });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ` + port);
});
