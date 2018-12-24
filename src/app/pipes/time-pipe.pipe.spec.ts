import { TimePipe } from './time-pipe.pipe';

describe('TimePipe', () => {
  const pipe = new TimePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 123 to 2h 3min', () => {
    expect(pipe.transform(123)).toBe('2h 3min');
  });

  it('transform 10 to 10min', () => {
    expect(pipe.transform(10)).toBe('10min');
  });

  it('transform 0 to nothing', () => {
    expect(pipe.transform(0)).toBe('');
  });
});
