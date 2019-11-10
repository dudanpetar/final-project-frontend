import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../course-details/course.model';
import {CoursesService} from '../courses.service';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {log} from 'util';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(public courseService: CoursesService) {
  }
  deleteCourse(course: Course ) {
    log('deleteCourse');
    this.courseService.deleteCourse(course);
  }
  ngOnInit() {
    this.courseService.getCoursesFromBackEnd().subscribe( courses => {
      // @ts-ignore
      this.courses = courses; });
  }

}
