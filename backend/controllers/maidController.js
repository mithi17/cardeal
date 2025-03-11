const maidsList = require('../models/maidModel'); 
const APIFeatures = require('../utils/apiFeatures');

// Get all maids -- http://localhost:8000/api/v1/find
exports.getMaids = async (req, res, next) => {
    try {

        const apiFeatures = new APIFeatures(maidsList.find(), req.query).search()
        const maids = await apiFeatures.query; 
        res.status(200).json({
            success: true,
            count: maids.length,
            maids // Changed from 'maid' to 'maids' for consistency
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// Create a new maid -- http://localhost:8000/api/v1/find/new
exports.newMaids = async (req, res, next) => {
    try {
        const maid = await maidsList.create(req.body); // Create a new maid
        res.status(201).json({
            success: true,
            maid // Changed from 'Maids' to 'maid' for consistency
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error use different maid ID",
            error: error.message
        });
    }
};

// Get a single maid by ID -- http://localhost:8000/api/v1/find/:id
exports.getMaidsById = async (req, res, next) => {
    try {
        const maid = await maidsList.findById(req.params.id); // Use req.params.id
        if (!maid) {
            return res.status(404).json({
                success: false,
                message: "Maid not found" 
            });
        }

        res.status(200).json({ 
            success: true,
            maid
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

//get Update maid -- http://localhost:8000/api/v1/find/:id
exports.updateMaid = async (req, res, next) => {
   let maid = await maidsList.findById(req.params.id);
   

    if (!maid) {
        return res.status(404).json({
            success: false,
            message: "Maid not found" 
        });
    }

    maid = await maidsList.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true

    })

    res.status(200).json({
        success: true,
        maid
    })
}

// Delete maid -- http://localhost:8000/api/v1/find/:id
exports.deleteMaid = async (req, res, next) => {
    try {
        const maidId = req.params.id; // Get the ID from the request parameters
        const maid = await maidsList.findByIdAndDelete(maidId); // Use findByIdAndDelete

        if (!maid) {
            return res.status(404).json({
                success: false,
                message: "Maid not found" 
            });
        }

        res.status(200).json({
            success: true,
            message: "Maid deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

