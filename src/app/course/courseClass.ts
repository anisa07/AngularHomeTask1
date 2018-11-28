import {CourseInterface} from './courseInterface';

export class CourseClass implements CourseInterface {
  courseData: CourseInterface['courseData'] = {
    id: '',
    title: '',
    creationDate: new Date(),
    duration: '',
    description: '',
  };

  constructor(courseData: {id: string, title: string, creationDate: Date, duration: number, description: string}) {
    if (courseData) {
      this.courseData.title = courseData.title;
      this.courseData.creationDate = courseData.creationDate;
      this.courseData.duration = `${Math.floor(courseData.duration / 60)}h ${courseData.duration % 60}min`;
      this.courseData.description = courseData.description;
      this.courseData.id = courseData.id;
    }
  }
}