import { Injectable } from '@angular/core';
import {Course} from './course-details/course.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    new Course(1, 'Petar', 'java', 'https://irnpost.com/wp-content/uploads/2019/07/java-card.png', 20),
    new Course(2, 'Filip', 'C', 'https://irnpost.com/wp-content/uploads/2019/07/java-card.png', 30)
  ];
  private tmp: Course[];


  getCourseById(id) {
  return this.http.get('http://localhost:8080/app/course/' + id);
  }

  getCoursesFromBackEnd() {
    return this.http.get('http://localhost:8080/app/course/all');
  }
  constructor(private http: HttpClient) { }

  deleteCourse(course: Course) {
    this.http.post<Course>('http://localhost:8080/app/course/delete', course).subscribe(
      value => {
        console.log(value);
      }
    );
  }
  saveCourse(course: Course) {
    console.log('Saving course ', course);
    // const headers = new Headers({'Content-Type': 'application/json'});
    this.http.post<Course>('http://localhost:8080/app/course/insert', course)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }
}
