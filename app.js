const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`🚀[SERVER] Listening to http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

start();
