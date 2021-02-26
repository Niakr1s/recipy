import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngridientOptions } from 'src/app/models/ingridient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { updateQueryParam } from 'src/shared/util/router';
import { recipeDetailQueryParams } from '../../queryParams';

@Component({
  selector: 'app-ingridient-info[recipe]',
  templateUrl: './ingridient-info.component.html',
  styleUrls: ['./ingridient-info.component.css'],
})
export class IngridientInfoComponent implements OnInit {
  @Input() recipe!: Recipe;
  isAddingNewIngridient = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.isAddingNewIngridient =
        queryParams[recipeDetailQueryParams.ingridientEdit] === 'true';
    });
  }

  onNewIngridient(): void {
    updateQueryParam(this.router, recipeDetailQueryParams.ingridientEdit, true);
  }

  onAddIngridient(ingridientOptions: IngridientOptions): void {
    this.recipe.addNewIngridient(ingridientOptions);
    updateQueryParam(
      this.router,
      recipeDetailQueryParams.ingridientEdit,
      false
    );
  }
}
