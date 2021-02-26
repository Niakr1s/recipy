import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipesService: RecipesService, private router: Router) {}

  toRecipeList(): void {
    this.router.navigate(['/recipe-list']);
  }

  resolve(
    route: ActivatedRouteSnapshot
  ): Recipe | Observable<Recipe> | Promise<Recipe> {
    const id = +route.params.id;
    if (!Number.isNaN(id)) {
      const recipe = this.recipesService.getRecipe(id);
      if (recipe) {
        return recipe;
      }
    }
    this.toRecipeList();
    return EMPTY;
  }
}
