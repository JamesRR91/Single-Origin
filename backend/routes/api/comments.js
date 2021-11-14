const express = require('express');
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');
const { Comment, Recipe } = require ('../../db/models');
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async(req, res) => {
        const comments = await Comment.findAll();
        return res.json({comments});
    })
    )
router.get(
    '/:id',
    asyncHandler(async(req, res) => {
        const {id}=req.params;
    })
)

    module.exports = router;
