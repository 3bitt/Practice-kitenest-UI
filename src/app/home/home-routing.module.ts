import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [

          { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'students', loadChildren: () => import('../student/student.module').then(m => m.StudentModule) },
          { path: 'instructors', loadChildren: () => import('../instructor/instructor.module').then(m => m.InstructorModule) },
          { path: 'lessons', loadChildren: () => import('../lesson/lesson.module').then(m => m.LessonModule) },
          { path: 'school', loadChildren: () => import('../school/school.module').then(m => m.SchoolModule)},
          { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
