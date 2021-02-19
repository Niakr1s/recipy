import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngridientOptions, Measurements } from 'src/app/models/ingridient.model';


const newEmptyIngridientOptions = (): IngridientOptions => {
  return { amount: 1, measurement: 'g', name: '' };
};

@Component({
  selector: 'app-ingridient-input',
  templateUrl: './ingridient-input.component.html',
  styleUrls: ['./ingridient-input.component.css']
})
export class IngridientInputComponent implements OnInit {
  @Output() ingridientOptionsSubmitted$: EventEmitter<IngridientOptions> = new EventEmitter();
  readonly availableMeasurements = Measurements;
  currentIngridientOptions: IngridientOptions = newEmptyIngridientOptions();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngridient(): void {
    this.ingridientOptionsSubmitted$.next(this.currentIngridientOptions);
    this.currentIngridientOptions = newEmptyIngridientOptions();
  }

  fixCurrentIngridientOptionsAmount(): void {
    if (this.currentIngridientOptions.amount < 1) {
      this.currentIngridientOptions.amount = 1;
    }
  }
}
