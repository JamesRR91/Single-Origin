const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } =require('express-validator');
const { Recipe } = require('../../db/models');
const {handleValidationErrors} = require('../../utils/validation');
const router = express.Router();

const validateRecipe= [
    check('title')
        .exists({checkFalsy:true})
        .withMessage('Please enter a title'),
    check('brewtype')
        .exists({checkFalsy:true})
        .withMessage('Please submit your brewing method'),
    check('roast')
        .exists({checkFalsy:true})
        .withMessage('Please submit a preferred roast'),
    check('grindlevel')
        .exists({checkFalsy:true})
        .withMessage('Please submit the reccomended grind for your recipe'),
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
    const newRecipe = await Recipe.create(req.body)
    res.json(newRecipe)
}))

module.exports= router;
