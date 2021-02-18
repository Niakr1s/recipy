
export const WeightMeasurements = ['g', 'Kg'] as const;
export const VolumeMeasurements = ['ml', 'L'] as const;
export const CountMeasurements = ['pc'] as const;

export type Measurement = typeof WeightMeasurements[number] | typeof VolumeMeasurements[number] | typeof CountMeasurements[number];

export class Ingridient {
  name: string;
  amount: number;
  measurement: Measurement;

  isInShoppingList: boolean;
  private recipeId!: number;

  constructor({ name, amount, measurement, isInShoppingList }:
    Pick<Ingridient, 'name' | 'amount' | 'measurement'> & Partial<Pick<Ingridient, 'isInShoppingList'>>
  ) {
    this.name = name;
    this.amount = amount;
    this.measurement = measurement;
    this.isInShoppingList = !!isInShoppingList;
  }

  setRecipeId(recipeId: number): void {
    this.recipeId = recipeId;
  }
}
