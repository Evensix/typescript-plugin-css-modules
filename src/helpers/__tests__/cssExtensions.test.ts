import { createIsCSS, createIsRelativeCSS } from '../cssExtensions';

describe('utils / cssExtensions', () => {
  describe('isCSS', () => {
    const isCSS = createIsCSS();

    it('should match CSS module extensions', () => {
      expect(isCSS('./myfile.module.css')).toBe(true);
    });

    it('should not match non-CSS module extensions', () => {
      expect(isCSS('./myfile.module.c')).toBe(false);
      expect(isCSS('./myfile.css')).toBe(false);
    });
  });

  describe('isRelativeCSS', () => {
    const isCSS = createIsCSS();
    const isRelativeCSS = createIsRelativeCSS(isCSS);

    it('should match relative CSS modules', () => {
      expect(isRelativeCSS('./myfile.module.css')).toBe(true);
      expect(isRelativeCSS('../folder/myfile.module.css')).toBe(true);
    });

    it('should not match non-relative CSS modules', () => {
      expect(isRelativeCSS('myfile.module.css')).toBe(false);
    });
  });
});
