import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-info[recipe]',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css'],
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipe!: Recipe;
  isEditingRecipe = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ recipeEdit }) => {
      this.isEditingRecipe = recipeEdit === 'true';
    });
  }
}
