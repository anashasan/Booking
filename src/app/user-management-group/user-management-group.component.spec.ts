import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementGroupComponent } from './user-management-group.component';

describe('UserManagementGroupComponent', () => {
  let component: UserManagementGroupComponent;
  let fixture: ComponentFixture<UserManagementGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
