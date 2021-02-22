import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from './recipes.service';

@Injectable({
  providedIn: 'root'
})
export class RecipePageState {
  currentRecipe?: Recipe;
  isRecipeEditing = false;

  constructor(recipesService: RecipesService) {
    recipesService.recipeDeleted$.subscribe((deletedRecipe) => {
      if (this.currentRecipe === deletedRecipe) {
        this.clearCurrentRecipe();
      }
    });
  }

  setCurrentRecipe(recipe: Recipe): void {
    this.currentRecipe = recipe;
    this.isRecipeEditing = false;
  }

  setCurrentRecipeAndEdit(recipe: Recipe): void {
    this.currentRecipe = recipe;
    this.isRecipeEditing = true;
  }

  clearCurrentRecipe(): void {
    this.currentRecipe = undefined;
    this.isRecipeEditing = false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(readonly recipePageState: RecipePageState) { }
}
