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

// function swap(array, i, j) {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// }


// function quickSort(array, start=0, end=array.length) {
//   start = start;
//   end = end;
//   if (start >= end) {
//     return array;
//   }
//   const middle = partition(array, start, end);
//   array = quickSort(array, start, middle);
//   array = quickSort(array, middle + 1, end);
//   return array;
// }


// function partition(array, start, end) {
//   const pivot = array[end - 1];
//   let j = start;
//   for (let i=start; i<end - 1; i++) {
//     if (array[i] <= pivot) {
//       swap(array, i, j);
//       j++;
//     }
//   }
  
//   swap(array, end-1, j);
//   return j;
// }



// quicksort creates a pivot,
//           creates a wall
          
//           compares pivot to the each element, if element is less than pivot it puts it on the left of the wall,
//           until the end of the loop then 
//           it swaps the first element from the right side of the wall with the pivot

//           then does it all over again recursively until sorted into array sizes of 0 or 1

//



let swap = (array, i, j) => {
  // create temporary varairable of first element before overwriting
  // swap first element[i] with second[j]
  // swap second element[j] with temporary element value 
};

let quickSort = (array , start, end) => {
  // create a variable for the start position [which in this case is last element] to use
  // create a variable for the end position [which in this case is first element] to use
  // If the end element(start) is greater than the beginning element(end) return array
  // create a "middle" variable by using the partition function which takes in the same args as quicksort() 
  // reassingn array value by recursively calling quicksort with the array,start,middle as args
  // reassign array value by recursively call quicksort with the array, middle+1,end as args
  // return array;
};

let partition = (array, start, end) => {
  // create pivot variable that is assigned a value of  array[endIndex.length-1] ;
  // create a variable to use the start argument
  // FOR loop to go through array 
  // which uses start as the base, start < end-1, start goes up by 1
  // if the array value at the start(end of array) position is less than the end(beginning of array) position 
  // call swap function with those values
  // after for loop swap pivot with wall element
  // return wall element

};



let newArr = quickSort(qSortArray);
console.log(newArr);