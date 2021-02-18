import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {
  readonly recipies: Recipe[];

  constructor() { }
}
