const {Allotofficial}=require('../controller/officials/Allotevent');
const {Deallotofficial}=require('../controller/officials/Deallotevent');
const {Getofficials}=require('../controller/officials/Getofficials');
const {Createofficials}=require('../controller/officials/Createofficials');
const {Putofficials}=require('../controller/officials/Putofficials');

const router = require("express").Router(); 

router.post("/allot/:id", Allotofficial);
router.post("/deallot/:id", Deallotofficial);
router.get("/", Getofficials);
router.post("/", Createofficials);
router.put("/", Putofficials);  

module.exports = router;
