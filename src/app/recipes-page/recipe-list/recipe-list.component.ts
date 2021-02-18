import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  selectedRecipe?: Recipe;

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  constructor(readonly recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe): void {
    this.recipeSelectedEvent.emit(recipe);
    this.selectedRecipe = recipe;
  }
}
