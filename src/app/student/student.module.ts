import { MatDividerModule } from '@angular/material/divider';
import { StudentService } from '../service/student/student.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailEditComponent } from './student-detail/student-detail-edit/student-detail-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentHomeComponent } from './student-home/student-home.component';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentAddComponent,
    StudentDetailEditComponent,
    StudentHomeComponent,


  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    MatButtonModule,
    FontAwesomeModule

  ],
  providers: [StudentService]
})
export class StudentModule { }
