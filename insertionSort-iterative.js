function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    const currentElement = array[i];
    let currentIndex = i - 1;

    while (currentIndex >= 0 && array[currentIndex] > currentElement) {
      array[currentIndex + 1] = array[currentIndex];
      currentIndex--;
    }

    array[currentIndex + 1] = currentElement;
  }
  console.log(array);
}

const arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
