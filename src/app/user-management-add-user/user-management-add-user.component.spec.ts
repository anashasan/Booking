import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAddUserComponent } from './user-management-add-user.component';

describe('UserManagementAddUserComponent', () => {
  let component: UserManagementAddUserComponent;
  let fixture: ComponentFixture<UserManagementAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
