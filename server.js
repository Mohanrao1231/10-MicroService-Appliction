import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Microservice running successfully on Vercel 🚀");
});

app.listen(3000);
