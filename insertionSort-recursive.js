function recursiveInsertionSort(arr, length) {
  if (length <= 1) {
    return;
  }

  recursiveInsertionSort(arr, length - 1);

  const lastElement = arr[length - 1];
  let currentIndex = length - 2;

  while (currentIndex >= 0 && arr[currentIndex] > lastElement) {
    arr[currentIndex + 1] = arr[currentIndex];
    currentIndex--;
  }

  arr[currentIndex + 1] = lastElement;

  if (length === arr.length) {
    console.log(arr);
  }
}

const arrayToSort = [12, 11, 13, 5, 6];
recursiveInsertionSort(arrayToSort, arrayToSort.length);
