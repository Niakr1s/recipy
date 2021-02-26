import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'reflect-metadata';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngridientListItemComponent } from './recipes-page/recipe-detail/ingridient-info/ingridient-list/ingridient-list-item/ingridient-list-item.component';
import { IngridientListComponent } from './recipes-page/recipe-detail/ingridient-info/ingridient-list/ingridient-list.component';
import { NoRecipeDetailComponent } from './recipes-page/recipe-detail/no-recipe-detail/no-recipe-detail.component';
import { RecipeDetailComponent } from './recipes-page/recipe-detail/recipe-detail.component';
import { RecipeInfoEditComponent } from './recipes-page/recipe-detail/recipe-info/recipe-info-edit/recipe-info-edit.component';
import { RecipeInfoViewComponent } from './recipes-page/recipe-detail/recipe-info/recipe-info-view/recipe-info-view.component';
import { RecipeInfoComponent } from './recipes-page/recipe-detail/recipe-info/recipe-info.component';
import { RecipeItemComponent } from './recipes-page/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes-page/recipe-list/recipe-list.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RoutingModule } from '../routing/routing.module';
import { AddRemoveComponent } from './shared/components/add-remove/add-remove.component';
import { InCartComponent } from './shared/components/in-cart/in-cart.component';
import { IngridientInputComponent } from './shared/components/ingridient-input/ingridient-input.component';
import { IngridientComponent } from './shared/components/ingridient/ingridient.component';
import {
  RecipesSaverLocalStorageService,
  RecipesSaverServiceInjectKey,
} from './shared/services/recipes-saver.service';
import { ShoppingListComponent } from './shopping-page/shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping-page/shopping-page.component';
import { IngridientInfoComponent } from './recipes-page/recipe-detail/ingridient-info/ingridient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesPageComponent,
    ShoppingComponent,
    NoRecipeDetailComponent,
    IngridientListComponent,
    IngridientComponent,
    IngridientInputComponent,
    IngridientListItemComponent,
    RecipeInfoComponent,
    RecipeInfoEditComponent,
    RecipeInfoViewComponent,
    InCartComponent,
    AddRemoveComponent,
    IngridientInfoComponent,
  ],
  imports: [BrowserModule, FormsModule, RoutingModule],
  providers: [
    {
      provide: RecipesSaverServiceInjectKey,
      useClass: RecipesSaverLocalStorageService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
