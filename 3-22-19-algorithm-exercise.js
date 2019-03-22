// let input = [1,3,5,6,7,8]
// let input2 = [1,3,4,5,6,7,8,11,15,23,56,78]

// // output = [1,2,3,4,5,6,7,8]

// function getFullList(input) {
//     let output = [];
//     for (i=input[0]; i<=input[input.length-1]; i++) {
//         output.push(i)
//     }
//     return output
// }

// console.log(getFullList(input))
// console.log(getFullList(input2))


// // write a function which accepts an array of integers and n as a number. 
// // The function should calculate the maximum sum of n consecutuve elements in the array
// // Sliding window function
// // ([1,2,5,2,8,1,5],2) = 10
// // 

function maxSum(array, n) {
    let currMax = 0;
    // creates our window which is the frame that we are comparing
    // ie for 2 its a window of 2 indexes next to eachother combined
    for (i=0; i < n; i++) {
        currMax += array[i];
    }
    let maxSoFar = currMax;
    // loops through our array using the window we created, so we can capture every pair
    for (let j = n; j < array.length; j++) {
        currMax += (array[j] - array[j - n]);
        maxSoFar = Math.max(currMax, maxSoFar);
    }
    return maxSoFar
}

// console.log(maxSum([1,2,5,2,8,1,5], 2));

function linearSearch(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return `${i} is the numbers index`
        }
    }
    return -1;
}

// console.log(linearSearch([1,2,3,4], 3))

function linearSearch(array, n) {
    let myIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            myIndex = i
        } else {
            myIndex = -1
        }
    }
    return myIndex
}

// console.log(linearSearch([1,2,3,4], 3))



// function binarySearch(array, num) {
// let firstHalf = array.splice(0, array.length/2)
// let secondHalf = array.splice(array.length/2, array.length-1)
// for (let i =0; i < firstHalf.length; i++) {
//     if (firstHalf[i] === num) {
//         return i;
//     } else {
//             for (let j=0; j<secondHalf.length; j++){
//                 if (secondHalf[j] === num) {
//                     return j
//                 }
//             }
//         }
//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 12))

function binarySearch(array, num) {
    let firstHalf = array.splice(0, (array.length/2)+1)
    let secondHalf = array.splice((array.length/2)-3, array.length)
    console.log(firstHalf);
    console.log(secondHalf);
    for (let i =0; i < firstHalf.length; i++) {
        if (firstHalf[i] === num) {
            return i;
        }
    }
    for (let j=0; j<secondHalf.length; j++){
        if (secondHalf[j] === num) {
            return j + firstHalf.length;
            }
        }
    return -1
    }
    console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4))