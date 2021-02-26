import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { updateQueryParam } from 'src/shared/util/router';
import { recipeDetailQueryParams } from '../queryParams';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  isEditing = false;

  constructor(
    readonly recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.isEditing =
        queryParams[recipeDetailQueryParams.recipeListEdit] === 'true';
    });
  }

  onNewRecipe(): void {
    const newRecipe = this.recipesService.createNewRecipe();
    this.router.navigate([newRecipe.id], {
      queryParams: { [recipeDetailQueryParams.recipeEdit]: true },
      relativeTo: this.route,
    });
  }

  toggleEdit(): void {
    updateQueryParam(
      this.router,
      recipeDetailQueryParams.recipeListEdit,
      !this.isEditing
    );
  }
}
