import { Ingridient } from './ingridient.model';

export class Recipe {
  private static nextId = 0;

  id: number;
  name: string;
  detail: string;
  imagePath: string;
  ingridients: Ingridient[];

  constructor({ detail, name, imagePath, ingridients }: Pick<Recipe, 'detail' | 'name' | 'imagePath' | 'ingridients'>) {
    this.id = Recipe.nextId++;
    this.detail = detail;
    this.name = name;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
    this.ingridients.forEach((ingridient) => ingridient.setRecipeId(this.id));
  }

  ingridientsInCart(): Ingridient[] {
    return this.ingridients.filter((ingridient) => ingridient.isInCart);
  }
}
