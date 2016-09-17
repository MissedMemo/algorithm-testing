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
    tuple     = [3,2],                  sortedTuple     = [2,3],
    numeric   = [10,5,3,8,2,6,4,7,9,1], sortedNumeric   = [1,2,3,4,5,6,7,8,9,10],
    preSorted = [1,2,3,4,5],            sortedPreSorted = [1,2,3,4,5],
    negValues = [1,2,-3,4,-5],          sortedNegValues = [-5,-3,1,2,4],
    reversed  = [5,4,3,2,1],            sortedReversed  = [1,2,3,4,5],
    decimals  = [ 0.5, 4.2, 3.9, 4.1, 3, 2, 1, 20, 0, -2.5, -3.1 ],
    sortedDecimals = [ -3.1, -2.5, 0, 0.5, 1, 2, 3, 3.9, 4.1, 4.2, 20 ];
  });

  const sorts = [
    { description: 'bubbleSort: O(n^2)',        method: _.bubbleSort },
    { description: 'insertionSort: O(n log n)', method: _.insertionSort },
    { description: 'mergeSort: O(n log n)',     method: _.mergeSort }/*,
    { description: 'quickSort: O(n log n)',     method: _.quickSort }*/
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

      it( 'should handle presorted arrays', () => {
        let results = sort.method( preSorted );
        expect( results ).to.deep.equal( sortedPreSorted );
      });
      
      it( 'should sort arrays containing negative numbers', () => {
        let results = sort.method( negValues );
        expect( results ).to.deep.equal( sortedNegValues );
      });

      it( 'should handle reverse-sorted arrays', () => {
        let results = sort.method( reversed );
        expect( results ).to.deep.equal( sortedReversed );
      });

      it( 'should sort arrays containing decimals', () => {
        let results = sort.method( decimals );
        expect( results ).to.deep.equal( sortedDecimals );
      });

    });

  });

});
