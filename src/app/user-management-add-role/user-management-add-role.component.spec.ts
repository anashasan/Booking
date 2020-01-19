import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAddRoleComponent } from './user-management-add-role.component';

describe('UserManagementAddRoleComponent', () => {
  let component: UserManagementAddRoleComponent;
  let fixture: ComponentFixture<UserManagementAddRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementAddRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementAddRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
