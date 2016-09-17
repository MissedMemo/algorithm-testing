import {expect} from 'chai';
import * as _ from '../algorithms';

describe( 'Sorting Algorithms...', () => {

  let tuple,     sortedTuple,
      numeric,   sortedNumeric,
      preSorted, sortedPreSorted,
      negValues, sortedNegValues,
      reversed,  sortedReversed,
      decimals,  sortedDecimals;

  beforeEach( () => {
    tuple   = [3,2],                  sortedTuple = [2,3],
    numeric = [10,5,3,8,2,6,4,7,9,1], sortedNumeric = [1,2,3,4,5,6,7,8,9,10];
  });

  const sorts = [
    { description: 'bubbleSort: O(n^2)', method: _.bubbleSort }
  ];
  
  sorts.forEach( sort => {

    describe( sort.description, () => {

      it( 'should switch values of two-member array', () => {
        let results = sort.method( tuple );
        expect( results ).to.deep.equal( sortedTuple );
      });

      it( 'should sort a simple numeric array', () => {
        let results = sort.method( numeric );
        expect( results ).to.deep.equal( sortedNumeric );
      });

    });

  });

});
