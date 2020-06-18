import { faPlus, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {


  plusIcon = faUserPlus;
  searchIcon = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
