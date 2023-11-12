const express = require("express");
const app = express();
// const cors = require("cors");
app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.json("Hellooooooo");
});

// Starting the Server & Connecting to the DB:
// db.sequelize.sync().then(() => {
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// });
