export class Recipe {
  name: string;
  detail: string;
  imagePath: string;

  constructor({ detail, name, imagePath }: Pick<Recipe, 'detail' | 'name' | 'imagePath'>) {
    this.detail = detail;
    this.name = name;
    this.imagePath = imagePath;
  }
}
