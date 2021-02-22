import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../shared/services/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(readonly recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.recipesService.saveRecipies();
  }
}
