import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {CourseAddComponent} from './course-add/course-add.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'courses-edit/:id', component: CourseEditComponent},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'course-add', component: CourseAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
