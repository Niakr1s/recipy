import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { StateService } from 'src/app/shared/services/state.service';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item[recipe]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(readonly recipesService: RecipesService, readonly stateService: StateService) { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.recipesService.deleteRecipe(this.recipe);
  }
}
