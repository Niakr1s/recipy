import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesComponent implements OnInit {
  currentRecipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentRecipe(recipe: Recipe): void {
    this.currentRecipe = recipe;
  }
}
