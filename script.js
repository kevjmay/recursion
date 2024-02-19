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

function fibRec(n) {
    if (n < 2) {
        return n
    } else {
        return (fibRec(n-1) + fibRec(n-2))
    }
};

console.log(fibRec(8))