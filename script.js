
// Array and matrix programming exercises

// 1. Write a js program to read and print elements of array.

var array = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Output:
// 1
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10

// 2. Write a js program to print all negative elements in an array.

var myArray = [3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 0) {
        console.log(myArray[i]);
    }
}

// Output:
// -1
// -1
// -9
// -5


// 3. Write a js program to find sum of all array elements. 

const MyArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < MyArray.length; i++) {
    sum += MyArray[i];
}

console.log(sum);  

// Output: 15


// 4. Write a js program to find maximum and minimum element in an array.


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var max = arr[0];
var min = arr[0];

for (var i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }

    if (arr[i] < min) {
        min = arr[i];
    }
}

// Print the maximum and minimum elements
console.log("Maximum element in the array: " + max);
console.log("Minimum element in the array: " + min);

// Output:
// Maximum element in the array: 10
// Minimum element in the array: 1


// 5. Write a js program to find second largest element in an array.


 var Arr = [10, 5, 20, 8, 12, 15];

if (Arr.length < 2) {
  console.log("Array must have at least two elements");
} else {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > first) {
      second = first;
      first = Arr[i];
    } else if (Arr[i] > second && Arr[i] !== first) {
      second = Arr[i];
    }
  }

  if (second === -Infinity) {
    console.log("There is no second largest element");
  } else {
    console.log("The second largest element is " + second);
  }
}

// Output:
// The second largest elemen is 15


// 6. Write a js program to count total number of even and odd elements in an array.

