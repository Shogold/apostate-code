import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaboosComponent } from './taboos.component';

describe('TaboosComponent', () => {
  let component: TaboosComponent;
  let fixture: ComponentFixture<TaboosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaboosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaboosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
