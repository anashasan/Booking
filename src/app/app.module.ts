import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LayoutComponent } from './layout/layout.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {ReactiveFormsModule} from '@angular/forms';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { CalendarBookingComponent } from './calendar-booking/calendar-booking.component';
import { UserManagementGroupComponent } from './user-management-group/user-management-group.component';
import { UserManagementRoleComponent } from './user-management-role/user-management-role.component';
import { UserManagementUserComponent } from './user-management-user/user-management-user.component';
import { UserManagementAddUserComponent } from './user-management-add-user/user-management-add-user.component';
import { UserManagementAddRoleComponent } from './user-management-add-role/user-management-add-role.component';
import { UserManagementAddGroupComponent } from './user-management-add-group/user-management-add-group.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BookingListComponent,
    BookingFormComponent,
    CalendarBookingComponent,
    UserManagementGroupComponent,
    UserManagementRoleComponent,
    UserManagementUserComponent,
    UserManagementAddUserComponent,
    UserManagementAddRoleComponent,
    UserManagementAddGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    ReactiveFormsModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
