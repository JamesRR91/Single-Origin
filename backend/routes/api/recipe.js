const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } =require('express-validator');
const { Recipe } = require('../../db/models');
const router = express.Router();

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

module.exports= router;
