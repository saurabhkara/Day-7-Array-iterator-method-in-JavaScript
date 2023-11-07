let arr = [4, 2, 3, 4, 2];

function helper(arr) {
  let index = 0;

  function next() {
    if (index >= arr.length) {
      return null;
    }
    return arr[index++];
  }

  function done() {
    console.log(this);
    if (index >= arr.length) {
      return true;
    }
    return false;
  }
  return {
    next,
    done,
  };
}

const iterator = helper(arr);
console.log(iterator.next());
console.log(iterator.done());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.done());
