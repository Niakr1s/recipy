import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { StateService } from 'src/app/shared/services/state.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(readonly recipesService: RecipesService, readonly stateService: StateService) { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe): void {
    this.stateService.recipePageState.currentRecipe = recipe;
  }

  onNewRecipe(): void {
    const newRecipe = this.recipesService.createNewRecipe();
    this.stateService.recipePageState.currentRecipe = newRecipe;
  }
}
