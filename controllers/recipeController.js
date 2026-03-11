import Recipe from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

export const getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
};

export const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(recipe);
};

export const deleteRecipe = async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe deleted" });
};