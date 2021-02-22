import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(readonly stateService: StateService) { }

  ngOnInit(): void {
  }
}
