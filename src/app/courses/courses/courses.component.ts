import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //couseService: CoursesService;

  constructor(private couseService: CoursesService) {
    //this.courses = = [];
    //this.couseService = new CoursesService();
    this.courses = this.couseService.list();
  }

  ngOnInit(): void {

  }

}
