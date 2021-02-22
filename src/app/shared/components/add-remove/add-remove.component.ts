import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-remove[counter]',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit {
  @Input() counter!: number;

  @Input() min = -Infinity;
  @Input() max = +Infinity;

  @Output() plus: EventEmitter<number> = new EventEmitter();
  @Output() minus: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPlus(): void {
    const nextCounter = this.counter + 1;
    if (nextCounter > this.max) { return; }
    this.plus.next(nextCounter);
  }

  onMinus(): void {
    const nextCounter = this.counter - 1;
    if (nextCounter < this.min) { return; }
    this.minus.next(nextCounter);
  }
}
