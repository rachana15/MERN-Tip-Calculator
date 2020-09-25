import express from "express";
import cors from "cors";

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("hello world");
});

app.post("/api/v1/calculatetip", (req, res) => {
  const amount = parseInt(req.body.amount);
  const tip = parseInt(req.body.tip);

  const toBePayed = amount + (tip * amount) / 100;

  res.status(200).json({ toBePayed });
});
app.listen(port, () => console.log(`listening on port: ${port}`));
