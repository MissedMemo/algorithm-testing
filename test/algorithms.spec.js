import {expect} from 'chai';
import * as _ from '../algorithms';

describe( 'Sorting Algorithms...', () => {

  let numeric, sortedNumeric;
  beforeEach( () => {
    numeric = [2,5,3,4,6,1], sortedNumeric = [1,2,3,4,5,6];
  });

  const sorts = [
    { description: 'bubbleSort: O(n^2)', method: _.bubbleSort }
  ];
  
  sorts.forEach( algorithm => {

    describe( algorithm.description, () => {
  
      it( 'should sort a basic numeric array', () => {
        expect( algorithm.method(numeric) ).to.deep.equal(sortedNumeric);
      });

    });

  });

});
