const Rccipe = require('../models/Recipe')

exports.AddRecipe = async(req, res) => {
    const recipe = await Rccipe.create(req.body);
    res.json(recipe)
}
// exports.getAllRecipes = async (req, res) => {
//     try {

//       const recipe = await User.find();
//       res.json(recipe);
//     } catch (error) {
//       console.error('Failed to get users:', error);
//       res.status(500).json({ message: 'Failed to get users' });
//     }
//   };



exports.DeleteRecipe = (req, res) => {
    
}

exports.UpdateRecipe = (req, res) => {
    
}
