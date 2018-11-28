export interface CourseInterface {
  courseData: {
    id: string;
    title: string;
    creationDate: Date;
    duration: string | number;
    description: string;
  };
}
