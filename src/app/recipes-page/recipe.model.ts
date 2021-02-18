import { Ingridient } from './ingridient.model';

export class Recipe {
  name: string;
  detail: string;
  imagePath: string;
  ingridients: Ingridient[];

  constructor({ detail, name, imagePath, ingridients }: Pick<Recipe, 'detail' | 'name' | 'imagePath' | 'ingridients'>) {
    this.detail = detail;
    this.name = name;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
  }
}
