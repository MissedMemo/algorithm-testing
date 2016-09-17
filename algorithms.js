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
