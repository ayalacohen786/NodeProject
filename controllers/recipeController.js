const Rccipe = require('../models/Recipe')

exports.AddRecipe = async (req, res) => {
    const recipe = await Rccipe.create(req.body);
    res.json(recipe)
}
exports.getAllRecipes = async (req, res) => {
    try {

        const recipe = await User.find();
        res.json(recipe);
    } catch (error) {
        console.error('Failed to get users:', error);
        res.status(500).json({ message: 'Failed to get users' });
    }
};



exports.DeleteRecipe = (req, res) => {
    const recipeName = req.params.name;
    console.log(recipeName);
    try {
        const deletedRecipe = await User.findOneAndDelete({ recipeName: recipeName });
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error('Failed to delete recipe:', error);
        res.status(500).json({ message: 'Failed to delete recipe' });

    }
}

    exports.UpdateRecipe = (req, res) => {
        {
            const { recipeName } = req.params;
            const { name, category,instructions } = req.body;
            
           
            try {
                const updatedRecipe = await User.findOneAndUpdate(
                    { recipeName: recipeName },
                    { name, category,instructions },
                    { new: true }
                );
    
                if (!updatedRecipe) {
                    return res.status(404).json({ message: 'Recipe not found' });
                }
    
                res.json(updatedRecipe);
            } catch (error) {
                console.error('Failed to update recipe:', error);
                res.status(500).json({ message: 'Failed to update recipe' });
            }
    
        }
    

    }
