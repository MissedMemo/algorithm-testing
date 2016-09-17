export const bubbleSort = (array) => {
  
  do {

    var swapped = false; // cannot use `let` here!

    for( let i = 0, temp; i < array.length; i++ ) {
      if( array[ i + 1 ] < array[i] ) {
        temp = array[i];
        array[i] = array[ i + 1 ];
        array[ i + 1 ] = temp;
        swapped = true;
      }
    }

  } while( swapped );

  return array;
};


export const insertionSort = (array) => {

  for( let iUnsorted = 1; iUnsorted < array.length; iUnsorted++ ) {
    for( let iSorted = 0; iSorted < iUnsorted; iSorted++ ) {
      if( array[iUnsorted] < array[iSorted] ) {
        const current = array.splice( iUnsorted, 1 )[0];
        array.splice( iSorted, 0, current );
      }
    }
  }
  return array;
};


const merge = ( left, right ) => {

  let merged = [];

  while( left.length && right.length ) {
    merged.push( left[0] < right[0] ? left.shift() : right.shift() );
  }

  return merged.concat( left, right ); // one will be EMPTY!
};

export const mergeSort = ( array ) => {

  if( array.length < 2 )
    return array;

  let iMid = Math.floor( array.length / 2 );
  let left = array.slice(0,iMid), right = array.slice(iMid);

  return merge( mergeSort(left), mergeSort(right) );
};


export const quickSort = ( array ) => {

  if( array.length < 2 )
    return array;

  let pivot = array.pop(); // not the most efficient, but easiest!
  let lower = [], higher = [];
  
  for( let i = 0; i < array.length; i++ ) {
    if( array[i] < pivot )
      lower.push( array[i] );
    else
      higher.push( array[i] );
  }

  return [ ...quickSort(lower), pivot, ...quickSort(higher) ];
};