const express = require('express');
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');
const { Grinder, Review } = require ('../../db/models');
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async(req, res) => {
        const reviews = await Review.findAll();
        return res.json({reviews});
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
        asyncHandler(async(req, res) => {
            const newReview= await Review.create(req.body);
            return res.json({newReview});
        }));
        router.put(
            '/:id', asyncHandler(async(req, res) => {
            const {
                userid,
                recipeid,
                review
            }=req.body;

            const reviewId=req.params.id;
            let theReview = await Review.findByPk(reviewId)
            const updatedReview = await theReview.update({
                userid,
                recipeid,
                review
            })

            res.json(updatedReview)
            }))

            router.delete('/:id', asyncHandler(async (req, res) => {
                const reviewId=req.params.id;
                let review=await Recipe.findByPk(reviewId);
                await review.destroy()
                res.json({message:'Review Deleted'})
            }))

            module.exports= router;
