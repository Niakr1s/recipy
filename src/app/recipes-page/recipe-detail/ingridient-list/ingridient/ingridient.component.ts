import { Component, Input, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient.model';

@Component({
  selector: 'app-ingridient[ingridient]',
  templateUrl: './ingridient.component.html',
  styleUrls: ['./ingridient.component.css']
})
export class IngridientComponent implements OnInit {
  @Input() ingridient!: Ingridient;

  constructor() { }

  ngOnInit(): void {
  }
}
