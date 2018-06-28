'use strict';

let qSortArray = [ 89, 30, 25, 32, 72];
// , 70, 51, 42, 25, 24 ,53 ,55, 78, 50, 13, 40, 48, 32, 26, 2, 14,
//   33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38,
//   67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 
//   76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
//   49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5 ];

// console.log(qSortArray.sort(function(a, b) {
//   return b - a;
// }));

// find a pivot to compare other values to
// set up a start value and comparisonValue 
// loop through array to compare each comparisonValue to pivot
// start value stays in place until comparisonValue is less than pivot
// swap start value and comparisonValue and increment both start and comparisonValue
// find another comparisonValue less than pivot and swap new start value with new comparisonValue
// once loop is over all values have been moved to the left that are less than pivot so swap pivot with the start value
// so now you you split array into 2 and call same process on each of those arrays recursively. 


let swap = (array, i, j) => {
  // create temporary variable of first element before overwriting
  let temp = array[i];
  // swap first element[i] with second[j]
  array[i] = array[j];
      // swap second element[j] with temporary element value 
  array[j] = temp;    
};

let quickSort = (array , start=0, end=array.length) => {

};

let partition = (array, start, end) => { // this function splits the array into 2 where the left half is the > pivot values
  // create pivot variable that is assigned a value of  array[array.length-1] ;
  let pivot = array[end -1];
  // create a variable to use as the start argument
  let j = start;
  // FOR loop to go through array 
  for (let i = start; i < end - 1; i++) {
      // which uses start as the base, start < end-1, start goes up by 1
  // if the array value at the start(end of array) position is less than the end(pivot) position 
  // call swap function with those values
    if(array[0] <= pivot){
      swap(array,i,j)
    }
  }
  swap(array, end-1, j);
  return j;
  // after for loop swap  with wall element
  // return wall element
};



let newArr = quickSort(qSortArray);
console.log(newArr);