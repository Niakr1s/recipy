import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-info-view[recipe]',
  templateUrl: './recipe-info-view.component.html',
  styleUrls: ['./recipe-info-view.component.css']
})
export class RecipeInfoViewComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() startEdit$: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStartEdit(): void {
    this.startEdit$.next();
  }

}
