export const WeightMeasurements = ['g', 'Kg'] as const;
export const VolumeMeasurements = ['ml', 'L'] as const;
export const CountMeasurements = ['pc'] as const;

export type Measurement = typeof WeightMeasurements[number] | typeof VolumeMeasurements[number] | typeof CountMeasurements[number];

export class Ingridient {
  name: string;
  amount: number;
  measurement: Measurement;

  constructor({ name, amount, measurement }: Pick<Ingridient, 'name' | 'amount' | 'measurement'>) {
    this.name = name;
    this.amount = amount;
    this.measurement = measurement;
  }
}
