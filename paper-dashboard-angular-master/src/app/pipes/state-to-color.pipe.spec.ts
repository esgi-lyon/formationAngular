import { StateToColorPipe } from './state-to-color.pipe';

describe('AppreciationToColorPipe', () => {
  it('create an instance', () => {
    const pipe = new StateToColorPipe();
    expect(pipe).toBeTruthy();
  });
});
