import {expect} from 'chai';
import * as _ from '../algorithms';

describe( 'Sorting algorithms...', () => {
  
  describe( 'bubbleSort:', () => {
  
    it( 'should sort a basic numeric array', () => {
      expect( _.bubbleSort([2,3,1]) ).to.deep.equal([1,2,3]);
    });

  });

});
