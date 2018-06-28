//function mergeSort(array) pseudo----------

// if arr.length < 2 
      // return array
// split array in half
  // left = 0 - middle
  //right = middle+1 , endOfArray
//mergeSort(left)
//mergeSort(right)
// merge(left,right,array)

function mergeSort(array){
  if(array.length < 2){
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0 ,middle);
  let right = array.slice(middle, array.length)

  mergeSort(left);
  mergeSort(right);
  return merge(left,right,array);  
}

// funciotn merge(left,right,array) pseudo------------
  // i == 0 ------ keep track of left
  // j == 0 ------ keep track of right
  // k == 0 ------ keep track of new array
//while(i and j < arrayLength){
  //if*left[i] < right[j]
  //array(k++) = left(i++)
  //}else
  // array(k++) = right(j++)

  //add remaining values from either left or right
  // to the new array

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i=leftIndex; i<left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

  let msortArray = [ 89, 30, 25, 32, 72, 70];

  console.log(mergeSort(msortArray));
  

