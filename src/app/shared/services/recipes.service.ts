import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesSaverService, RecipesSaverServiceInjectKey } from './recipes-saver.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipies: Recipe[] = [];
  readonly recipeDeleted$: EventEmitter<Recipe> = new EventEmitter();

  constructor(@Inject(RecipesSaverServiceInjectKey) private recipesSaver: RecipesSaverService) {
    recipesSaver.loadRecipes().then((recipies) => this.recipies = recipies);
  }

  async saveRecipies(): Promise<void> {
    return await this.recipesSaver.saveRecipes(this.recipies);
  }

  createNewRecipe(): Recipe {
    const recipe = Recipe.create({ name: 'New recipe', detail: 'Recipe detail', imagePath: '', ingridients: [] });
    this.recipies.push(recipe);
    return recipe;
  }

  deleteRecipe(recipe: Recipe): boolean {
    const index = this.recipies.indexOf(recipe);
    if (index === -1) { return false; }
    this.recipies.splice(index, 1);
    this.recipeDeleted$.next(recipe);
    return true;
  }
}
