//    Дан отсортированный массив arr (отсортированный в порядке возрастания),
//    содержащий N целых чисел, найти, существует ли набор из трёх разных  элементов (arr[i], arr[j], arr[k]),
//    сумма которых равна X.
// Временная сложность -  O(N^2)

function findTriplet(arr, X) {
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === X) {
        return true;
      } else if (sum < X) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}
// O(n ^ 2);

function findTriplet(arr, X) {
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (
          arr[i] + arr[j] + arr[k] === X &&
          arr[i] !== arr[j] &&
          arr[j] !== arr[k] &&
          arr[i] !== arr[k]
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

// O(n ^ 3);
