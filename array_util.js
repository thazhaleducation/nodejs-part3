function head(arr) {
  if (arr.length > 0) {
    return arr[0];
  }
  return null;
} 

function tail(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return null;
} 


module.exports = {
  headFn: head,
  tailFn: tail
}