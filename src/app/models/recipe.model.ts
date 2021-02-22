import { Type } from 'class-transformer';
import { Ingridient, IngridientOptions } from './ingridient.model';

export type EditableMembers = Pick<Recipe, 'name' | 'detail' | 'imagePath'>;

export class Recipe {
  private static nextId = 0;

  id!: number;
  name!: string;
  detail!: string;
  imagePath!: string;

  @Type(() => Ingridient)
  ingridients!: Ingridient[];

  static create({ detail, name, imagePath, ingridients }: Pick<Recipe, 'detail' | 'name' | 'imagePath' | 'ingridients'>): Recipe {
    const recipe = new Recipe();
    recipe.id = Recipe.nextId++;
    recipe.detail = detail;
    recipe.name = name;
    recipe.imagePath = imagePath;
    recipe.ingridients = ingridients;
    recipe.ingridients.forEach((ingridient) => ingridient.setRecipeId(recipe.id));
    return recipe;
  }

  ingridientsInCart(): Ingridient[] {
    return this.ingridients.filter((ingridient) => ingridient.inCart);
  }

  addNewIngridient(ingridientOptions: IngridientOptions): void {
    const ingridient = Ingridient.create(ingridientOptions);
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
