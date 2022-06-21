import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarListComponent } from './user-car-list.component';

describe('UserCarListComponent', () => {
  let component: UserCarListComponent;
  let fixture: ComponentFixture<UserCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
