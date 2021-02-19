export const Measurements = ['g', 'Kg', 'ml', 'L', 'pc'] as const;

export type Measurement = typeof Measurements[number];

export type IngridientOptions = Pick<Ingridient, 'name' | 'amount' | 'measurement'> & Partial<Pick<Ingridient, 'isInCart'>>;

export class Ingridient {
  name: string;
  amount: number;
  measurement: Measurement;

  isInCart: boolean;
  private recipeId!: number;

  constructor({ name, amount, measurement, isInCart }: IngridientOptions) {
    this.name = name;
    this.amount = amount;
    this.measurement = measurement;
    this.isInCart = !!isInCart;
  }

  setRecipeId(recipeId: number): void {
    this.recipeId = recipeId;
  }

  addToCart(): void {
    this.isInCart = true;
  }

  removeFromCart(): void {
    this.isInCart = false;
  }
}
