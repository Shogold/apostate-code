import { Component, OnInit } from '@angular/core';
import { tenets } from '../types/tenets';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public tenets = tenets;
  constructor() { }

  ngOnInit() {
  }

}
