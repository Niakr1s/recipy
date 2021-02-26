import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient.model';

@Component({
  selector: 'app-ingridient-list[ingridients]',
  templateUrl: './ingridient-list.component.html',
  styleUrls: ['./ingridient-list.component.css']
})
export class IngridientListComponent implements OnInit {
  @Input() ingridients!: Ingridient[];
  @Output() removeIngridient: EventEmitter<Ingridient> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
