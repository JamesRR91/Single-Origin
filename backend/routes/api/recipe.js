const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } =require('express-validator');
const { Recipe } = require('../../db/models');
const db= require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();

const validateRecipe= [
    check('title')
        .exists({checkFalsy:true})
        .withMessage('Please enter a title'),
    check('coffeedose')
        .exists({checkFalsy:true})
        .withMessage('Please submit the reccomended amount of coffee for your recipe'),
    check('waterdose')
        .exists({checkFalsy:true})
        .withMessage('Please submit the reccomended amount of water for your recipe'),
    check('brewtime')
        .exists({checkFalsy:true})
        .withMessage('Please submit the reccomended brew time for your recipe'),
    check('description')
        .exists({checkFalsy:true})
        .withMessage('Please submit your general recipe'),
    handleValidationErrors,
];

router.get('/', asyncHandler(async (req, res) => {
    const recipes = await Recipe.findAll();
    return res.json({ recipes });
})
);
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findByPk(req.params.id);
    if(recipe) {
        return res.json({ recipe });
    }
    // } else {
    //     next(recipeNotFoundError(req.params.id));
    // }
  })
  );

  router.post('/', validateRecipe, asyncHandler(async (req, res) => {
    const newRecipe = await Recipe.create(req.body);
    return res.json(newRecipe);
}))

router.put('/:id', validateRecipe, asyncHandler(async(req, res) => {
    const {
        title,
        brewtype,
        roasttype,
        grindlevel,
        coffeedose,
        waterdose,
        brewtime,
        description
    } = req.body;

    const recipeId = req.params.id;
    let recipe = await Recipe.findByPk(recipeId)
    const updatedRecipe = await recipe.update({
        title,
        brewtype,
        roasttype,
        grindlevel,
        coffeedose,
        waterdose,
        brewtime,
        description
    })

    res.json(updatedRecipe)
}))

module.exports= router;
