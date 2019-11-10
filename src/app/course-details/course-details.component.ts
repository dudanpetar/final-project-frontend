import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CoursesService]
})
export class CourseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
