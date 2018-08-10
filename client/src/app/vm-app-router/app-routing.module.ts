import { LeaveStatusComponent } from './../leave-status/leave-status.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './../dashboard/dashboard.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { ApplyLeaveComponent } from "../apply-leave/apply-leave.component";
import { ProfileComponent } from '../profile/profile.component';

const App_Routes: Routes = [
    { path: 'applyLeave', component: ApplyLeaveComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'status', component: LeaveStatusComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports : [RouterModule.forRoot(App_Routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}