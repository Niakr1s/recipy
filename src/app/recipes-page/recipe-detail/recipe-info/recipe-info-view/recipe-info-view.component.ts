import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { updateQueryParam } from 'src/shared/util/router';
import { recipeDetailQueryParams } from '../../../queryParams';

@Component({
  selector: 'app-recipe-info-view[recipe]',
  templateUrl: './recipe-info-view.component.html',
  styleUrls: ['./recipe-info-view.component.css'],
})
export class RecipeInfoViewComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onStartEdit(): void {
    updateQueryParam(this.router, recipeDetailQueryParams.recipeEdit, true);
  }
}
