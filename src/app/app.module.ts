import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { ShoppingListEditComponent } from './shopping-page/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-page/shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping-page/shopping-page.component';


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
    IngridientComponent,
    IngridientInputComponent,
    IngridientListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
