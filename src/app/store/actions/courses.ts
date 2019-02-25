import {Action} from '@ngrx/store';

export enum CoursesActionTypes {
  ApplyCoursesInfo = '[Courses] Apply Courses Info',
  GetCoursesInfo = '[Courses] Get Courses Info',
  EditCourses = '[Courses] Edit Courses',
  DeleteCourses = '[Courses] Login Failure',
}

export class ApplyCoursesInfo implements Action {
  readonly type = CoursesActionTypes.ApplyCoursesInfo;

  constructor(public payload: any) {}
}

export class GetCoursesInfo implements Action {
  readonly type = CoursesActionTypes.GetCoursesInfo;

  constructor(public payload: any) {}
}

export class EditCourses implements Action {
  readonly type = CoursesActionTypes.EditCourses;
}

export class DeleteCourses implements Action {
  readonly type = CoursesActionTypes.DeleteCourses;

  constructor(public payload: any) {}
}

export type CoursesActions = ApplyCoursesInfo | GetCoursesInfo | EditCourses | DeleteCourses;
