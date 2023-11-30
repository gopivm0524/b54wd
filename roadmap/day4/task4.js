print odd numbers in an array using anonymous function.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log("Odd Numbers:", oddNumbers);

print odd numbers in an array using IIFE.

(function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
      }
    }
  })();

  Convert the strings to title caps array.

  let stringArray = ["hello world", "java script", "full stack developer"];

let titleCaseArray = stringArray.map(function (str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

console.log(titleCaseArray);

Convert all the strings to title caps in IIFE.

let titleCaseArray = (function () {
    return stringArray.map(function (str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });
})();

Sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = (function(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
})(numbers);

console.log(sum);

Sum of all numbers in an array in IIFE.

let sum = (function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  console.log(sum);

  Return all the prime numbers in an array.

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];
let primeNumbers = numbers.filter(function(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
});
console.log("Prime numbers:", primeNumbers);

prime numbers in IIFE.

(function() {
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    let primeNumbers = numbers.filter(isPrime);
    console.log("Prime Numbers:", primeNumbers);
})();

Return all the palindromes in an array in anonymous function.

let array = ["level", "hello", "radar", "world", "civic", "javascript"];

let palindromes = array.filter(function (word) {
 
  let lowercaseWord = word.toLowerCase();

  return lowercaseWord === lowercaseWord.split('').reverse().join('');
});

console.log("Palindromes:", palindromes);

Return all the palindromes in an array in IIFE.

(function () {
    let arr = ["level", "hello", "racecar", "world", "madam"];

    function isPalindrome(str) {
        let reversed = str.split("").reverse().join("");
        return str === reversed;
    }
    let palindromes = arr.filter(function (word) {
        return isPalindrome(word);
    });
    console.log("Palindromes:", palindromes);
})();

Return median of two sorted arrays of the same size.

let findMedian = function(nums1, nums2) {
    let mergedArray = [...nums1,...nums1ums2].sort((a, b) => a - b);
   let length = mergedArray.length;
  
    return length % 2 === 0
      ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2
      : mergedArray[Math.floor(length / 2)];
  };
  let nums1 = [1, 3];
  let nums2 = [2, 4];
  
  let median = findMedian(nums1, nums2);
  console.log(median);

  Return median of two sorted arrays of the same size in IIFE.

  let findMedian = (function() {
    function findMedianSortedArrays(nums1, nums2) {
     let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
      let length = mergedArray.length;
  
      if (length % 2 === 0) {
        
        let mid1 = mergedArray[length / 2 - 1];
        let mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
      } else {
         return mergedArray[Math.floor(length / 2)];
      }
    }
   return findMedianSortedArrays;
  })();
  
  let nums1 = [1, 3];
  let nums2 = [2, 4];
  
  let median = findMedian(nums1, nums2);
  console.log(median);

  Remove duplicates from an array in anonymous function.

  let array = [1, 2, 3, 4, 2, 5, 6, 1];

let uniqueArray = array.filter(function(value, index, self) {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);

Remove duplicates from an array in IIFE.

var uniqueArray = (function(arr) {
    var seen = {};
    return arr.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArray);

  
  
  
  