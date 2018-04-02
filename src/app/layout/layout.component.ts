import { Component, OnInit } from '@angular/core';
import { tenents } from '../types/tenents';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public tenents = tenents;
  constructor() { }

  ngOnInit() {
  }

}
