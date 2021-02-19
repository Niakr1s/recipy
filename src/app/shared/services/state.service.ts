import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

export class RecipePageState {
  currentRecipe?: Recipe;

}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  readonly recipePageState = new RecipePageState();

  constructor() { }
}
