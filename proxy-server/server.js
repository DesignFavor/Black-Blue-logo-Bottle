const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "https://pfannenstielhof-weingut.webflow.io" }));

app.use("/", (req, res) => {
  const url = `https://black-blue-logo-bottle.vercel.app${req.path}`;
  res.redirect(url);
});

app.listen(3000, () => console.log("Proxy server running on port 3000"));
