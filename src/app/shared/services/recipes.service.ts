import { Inject, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesSaverService, RecipesSaverServiceInjectKey } from './recipes-saver.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipies: Recipe[] = [];

  constructor(@Inject(RecipesSaverServiceInjectKey) private recipesSaver: RecipesSaverService) {
    recipesSaver.loadRecipes().then((recipies) => this.recipies = recipies);
  }

  async saveRecipies(): Promise<void> {
    return await this.recipesSaver.saveRecipes(this.recipies);
  }

  createNewRecipe(): Recipe {
    const recipe = new Recipe({ name: 'New recipe', detail: 'Recipe detail', imagePath: '', ingridients: [] });
    this.recipies.push(recipe);
    return recipe;
  }
}
