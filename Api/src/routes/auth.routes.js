const express = require("express");
const {loginSignUp} = require("../useCases/userCase");

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const token = await loginSignUp(req.body.email, req.body.password);
    res.json({
      success: true,
      token
    })
  }catch(err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
});

module.exports = router;          