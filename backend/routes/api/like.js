const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } =require('express-validator');
const { Recipe, Comment, Grinder, Like } = require('../../db/models');
const recipe = require('../../db/models/recipe');
// const db= require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const likes = await Like.findAll({
            include:Recipe, User
        });
        return res.json({ likes })
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {
        const likeId=req.params.id;
        const like = await Like.findByPk(likeId, {
            include: Recipe, User
        });
        return res.json({like})
    })
)

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const newLike = await Like.create(req.body);
        return res.json(newLike);
    }))

router.put(
    '/:id',
    asyncHandler(async(req, res) => {
    const {
        userid,
        recipeid,
        liked
    }=req.body;

    const likeId = req.params.id;
    let like = await Like.findByPk(likeId)
    const updatedLike= await like.update({
        userid,
        recipeid,
        liked
    })

    res.json(updatedLike)
    }))

router.delete('/:id', asyncHandler(async (req, res) => {
    const likeId=req.params.id;
    let like = await Like.findByPk(likeId);
    await recipe.destroy()
    res.json({message:'Unliked'})
}))

module.exports=router;
