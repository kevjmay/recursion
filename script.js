//Fibonacci Numbers in Array
let fibArr = [];

function fibNumbers(n) {
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibArr.push(i)
        } else if (i < 2) {
            fibArr.push(i)
        } else {
            fibArr.push((fibArr[i-1]+fibArr[i-2]))
        }    
    }
    console.log(fibArr) //expected output fibArr = [0,1,1,2,3,5]
}

fibNumbers(8)

//Fibonacci Numbers with Recursion

function fibRec(n) {
    if (n < 2) {
        return n
    } else {
        return (fibRec(n-1) + fibRec(n-2))
    }
};

console.log(fibRec(8))

//Merg Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    } 

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110]
const arrSorted = mergeSort(arr)
const arr2Sorted = mergeSort(arr2)
console.log(arrSorted)
console.log(arr2Sorted)
