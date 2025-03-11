const express = require('express');
const { getMaids, newMaids, getMaidsById, updateMaid, deleteMaid, } = require('../controllers/maidController');
const router = express.Router();

router.route('/find').get(getMaids); //get all maid
router.route('/find/new').post(newMaids); //add new maid
router.route('/find/:id').get(getMaidsById); // get single maid by id
router.route('/find/:id').put(updateMaid); //update
router.route('/find/:id').delete(deleteMaid); //delete


module.exports = router;