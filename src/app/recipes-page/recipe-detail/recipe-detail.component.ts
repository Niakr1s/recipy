import { Component, Input, OnInit } from '@angular/core';
import { IngridientOptions } from 'src/app/models/ingridient.model';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail[recipe]',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  _recipe!: Recipe;
  isAddingNewIngridient = false;

  @Input() set recipe(recipe: Recipe) {
    this._recipe = recipe;
    this.isAddingNewIngridient = false;
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onNewIngridientOptions(ingridientOptions: IngridientOptions): void {
    this.recipe.addNewIngridient(ingridientOptions);
    this.isAddingNewIngridient = false;
  }
}
