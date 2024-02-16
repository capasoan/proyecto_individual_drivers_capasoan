const { Router } = require("express");
const router = Router();

const driversD = require('../controllers/driversD');


router.get("/drivers", driversD)

module.exports = router;
