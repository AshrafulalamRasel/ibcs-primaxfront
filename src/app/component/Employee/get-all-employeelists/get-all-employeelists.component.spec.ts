import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEmployeelistsComponent } from './get-all-employeelists.component';

describe('GetAllEmployeelistsComponent', () => {
  let component: GetAllEmployeelistsComponent;
  let fixture: ComponentFixture<GetAllEmployeelistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllEmployeelistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllEmployeelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
