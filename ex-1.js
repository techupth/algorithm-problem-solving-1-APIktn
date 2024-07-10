function twoSum(numbers, result) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === result) {
      return [numbers[left], numbers[right]];
    } else if (sum < result) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 23));
