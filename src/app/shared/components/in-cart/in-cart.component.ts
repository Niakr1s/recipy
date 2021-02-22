import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-cart[inCart]',
  templateUrl: './in-cart.component.html',
  styleUrls: ['./in-cart.component.css']
})
export class InCartComponent implements OnInit {
  @Input() inCart!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
