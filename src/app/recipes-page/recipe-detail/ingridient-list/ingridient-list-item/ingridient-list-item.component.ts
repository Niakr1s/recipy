import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingridient, IngridientOptions } from 'src/app/models/ingridient.model';

@Component({
  selector: 'app-ingridient-list-item[ingridient]',
  templateUrl: './ingridient-list-item.component.html',
  styleUrls: ['./ingridient-list-item.component.css']
})
export class IngridientListItemComponent implements OnInit {
  @Input() ingridient!: Ingridient;
  @Output() removeIngridient: EventEmitter<void> = new EventEmitter();

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
