import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAddGroupComponent } from './user-management-add-group.component';

describe('UserManagementAddGroupComponent', () => {
  let component: UserManagementAddGroupComponent;
  let fixture: ComponentFixture<UserManagementAddGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementAddGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
