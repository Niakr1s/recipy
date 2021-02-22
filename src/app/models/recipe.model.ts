import { Ingridient, IngridientOptions } from './ingridient.model';

export type EditableMembers = Pick<Recipe, 'name' | 'detail' | 'imagePath'>;

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
    return this.ingridients.filter((ingridient) => ingridient.inCart);
  }

  addNewIngridient(ingridientOptions: IngridientOptions): void {
    const ingridient = new Ingridient(ingridientOptions);
    ingridient.setRecipeId(this.id);
    this.ingridients.push(ingridient);
  }

  removeIngridient(ingridientToDelete: Ingridient): void {
    this.ingridients = this.ingridients.filter((ingridient) => ingridient !== ingridientToDelete);
  }

  apply({ name, imagePath, detail }: EditableMembers): void {
    this.name = name;
    this.imagePath = imagePath;
    this.detail = detail;
  }
}
