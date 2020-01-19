import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UserManagementGroupComponent } from './user-management-group/user-management-group.component';
import { UserManagementAddUserComponent } from './user-management-add-user/user-management-add-user.component';
import { UserManagementAddGroupComponent } from './user-management-add-group/user-management-add-group.component';


const routes: Routes = [
  {path:"",component:LayoutComponent},
  {path:"bookingform",component:BookingFormComponent},
  {path:"bookinglist",component:BookingListComponent},
  {path:"usergroup",component:UserManagementGroupComponent},
  {path:"addgroup",component:UserManagementAddGroupComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
