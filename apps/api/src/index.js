const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 API is running!");
});

app.listen(4000, () => console.log("API running at http://localhost:4000"));
