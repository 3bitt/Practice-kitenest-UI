import { StudentHomeComponent } from './student-home/student-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [

  {
    path: '', component: StudentHomeComponent,
    children: [
      { path: 'add-student', component: StudentAddComponent },
      { path: 'search', component: StudentListComponent },
      { path: ':id', component: StudentDetailComponent },
    ]
  },
  // { path: 'add-student', component: StudentAddComponent },
  // { path: 'search', component: StudentListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
