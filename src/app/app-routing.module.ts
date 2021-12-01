import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPayrollComponent } from './admin/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './admin/admin-vacation/admin-vacation.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'courses', component: CoursesComponent , canActivate: [AuthGuard],},
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'payroll', component: AdminPayrollComponent },
      { path: 'vacation', component: AdminVacationComponent },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
