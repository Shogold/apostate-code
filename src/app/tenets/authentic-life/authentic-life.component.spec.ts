import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticLifeComponent } from './authentic-life.component';

describe('AuthenticLifeComponent', () => {
  let component: AuthenticLifeComponent;
  let fixture: ComponentFixture<AuthenticLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
