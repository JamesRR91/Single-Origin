const express = require('express');
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');
const { Comment, Recipe } = require ('../../db/models');
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();

const validateComment= [
    check('description')
        .exists({checkFalsy: true})
        .withMessage('Please submit a proper comment')
];
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

router.post(
    '/',
    validateComment,
    asyncHandler(async(req, res) => {
        const newComment= await Comment.create(req.body);
        return res.json({newComment});
    }));

    module.exports = router;
