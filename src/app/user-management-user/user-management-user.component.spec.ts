import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementUserComponent } from './user-management-user.component';

describe('UserManagementUserComponent', () => {
  let component: UserManagementUserComponent;
  let fixture: ComponentFixture<UserManagementUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
