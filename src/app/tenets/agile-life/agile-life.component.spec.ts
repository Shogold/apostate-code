import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileLifeComponent } from './agile-life.component';

describe('AgileLifeComponent', () => {
  let component: AgileLifeComponent;
  let fixture: ComponentFixture<AgileLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
