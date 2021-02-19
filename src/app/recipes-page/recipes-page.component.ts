import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(readonly stateService: StateService) { }

  ngOnInit(): void {
  }

  setCurrentRecipe(recipe: Recipe): void {
    this.stateService.recipePageState.currentRecipe = recipe;
  }
}
