import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeProfileComponent } from './get-employee-profile.component';

describe('GetEmployeeProfileComponent', () => {
  let component: GetEmployeeProfileComponent;
  let fixture: ComponentFixture<GetEmployeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