let arR = [10, 5, 20, 8, 12, 15];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arR.length; i++) {
  if (arr[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Total even elements: " + evenCount);
console.log("Total odd elements: " + oddCount);

// Output:
// Total even elements: 3
// Total odd elements: 3

// 7. Write a js program to count total number of negative elements in an array.

let aRR = [10, -5, 20, -8, 12, -15, 0, -3];
let negativeCount = 0;

for (let i = 0; i < aRR.length; i++) {
  if (aRR[i] < 0) {
    negativeCount++;
  }
}

console.log("Total negative elements: " + negativeCount);

// Output:
// Total negative elements: 4



// 8. Write a js program to copy all elements from an array to another array.

let originalArray = [10, 5, 20, 8, 12, 15];
let newArray = [];

for (let i = 0; i < originalArray.length; i++) {
  newArray[i] = originalArray[i];
}

console.log("Original Array: " + originalArray);
console.log("New Array: " + newArray);

// Output:
// Original Array: 10,5,20,8,12,15
// New Array: 10,5,20,8,12,15



// 9. Write a js program to insert an element in an array.

let arr5 = [10, 20, 30, 40, 50];
let elementToInsert = 25;
let position = 2; 

if (position >= 0 && position <= arr5.length) {

  for (let i = arr.length; i > position; i--) {
    arr5[i] = arr5[i - 1];
  }
  // Insert the new element
  arr[position] = elementToInsert;
  
  console.log("Array after insertion: " + arr5);
} else {
  console.log("Invalid position");
}

// Output:
// Array after insertion: 10,20,30,30,40,50,,,,,




// 10. Write a js program to delete an element from an array at specified position.

let arr6 = [10, 20, 30, 40, 50];
let Position = 2; 

if (Position >= 0 && Position < arr6.length) {

  for (let i = Position; i < arr6.length - 1; i++) {
    arr6[i] = arr6[i + 1];
  }
  // Remove the last element since it's now duplicated
  arr.length = arr6.length - 1;
  
  console.log("Array after deletion: " + arr6);
} else {
  console.log("Invalid position");

}

// Output:
// Array after deletion: 10,20,40,50,50



// 11. Write a js program to count frequency of each element in an array.

let arr7 = [10, 20, 10, 30, 20, 40, 10, 50, 30];
let frequency = {};

// Iterate through the array
for (let i = 0; i < arr7.length; i++) {
  let element = arr7[i];

  if (frequency[element] === undefined) {
    frequency[element] = 1; 
  } else {
    frequency[element]++; 
  }
}

// Print the frequency of each element
for (let key in frequency) {
  console.log(key + " appears " + frequency[key] + " times");
}


// Output:
// 10 appears 3 times
// 20 appears 2 times
// 30 appears 2 times
// 40 appears 1 times
// 50 appears 1 times


// 12. Write a js program to print all unique elements in the array.

let arr8 = [10, 20, 10, 30, 20, 40, 10, 50, 30];
let uniqueElements = [];

for (let i = 0; i < arr8.length; i++) {
  let isUnique = true;

  for (let j = 0; j < uniqueElements.length; j++) {
    if (arr8[i] === uniqueElements[j]) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    uniqueElements.push(arr8[i]);
  }
}

// Print the unique elements
console.log("Unique elements: " + uniqueElements);

// Output:
// Unique elements: 10,20,30,40,50



// 13. Write a js program to count total number of duplicate elements in an array.

let arr9 = [10, 20, 10, 30, 20, 40, 10, 50, 30];
let duplicateCount = 0;
let elementCount = {};

for (let i = 0; i < arr9.length; i++) {
  let element = arr[i];
  if (elementCount[element] === undefined) {
    elementCount[element] = 1;
  } else {
    elementCount[element]++;
  }
}

for (let key in elementCount) {
  if (elementCount[key] > 1) {
    duplicateCount++;
  }
}

console.log("Total number of duplicate elements: " + duplicateCount);

// Output:
// Total number of duplicate elements: 1



// 14. Write a js program to delete all duplicate elements from an array.

let arr10 = [10, 20, 10, 30, 20, 40, 10, 50, 30];
let uniqueArray = [];
let seenElements = {};

for (let i = 0; i < arr10.length; i++) {
  let element = arr[i];
  if (seenElements[element] === undefined) {
    seenElements[element] = true;
    uniqueArray.push(element);
  }
}

// Print the array with duplicates removed
console.log("Array after removing duplicates: " + uniqueArray);

// Output:
// Array after removing duplicates: 1,2,25,4,



// 15. Write a js program to merge two array to third array.

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let mergedArray = [];

for (let i = 0; i < array1.length; i++) {
  mergedArray[mergedArray.length] = array1[i];
}

for (let i = 0; i < array2.length; i++) {
  mergedArray[mergedArray.length] = array2[i];
}

console.log("Merged Array: " + mergedArray);

// Output:
// Merged Array: 10,20,30,40,50,60




// 16. Write a js program to find reverse of an array.

let arr11 = [10, 20, 30, 40, 50];
let reversedArray = [];
let length = arr11.length;

for (let i = length - 1; i >= 0; i--) {
  reversedArray[length - 1 - i] = arr11[i];
}

console.log("Original Array: " + arr11);
console.log("Reversed Array: " + reversedArray);


// Output:
// Original Array: 10,20,30,40,50
// Reversed Array: 50,40,30,20,10


// 17. Write a js program to put even and odd elements of array in two separate array.

let arr12 = [10, 21, 30, 41, 50, 61, 72, 83];
let evenArray = [];
let oddArray = [];
let evenIndex = 0;
let oddIndex = 0;

for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] % 2 === 0) {
    evenArray[evenIndex] = arr12[i];
    evenIndex++;
  } else {
    oddArray[oddIndex] = arr12[i];
    oddIndex++;
  }
}

console.log("Original Array: " + arr12);
console.log("Even Array: " + evenArray);
console.log("Odd Array: " + oddArray);

// Output:
// Even Array: 10,30,50,72
// Odd Array: 21,41,61,83



// 18. Write a js program to search an element in an array.

let arr13 = [10, 20, 30, 40, 50];
let searchElement = 30;
let isFound = false;

