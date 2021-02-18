import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingridient } from '../ingridient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  readonly recipies: Recipe[];
  selectedRecipe?: Recipe;

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  constructor() {
    this.recipies = [
      new Recipe({
        name: 'Tofu', detail: 'Tofu detail', imagePath: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/tofu-500x500.jpg',
        ingridients: [
          new Ingridient({ name: 'soy', amount: 500, measurement: 'g' }),
          new Ingridient({ name: 'water', amount: 1000, measurement: 'ml' })
        ]
      }),
      new Recipe({
        name: 'Pork', detail: 'Pork detail', imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-rack-of-pork-with-wild-garlic-stuffing_1-536cd86.jpg?quality=90&resize=960,872',
        ingridients: [
          new Ingridient({ name: 'meat', amount: 1, measurement: 'Kg' }),
          new Ingridient({ name: 'oil', amount: 10, measurement: 'g' }),
        ]
      }),
      new Recipe({
        name: 'Oolong tea', detail: 'Oolong tea detail', imagePath: 'data:image/jpeg;base64,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',
        ingridients: [
          new Ingridient({ name: 'water', amount: 1, measurement: 'L' }),
          new Ingridient({ name: 'tea', amount: 1, measurement: 'g' }),
        ]
      }),
    ];
  }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe): void {
    this.recipeSelectedEvent.emit(recipe);
    this.selectedRecipe = recipe;
  }
}
