import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EditableMembers } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-info-edit[recipeEditableMembers]',
  templateUrl: './recipe-info-edit.component.html',
  styleUrls: ['./recipe-info-edit.component.css']
})
export class RecipeInfoEditComponent implements OnInit, OnChanges {
  @Input() recipeEditableMembers!: EditableMembers;
  @Output() stopEdit$: EventEmitter<EditableMembers> = new EventEmitter();
  recipeName!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const recipeEditableMembers = changes.recipeEditableMembers;
    if (recipeEditableMembers) {
      this.recipeName = recipeEditableMembers.currentValue.name;
    }
  }

  ngOnInit(): void {
    console.log('RecipeInfoEditComponent');
  }

  onStopEdit(): void {
    this.stopEdit$.next(this.recipeEditableMembers);
  }
}