for (let i = 0; i < arr13.length; i++) {
  if (arr13[i] === searchElement) {
    isFound = true;
    console.log("Element " + searchElement + " found at index " + i);
    break;
  }
}

if (!isFound) {
  console.log("Element " + searchElement + " not found in the array");
}

// Output:
// Element 30 found at index 2



// 19. Write a js program to sort array elements in ascending or descending order.


let arr14 = [50, 20, 30, 10, 40];

for (let i = 0; i < arr14.length - 1; i++) {
  for (let j = 0; j < arr14.length - 1 - i; j++) {
    if (arr14[j] > arr14[j + 1]) {
      // Swap elements
      let temp = arr14[j];
      arr14[j] = arr14[j + 1];
      arr14[j + 1] = temp;
    }
  }
}

console.log("Array sorted in ascending order: " + arr14);

// Output:
// Array sorted in ascending order: 10,20,30,40,50


let arr15 = [50, 20, 30, 10, 40];

for (let i = 0; i < arr15.length - 1; i++) {
  for (let j = 0; j < arr15.length - 1 - i; j++) {
    if (arr15[j] < arr15[j + 1]) {
      // Swap elements
      let temp = arr15[j];
      arr15[j] = arr15[j + 1];
      arr15[j + 1] = temp;
    }
  }
}

console.log("Array sorted in descending order: " + arr15);

// Output:
// Array sorted in descending order: 50,40,30,20,10




// 20. Write a js program to sort even and odd elements of array separately.

let arr16 = [50, 21, 30, 10, 40, 33, 20, 45];
let EvenArray = [];
let OddArray = [];

// Separate even and odd elements

for (let i = 0; i < arr16.length; i++) {
  if (arr16[i] % 2 === 0) {
    evenArray[EvenArray.length] = arr[i];
  } else {
    oddArray[OddArray.length] = arr16[i];
  }
}

// Sort even array in ascending order

for (let i = 0; i < evenArray.length - 1; i++) {
  for (let j = 0; j < evenArray.length - 1 - i; j++) {
    if (evenArray[j] > evenArray[j + 1]) {
      let temp = evenArray[j];
      evenArray[j] = evenArray[j + 1];
      evenArray[j + 1] = temp;
    }
  }
}

// Sort odd array in ascending order

for (let i = 0; i < oddArray.length - 1; i++) {
  for (let j = 0; j < oddArray.length - 1 - i; j++) {
    if (oddArray[j] > oddArray[j + 1]) {
      let temp = oddArray[j];
      oddArray[j] = oddArray[j + 1];
      oddArray[j + 1] = temp;
    }
  }
}

// Original Array: 50,21,30,10,40,33,20,45

console.log("Original Array: " + arr16);
console.log("Sorted Even Array: " + evenArray);
console.log("Sorted Odd Array: " + oddArray);

// Output:
// Sorted Even Array: ,30,50,72
//  Sorted Odd Array: 41,45,61,83


// 21. Write a js program to left rotate an array.

let arr17 = [10, 20, 30, 40, 50];
let n = arr.length;

if (n > 0) {

  let firstElement = arr17[0];

  for (let i = 0; i < n - 1; i++) {
    arr17[i] = arr17[i + 1];
  }

  // Place the first element at the end of the array
  arr17[n - 1] = firstElement;
}

console.log("Array after left rotation: " + arr17);

// Output:
// Array after left rotation: 20,30,40,10,50



// 22. Write a js program to right rotate an array.

let arr18 = [10, 20, 30, 40, 50];
let N = arr18.length;

if (N > 0) {

  let lastElement = arr18[N - 1];

  for (let i = N - 1; i > 0; i--) {
    arr18[i] = arr18[i - 1];
  }

  // Place the last element at the beginning of the array
  arr18[0] = lastElement;
}

console.log("Array after right rotation: " + arr18);

// Output:
// Array after right rotation: 50,10,20,30,40