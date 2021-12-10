const express = require('express');
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');
const { Grinder, Review, Recipe } = require ('../../db/models');
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();


router.get(
    '/',
    asyncHandler(async(req, res) => {
        const grinders = await Grinder.findAll({
            include:Review, Recipe
        });
        console.log('GRINDERS', grinders)
        return res.json({ grinders });
    })
    )

    // router.get(
    //     '/:id',
    //      asyncHandler(async (req, res, next) => {
    //     const grinderId=req.params.id;
    //     const grinder = await Grinder.findByPk(grinderId, {
    //         include:Review
    //     });
    //     return res.json({ grinder, });
    //     // } else {
    //     //     next(recipeNotFoundError(req.params.id));
    //     // }
    //   })
    //   );

//       router.post('/',
//        asyncHandler(async (req, res) => {
//        const newRecipe = await Recipe.create(req.body);
//        return res.json(newRecipe);
//    }))
module.exports= router;
