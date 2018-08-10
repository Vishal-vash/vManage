import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Importing Angular Material Dependencies Here */
import { AppNgMaterialModule } from './vm-app-ng-material/app-ng-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/** Importing Angular Calendar Dependencies Here */
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';


/** App Router Module */
import { AppRoutingModule } from './vm-app-router/app-routing.module';

/** App Components Here */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { ProfileComponent } from './profile/profile.component';

/** App Services Here */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NotFoundComponent,
    SidebarComponent,
    ApplyLeaveComponent,
    LeaveStatusComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppNgMaterialModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
