export const Measurements = ['g', 'Kg', 'ml', 'L', 'pc'] as const;

export type Measurement = typeof Measurements[number];

export type IngridientOptions = Pick<Ingridient, 'name' | 'amount' | 'measurement'>;

export class Ingridient {
  name: string;
  amount: number;
  measurement: Measurement;

  isInCart = false;
  private recipeId!: number;

  constructor({ name, amount, measurement }: IngridientOptions) {
    this.name = name;
    this.amount = amount;
    this.measurement = measurement;
  }

  apply({ name, amount, measurement }: IngridientOptions): void {
    this.name = name;
    this.amount = amount;
    this.measurement = measurement;
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
