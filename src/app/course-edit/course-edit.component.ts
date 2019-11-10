import {Component, OnInit, Input} from '@angular/core';
import {Course} from '../course-details/course.model';
import {CoursesService} from '../courses.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
  providers: [CoursesService]
})
export class CourseEditComponent implements OnInit {

  @Input()
  control: FormControl;
  routedId: number;
  course: Course = new Course(-1, 'tbd', 'tbd', 'tbd', 0);
  constructor(
    public courseService: CoursesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.routedId = +params.id;
      }
    );

    this.courseService.getCourseById(this.routedId).subscribe( course => {
        // @ts-ignore
        this.course = course; });
  }
  saveCourse() {
    this.courseService.saveCourse(this.course);
  }
}
