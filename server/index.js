const path = require("path");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Ola do Server" });
});

app.listen(PORT, () => {
    console.log(`Server está online na porta: ${PORT}`);
  });
  
