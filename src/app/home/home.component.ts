import { Component, OnInit } from '@angular/core';
import { tenets } from '../types/tenets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tenets = tenets;
  constructor() { }

  ngOnInit() {
  }

}
