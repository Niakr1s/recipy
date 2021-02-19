import { Component, Input, OnInit } from '@angular/core';
import { Ingridient, IngridientOptions } from 'src/app/models/ingridient.model';

@Component({
  selector: 'app-ingridient-container[ingridient]',
  templateUrl: './ingridient-container.component.html',
  styleUrls: ['./ingridient-container.component.css']
})
export class IngridientContainerComponent implements OnInit {
  @Input() ingridient!: Ingridient;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStartEdit(): void {
    this.isEditing = true;
  }

  onNewIngridientOptions(ingridientOptions: IngridientOptions): void {
    this.isEditing = false;
    this.ingridient.apply(ingridientOptions);
  }

  onStopEdit(): void {
    this.isEditing = false;
  }
}
