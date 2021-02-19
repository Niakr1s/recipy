import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngridientListItemComponent } from './recipes-page/recipe-detail/ingridient-list/ingridient-list-item/ingridient-list-item.component';
import { IngridientListComponent } from './recipes-page/recipe-detail/ingridient-list/ingridient-list.component';
import { NoRecipeDetailComponent } from './recipes-page/recipe-detail/no-recipe-detail/no-recipe-detail.component';
import { RecipeDetailComponent } from './recipes-page/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes-page/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes-page/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes-page/recipes-page.component';
import { IngridientInputComponent } from './shared/components/ingridient-input/ingridient-input.component';
import { IngridientComponent } from './shared/components/ingridient/ingridient.component';
import { ShoppingListComponent } from './shopping-page/shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping-page/shopping-page.component';
import { RecipeInfoComponent } from './recipes-page/recipe-detail/recipe-info/recipe-info.component';
import { RecipeInfoEditComponent } from './recipes-page/recipe-detail/recipe-info/recipe-info-edit/recipe-info-edit.component';
import { RecipeInfoViewComponent } from './recipes-page/recipe-detail/recipe-info/recipe-info-view/recipe-info-view.component';


const appRoutes: Routes = [
  { path: 'recipe-list', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'recipe-list' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingComponent,
    NoRecipeDetailComponent,
    IngridientListComponent,
    IngridientComponent,
    IngridientInputComponent,
    IngridientListItemComponent,
    RecipeInfoComponent,
    RecipeInfoEditComponent,
    RecipeInfoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
