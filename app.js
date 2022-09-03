const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀[SERVER] Listening to http://localhost:${PORT}`);
});

app.get("/hello", (req, res) => {
  res.send("Task Manager!");
});
