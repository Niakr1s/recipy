import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { EditableMembers, Recipe } from 'src/app/models/recipe.model';



@Component({
  selector: 'app-recipe-info[recipe]',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit, OnChanges {
  @Input() recipe!: Recipe;

  isEditing = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const recipe: SimpleChange = changes.recipe;
    if (recipe && !recipe.firstChange) {
      this.isEditing = false;
    }
  }

  ngOnInit(): void {
  }

  onStartEdit(): void {
    this.isEditing = true;
  }

  onStopEdit(recipeEditableMembers: EditableMembers): void {
    this.isEditing = false;
    this.recipe.apply(recipeEditableMembers);
  }
}
