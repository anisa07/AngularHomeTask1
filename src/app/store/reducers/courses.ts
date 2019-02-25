import * as coursesActions from '../actions/courses';
import {Course} from '../../models/course';

export interface State {
  courses: Array<Course>;
}

export const initialState: State = {
  courses: [],
};

export function reducer(state = initialState, action: coursesActions.CoursesActions): State {
  switch (action.type) {
    case coursesActions.CoursesActionTypes.ApplyCoursesInfo:
      return handleApplyCourses(state, action);

    case coursesActions.CoursesActionTypes.GetCoursesInfo:
      return handleGetCourses(state, action);

    case coursesActions.CoursesActionTypes.EditCourses:
      return handleEditCourses(state, action);

    case coursesActions.CoursesActionTypes.DeleteCourses:
      return handleDeleteCourses(state, action);

    default:
      return state;
  }
}

function handleApplyCourses(state: State, action: coursesActions.ApplyCoursesInfo): State {
  return {
    courses: [...action.payload],
  };
}

function handleGetCourses(state: State, action: coursesActions.GetCoursesInfo): State {
  return {
    ...state,
  };
}

function handleEditCourses(state: State, action: coursesActions.EditCourses): State {
  return {
    ...state,
  };
}

function handleDeleteCourses(state: State, action: coursesActions.DeleteCourses): State {
  return {
    ...state,
  };
}
