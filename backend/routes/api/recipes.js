const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } =require('express-validator');
const Recipe = require('../../db/models/recipe');
const router = express.Router();

router.get('/recipe', asyncHandler(async function (_req, res) {
    return res.json(Recipe);
}));
