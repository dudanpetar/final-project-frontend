import { Component, OnInit } from '@angular/core';
import {Course} from '../course-details/course.model';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css'],
  providers: [CoursesService]

})
export class CourseAddComponent implements OnInit {
  public name;
  public description;
  public imagePath;
  public price;
  public id;
  saveCourse() {
    this.courseService.saveCourse(new Course(this.id, this.name, this.description, this.imagePath, this.price));
  }

  constructor(public courseService: CoursesService) { }

  ngOnInit() {
  }

}
