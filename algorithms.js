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

