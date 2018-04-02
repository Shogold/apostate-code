import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualityComponent } from './spirituality.component';

describe('SpiritualityComponent', () => {
  let component: SpiritualityComponent;
  let fixture: ComponentFixture<SpiritualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
