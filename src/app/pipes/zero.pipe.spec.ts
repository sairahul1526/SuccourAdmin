import { ZeroPipe } from './zero.pipe';

describe('ZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new ZeroPipe();
    expect(pipe).toBeTruthy();
  });
});
