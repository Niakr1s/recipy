import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-page/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-page/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes-page/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes-page/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes-page/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes-page/recipes-page.component';
import { ShoppingComponent } from './shopping-page/shopping-page.component';
import { NoRecipeDetailComponent } from './recipes-page/recipe-detail/no-recipe-detail/no-recipe-detail.component';
import { IngridientListComponent } from './recipes-page/recipe-detail/ingridient-list/ingridient-list.component';
import { IngridientComponent } from './shared/components/ingridient/ingridient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingComponent,
    NoRecipeDetailComponent,
    IngridientListComponent,
    IngridientComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
