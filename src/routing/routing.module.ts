import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '../app/recipes-page/recipe-detail/recipe-detail.component';
import { RecipesPageComponent } from '../app/recipes-page/recipes-page.component';
import { RecipeResolver } from '../app/shared/resolvers/recipe.resolver';
import { ShoppingComponent } from '../app/shopping-page/shopping-page.component';

const routes: Routes = [
  {
    path: 'recipe-list',
    component: RecipesPageComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: { recipe: RecipeResolver },
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'recipe-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
