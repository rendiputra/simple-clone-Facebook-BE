const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Test user route");
});

module.exports = router;