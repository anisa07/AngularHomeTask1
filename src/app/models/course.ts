export interface Course {
  id: string;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Array<any>;
}


export class Course implements Course {
  id = '';
  name = '';
  date = new Date();
  length = 0;
  description = '';
  isTopRated = false;
  authors = [];

  constructor(courseData: {
    id: string,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    isTopRated: boolean,
    authors: Array<any>
  }) {
    if (courseData) {
      this.name = courseData.title;
      this.date = courseData.creationDate;
      this.length = courseData.duration;
      this.description = courseData.description;
      this.id = courseData.id;
      this.isTopRated = courseData.isTopRated;
      this.authors = courseData.authors;
    }
  }
}
