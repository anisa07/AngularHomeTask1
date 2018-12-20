import {ListPipe} from './list-pipe.pipe';

describe('ListPipe', () => {
  const pipe = new ListPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform [1, 11, 3] and value 1 to [1, 11]', () => {
    expect(pipe.transform([
      {courseData: {title: 'aaa'}},
      {courseData: {title: 'a'}},
      {courseData: {title: 'aab'}},
      ], 'aa')).toEqual([{courseData: {title: 'aaa'}}, {courseData: {title: 'aab'}}]);
  });
});
