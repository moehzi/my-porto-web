const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");
app.use("/assets", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${path.join(__dirname)}/views/index.html`);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
