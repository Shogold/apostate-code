import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoralityComponent } from './morality.component';

describe('MoralityComponent', () => {
  let component: MoralityComponent;
  let fixture: ComponentFixture<MoralityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoralityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoralityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
