import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

export class RecipePageState {
  currentRecipe?: Recipe;
  isRecipeEditing = false;

  setCurrentRecipe(recipe: Recipe): void {
    this.currentRecipe = recipe;
    this.isRecipeEditing = false;
  }

  setCurrentRecipeAndEdit(recipe: Recipe): void {
    this.currentRecipe = recipe;
    this.isRecipeEditing = true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  readonly recipePageState = new RecipePageState();

  constructor() { }
}
