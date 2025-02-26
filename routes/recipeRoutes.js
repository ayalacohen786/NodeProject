const express = require('express');

const { AddRecipe } = require('../controllers/recipeController');
const { DeleteRecipe } = require('../controllers/recipeController');
const { UpdateRecipe } = require('../controllers/recipeController');

const router = express.Router();

router.post('/AddRecipe',AddRecipe);
router.delete('/DeleteRecipe',DeleteRecipe);
router.put('/UpdateRecipe',UpdateRecipe);

module.exports = router