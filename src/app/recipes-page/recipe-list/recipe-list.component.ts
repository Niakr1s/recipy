import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { recipeDetailQueryParams } from '../recipe-detail/recipe-info/queryParams';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(
    readonly recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onNewRecipe(): void {
    const newRecipe = this.recipesService.createNewRecipe();
    this.router.navigate([newRecipe.id], {
      queryParams: { [recipeDetailQueryParams.recipeEdit]: true },
      relativeTo: this.route,
    });
  }
}
