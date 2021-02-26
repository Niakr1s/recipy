import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditableMembers, Recipe } from 'src/app/models/recipe.model';
import { updateQueryParam } from 'src/shared/util/router';
import { recipeDetailQueryParams } from '../../../queryParams';

@Component({
  selector: 'app-recipe-info-edit[recipe]',
  templateUrl: './recipe-info-edit.component.html',
  styleUrls: ['./recipe-info-edit.component.css'],
})
export class RecipeInfoEditComponent implements OnInit {
  @Input() recipe!: Recipe;
  recipeEditableMembers!: EditableMembers;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.recipeEditableMembers = { ...this.recipe };
  }

  onSave(): void {
    this.recipe.apply(this.recipeEditableMembers);
    updateQueryParam(this.router, recipeDetailQueryParams.recipeEdit, false);
  }
}
