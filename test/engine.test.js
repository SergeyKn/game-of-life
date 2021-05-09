const { expect } = require('chai');
import next from '../src/engine';

const x = 1;
const o = 0;

describe('Game of Life Engine', () => {
  describe('should die if fewer then 2 live neighbours - underpopulation', () => {
    it('single cell dies', () => {
      expect(next([
        [o, o, o],
        [o, x, o],
        [o, o, o],
      ])[1][1]).to.equal(o);
    });

    it('one neighbour - cell dies', () => {
      expect(next([
        [o, o, x],
        [o, x, o],
        [o, o, o],
      ])[1][1]).to.equal(o);
    });
  });

  describe('should live with two or three live neighbours', () => {
    it('two neighbours - cell lives', () => {
      expect(next([
        [o, x, x],
        [o, x, o],
        [o, o, o],
      ])[1][1]).to.equal(x);
    });

    it('three neighbours - cell lives', () => {
      expect(next([
        [o, x, x],
        [o, x, o],
        [x, o, o],
      ])[1][1]).to.equal(x);
    });
  });

  describe('should die with more than three live neighbours - overpopulation', () => {
    it('four neighbours - cell lives', () => {
      expect(next([
        [o, x, x],
        [o, x, o],
        [x, x, o],
      ])[1][1]).to.equal(o);
    });
  });

  describe('should become alive with exactly three live neighbours - reproduction', () => {
    it('three neighbours - cell becomes alive', () => {
      expect(next([
        [o, x, x],
        [o, o, o],
        [x, o, o],
      ])[1][1]).to.equal(x);
    });

    it('two neighbours - cell stays dead', () => {
      expect(next([
        [o, x, x],
        [o, o, o],
        [o, o, o],
      ])[1][1]).to.equal(o);
    });

    it('four neighbours - cell stays dead', () => {
      expect(next([
        [o, x, x],
        [o, o, o],
        [x, x, o],
      ])[1][1]).to.equal(o);
    });
  });
});
