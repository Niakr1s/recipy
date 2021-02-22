import { Component, Input, OnInit } from '@angular/core';
import { EditableMembers, Recipe } from 'src/app/models/recipe.model';
import { StateService } from 'src/app/shared/services/state.service';



@Component({
  selector: 'app-recipe-info[recipe]',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(readonly stateService: StateService) { }

  ngOnInit(): void {
  }

  onStartEdit(): void {
    this.stateService.recipePageState.isRecipeEditing = true;
  }

  onStopEdit(recipeEditableMembers: EditableMembers): void {
    this.stateService.recipePageState.isRecipeEditing = false;
    this.recipe.apply(recipeEditableMembers);
  }
}
