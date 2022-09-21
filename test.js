let arr = [3, 1, 5, 3, 2, 1, 0];
function insertSort(arr) {
  if (arr === null || arr.length < 2) return;
  let N = arr.length;
  for (let end = 1; end < N; end++) {
    for (let pre = end - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
      swap(arr, pre, pre + 1);
    }
  }
}

function swap(arr, i, e) {
  let temp = arr[i];
  arr[i] = arr[e];
  arr[e] = temp;
  return arr;
}

insertSort(arr);
