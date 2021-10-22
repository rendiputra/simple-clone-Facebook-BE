const router = require("express").Router();

router.get("/", () => {
  console.log("Test");
});

module.exports = router;